import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from '../chessStyles';
import Text from '../../Global/Text';
export const MoveList = ({ moves, onSelectMove }) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [moves]); 

  return (
    <View style={styles.moveListContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.moveListContentContainer}
      >
        {moves.map((move, index) => (
          <View key={index} style={styles.moveListItem}>
            <Text style={styles.moveListItemText} onPress={() => onSelectMove(index)}>
              {move}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
