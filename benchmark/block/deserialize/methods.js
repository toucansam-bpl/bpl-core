const { models } = require('@toucansam-bpl/crypto')

exports.deserialize = data => {
    return models.Block.deserialize(data)
}
