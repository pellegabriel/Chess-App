import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface TimerContextType {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const TimerContext = createContext<TimerContextType>({
  time: 15, 
  setTime: () => {} 
});

interface TimerProviderProps {
  children: ReactNode; 
}

export const useTimer = () => useContext(TimerContext);

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [time, setTime] = useState(15); 
  
useEffect(() => {
  if (time > 0) {
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(timerId);
  }
}, [time]);

  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
};
