// app/screens/RecipeScreen.jsx
import React, { useState } from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import useFetch from '../hooks/useFetch'

const RecipeScreen = () => {
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState(false)

    // useFetchを使ってデータを取得
    const { data, loading, error } = useFetch(
        search
            ? `https://api.edamam.com/search?q=${query}&app_id=7b048c5e&app_key=51a7495617ab1e7b36e5f71baa1a3575`
            : null
    )

    const handleSearch = () => {
        if (query.trim()) {
            setSearch(true) // 検索を開始
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search for recipes" value={query} onChangeText={setQuery} />
            <Button title="Search" onPress={handleSearch} />
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error fetching data: {error}</Text>}
            {data && (
                <FlatList
                    data={data.hits}
                    keyExtractor={(item) => item.recipe.uri}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemTitle}>{item.recipe.label}</Text>
                            <Text>{item.recipe.source}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff', // 背景色を設定
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default RecipeScreen
