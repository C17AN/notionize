import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface IProps {
  children?: React.ReactChildren | React.ReactChild;
}

interface IAuthContext {
  isLoggedIn: boolean;
  notioniseToken: string | null;
  activeUser: string | null;
  isVerified: boolean;
  signIn: any;
  signOut: any;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  notioniseToken: "",
  isVerified: false,
  activeUser: null,
  signIn: (token: string) => {},
  signOut: () => {},
});

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [notioniseToken, setNotioniseToken]: [string | null, any] = useState("");
  const [activeUser, setActiveUser]: [string | null, any] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
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
        isVerified,
        signIn: signInHandler,
        signOut: signOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
