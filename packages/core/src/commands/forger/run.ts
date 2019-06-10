import { app } from "@toucansam-bpl/core-container";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
    public static description: string = "Run the forger (without pm2)";

    public static examples: string[] = [
        `Run a forger with a bip39 passphrase
$ ark forger:run --bip39="..."
`,
        `Run a forger with an encrypted bip38
$ ark forger:run --bip38="..." --password="..."
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsForger,
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RunCommand);

        await this.buildApplication(app, flags, {
            include: [
                "@toucansam-bpl/core-event-emitter",
                "@toucansam-bpl/core-config",
                "@toucansam-bpl/core-logger",
                "@toucansam-bpl/core-logger-pino",
                "@toucansam-bpl/core-forger",
            ],
            options: {
                "@toucansam-bpl/core-forger": await this.buildBIP38(flags),
            },
        });
    }
}
