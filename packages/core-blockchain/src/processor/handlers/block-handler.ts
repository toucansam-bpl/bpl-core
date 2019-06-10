import { app } from "@toucansam-bpl/core-container";
import { Logger } from "@toucansam-bpl/core-interfaces";
import { models } from "@toucansam-bpl/crypto";
import { Blockchain } from "../../blockchain";
import { BlockProcessorResult } from "../block-processor";

export abstract class BlockHandler {
    protected readonly logger: Logger.ILogger = app.resolvePlugin<Logger.ILogger>("logger");

    public constructor(protected readonly blockchain: Blockchain, protected readonly block: models.Block) {}

    public async execute(): Promise<BlockProcessorResult> {
        this.blockchain.resetLastDownloadedBlock();
        return BlockProcessorResult.Rejected;
    }
}
