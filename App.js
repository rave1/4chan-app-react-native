import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BoardCard from './components/BoardCard/BoardCard';
import BOARD_URL from './consts'

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>this is a test</Text>
      <StatusBar style="auto" />
      <BoardCard/>
    </View>
    </ScrollView>
  );
}

const getBoardsFromAPI = () => {
  return fetch()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:80,
    flexDirection: 'column'
  },
});
