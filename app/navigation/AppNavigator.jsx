// app/navigation/AppNavigator.jsx
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import GroceryListScreen from '../screens/GroceryListScreen'
import RecipeScreen from '../screens/RecipeScreen'
import ShoppingPlanScreen from '../screens/ShoppingPlanScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TestAPI from '../screens/TestAPI' // TestAPIのインポート

const Stack = createStackNavigator()

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GroceryList" component={GroceryListScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="ShoppingPlan" component={ShoppingPlanScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="TestAPI" component={TestAPI} />
    </Stack.Navigator>
)

export default AppNavigator
