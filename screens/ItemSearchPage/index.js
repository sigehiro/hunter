import React from 'react'
import { SafeAreaView, View, ScrollView, Image, Text } from 'react-native'
import styles from './styles'

export default (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            {/* TODO change the image  form  corrct image in figma/ */}
                            <Image
                                source={{
                                    uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c391c41-5416-411d-8e56-c7534972729b',
                                }}
                                resizeMode={'stretch'}
                                style={styles.headerImage}
                            />
                            <Text style={styles.headerText}>{'Search'}</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={{
                                        uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e032ba9-fbc0-422e-a848-d8bff6a81def',
                                    }}
                                    resizeMode={'stretch'}
                                    style={styles.icon}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>{'What do you need?'}</Text>
                            </View>
                        </View>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>{'All'}</Text>
                            <Text style={styles.categoryTextActive}>{'Groceries'}</Text>
                            <Text style={styles.categoryTextActive}>{'Health & Beauty'}</Text>
                            <Text style={styles.categoryTextActive}>{'Household'}</Text>
                        </View>
                        <Text style={styles.title}>{'Categories'}</Text>
                        <Image
                            source={{
                                uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a911616d-2a4f-4b3a-8606-c34980ad3777',
                            }}
                            resizeMode={'stretch'}
                            style={styles.categoryImage}
                        />
                        <View style={styles.productRow}>
                            <Text style={styles.productName}>{'Eggs'}</Text>
                            <Text style={styles.productName}>{'Milk'}</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{'$3.50 - $5.00'}</Text>
                            <Text style={styles.price}>{'$2.00 - $4.00'}</Text>
                        </View>
                        <View style={styles.footer}>{/* Footer contents */}</View>
                    </View>
                    <Image
                        source={{
                            uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09598582-fe95-40bc-854e-d68264e01120',
                        }}
                        resizeMode={'stretch'}
                        style={styles.backgroundImage}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
