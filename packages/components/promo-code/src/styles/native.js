import { StyleSheet } from 'react-primitives';

const styles = StyleSheet.create({
    root: {
        
        flexDirection: "column",
        color: "#000000"
    },
    title: {
        backgroundColor: '#f7f7f7',
        color: "#000000",
        fontWeight: "bold",
        paddingTop: 30,
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 14
    },
    section: {
        
        borderColor: "#ededed",
        borderBottomWidth: 1,
        borderStyle: "solid",
       
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    button: {
        flex: 1,
        height: 32,
        marginTop: 8
        
        
    },
    textInput: {
        flex: 2,
        
        
    },
    savings: {
        color: "green",
        fontSize: 12,
        fontWeight: 'bold'
    },
    savingsRow: {
        padding: 10,
        borderColor: "#ededed",
        borderBottomWidth: 1,
        borderStyle: "solid",
        flexDirection: 'row',
        color: '#000000',
        justifyContent: 'space-between'
    },
    removeItem: {
        color: "#1976d2",
        textDecorationLine: "underline",
        fontSize: 12
        
    },
    promoCodes: {
        marginTop: 10,
        paddingLeft: 10
    },
    savingSection: {
        borderColor: "#ededed",
        borderBottomWidth: 2,
        borderStyle: "solid",
        paddingBottom: 10,
        
        alignItems: 'flex-end'
    }
    
});


export default styles