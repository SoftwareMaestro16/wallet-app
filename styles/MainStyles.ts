import { StyleSheet } from "react-native";
import { Colors } from "../components/shared/utils";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',  
    },
    infoViewText: {
        marginTop: 160, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    balance: {
        fontSize: 42,
        fontWeight: 'bold',
        color: 'white',
    },
    address: {
        fontSize: 19,
        fontWeight: '500',
        color: Colors.gray,
        opacity: 0.5, 
        position: 'relative',
        top: 7,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 25,
    },
    assets: {
        flexGrow: 0,  
        marginTop: 12,
        backgroundColor: '#272f4d',
        width: '90%',
        borderRadius: 16,
        position: 'relative',
        bottom: 80,
        maxHeight: '45%',  
    },
    navigatorButtons: {
        position: 'absolute', 
        bottom: 0, 
        left: 0,  
        width: '100%', 
        height: 82,  
        flexDirection: 'row', 
        justifyContent: 'center',  
        alignItems: 'center', 
        backgroundColor: '#20253d', 
        columnGap: 30, 
        zIndex: 1,  
      }
});

export default Styles;