import { Database } from "@blockpool-io/core-interfaces";
import { MultiPaymentTransaction, Transaction, TransactionConstructor } from "@blockpool-io/crypto";
import { TransactionHandler } from "./transaction";

export class MultiPaymentTransactionHandler extends TransactionHandler {
    public getConstructor(): TransactionConstructor {
        return MultiPaymentTransaction;
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
