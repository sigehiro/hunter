import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#F9FCF7',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FCF7',
        paddingVertical: 20,
        paddingLeft: 164,
        paddingRight: 16,
        marginBottom: 12,
    },
    headerText: {
        color: '#141C0C',
        fontSize: 18,
        marginRight: 4,
        flex: 1,
    },
    icon: {
        width: 24,
        height: 24,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: 16,
    },
    iconContainer: {
        width: 40,
        backgroundColor: '#EDF4E8',
        paddingLeft: 16,
    },
    iconSmall: {
        width: 24,
        height: 24,
        marginTop: 12,
    },
    textContainer: {
        width: 278,
        backgroundColor: '#EDF4E8',
        paddingVertical: 18,
        paddingHorizontal: 8,
    },
    itemText: {
        color: '#141C0C',
        fontSize: 16,
    },
    sortByText: {
        color: '#141C0C',
        fontSize: 18,
        marginBottom: 27,
        marginLeft: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DBE8CE',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 16,
        marginBottom: 12,
        marginHorizontal: 16,
    },
    textInput: {
        color: '#141C0C',
        fontSize: 14,
        marginRight: 4,
        flex: 1,
        paddingVertical: 17,
    },
    inputIcon: {
        borderRadius: 10,
        width: 20,
        height: 20,
    },
    distanceIcon: {
        width: 20,
        height: 20,
        borderColor: '#DBE8CE',
        borderRadius: 10,
        borderWidth: 2,
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
        marginHorizontal: 16,
    },
    productInfo: {
        width: 75,
    },
    storeName: {
        color: '#759B49',
        fontSize: 14,
        marginBottom: 10,
    },
    productName: {
        color: '#141C0C',
        fontSize: 16,
        marginBottom: 9,
    },
    price: {
        color: '#759B49',
        fontSize: 14,
    },
    productImage: {
        borderRadius: 12,
        width: 130,
        height: 70,
    },
    findButton: {
        alignItems: 'center',
        backgroundColor: '#93F426',
        borderRadius: 12,
        paddingVertical: 12,
        marginBottom: 12,
        marginHorizontal: 16,
    },
    findButtonText: {
        color: '#141C0C',
        fontSize: 14,
    },
    footer: {
        height: 20,
        backgroundColor: '#F9FCF7',
        marginBottom: 17,
    },
})

export default styles
