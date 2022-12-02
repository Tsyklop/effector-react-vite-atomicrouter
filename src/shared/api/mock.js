export const mockUser = {
    name: "admin",
    role: 'ADMIN',
    login: "admin",
};

export const mockUserResponse = {
    ...mockUser
};

export const mockSignInResponse = {
    user: mockUser,
    token: {
        access: "qwerty",
        refresh: "qwerty",
    },
};
