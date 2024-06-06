import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import CustomText from '../../CustomText/CustomText';

interface CounterProps {
  endValue: number;
  duration: number;
  onFinish?: () => void; 
  textStyle: any
}

const Counter = ({ endValue, duration, onFinish, textStyle }: CounterProps) => {
  const [value, setValue] = useState(0);
  const [tickSound, setTickSound] = useState(null);
  const [finalSound, setFinalSound] = useState(null);

  async function loadSound() {
    const { sound: soundTick } = await Audio.Sound.createAsync(
      require('../../../assets/tick.mp3')
    );
    const { sound: soundFinal } = await Audio.Sound.createAsync(
      require('../../../assets/final.mp3')
    );
    setTickSound(soundTick);
    setFinalSound(soundFinal);
  }

  useEffect(() => {
    loadSound();
    return () => {
      tickSound && tickSound.unloadAsync();
      finalSound && finalSound.unloadAsync();
    };
  }, []);

useEffect(() => {
  let start = Date.now();
  let prevValue = 0; 
  let tickPlayed = false; 

  const interval = setInterval(async () => {
    const delta = Date.now() - start;
    const progress = delta / duration;
    const newValue = Math.floor(endValue * progress);

    if (newValue < prevValue) tickPlayed = false;

    if (newValue !== value) {
      setValue(newValue);
      prevValue = newValue;

      if (newValue > prevValue && !tickPlayed) {
        tickPlayed = true; 
        await tickSound?.replayAsync();
      }
    }

    if (delta >= duration) {
      setValue(endValue);
      clearInterval(interval);
      if (!tickPlayed) {
        await tickSound?.replayAsync();
      }
      await finalSound?.replayAsync();
      onFinish && onFinish(); 
      tickPlayed = false; 
    }
  }, 1000 / 60);

  return () => {
    clearInterval(interval);
    tickSound?.stopAsync(); 
    finalSound?.stopAsync(); 
  };
}, [endValue, duration, tickSound, finalSound, onFinish]);



  return (
    <CustomText style={[styles.counter, textStyle]}>
      {value}
    </CustomText>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 70,
    textAlign: "center",
    color: '#282828'
  },
});

export default Counter;
