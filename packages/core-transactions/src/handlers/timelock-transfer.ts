import { Database } from "@blockpool-io/core-interfaces";
import { TimelockTransferTransaction, Transaction, TransactionConstructor } from "@blockpool-io/crypto";
import { TransactionHandler } from "./transaction";

export class TimelockTransferTransactionHandler extends TransactionHandler {
    public getConstructor(): TransactionConstructor {
        return TimelockTransferTransaction;
    }

    public canBeApplied(
        transaction: Transaction,
        wallet: Database.IWallet,
        walletManager?: Database.IWalletManager,
    ): boolean {
        return super.canBeApplied(transaction, wallet, walletManager);
    }

    public apply(transaction: Transaction, wallet: Database.IWallet): void {
        return;
    }

    public revert(transaction: Transaction, wallet: Database.IWallet): void {
        return;
    }
}
