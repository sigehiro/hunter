import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default (props) => {
    const [textInput1, onChangeTextInput1] = useState('')
    const [textInput2, onChangeTextInput2] = useState('')

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{'Details'}</Text>
                    <Image
                        source={{
                            uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5ab0702-8848-4594-9248-1fd4effcf181',
                        }}
                        resizeMode={'stretch'}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{
                                uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56bdc63a-6d2e-4f6a-87c2-edb4d48f3bcc',
                            }}
                            resizeMode={'stretch'}
                            style={styles.iconSmall}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemText}>{'eggs'}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{
                                uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbb04580-7471-49b1-84bf-db9673ce396b',
                            }}
                            resizeMode={'stretch'}
                            style={styles.iconSmall}
                        />
                    </View>
                </View>
                <Text style={styles.sortByText}>{'Sort by'}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={'Price'}
                        value={textInput1}
                        onChangeText={onChangeTextInput1}
                        style={styles.textInput}
                    />
                    <Image
                        source={{
                            uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6a164cb-eac5-4239-b1d0-853bf5ebd8f1',
                        }}
                        resizeMode={'stretch'}
                        style={styles.inputIcon}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={'Distance'}
                        value={textInput2}
                        onChangeText={onChangeTextInput2}
                        style={styles.textInput}
                    />
                    <View style={styles.distanceIcon}></View>
                </View>
                {/* 商品リスト */}
                {['Best Buy', 'Walmart', 'Target'].map((store, index) => (
                    <View key={index} style={styles.productRow}>
                        <View style={styles.productInfo}>
                            <Text style={styles.storeName}>{store}</Text>
                            <Text style={styles.productName}>{'Eggs 12ct'}</Text>
                            <Text style={styles.price}>{'$' + (2.99 + index).toFixed(2)}</Text>
                        </View>
                        <Image
                            source={{
                                uri: `https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/${
                                    index === 0
                                        ? 'f60d4bd6-ecce-4b98-9c00-010ba45ff5d0'
                                        : index === 1
                                        ? '1d78c749-67b7-4fee-9cdd-20eea400293a'
                                        : 'f76805dc-b3c9-4e8b-b4d2-8dba9e725327'
                                }`,
                            }}
                            resizeMode={'stretch'}
                            style={styles.productImage}
                        />
                    </View>
                ))}
                <TouchableOpacity style={styles.findButton} onPress={() => alert('Pressed!')}>
                    <Text style={styles.findButtonText}>{'Find'}</Text>
                </TouchableOpacity>

                <View style={styles.footer}></View>
            </ScrollView>
        </SafeAreaView>
    )
}
