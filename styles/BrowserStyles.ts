import { StyleSheet } from "react-native";
import { Colors } from "../components/shared/utils";

const BrowserStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',  
    },
    main: {
        color: 'white',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    input: {
        position: 'relative',
        top: 100,
        width: 390,
        height: 40,
        backgroundColor: '#272f4d',
        color: 'white',
        fontSize: 20,
        borderRadius: 12,
        paddingLeft: 12
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        margin: 0,
        top: 100,
        paddingHorizontal: 3.5
    },
    appContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: 115,
        width: '100%',
        overflow: 'hidden', 
        paddingBottom: 80
    },
    
});

export default BrowserStyles;