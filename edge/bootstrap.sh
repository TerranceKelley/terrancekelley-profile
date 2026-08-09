#!/bin/bash
# Run once on edge01 with: sudo bash ~/edge/bootstrap.sh
set -euo pipefail

EDGE_DIR="/home/kloudtastic/edge"
EDGE_USER="kloudtastic"

if [[ $EUID -ne 0 ]]; then
  echo "Run as root: sudo bash $0"
  exit 1
fi

echo "==> Free port 53 (disable systemd-resolved stub listener)"
mkdir -p /etc/systemd/resolved.conf.d
cat > /etc/systemd/resolved.conf.d/pihole.conf << 'EOF'
[Resolve]
DNS=127.0.0.1
FallbackDNS=1.1.1.1
DNSStubListener=no
EOF
systemctl restart systemd-resolved
ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf

echo "==> Install Docker (if missing)"
if ! command -v docker &>/dev/null; then
  curl -fsSL https://get.docker.com | sh
fi
usermod -aG docker "$EDGE_USER"

echo "==> Pi-hole volume permissions"
mkdir -p "$EDGE_DIR/pihole/etc-pihole" "$EDGE_DIR/pihole/etc-dnsmasq.d"
mkdir -p "$EDGE_DIR/caddy/data" "$EDGE_DIR/caddy/config"
chown -R 1000:1000 "$EDGE_DIR/pihole/etc-pihole" 2>/dev/null || true

echo "==> Start edge stack"
cd "$EDGE_DIR"
docker compose up -d

echo ""
echo "Done."
echo "  Pi-hole admin: http://192.168.4.31:8080/admin"
echo "  Portfolio:     https://www.terrancekelley.com (after router/DNS cutover)"
echo "  Set router DHCP DNS server to: 192.168.4.31"
echo ""
echo "Log out and back in (or: newgrp docker) so $EDGE_USER can run docker without sudo."
