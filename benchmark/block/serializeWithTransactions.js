const {
    Blocks
} = require('@blockpool-io/crypto')

const data = require('../helpers').getJSONFixture('block/deserialized/transactions');

exports['core'] = () => {
    return Blocks.Block.serializeWithTransactions(data);
};
