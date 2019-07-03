const {
    TransactionDeserializer
} = require('@blockpool-io/crypto')

exports.deserialize = data => {
    return TransactionDeserializer.deserialize(data)
}
