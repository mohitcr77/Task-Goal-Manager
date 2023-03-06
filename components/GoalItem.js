import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = (props) => {

    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#500000' }}
                onPress={props.onDeleteItem.bind(this, props.id)} > 
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#1561be',
        color: 'white'
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
})