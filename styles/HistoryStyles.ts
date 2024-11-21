import { StyleSheet } from "react-native";
import { Colors } from "../components/shared/utils";

const HistoryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',  
    },
    historyText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        position: 'relative',
        right: '28%',
        marginTop: 90,
    },
    historyContainer: {
        flexGrow: 0, 
        width: '90%',
        flexDirection: 'column',
        paddingBottom: 250,
        position: 'relative',
        top: 20
    },
    historyItem: {
        width: '100%',
        borderRadius: 12,
        marginBottom: 10,
        rowGap: 2,
        backgroundColor: "#272f4d",
        flexDirection: 'row',
        padding: 8, 
    },
    image: {
        width: 55,
        height: 55,
        margin: 0,
        borderRadius: "50%",
        objectFit: "cover"
    },
    leftInfo: {
        position: 'relative',
        left: 7,
        flexDirection: 'column',
        flex: 1, 
    },
    statusText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    receiverAddress: {
        color: Colors.gray
    },
    comment: {
        color: 'white',
        alignSelf: 'flex-start', 
        borderRadius: 10,
        backgroundColor: '#161617',
        paddingHorizontal: 6, 
        paddingVertical: 3, 
        minWidth: 'auto',
        position: 'relative',
        right: 5,
        top: 3
    },
    rightInfo: {
        flexDirection: 'column',
        alignItems: 'flex-end', 
        marginRight: 10, 
    },
    amount: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
        marginBottom: 30, 
    },
    time: {
        fontSize: 15.5,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default HistoryStyles;
