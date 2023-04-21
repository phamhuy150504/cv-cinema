export const USER_LOGIN = 'USER_LOGIN';

export const localService = {
    set: (account) => localStorage.setItem(USER_LOGIN, JSON.stringify(account)),
    get: () => JSON.parse(localStorage.getItem(USER_LOGIN)),
    remove: () => localStorage.removeItem(USER_LOGIN)
}