import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface IProps {
  children?: React.ReactChildren | React.ReactChild;
}

interface IAuthContext {
  isLoggedIn: boolean;
  notionizeToken: string | null;
  activeUser: string | null;
  signIn: any;
  signOut: any;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  notionizeToken: "",
  activeUser: null,
  signIn: (token: string) => {},
  signOut: () => {},
});

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [notionizeToken, setNotionizeToken]: [string | null, any] = useState("");
  const [activeUser, setActiveUser]: [string | null, any] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("notionizeAuth") === "") {
      setNotionizeToken("");
      setActiveUser(null);
      setIsLoggedIn(false);
    } else {
      setNotionizeToken(localStorage.getItem("notionizeAuth"));
      setActiveUser("test user");
      setIsLoggedIn(true);
    }
  }, []);

  const signOutHandler = () => {
    setNotionizeToken("");
    localStorage.setItem("notionizeAuth", "");
    setIsLoggedIn(false);
  };

  const signInHandler = (token: string) => {
    setNotionizeToken(token);
    localStorage.setItem("notionizeAuth", token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        notionizeToken,
        activeUser,
        signIn: signInHandler,
        signOut: signOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
