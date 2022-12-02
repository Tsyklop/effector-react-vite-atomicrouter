import {mockSignInResponse, mockUser} from "@/shared/api/mock.js";

export function signInUser(data) {
  if (data.login === mockUser.login && data.password === "12345") {
    return Promise.resolve(mockSignInResponse);
  }
  return Promise.reject({ message: "Error when auth" });
}

export function signOutUser() {
  return Promise.resolve({ message: "OK" });
}
