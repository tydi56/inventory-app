import { StyleSheet } from 'react-native';

/*
 * Header Styles
 */
export const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#6FA7C2',
        paddingTop: 15,
        paddingBottom: 5,
        flexDirection: 'row',
    },

    headerButton: {
        width: 50,
        textAlign: 'center',
        color: '#fff'
    },

    headerTitle: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    },
});

/*
 * Inventory Styles
 */
export const invStyles = StyleSheet.create({
    itemSubtitle: {
        fontWeight: 'bold',
        marginLeft: 12,
        color: 'grey'
    },

    noItemsContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    
    noItemsText: {
        alignSelf: 'center', 
        fontSize: 25, 
        fontWeight: 'bold', 
        color:'grey'
    }
});

/*
 * Filters Styles
 */
export const filterStyles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    button: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        backgroundColor: '#6FA7C2'
    },

    buttonIcon: {
        color: '#fff'
    },

    form: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export const tagStyles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    tag: {
        backgroundColor: 'rgba(0,0,0,.54)', 
        color:'#fff', 
        paddingTop: 5, 
        paddingBottom: 5, 
        paddingRight: 10, 
        paddingLeft: 10, 
        borderRadius:20,
        marginLeft: 10,
        marginBottom: 5
    },

    tagIcon: {
        fontSize: 12,
    },
});

