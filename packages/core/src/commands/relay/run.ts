import { flags } from "@oclif/command";
import { app } from "@toucansam-bpl/core-container";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
    public static description: string = "Run the relay (without pm2)";

    public static examples: string[] = [
        `Run a relay
$ ark relay:run
`,
        `Run a genesis relay
$ ark relay:run --networkStart
`,
        `Disable any discovery by other peers
$ ark relay:run --disableDiscovery
`,
        `Skip the initial discovery
$ ark relay:run --skipDiscovery
`,
        `Ignore the minimum network reach
$ ark relay:run --ignoreMinimumNetworkReach
`,
        `Start a seed
$ ark relay:run --launchMode=seed
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsBehaviour,
        suffix: flags.string({
            hidden: true,
            default: "relay",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RunCommand);

        await super.buildApplication(app, flags, {
            exclude: ["@toucansam-bpl/core-forger"],
            options: {
                "@toucansam-bpl/core-p2p": this.buildPeerOptions(flags),
                "@toucansam-bpl/core-blockchain": {
                    networkStart: flags.networkStart,
                },
            },
        });
    }
}
