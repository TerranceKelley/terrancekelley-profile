# Deploy terrancekelley-profile on edge01

The portfolio runs as a **static site** on **edge01** (`192.168.4.31`), served by Caddy. Pi-hole on the same host provides LAN DNS.

## Architecture

| Service | Host | Role |
|---------|------|------|
| **edge01** | `192.168.4.31` | Pi-hole (LAN DNS), Caddy public gateway, static portfolio |
| **cloudtastic** | `192.168.4.238` | Homelab apps (`*.kloudtastic.com`, Authelia, AI stack) |

**Public internet:** All traffic hits **edge** (port 80/443). Edge serves `terrancekelley.com` locally and proxies `*.kloudtastic.com` to Cloudtastic. If Cloudtastic is down, the portfolio stays up; homelab URLs return 502.

**LAN:** Edge Pi-hole sends `*.kloudtastic.com` → Cloudtastic directly (optional fast path). `terrancekelley.com` → edge.

## First-time setup (edge01)

Files live in `~/edge/` on edge01. From your dev machine, sync and deploy:

```bash
# Already done once — repeat after config changes:
rsync -avz -e "ssh -i ~/.ssh/id_ed25519" edge/ kloudtastic@192.168.4.31:~/edge/
```

**On edge01**, run the bootstrap script (requires sudo once):

```bash
ssh kloudtastic@192.168.4.31
sudo bash ~/edge/bootstrap.sh
```

This will:
1. Free port 53 (configure systemd-resolved for Pi-hole)
2. Install Docker
3. Start Pi-hole + Caddy

## Deploy site updates

From the project root:

```bash
chmod +x edge/deploy.sh
./edge/deploy.sh
```

Or manually:

```bash
npm run generate
rsync -avz --delete -e "ssh -i ~/.ssh/id_ed25519" .output/public/ kloudtastic@192.168.4.31:~/edge/www/terrancekelley/
```

## DNS cutover

### LAN (Pi-hole on edge)

Pi-hole local DNS (`edge/pihole/etc-dnsmasq.d/99-local-dns.conf`):

- `*.kloudtastic.com` → `192.168.4.238` (Cloudtastic)
- `pihole.kloudtastic.com` → `192.168.4.31` (edge)
- `terrancekelley.com` / `www` → `192.168.4.31` (edge, split horizon)

Set your **router DHCP DNS** to `192.168.4.31`.

### Public (GoDaddy + router)

For HTTPS from the internet:

1. **Router**: Forward ports **80** and **443** to `192.168.4.31` (edge), not Cloudtastic.
2. **GoDaddy**: Keep A records for `@` and `www` pointing at your public IP.
3. **Cloudtastic**: Remove the `terrancekelley.com` blocks from Caddy and stop the `terrancekelley-profile` container when cutover is verified.

## Verify

- Pi-hole admin: http://192.168.4.31:8080/admin
- Portfolio (LAN): https://www.terrancekelley.com
- Apex redirect: https://terrancekelley.com → www
- Homelab (LAN): https://hub.kloudtastic.com → Cloudtastic

## SSH

```bash
ssh kloudtastic@192.168.4.31
# optional ~/.ssh/config entry:
# Host edge
#     HostName 192.168.4.31
#     User kloudtastic
#     IdentityFile ~/.ssh/id_ed25519
```

## Legacy: Cloudtastic SSR deploy

See git history or the Cloudtastic section in prior docs if you need the old Docker SSR setup on `profile` (kloudtastic.com).
