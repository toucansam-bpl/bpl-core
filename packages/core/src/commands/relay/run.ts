import { app } from "@blockpool-io/core-container";
import { flags } from "@oclif/command";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
    public static description: string = "Run the relay (without pm2)";

    public static examples: string[] = [
        `Run a relay
$ bpl relay:run
`,
        `Run a genesis relay
$ bpl relay:run --networkStart
`,
        `Disable any discovery by other peers
$ bpl relay:run --disableDiscovery
`,
        `Skip the initial discovery
$ bpl relay:run --skipDiscovery
`,
        `Ignore the minimum network reach
$ bpl relay:run --ignoreMinimumNetworkReach
`,
        `Start a seed
$ bpl relay:run --launchMode=seed
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsBehaviour,
        suffix: flags.string({
            hidden: true,
            default: "relay",
        }),
        env: flags.string({
            default: "production",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RunCommand);

        await super.buildApplication(app, flags, {
            exclude: ["@blockpool-io/core-forger"],
            options: {
                "@blockpool-io/core-p2p": this.buildPeerOptions(flags),
                "@blockpool-io/core-blockchain": {
                    networkStart: flags.networkStart,
                },
            },
        });
    }
}
