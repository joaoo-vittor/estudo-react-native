import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
  SafeAreaView,
  StatusBar as BarStatus,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import data from '../../data/locations';
import { sizesTheme } from '../../config/theme';
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = sizesTheme;

export const List = ({ navigation }) => {

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <Animated.FlatList 
        data={data}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE
          ]

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
          })

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          })

          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push('ListDetails', { item })
              }}
              style={styles.itemContainer}
            >
              <View 
                style={[
                  StyleSheet.absoluteFillObject, 
                  { 
                    overflow: 'hidden',
                    borderRadius: RADIUS
                  }
                ]}
              >
                <Animated.Image 
                  source={{ uri: item.image }} 
                  style={[
                    StyleSheet.absoluteFillObject,
                    { 
                      resizeMode: 'cover',
                      transform: [
                        { scale }
                      ]
                    }
                  ]}
                />
              </View>
              <Animated.Text 
                style={[
                  styles.location,
                  {
                    transform: [
                      { translateX }
                    ]
                  }
                ]} 
              >
                {item.location}
              </Animated.Text>
              <View style={styles.daysContainer}>
                <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                <Text style={styles.daysLabel}>days</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <StatusBar backgroundColor="#fff" style="auto" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: BarStatus.currentHeight
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,
  },
  location: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: SPACING,
    left: SPACING,
  },
  daysContainer: {
    position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysValue: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 18,
  },
  daysLabel: {
    color: '#fff',
    fontSize: 11,
  }
});
