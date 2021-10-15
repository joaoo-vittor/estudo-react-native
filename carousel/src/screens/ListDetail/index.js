import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Text, 
  View, 
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { SharedElement } from 'react-native-shared-element';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import { sizesTheme, width } from '../../config/theme';
const { FULL_SIZE, ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING } = sizesTheme;

const zoomIn = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  }
}

const ListDetail = (props) => {
  const { route: { params: { item } }, navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <SharedElement
          id={`item.${item.key}.photo`}
          style={[StyleSheet.absoluteFillObject]}
        >
          <Image 
            source={{ uri: item.image }} 
            style={[
              StyleSheet.absoluteFillObject,
              { 
                resizeMode: 'cover',
              }
            ]}
          />
        </SharedElement>
        <SharedElement
          id={`item.${item.key}.location`}
        >
          <Text 
            style={[
              styles.location,
            ]} 
          >
            {item.location}
          </Text>
        </SharedElement>
        <View
          style={{
            position: 'absolute',
            bottom: 120,
            left: SPACING * 1.5,
          }}
        >
          <Text
            style={[
              styles.location,
              {
                fontSize: 16,
                position: 'relative',
                top: 0,
                left: SPACING,
                textTransform: 'uppercase',
                fontWeight: '800',
                
              }
            ]}
          >
            Activities
          </Text>
          <FlatList 
            data={[...Array(8).keys()]}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: SPACING }}
            keyExtractor={(item) => String(item)}
            renderItem={({ item, index }) => {
              return (
                <Animatable.View
                  // animation={"fadeIn"}
                  animation={zoomIn}
                  duration={500}
                  delay={400 + (index * 100)}
                  style={{
                    backgroundColor: '#fff',
                    padding: SPACING,
                    width: width * 0.33,
                    height: width * 0.5,
                    marginRight: SPACING,
                    borderRadius: RADIUS,
                  }}
                >
                  <Image 
                    source={{ 
                      uri: 'https://miro.medium.com/max/124/1*qYUvh-EtES8dtgKiBRiLsA.png' 
                    }} 
                    style={{
                      width: '100%',
                      height: '70%',
                      resizeMode: 'cover',
                      marginBottom: SPACING,
                    }}
                  />
                  <Text>Activity #{item + 1}</Text>
                </Animatable.View>
              )
            }}
          />
        </View>
      </View>
      <ExpoStatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: StatusBar.currentHeight,
    padding: SPACING,
    zIndex: 99999
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  location: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: StatusBar.currentHeight * 0.5,
    left: SPACING * 1.5,
  },
})


ListDetail.sharedElements = (route, otherItemRoute, showing) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.key}.photo`,
      animation: 'fade',
      resize: 'clip'
    },
    {
      id: `item.${item.key}.location`,
      animation: 'fade',
      resize: 'clip'
    },
  ]
}

export { ListDetail };
