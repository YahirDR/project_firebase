import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity para manejar el clic
import app from './credenciales';




export default function App() {

  
  const  click = () =>{
    console.log(app);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={click}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
