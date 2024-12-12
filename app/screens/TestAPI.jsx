import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const TestAPI = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    // TODO Do not catch api
    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://api.edamam.com/search?q=egg&app_id=7b048c5e&app_key=51a7495617ab1e7b36e5f71baa1a3575'
            )
            console.log('Response status:', response.status) // レスポンスのステータスをログに出力
            console.log('Response headers:', response.headers) // レスポンスのヘッダーをログに出力
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`)
            }
            const result = await response.json()
            console.log('API response:', result) // レスポンスをログに出力
            setData(result)
        } catch (err) {
            console.error('Fetch error:', err) // エラーをログに出力
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View>
            <Text>TestAPI Screen</Text> {/* 識別可能なテキストを追加 */}
            {error && <Text>Error: {error}</Text>}
            {data ? (
                <View>
                    <Text>Data fetched successfully</Text>
                    <Text>{JSON.stringify(data, null, 2)}</Text> {/* データを表示 */}
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    )
}

export default TestAPI
