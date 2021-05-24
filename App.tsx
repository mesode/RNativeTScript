
import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Input from './input';
import { Fruit, Fruits } from './data';
import Item from './listitem';

const App: FC = () => {
  const [ searchquery, setSearchQuery ] = useState<string>("");
  const [ fruits, setFruits ] = useState<Fruit[] | null>(null);

  useEffect(() => {
    (() => {
      setFruits(Fruits);
    })();
  }, []);
  
  const handleSearch = (text: string) => {
    const fruits: Fruit[] = Fruits.filter(fruit => fruit.name.includes(text));
    setFruits(fruits);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Input 
          icon = "md-search"
          placeholder = "Search"
          onChangeText = {(text) => handleSearch(text)}
        />
        <FlatList 
          data={fruits} 
          renderItem={({ item }) => ( 
            <Item id={item.id} 
            name={item.name} 
            price={item.price}
            />
          )} 
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
