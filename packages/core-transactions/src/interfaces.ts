import { Database, EventEmitter, TransactionPool } from "@blockpool-io/core-interfaces";
import { ITransactionData, Transaction, TransactionConstructor } from "@blockpool-io/crypto";

export interface ITransactionHandler {
    getConstructor(): TransactionConstructor;

    canBeApplied(transaction: Transaction, wallet: Database.IWallet, walletManager?: Database.IWalletManager): boolean;
    applyToSender(transaction: Transaction, wallet: Database.IWallet): void;
    applyToRecipient(transaction: Transaction, wallet: Database.IWallet): void;
    revertForSender(transaction: Transaction, wallet: Database.IWallet): void;
    revertForRecipient(transaction: Transaction, wallet: Database.IWallet): void;
    apply(transaction: Transaction, wallet: Database.IWallet): void;
    revert(transaction: Transaction, wallet: Database.IWallet): void;

    canEnterTransactionPool(data: ITransactionData, guard: TransactionPool.IGuard): boolean;
    emitEvents(transaction: Transaction, emitter: EventEmitter.EventEmitter): void;
}
