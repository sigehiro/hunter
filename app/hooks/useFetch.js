// app/hooks/useFetch.js
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`)
                }
                const result = await response.json()
                console.log('API response:', result) // レスポンスをログに出力
                setData(result)
            } catch (err) {
                console.error('Fetch error:', err) // エラーをログに出力
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch
