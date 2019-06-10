import { Logger } from "@toucansam-bpl/core-interfaces";
import { AbstractLogger } from "@toucansam-bpl/core-logger";
import { Signale } from "signale";

export class SignaleLogger extends AbstractLogger {
    protected logger: Signale;

    public make(): Logger.ILogger {
        this.logger = new Signale(this.options);

        return this;
    }

    protected getLevels(): Record<string, string> {
        return {
            verbose: "note",
        };
    }
}
