import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {useState} from "react";

let res = 0;

export default function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [history, setHistory] = useState([]);

  const plus = () => {
      res = Number(firstValue) + Number(secondValue);
      let text = firstValue + " + " + secondValue + " = " + res;
      setHistory([...history, {key: text}])
  }

  const minus = () => {
    res = Number(firstValue) - Number(secondValue);
    let text = firstValue + " - " + secondValue + " = " + res;
    setHistory([...history, {key: text}])
  }

  return (
      <View style={styles.container}>
        <Text>Result: {res}</Text>
        <TextInput style={{width: 100, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={firstValue => setFirstValue(firstValue)} value={firstValue} />
        <TextInput style={{width: 100, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={secondValue => setSecondValue(secondValue)} value={secondValue} />
        <View style={styles.flexContainer}>
          <Button onPress={plus} title="+" />
          <Button onPress={minus} title="-" />
        </View>
        <Text>History: </Text>
        <FlatList style={{flex: 0.4}} data={history} renderItem={({item}) => <Text>{item.key}</Text>}
                  keyExtractor={(item, index) => index.toString()} scrollEnabled={true} />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
    },
    flexContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        height: 5
    }
});
