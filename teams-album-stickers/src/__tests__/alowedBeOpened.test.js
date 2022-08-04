import {allowedBeOpened} from "../utils";

describe("isAllowedToOpen test", () => {
    it("should return false if passed hours from last seen is less than 24", () => {
        const mockDate = new Date(new Date().getTime() - 30 * 60000);
        const res = allowedBeOpened(mockDate);
        expect(res).toBeFalsy();
    });

    it("should return true if passed hours from last seen is more than 24", () => {
        const mockDate = new Date(new Date().getTime() - 1500 * 60000);
        const res = allowedBeOpened(mockDate);
        expect(res).toBeTruthy();
    });
});
