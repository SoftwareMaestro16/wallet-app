import { StyleSheet } from 'react-native';

const AppsStyles = StyleSheet.create({
    image: {
      width: 55,
      height: 55,
      margin: 7,
      borderRadius: 27.5,
      objectFit: "cover",
    },
    appsContainer: {
      backgroundColor: '#272f4d',
      flexDirection: 'row',
      width: 400,
      marginBottom: 10, 
      borderRadius: 12,
      overflow: 'hidden', 
    },
    appsContainerFull: {
      width: '100%',
      marginTop: 5,
      flexDirection: 'column', 
      gap: 12, 
      borderRadius: 12,
      overflow: 'hidden',
      
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    description: {
      fontSize: 18,
      fontWeight: '400',
      color: 'white',
    },
    texts: {
      justifyContent: 'center',
      flex: 1,
    },
    textH: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
    },
});
  
export default AppsStyles;
  