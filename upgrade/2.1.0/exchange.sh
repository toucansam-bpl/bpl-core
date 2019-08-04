#!/usr/bin/env bash

cd ~/bpl-core
pm2 delete bpl-core
pm2 delete bpl-core-relay
git reset --hard
git pull
git checkout master
yarn run bootstrap
yarn run upgrade

pm2 --name 'bpl-core-relay' start ~/bpl-core/packages/core/dist/index.js -- relay --network mainnet
