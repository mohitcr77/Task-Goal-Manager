import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalInput from '../component/GoalInput';
import GoalItem from '../component/GoalItem'
import React from 'react'

const HomeScreen = ({ navigation }) => {

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
        <View style={styles.detailBtn}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        </View>
        <Button title='ADD NEW GOAL' color='#3c60e0' onPress={startAddGoalHandler} />
        <View>
          <Text style={styles.text} >Your Goals!!</Text>
        </View>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsConstainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={itemData.item.text} />
          }} />
        </View>
      </View>
    );
  
}

export default HomeScreen


  

  const styles = StyleSheet.create({
    appContainer: {
      backgroundColor: '#6297d4',
      flex: 10,
      paddingTop: 50,
      paddingHorizontal: 16
    },
  
    goalsConstainer: {
      flex: 9
    },
    text: {
      margin: 10,
      color: '#ffffff',
    },
    bottonNav: {
      flexDirection: 'row'
    },
    navButton: {
      width: '50%',
    },
    detailBtn: {
      margin: 10
    }
  
  });
  