const {
    Transactions
} = require('@blockpool-io/crypto')

exports.deserialize = data => {
    return Transactions.deserializer.deserialize(data)
}
