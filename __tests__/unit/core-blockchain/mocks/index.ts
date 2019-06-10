import { container } from "./container";

jest.mock("@toucansam-bpl/core-container", () => {
    return container;
});
