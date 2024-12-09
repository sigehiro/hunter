import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        backgroundColor: '#F9FCF7',
    },
    header: {
        backgroundColor: '#F9FCF7',
        paddingTop: 28,
        paddingBottom: 11,
        paddingRight: 16,
        marginBottom: 12,
    },
    headerImage: {
        width: 24,
        height: 24,
        marginBottom: 24,
        marginLeft: 350,
    },
    headerText: {
        color: '#141C0C',
        fontSize: 28,
        marginLeft: 18,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        marginHorizontal: 16,
    },
    iconContainer: {
        width: 40,
        backgroundColor: '#EDF4E8',
        paddingLeft: 16,
    },
    icon: {
        width: 24,
        height: 24,
        marginTop: 12,
    },
    inputContainer: {
        width: 318,
        backgroundColor: '#EDF4E8',
        paddingVertical: 16,
        paddingHorizontal: 9,
    },
    inputText: {
        color: '#759B49',
        fontSize: 16,
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 31,
    },
    categoryText: {
        color: '#141C0C',
        fontSize: 14,
        marginRight: 32,
    },
    categoryTextActive: {
        color: '#759B49',
        fontSize: 14,
        marginRight: 32,
    },
    title: {
        color: '#141C0C',
        fontSize: 18,
        marginBottom: 26,
        marginLeft: 17,
    },
    categoryImage: {
        borderRadius: 12,
        height: 240,
        marginBottom: 19,
        marginHorizontal: 16,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
        marginHorizontal: 18,
    },
    productName: {
        color: '#141C0C',
        fontSize: 16,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 115,
        marginHorizontal: 17,
    },
    price: {
        color: '#759B49',
        fontSize: 14,
    },
    footer: {
        backgroundColor: '#F9FCF7',
        paddingVertical: 13,
        paddingHorizontal: 31,
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 267,
        right: -118,
        borderRadius: 12,
        width: 240,
        height: 240,
    },
})

export default styles
