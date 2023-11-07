"use client";

import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
  useCallback,
} from "react";

export type User = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<User | null>(null);

type AuthProviderProp = {
  children: ReactNode;
};

export default function AuthContextProvider({ children }: AuthProviderProp) {
  const [user, setUser] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("user");

    setUser(currentUser);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        openMenu,
        setOpenMenu,
        setIsModalOpen,
        isModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuthContext must be used inside a AuthContextProvider");
  }

  return authContext;
}
