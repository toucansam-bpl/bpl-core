import { OrderedCappedMap } from "@blockpool-io/core-utils";
import { Interfaces } from "@blockpool-io/crypto";

export class TransactionStore extends OrderedCappedMap<string, Interfaces.ITransactionData> {
    public push(value: Interfaces.ITransactionData): void {
        this.set(value.id, value);
    }
}
