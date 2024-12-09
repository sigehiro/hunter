import React from 'react'
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{'Results for: Eggs'}</Text>
                        <Image
                            source={{
                                uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8131309d-bbf4-4134-bca1-b48aa7a7fc27',
                            }}
                            resizeMode={'stretch'}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.storesHeader}>{'Stores'}</Text>
                    {renderStore(
                        'Best Buy',
                        '$2.99',
                        '1.2 mi',
                        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b629fef8-af9f-4c1e-b614-dd6c3c921503'
                    )}
                    {renderStore(
                        'Walmart',
                        '$3.49',
                        '0.5 mi',
                        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/934ade92-c3c4-470d-a14d-d8a7be8601e3'
                    )}
                    {renderStore(
                        'Target',
                        '$5.99',
                        '1.6 mi',
                        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dd6aeec-10c9-4646-afd0-922836b545e7'
                    )}
                    {renderStore(
                        'Egg Store',
                        '$199.99',
                        '0.3 mi',
                        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b2d4894-3c40-4a25-b086-4535b5ea41e0'
                    )}

                    <TouchableOpacity style={styles.sortButton} onPress={() => alert('Pressed!')}>
                        <Text style={styles.sortButtonText}>{'Sort by Direction'}</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const renderStore = (name, price, distance, imageUri) => (
    <>
        <View style={styles.storeContainer}>
            <Image source={{ uri: imageUri }} resizeMode={'stretch'} style={styles.storeImage} />
            <View style={styles.storeInfo}>
                <Text style={styles.storeName}>{name}</Text>
                <Text style={styles.storePrice}>{price}</Text>
            </View>
            <TouchableOpacity style={styles.getDirectionButton} onPress={() => alert('Pressed!')}>
                <Text style={styles.getDirectionText}>{'Get Direction'}</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.distanceText}>{distance}</Text>
    </>
)
