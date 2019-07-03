import { app } from "@blockpool-io/core-container";
import { Database } from "@blockpool-io/core-interfaces";

/**
 * Get a single block from the database
 * @return {Block}
 */
export async function block(_, { id }) {
    return app.resolvePlugin<Database.IDatabaseService>("database").connection.blocksRepository.findById(id);
}
