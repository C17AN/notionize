import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface IProps {
  children?: React.ReactChildren | React.ReactChild;
}

interface IAuthContext {
  isLoggedIn: boolean;
  notioniseToken: string | null;
  activeUser: string | null;
  signIn: any;
  signOut: any;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  notioniseToken: "",
  activeUser: null,
  signIn: (token: string) => {},
  signOut: () => {},
});

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [notioniseToken, setNotioniseToken]: [string | null, any] = useState("");
  const [activeUser, setActiveUser]: [string | null, any] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("notioniseAuth") === "") {
      setNotioniseToken("");
      setActiveUser(null);
      setIsLoggedIn(false);
    } else {
      setNotioniseToken(localStorage.getItem("notioniseAuth"));
      setActiveUser("test user");
      setIsLoggedIn(true);
    }
  }, []);

  const signOutHandler = () => {
    setNotioniseToken("");
    localStorage.setItem("notioniseAuth", "");
    setIsLoggedIn(false);
  };

  const signInHandler = (token: string) => {
    setNotioniseToken(token);
    localStorage.setItem("notioniseAuth", token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        notioniseToken,
        activeUser,
        signIn: signInHandler,
        signOut: signOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
