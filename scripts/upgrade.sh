#!/usr/bin/env bash

pm2 delete bpl-core > /dev/null 2>&1
pm2 delete bpl-core-relay > /dev/null 2>&1
pm2 delete bpl-core-forger > /dev/null 2>&1

pm2 delete core > /dev/null 2>&1
pm2 delete core-relay > /dev/null 2>&1
pm2 delete core-forger > /dev/null 2>&1

node ./scripts/upgrade/upgrade.js

# Sometimes the upgrade script doesn't properly replace BPL_ with CORE_
# https://github.com/blockpool-io/core/blob/develop/scripts/upgrade/upgrade.js#L206
cd ~

if [ -f .config/bpl-core/devnet/.env ]; then
    sed -i 's/BPL_/CORE_/g' .config/bpl-core/devnet/.env
fi

if [ -f .config/bpl-core/devnet/plugins.js ]; then
    sed -i 's/BPL_/CORE_/g' .config/bpl-core/devnet/plugins.js
fi

if [ -f .config/bpl-core/mainnet/.env ]; then
    sed -i 's/BPL_/CORE_/g' .config/bpl-core/mainnet/.env
fi

if [ -f .config/bpl-core/mainnet/plugins.js ]; then
    sed -i 's/BPL_/CORE_/g' .config/bpl-core/mainnet/plugins.js
fi

cd ~/bpl-core
yarn setup
