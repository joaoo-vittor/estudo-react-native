import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
    component: ColorScreen, 
    color: Colors.primary, 
    alphaClr: Colors.primaryAlpha 
  },
  { 
    route: 'Search', 
    label: 'Search', 
    type: Icons.Feather, 
    icon: 'search', 
    component: ColorScreen, 
    color: Colors.green, 
    alphaClr: Colors.greenAlpha 
  },
  { 
    route: 'Add', 
    label: 'Add New', 
    type: Icons.Feather, 
    icon: 'plus-square', 
    component: ColorScreen, 
    color: Colors.red, 
    alphaClr: Colors.redAlpha 
  },
  { 
    route: 'Account', 
    label: 'Account', 
    type: Icons.FontAwesome, 
    icon: 'user-circle-o', 
    component: ColorScreen, 
    color: Colors.purple, 
    alphaClr: Colors.purpleAlpha 
  },
];


const Tab = createBottomTabNavigator();

const animate1 = {
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
  }
}

const animate2 = {
  0: { 
    scale: 1,
  },
  1: { 
    scale: 0,
  }
}

const TabButton = (props) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      textViewRef.current.animate(animate1);
    } else {
      viewRef.current.animate(animate2);
      textViewRef.current.animate(animate2);
    }
  }, [focused])

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.container, { flex: focused ? 1 : 0.7 }]}
      activeOpacity={1}
    >
      <View>
        <Animatable.View 
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, {
            backgroundColor: item.color,
            borderRadius: 16,
          }]}
        />
        <View 
          style={
            [styles.btn, 
            { backgroundColor: focused ? null : item.alphaClr }]}
        >
          <Icon
            type={item.type}
            name={item.icon} 
            color={focused ? Colors.white : Colors.primary}
          />
          <Animatable.View
            ref={textViewRef}
          >
            {focused && 
              <Text 
                style={{
                  color: Colors.white,
                  paddingHorizontal: 8,
                }}
              >
                {item.label}
              </Text>
            }
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const AnimTab3 = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  btn: {
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    padding: 8,
  }
})