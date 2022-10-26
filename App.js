import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, Text, View, ScrollView, StyleSheet } from 'react-native';
import BoardCard from './components/BoardCard/BoardCard';
import board_url from './consts'

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBoardsFromAPI = async () => {
    try {
      const response = await fetch(board_url);
      const json = await response.json();
      setData(json.boards)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      
    }
  }

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  return (
      <ScrollView>
          <View style={styles.container}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ board }, index) => board}
              renderItem={({ item }) => (
                <BoardCard
                  board={item.board}
                  description={item.meta_description}
                />
                // <Text style={styles.text}>{item.board} {item.meta_description}</Text>
              )}
            />
          )}
          {/* <Text>this is ad test</Text>
          <StatusBar style="auto" /> */}
          <BoardCard/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77867f',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40,
    flexDirection: 'column'
  },
  text: {
    color: 'white'
  },
});
