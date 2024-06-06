import React, { createContext, useState, useContext, ReactNode } from "react";

interface WaitingContextType {
  isWaiting: boolean;
  setIsWaiting: (isWaiting: boolean) => void;
}

const WaitingContext = createContext<WaitingContextType>({
  isWaiting: false,
  setIsWaiting: () => {},
});

export const useWaiting = () => useContext(WaitingContext);

interface WaitingProviderProps {
  children: ReactNode;
}

export const WaitingProvider: React.FC<WaitingProviderProps> = ({
  children,
}) => {
  const [isWaiting, setIsWaiting] = useState(false);

  return (
    <WaitingContext.Provider value={{ isWaiting, setIsWaiting }}>
      {children}
    </WaitingContext.Provider>
  );
};
