import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableHighlight} from 'react-native'


const ListItems = (props) => {

	return (

	<View style={styles.container}>

		<TouchableHighlight onPress={props.onPress} style = {styles.listItems}>

			<Text>{props.title}</Text>

		</TouchableHighlight>

	</View>
		);



}

const styles = StyleSheet.create({
	container:{
		marginTop: 20,
	},
	listItems:{
		width:"100%",
		backgroundColor: "#eee",
		padding: 10,
		marginBottom: 5,
	}
})


export default ListItems;