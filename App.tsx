import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";


export default function App() {

  const [count, setCount]=useState(0)
    const [checked, setChecked]=useState(false)

  return (
    <View style={styles.container}>
      <Text>I think you the best</Text>
      <Text>{count}</Text>
        <Button
            onPress={()=>{
                debugger
                setCount(count +1)}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
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
