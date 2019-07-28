import "jest-extended";

import { Container, Database, State } from "@blockpool-io/core-interfaces";
import { Identities, Managers, Utils } from "@blockpool-io/crypto";
import delay from "delay";
import { secrets } from "../../../utils/config/testnet/delegates.json";
import { setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(1200000);

let app: Container.IContainer;
export const setUp = async (): Promise<void> => {
    try {
        app = await setUpContainer({
            include: [
                "@blockpool-io/core-event-emitter",
                "@blockpool-io/core-logger-pino",
                "@blockpool-io/core-state",
                "@blockpool-io/core-database-postgres",
                "@blockpool-io/core-transaction-pool",
                "@blockpool-io/core-p2p",
                "@blockpool-io/core-blockchain",
                "@blockpool-io/core-api",
                "@blockpool-io/core-forger",
            ],
        });

        const databaseService = app.resolvePlugin<Database.IDatabaseService>("database");
        await databaseService.reset();
        await databaseService.buildWallets();
        await databaseService.saveRound(
            secrets.map(
                secret =>
                    ({
                        round: 1,
                        publicKey: Identities.PublicKey.fromPassphrase(secret),
                        voteBalance: Utils.BigNumber.make("245098000000000"),
                    } as State.IDelegateWallet),
            ),
        );
    } catch (error) {
        console.error(error.stack);
    }
};

export const tearDown = async (): Promise<void> => {
    await app.tearDown();
};

export const snoozeForBlock = async (sleep: number = 0, height: number = 1): Promise<void> => {
    const blockTime = Managers.configManager.getMilestone(height).blocktime * 1000;
    const sleepTime = sleep * 1000;

    return delay(blockTime + sleepTime);
};

export const getLastHeight = (): number => {
    return app
        .resolvePlugin<State.IStateService>("state")
        .getStore()
        .getLastHeight();
};

export const passphrases = {
    passphrase: "this is top secret passphrase number 1",
    secondPassphrase: "this is top secret passphrase number 2",
};
