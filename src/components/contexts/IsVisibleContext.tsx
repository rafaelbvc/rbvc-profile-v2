import { createContext, useState, useContext, ReactNode } from "react";

interface IVisibleContext {
  isVisibleProfile: string;
  isVisibleGetStarted: string;
  isVisibleAboutMe: string;
  isVisiblePortifolio: string;
  isVisibleContact: string;
  isVisibleHireMe: string;
  setProfileVisibilityState: (isVisibleProfile: string) => void;
  setGetStartedVisibilityState: (isVisibleGetStated: string) => void;
  setAboutMeVisibilityState: (isVisibleAboutMe: string) => void;
  setPortifolioVisibilityState: (isVisiblePortifolio: string) => void;
  setContactVisibilityState: (isVisibleContact: string) => void;
  setHireMeVisibilityState: (isVisibleHireMe: string) => void;
}

interface IVisibilityProvider {
  children: ReactNode;
}

export const VisibilityContext = createContext({} as IVisibleContext);

export const VisibilityProvider = ({ children }: IVisibilityProvider) => {
  const [isVisibleProfile, setIsVisibleProfile] = useState<string>(" hidden");
  const [isVisibleGetStarted, setIsVisibleGetStarted] =
    useState<string>(" hidden");
  const [isVisibleAboutMe, setIsVisibleAboutMe] = useState<string>(" ");
  const [isVisiblePortifolio, setIsVisiblePortifolio] = useState<string>(" ");
  const [isVisibleContact, setIsVisibleContact] = useState<string>(" ");
  const [isVisibleHireMe, setIsVisibleHireMe] = useState<string>(" ");

  const setProfileVisibilityState = (isVisibleProfile: string) => {
    setIsVisibleProfile(isVisibleProfile);
  };

  const setGetStartedVisibilityState = (isVisibleGetStarted: string) => {
    setIsVisibleGetStarted(isVisibleGetStarted);
  };

  const setAboutMeVisibilityState = (isVisibleAboutMe: string) => {
    setIsVisibleAboutMe(isVisibleAboutMe);
  };

  const setPortifolioVisibilityState = (isVisiblePortifolio: string) => {
    setIsVisiblePortifolio(isVisiblePortifolio);
  };

  const setContactVisibilityState = (isVisibleContact: string) => {
    setIsVisibleContact(isVisibleContact);
  };

  const setHireMeVisibilityState = (isVisibleHireMe: string) => {
    setIsVisibleHireMe(isVisibleHireMe);
  };

  return (
    <VisibilityContext.Provider
      value={{
        isVisibleProfile,
        isVisibleGetStarted,
        isVisibleAboutMe,
        isVisiblePortifolio,
        isVisibleContact,
        isVisibleHireMe,
        setGetStartedVisibilityState,
        setProfileVisibilityState,
        setAboutMeVisibilityState,
        setPortifolioVisibilityState,
        setContactVisibilityState,
        setHireMeVisibilityState,
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
