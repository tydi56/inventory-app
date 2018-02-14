import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    /*
     * Header Styles
     */
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

    /*
     * Inventory Styles
     */
    infoItems: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },

    badge: {
        width: 'auto',
        backgroundColor: '#6FA7C2'
    },

    appliedFilters: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },

    filter: {
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

    filterIcon: {
        fontSize: 12,
    },

    /*
     * Filters Styles
     */
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
