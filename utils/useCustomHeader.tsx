import React from 'react';
import { useWaiting } from '../components/ScreenLayout/WaitingContext';
import { WaitingForOpponent } from '../components/WaitingOpponent/WaitingOpponent';

export const useCustomHeader = () => {
  const { isWaiting, setIsWaiting } = useWaiting();

  const customHeader = isWaiting ? (
    <WaitingForOpponent
      onCancel={() => setIsWaiting(false)}
      customStyles={{
        container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: "#282828",
          color: "#282828",
          maxHeight: 170,
          marginTop:25,
          marginBottom: 0
        },
        header: { width: "90%", height:120 },
        buttonText: { fontSize: 20 },
        button: { width: "90%" },
        backgroundImageCustom: {
          width: 200,
          height: 200,
          top: 0,
          left: '50%'
        },
      }}
    />
  ) : null;

  return customHeader;
};
