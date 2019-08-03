import { Blocks, Managers } from "@blockpool-io/crypto";
import { genesisBlock as GB } from "../../config/testnet/genesisBlock";

Managers.configManager.setFromPreset("testnet");

export const genesisBlock = Blocks.BlockFactory.fromData(GB);
