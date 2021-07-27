import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

let books: any = [
  {id: 0, title: 'JavaScript & JQuery: Web Development'},
  {id: 1, title: 'To Sleep in a Cloud of Stars'},
  {id: 2, title: 'Dance on the Moon'},
  {id: 3, title: 'Best birthday party with enemies'},
  {id: 4, title: 'Second thought changed my life'},
  {id: 5, title: 'Master data science with deep neural network'},
  {id: 6, title: 'Rest Api with SpringBoot Data Rest Modified Title2'},
  {id: 7, title: 'Rest Api with Django rest framework'},
  {id: 8, title: 'Change life with Yoga'},
  {id: 9, title: 'How the mind works'},
  {id: 10, title: 'How to analyze people'},
];

let Stack = createStackNavigator();

let HomeScreen = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Description', {name: item.title})
            }
            style={styles.container}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

let DescriptionScreen = ({route}) => {
  let [bookName, setBookName] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setBookName(route.params.name + "'s");
    }, [route.params.name]),
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        alignItems: 'flex-start',
        backgroundColor: '#CCC',
      }}>
      <Text>Book Name - {bookName}</Text>
    </View>
  );
};

let App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={({route}) => ({
            title: route.params.name ? route.params.name : 'Profile',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
  button: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: '#2196F3',
    borderBottomColor: '#000000',
    borderBottomWidth: 5,
  },
  buttonText: {
    textAlign: 'left',
    padding: 20,
    color: 'white',
  },
});

export default App;