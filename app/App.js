import React from 'react'
import { AppRegistry } from 'react-native'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/store' // Reduxストアのインポート
import AppNavigator from './navigation/AppNavigator' // AppNavigatorのインポート

const App = () => (
    <Provider store={store}>
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    </Provider>
)

export default App
// AppRegistryを使用してAppコンポーネントを登録
AppRegistry.registerComponent('main', () => App)
