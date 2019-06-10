import { configManager, models } from "@toucansam-bpl/crypto";
import genesisBlockJson from "../../config/unitnet/genesisBlock.json";

configManager.setFromPreset("unitnet");

export const genesisBlock = new models.Block(genesisBlockJson);
