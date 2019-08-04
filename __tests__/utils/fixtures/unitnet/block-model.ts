import { Blocks, Managers } from "@blockpool-io/crypto";
import { genesisBlock as GB } from "../../config/unitnet/genesisBlock";

Managers.configManager.setFromPreset("unitnet");

export const genesisBlock = Blocks.BlockFactory.fromData(GB);
