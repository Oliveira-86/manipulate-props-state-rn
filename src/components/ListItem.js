import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.removeItem.bind(this, props.id)}
        >            
            <Text style={styles.text}>{props.title}</Text>            
        </TouchableOpacity>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 35,
        backgroundColor: '#F4EAEA',
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    text: {

    }
});
