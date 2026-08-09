#!/bin/bash
# Deploy static portfolio to edge01 from your dev machine.
set -euo pipefail

EDGE="kloudtastic@192.168.4.31"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SSH="ssh -i ~/.ssh/id_ed25519"

echo "==> Build static site"
cd "$ROOT"
npm run generate

echo "==> Sync to edge"
rsync -avz --delete -e "$SSH" "$ROOT/.output/public/" "$EDGE:~/edge/www/terrancekelley/"

echo "==> Reload Caddy (if running)"
$SSH "$EDGE" 'docker exec caddy caddy reload --config /etc/caddy/Caddyfile 2>/dev/null || echo "Caddy not running yet — run bootstrap on edge first"'

echo "Done."
