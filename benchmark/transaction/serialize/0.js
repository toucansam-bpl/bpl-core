const {
    Transaction
} = require('@toucansam-bpl/crypto')

const data = require('../../helpers').getJSONFixture('transaction/deserialized/0');

exports['core'] = () => {
    return Transaction.toBytes(data);
};
