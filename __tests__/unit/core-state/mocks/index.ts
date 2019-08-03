import { container } from "./container";

jest.mock("@blockpool-io/core-container", () => {
    return container;
});
