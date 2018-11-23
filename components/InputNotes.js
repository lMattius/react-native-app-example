import React from 'react'
import {View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native'


const InputNotes = (props) =>{


	return(
		<Modal onRequestClose={props.handleClose} 
		animationType='fade'>

			<View style={styles.container}>
			
				<Text style={styles.Text}>Ingrese el nombre de la nota:</Text>
				<TextInput 
				placeholder="nombre de la nota" 
				style={styles.Input}
				onChangeText={props.onChangeText}
				value={props.value}/>

				<Button title="Submit" onPress={props.onPress}/>

			</View>
		</Modal>
		);



}

const styles = StyleSheet.create({

	container:{
		flex: 1,
		paddingLeft:60,
		paddingRight: 60,
		justifyContent:"center",


	},
	Text:{
		marginBottom:20,
		fontSize: 15,
		textAlign: "center",
		backgroundColor: "#009688",
		borderRadius: 7,

	},
	Input:{
		marginBottom:20,
		backgroundColor: "#009688",
		borderRadius: 7,
		color: "black",
	}



})


export default InputNotes;