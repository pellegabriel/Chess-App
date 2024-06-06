import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CustomText from "../../../CustomText/CustomText";
import LevelIcon from "../../../../assets/LOGO2.svg";
import Cup from "../../../../assets/CUP.svg";
import Houses from "../../../../assets/gamePopups/HOUSES.svg";
import Cofre from "../../../../assets/gamePopups/COFRE.svg";

import Blitz from "../../../../assets/gamePopups/BLITZ.svg";
import Counter from "../AnimatedCounter";
import { styles } from "./GridResultStyles";

export const GridResult = () => {
  const [activeCounterIndex, setActiveCounterIndex] = useState(0);
  const [counterFinished, setCounterFinished] = useState(false);
  const [allCountersFinished, setAllCountersFinished] = useState(false);
  const [finishedCounters, setFinishedCounters] = useState([
    false,
    false,
    false,
    false,
  ]);

  const countersData = [
    { endValue: 12, duration: 1000 },
    { endValue: 678, duration: 1000 },
    { endValue: 98, duration: 1000 },
    { endValue: 345, duration: 1000 },
  ];
  const handleCounterFinish = () => {
    const newFinishedCounters = finishedCounters.map((finished, index) =>
      index === activeCounterIndex ? true : finished
    );

    setFinishedCounters(newFinishedCounters);

    if (activeCounterIndex < countersData.length - 1) {
      setActiveCounterIndex(activeCounterIndex + 1);
      setCounterFinished(false); 
    } else {
      setAllCountersFinished(true); 
      setCounterFinished(false); 
    }
  };

  useEffect(() => {
    if (!allCountersFinished && counterFinished) {
      if (activeCounterIndex < countersData.length - 1) {
        setActiveCounterIndex((prevIndex) => prevIndex + 1);
        setCounterFinished(false); 
      } else {
        setAllCountersFinished(true);
      }
    }
  }, [counterFinished, activeCounterIndex, countersData.length]);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemValueContainer}>
          <View>
            {activeCounterIndex === 0 && !allCountersFinished && (
              <CustomText style={styles.itemValue}>
                +
                <Counter
                  key={0}
                  endValue={countersData[0].endValue}
                  duration={countersData[0].duration}
                  onFinish={handleCounterFinish}
                  textStyle={{ fontSize: 70 }} 
                />
              </CustomText>
            )}
            {finishedCounters[0] && (
              <CustomText style={styles.itemValue}>
                +{countersData[0].endValue}
              </CustomText>
            )}
          </View>
        </View>
        <View style={styles.lightBackground}>
          <Blitz width={70} height={70} />
          <View style={styles.textContainerTypeGame}>
            <CustomText style={styles.textTypeGame}>BLITZ</CustomText>
            <View>
              {activeCounterIndex === 1 && !allCountersFinished && (
                <Counter
                  key={1}
                  endValue={countersData[1].endValue}
                  duration={countersData[1].duration}
                  onFinish={handleCounterFinish}
                  textStyle={{ fontSize: 50 }} 
                />
              )}
              {finishedCounters[1] && (
                <CustomText style={styles.expTypeGame}>
                  {countersData[1].endValue}
                </CustomText>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemValueContainer}>
          <View>
            {activeCounterIndex === 2 && !allCountersFinished && (
              <CustomText style={styles.itemValue}>
                +
                <Counter
                  key={2}
                  endValue={countersData[2].endValue}
                  duration={countersData[2].duration}
                  onFinish={handleCounterFinish}
                  textStyle={{ fontSize: 70 }} 
                />
              </CustomText>
            )}
            {finishedCounters[2] && (
              <CustomText style={styles.itemValue}>
                +{countersData[2].endValue}
              </CustomText>
            )}
          </View>
        </View>
        <View style={styles.lightBackground}>
          <LevelIcon width={70} height={70} />
          <View style={styles.textContainerLight}>
            <CustomText style={styles.text}>Level 139</CustomText>
            <View>
              {activeCounterIndex === 3 && !allCountersFinished && (
                <CustomText style={styles.nextText}>
                  <Counter
                    key={3}
                    endValue={countersData[3].endValue}
                    duration={countersData[3].duration}
                    onFinish={handleCounterFinish}
                    textStyle={{ fontSize: 23 }}
                  />
                  XP
                </CustomText>
              )}
              {finishedCounters[3] && (
                <CustomText style={styles.nextText}>
                  {countersData[3].endValue} XP
                </CustomText>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemValueContainer}>
          <CustomText style={styles.itemValue}>
            <Houses width={100} height={100} />
          </CustomText>
        </View>
        <View style={styles.lightBackground}>
          <View style={styles.comingsoonContainer}>
            <CustomText style={styles.title}>HOUSE EXP</CustomText>
            <CustomText style={styles.comingsoon}>Coming Soon</CustomText>
          </View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemValueContainer}>
          <CustomText style={styles.itemValue}>
            <Cup width={70} height={70} />
          </CustomText>
        </View>
        <View style={styles.lightBackground}>
          <View style={styles.comingsoonContainer}>
            <CustomText style={styles.title}>LEAGUE POINTS</CustomText>
            <CustomText style={styles.comingsoon}>Coming Soon</CustomText>
          </View>
        </View>
      </View>
      <View style={styles.lootBoxContainer}>
        <View style={styles.upperHalf}>
          <CustomText style={styles.lootBoxLevel}>Level 13</CustomText>
          <CustomText style={styles.nextLevelReward}>
            Next level reward
          </CustomText>
        </View>
        <View style={styles.lowerHalf}>
          <CustomText style={styles.lootBoxTitle}>LOOT BOX</CustomText>
        </View>
        <Cofre width={200} height={200} style={styles.svgStyle} />
      </View>
    </View>
  );
};
