// app/screens/HomeScreen.jsx
import React from 'react'
import { View, Text, Button } from 'react-native'
import TestAPI from './TestAPI'

const HomeScreen = ({ navigation }) => (
    <View>
        <Text>Welcome to Grocery Buddy!</Text>
        <Button title="Go to Grocery List" onPress={() => navigation.navigate('GroceryList')} />
        <Button title="Go to Recipe Search" onPress={() => navigation.navigate('Recipe')} />
        <TestAPI />
    </View>
)

export default HomeScreen
