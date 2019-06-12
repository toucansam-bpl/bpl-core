const { models } = require('@blockpool-io/crypto')

exports.deserialize = data => {
    return models.Block.deserialize(data)
}
