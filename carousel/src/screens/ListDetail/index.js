import React from 'react';
import { 
  Text, 
  View, 
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ListDetail = (props) => {
  const { route: { params: { item } }, navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text>{item.location}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  }
})
