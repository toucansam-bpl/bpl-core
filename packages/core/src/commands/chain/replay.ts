import { app } from "@blockpool-io/core-container";
import { Blockchain } from "@blockpool-io/core-interfaces";
import { flags } from "@oclif/command";
import { setUpLite } from "../../helpers/replay";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class ReplayCommand extends BaseCommand {
    public static description: string = "replay the blockchain from the local database";

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        targetHeight: flags.integer({
            description: "the target height to replay to. If not set, defaults to last block in database.",
            default: -1,
        }),
        suffix: flags.string({
            hidden: true,
            default: "replay",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(ReplayCommand);

        await setUpLite(flags);

        if (!app.has("blockchain")) {
            this.error("The @blockpool-io/core-blockchain plugin is not installed.");
        }

        await app.resolvePlugin<Blockchain.IBlockchain>("blockchain").replay(flags.targetHeight);
    }
}