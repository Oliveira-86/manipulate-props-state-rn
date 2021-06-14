import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Input = (props) => {
    const [entreValue, setEntreValue] = useState('');

    const inputHandler = (enteredText) => {
        setEntreValue(enteredText)
    }

    const addToList = () => {
        props.addToList(entreValue);
        setEntreValue('');
    } 

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.containerInput}
                    placeholder="Add To List"
                    value={entreValue}
                    onChangeText={inputHandler}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'blue' }]}
                        onPress={addToList}
                    >
                        <Text style={styles.text}>
                            ADD
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'red' }]}
                        onPress={props.onCancel}
                    >
                        <Text style={styles.text}>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerInput: {
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        borderColor: "#989292",
        padding: 10,
        width: '80%'
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8
    },

    button: {
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 2
    },

    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})
