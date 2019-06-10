const {
    TransactionDeserializer
} = require('@toucansam-bpl/crypto')

exports.deserialize = data => {
    return TransactionDeserializer.deserialize(data)
}
