import React from 'react';
import { 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  StatusBar
} from 'react-native';
import { MockData } from '../../service/data';
import { sizeTheme } from '../../common/GlobalStyle';

const { FULL_SIZE, RADIUS, CARD_HEIGHT, CARD_WIDTH, SPACING } = sizeTheme;

export const Training = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: StatusBar.currentHeight + SPACING,
      }}
    > 
      <Text
        style={{
          textAlign: 'left',
          marginLeft: SPACING,
          fontWeight: 'bold',
          fontSize: 30,
        }}
      >
        Dias De Treino
      </Text>
      <FlatList 
        data={MockData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        renderItem={({ item, index }) => {
          
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.push('TrainingDetails', { item })}
              style={styles.cardContainer}
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
                <Image 
                  source={item.pathImage}
                  style={[
                    StyleSheet.absoluteFillObject,
                    {
                      resizeMode: 'cover',
                      width: CARD_WIDTH,
                      height: CARD_HEIGHT,
                    }
                  ]}
                  
                />
              </View>
              <Text
                style={styles.day}
              >
                { item.day }
              </Text>
              <View
                style={styles.system}
              >
                <Text
                  style={styles.textSystem}
                >
                  {item.system}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: SPACING,
  },
  day: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    position: 'absolute',
    top: SPACING * 2,
    left: SPACING * 2,
  },
  system: {
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
  textSystem: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
  }
})
