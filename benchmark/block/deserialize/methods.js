const {
    Blocks
} = require('@blockpool-io/crypto')

exports.deserialize = data => {
    return Blocks.Block.deserialize(data)
}
