
import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground,TouchableOpacity,TextInput,Button} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>here is my first app</Text>
      <TextInput placeholder="Username" placeholderColor="#c4c3cb" styles={{borderColor:'black',borderWidth: 1,padding:10}}/>
      <Button
              
              onPress={() => this.onLoginPress()}
              title="Login"
              
            />
             <Button
              // buttonStyle={styles.LoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
