// A react native typescript app
// that displays a list of fruits and their prices
// the user can add a fruit and its price to the list,
// can search for a particular fruit type

import React from 'react'; 
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => { //FC here indicates that it is a functional component
    return (
        <View>
            <View>
                <Ionicons name={props.icon} size={22} color="#555" />
            </View>
            <View>
                <TextInput 
                placeholderTextColor="#555" 
                placeholder={props.placeholder} 
                onChangeText={props.onChangeText} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})