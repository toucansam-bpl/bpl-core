import { app } from "@toucansam-bpl/core-container";
import { defaults } from "../../../../packages/core-vote-report/src/defaults";
import { startServer } from "../../../../packages/core-vote-report/src/server";
import { setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

let server;
export async function setUp() {
    await setUpContainer({
        exit: "@toucansam-bpl/core-blockchain",
    });

    server = await startServer(defaults);
}

export async function tearDown() {
    await server.stop();
    await app.tearDown();
}
