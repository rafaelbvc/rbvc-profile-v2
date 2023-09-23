import { createContext, useState, useContext, ReactNode } from "react";

interface IVisibleContext {
  isVisibleProfile: string;
  isVisibleGetProfile: string;
  isVisibleGetStarted: string;
  isVisibleSignIn: string;
  isVisibleSignUp: string;
  setProfileVisibilityState: (isVisibleProfile: string) => void;
  setGetProfileVisibilityState: (isVisibleGetProfile: string) => void;
  setGetStartedVisibilityState: (setGetStartedVisibilityState: string) => void;
  setSignInVisibilityState: (isVisibleSignIn: string) => void;
  setSignUpVisibilityState: (isVisibleSignUp: string) => void;
}

interface IVisibilityProvider {
  children: ReactNode;
}

export const VisibilityContext = createContext({} as IVisibleContext);

export const VisibilityProvider = ({ children }: IVisibilityProvider) => {
  const [isVisibleProfile, setIsVisibleProfile] = useState<string>(" hidden");
  const [isVisibleGetProfile, setIsVisibleGetProfile] = useState<string>(" hidden");
  const [isVisibleGetStarted, setIsVisibleGetStarted] = useState<string>(" hidden");
  const [isVisibleSignIn, setIsVisibleSignIn] = useState<string>(" hidden");
  const [isVisibleSignUp, setIsVisibleSignUp] = useState<string>(" hidden");


  const setProfileVisibilityState = (isVisibleProfile: string) => {
    setIsVisibleProfile(isVisibleProfile);
  };

  const setGetProfileVisibilityState = (isVisibleGetProfile: string) => {
    setIsVisibleGetProfile(isVisibleGetProfile);
  };

  const setGetStartedVisibilityState = (isVisibleGetStarted: string) => {
    setIsVisibleGetStarted(isVisibleGetStarted)
  }

  const setSignInVisibilityState = (isVisibleSignIn: string) => {
    setIsVisibleSignIn(isVisibleSignIn)
  }

  const setSignUpVisibilityState = (isVisibleSignUp: string) => {
    setIsVisibleSignUp(isVisibleSignUp)
  }

  return (
    <VisibilityContext.Provider
      value={{
        isVisibleProfile,
        isVisibleGetProfile,
        isVisibleGetStarted,
        isVisibleSignIn,
        isVisibleSignUp,
        setProfileVisibilityState,
        setGetProfileVisibilityState,
        setGetStartedVisibilityState,
        setSignInVisibilityState,
        setSignUpVisibilityState
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityProvider;

export const UseIsVisibleContext = () => {
  const visibility = useContext(VisibilityContext);
  return visibility;
};
