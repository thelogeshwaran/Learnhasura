import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum AUTH {
    AUTHED = "authed",
    NOT_AUTHED = "not_authed",
}

type LocalUser = {
    authed: AUTH;
    id?: string;
    token?: string | null;
    username?: string | null;
};

interface Zoto {
    user: LocalUser;
    signup: (username: string, password: string) => void;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const useStore = create<Zoto>()(
    devtools(
        persist(
            (set, get) => ({
                user: { authed: AUTH.NOT_AUTHED },
                signup: (username: string, password: string) => {
                    console.log("Signing up user ", username)
                },
                login: (username: string, password: string) => {
                },
                logout: () => {
                },
            }),
            {
                name: "byp",
                getStorage: () => localStorage,
            }
        )
    )
);

export { useStore };