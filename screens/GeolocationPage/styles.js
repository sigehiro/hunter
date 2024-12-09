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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FCF7',
        paddingVertical: 28,
        paddingLeft: 120,
        paddingRight: 16,
        marginBottom: 24,
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
    storesHeader: {
        color: '#141C0C',
        fontSize: 22,
        marginBottom: 14,
        marginLeft: 16,
    },
    storeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FCF7',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    storeImage: {
        borderRadius: 8,
        width: 100,
        height: 56,
        marginRight: 16,
    },
    storeInfo: {
        flex: 1,
        marginRight: 4,
    },
    storeName: {
        color: '#141C0C',
        fontSize: 16,
        marginBottom: 8,
    },
    storePrice: {
        color: '#759B49',
        fontSize: 14,
    },
    getDirectionButton: {
        width: 125,
        alignItems: 'center',
        backgroundColor: '#EDF4E8',
        borderRadius: 12,
        paddingVertical: 9,
    },
    getDirectionText: {
        color: '#141C0C',
        fontSize: 14,
    },
    distanceText: {
        color: '#759B49',
        fontSize: 14,
        marginBottom: 15,
        marginLeft: 16,
    },
    sortButton: {
        alignItems: 'center',
        backgroundColor: '#93F426',
        borderRadius: 12,
        paddingVertical: 13,
        marginBottom: 12,
        marginHorizontal: 16,
    },
    sortButtonText: {
        color: '#141C0C',
        fontSize: 14,
    },
    footer: {
        height: 20,
        backgroundColor: '#F9FCF7',
        marginBottom: 23,
    },
})

export default styles
