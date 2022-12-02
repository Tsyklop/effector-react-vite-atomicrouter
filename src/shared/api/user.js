import {mockUserResponse} from "@/shared/api/mock.js";

export function getUserData() {
    return Promise.resolve(mockUserResponse);
}
