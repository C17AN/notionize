import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface IProps {
  children?: React.ReactChildren | React.ReactChild;
}

interface IAuthContext {
  isLoggedIn: boolean;
  NotioniseToken: string | null;
  activeUser: string | null;
  signIn: any;
  signOut: any;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  NotioniseToken: "",
  activeUser: null,
  signIn: (token: string) => {},
  signOut: () => {},
});

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [NotioniseToken, setNotioniseToken]: [string | null, any] = useState("");
  const [activeUser, setActiveUser]: [string | null, any] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("NotioniseAuth") === "") {
      setNotioniseToken("");
      setActiveUser(null);
      setIsLoggedIn(false);
    } else {
      setNotioniseToken(localStorage.getItem("NotioniseAuth"));
      setActiveUser("test user");
      setIsLoggedIn(true);
    }
  }, []);

  const signOutHandler = () => {
    setNotioniseToken("");
    localStorage.setItem("NotioniseAuth", "");
    setIsLoggedIn(false);
  };

  const signInHandler = (token: string) => {
    setNotioniseToken(token);
    localStorage.setItem("NotioniseAuth", token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        NotioniseToken,
        activeUser,
        signIn: signInHandler,
        signOut: signOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
