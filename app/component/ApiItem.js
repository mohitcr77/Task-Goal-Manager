import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ApiItem = (props) => {
  return (
    <View style={styles.item}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default ApiItem

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#3b287e',
        padding: 20,
        margin: 10,
        
    },
    title: {
        fontSize: 32,
        color: '#389dc5'
    },
})