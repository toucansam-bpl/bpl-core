import { app } from "@toucansam-bpl/core-container";
import { Database } from "@toucansam-bpl/core-interfaces";

/**
 * Get a single transaction from the database
 * @return {Transaction}
 */
export async function transaction(_, { id }) {
    return app.resolvePlugin<Database.IDatabaseService>("database").connection.transactionsRepository.findById(id);
}
