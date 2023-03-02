import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image, Text } from 'react-native'
import axios from 'axios';

const GoalInput = (props) => {

    
    let url = 'https://reactnative.dev/movies.json'
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [apiData, setApiData] = useState([]);


    

    const fetchData = async () => {
        axios.get(url).then((response) => {
            setApiData(response.data.movies);
        });
    };

    function goalsInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function onAddGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }



    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.InputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput value={enteredGoalText}
                    onChangeText={goalsInputHandler}
                    style={styles.textInput}
                    placeholder="Enter Your Goal!" />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={onAddGoalHandler} title="Add Goal" color='#0bb6e1' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='red' />
                    </View>
                </View>
                <View style={{margin: 15}}>
                <Button title='Get Data' onPress={fetchData} />                    
                </View>
                <View>{apiData.map((item) => 
                    <Text> {item.title} </Text>)
                }</View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#389dc5'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        marginRight: 8,
        padding: 8,
        color: '#000000',
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 25,
    },
    button: {
        width: '30%',
        marginHorizontal: 5
    },
    image: {
        height: 200,
        width: 200,
        margin: 25
    }
})
