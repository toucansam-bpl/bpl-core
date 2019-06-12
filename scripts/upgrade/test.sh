#!/usr/bin/env bash

rm -rf /home/bpl/bpl-core
git clone https://github.com/blockpool-io/core -b upgrade /home/bpl/bpl-core

mkdir /home/bpl/.bpl
touch /home/bpl/.bpl/.env

mkdir /home/bpl/.bpl/config

mkdir /home/bpl/.bpl/database
touch /home/bpl/.bpl/database/json-rpc.sqlite
touch /home/bpl/.bpl/database/transaction-pool.sqlite
touch /home/bpl/.bpl/database/webhooks.sqlite

mkdir /home/bpl/.bpl/logs
mkdir /home/bpl/.bpl/logs/mainnet
touch /home/bpl/.bpl/logs/mainnet/test.log
