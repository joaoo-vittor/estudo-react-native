import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icons, Icon } from '../components/Icons';
import Colors from '../constants/Colors';
import ColorScreen from './ColorScreen';
import * as Animatable from 'react-native-animatable';

const TabArr = [
  { 
    route: 'Home', 
    label: 'Home', 
    type: Icons.Feather, 
    icon: 'home', 
    component: ColorScreen 
  },
  { 
    route: 'Search', 
    label: 'Search', 
    type: Icons.Feather, 
    icon: 'search', 
    component: ColorScreen 
  },
  { 
    route: 'Add', 
    label: 'Add', 
    type: Icons.Feather, 
    icon: 'plus-square', 
    component: ColorScreen 
  },
  { 
    route: 'Like', 
    label: 'Like', 
    type: Icons.Feather, 
    icon: 'heart', 
    component: ColorScreen 
  },
  { 
    route: 'Account', 
    label: 'Account', 
    type: Icons.FontAwesome, 
    icon: 'user-circle-o', 
    component: ColorScreen 
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { 
    scale: 0.5,
    translateY: 8,
  },
  0.92: {
    translateY: -34,
  },
  1: { 
    scale: 1.2,
    translateY: -20,
  }
}

const animate2 = {
  0: { 
    scale: 1.2,
    translateY: -20,
  },
  1: { 
    scale: 1,
    translateY: 8,
  }
}

const circle1 = {
  0: {
    scale: 0,
  },
  0.3: {
    scale: 0.25,
  },
  0.5: {
    scale: 0.5,
  },
  0.8: {
    scale: 0.75,
  },
  1: {
    scale: 1, 
  },
}

const circle2 = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0, 
  },
}

const TabButton = (props) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.container}
      activeOpacity={1}
    >
      <Animatable.View 
        animation="zoomIn"
        duration={1000}
        ref={viewRef}
        style={styles.container}
      >
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef} 
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.primary,
              borderRadius: 25,
            }}
          />
          <Icon 
            type={item.type}
            name={item.icon} 
            color={focused ? Colors.white : Colors.primary}
          />
        </View>
        <Animatable.Text
          ref={textRef}
          style={{
            fontSize: 10,
            color: Colors.primary,
            textAlign: 'center',
          }}
        >
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export const AnimTab2 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStatusBarHeight: 0,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen 
            key={index.toString()}
            name={item.route} 
            component={item.component} 
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  }
})