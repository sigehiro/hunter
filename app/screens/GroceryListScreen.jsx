// app/screens/GroceryListScreen.jsx
import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions'

const GroceryListScreen = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.grocery.items)

    return (
        <View>
            <Text>Grocery List</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
            <Button title="Add Item" onPress={() => dispatch(addItem('New Item'))} />
        </View>
    )
}

export default GroceryListScreen
