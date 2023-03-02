import { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Button, ScrollView, FlatList,} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
      ]);

      endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer} >
      <Button title='ADD NEW GOAL'  color='#3c60e0' onPress={startAddGoalHandler} />
      <View>
        <Text style={styles.text} >Your Goals!!</Text>
      </View>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsConstainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={itemData.item.text} />
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor:'#6297d4',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsConstainer: {
    flex: 5
  },
  text:{
    margin: 10,
    color: '#ffffff',

  }

});
