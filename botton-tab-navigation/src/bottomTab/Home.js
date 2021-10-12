import React from 'react'
import { List } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

export const Home = ({ navigation }) => {

  const navigate = (route) => navigation.navigate(route)

  return (
    <View styles={{ flex: 1 }}>
      <List.Accordion
        title="Drawer Navigation"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Animatable Tab1" onPress={() => navigate('Tab1')} />
        <List.Item title="Animatable Tab2" onPress={() => navigate('Tab2')} />
        <List.Item title="Animatable Tab3" onPress={() => navigate('Tab3')} />
      </List.Accordion>
    </View>
  )
}

const styles = StyleSheet.create({})