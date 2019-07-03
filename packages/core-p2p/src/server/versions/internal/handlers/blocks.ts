import { app } from "@blockpool-io/core-container";
import { Blockchain } from "@blockpool-io/core-interfaces";
import { schema } from "../../1/schema";

/**
 * @type {Object}
 */
export const store = {
    /**
     * @param  {Hapi.Request} request
     * @param  {Hapi.Toolkit} h
     * @return {Hapi.Response}
     */
    handler: (request, h) => {
        request.payload.block.ip = request.info.remoteAddress;

        app.resolvePlugin<Blockchain.IBlockchain>("blockchain").handleIncomingBlock(request.payload.block);

        return h.response(null).code(204);
    },
    options: {
        plugins: {
            "hapi-ajv": {
                payloadSchema: schema.postBlock,
            },
        },
    },
};
