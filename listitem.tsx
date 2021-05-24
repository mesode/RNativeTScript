import React, { FC } from 'react';
import { Fruit } from './data';
import { View, Text, StyleSheet } from 'react-native';

const Item: FC<Fruit> = (props) => {
    return (
        <View style = {styles.container}>
            <View 
                style = {{ 
                ...styles.listItem, 
                alignItems: 'flex-start',
                }}
            >
                <Text>{props.name}</Text>
            </View>
            <View style={{...styles.listItem, alignItems: 'flex-end'}}>
                <Text>{props.price}</Text>
            </View>
        </View>
    )
}
export default Item;

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 10,
    },
    listItem: {
        flex: 0.5,
        justifyContent: 'center',
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16,
    },
});