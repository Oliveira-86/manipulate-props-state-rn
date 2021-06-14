import React, { useState } from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import Input from './src/components/Input';
import ListItem from './src/components/ListItem';

export default function App() {
  const [itemGoals, setItemGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleToList = (inputValue) => {
    setItemGoals(currentValue => [
      ...currentValue,
      { id: Math.random().toString(), value: inputValue }
    ]);
    setIsVisible(!isVisible);
  };

  const handleRemove = (dataId) => {
    setItemGoals(currentValue => {
      return currentValue.filter((item) => item.id !== dataId)
    });
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Add New Item" 
        onPress={() => setIsVisible(!isVisible)} 
      />
        <Input 
          visible={isVisible} 
          addToList={handleToList} 
          onCancel={() => setIsVisible(!isVisible)}
        />
        <FlatList 
          data={itemGoals}
          keyExtractor={(item, _) => item.id}
          renderItem={(itemData) => (
            <ListItem 
              id={itemData.item.id}
              title={itemData.item.value} 
              removeItem={handleRemove}
            />
          )}
        />
    </View>
  );
        }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90
  },
});
