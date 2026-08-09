#!/bin/bash
# Apply LAN DNS records to edge Pi-hole (pihole.toml hosts array).
# Run on edge01: bash ~/edge/apply-local-dns.sh
set -euo pipefail

EDGE_DIR="${EDGE_DIR:-$HOME/edge}"

if ! docker ps --format '{{.Names}}' | grep -qx pihole; then
  echo "Pi-hole container is not running. Start it first: cd ~/edge && docker compose up -d pihole"
  exit 1
fi

docker exec pihole sh -s << 'EOF'
set -e
awk '
  !done && /^  hosts = \[\]/ {
    print "  hosts = ["
    print "    \"192.168.4.31 pihole.kloudtastic.com\","
    print "    \"192.168.4.31 terrancekelley.com\","
    print "    \"192.168.4.31 www.terrancekelley.com\","
    print "    \"192.168.4.238 kloudtastic.com\","
    print "    \"192.168.4.238 hub.kloudtastic.com\","
    print "    \"192.168.4.238 auth.kloudtastic.com\","
    print "    \"192.168.4.238 chat.kloudtastic.com\","
    print "    \"192.168.4.238 breakitdown.kloudtastic.com\","
    print "    \"192.168.4.238 status.kloudtastic.com\","
    print "    \"192.168.4.238 dockge.kloudtastic.com\","
    print "    \"192.168.4.238 comfy.kloudtastic.com\","
    print "    \"192.168.4.238 ollama.kloudtastic.com\","
    print "    \"192.168.4.238 ibgw.kloudtastic.com\""
    print "  ]"
    done = 1
    next
  }
  { print }
' /etc/pihole/pihole.toml > /tmp/pihole.toml.new
mv /tmp/pihole.toml.new /etc/pihole/pihole.toml
echo "Updated hosts in pihole.toml"
EOF

cd "$EDGE_DIR"
docker compose restart pihole
sleep 4
docker exec pihole pihole reloaddns

echo "Verify (localhost):"
dig @127.0.0.1 hub.kloudtastic.com +short
dig @127.0.0.1 www.terrancekelley.com +short

echo "Verify (LAN IP):"
dig @192.168.4.31 hub.kloudtastic.com +short +time=2
dig @192.168.4.31 www.terrancekelley.com +short +time=2
