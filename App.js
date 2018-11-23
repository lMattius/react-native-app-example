import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import InputNotes from './components/InputNotes'
import ListItems from './components/ListItems'
import {connect} from 'react-redux'
import {saveUserInput, addNote, openAddMenu, deleteNote, filterNotes} from './store/actions/index'


class App extends Component {

  // constructor(props){

  //   super(props);

  

  // }

  handleUserInput = (value) => {

    // this.setState({
    //   userInput:value,
    // });

    this.props.saveUserInput(value);

   }

  handleAddNotes = () => {

    // if(this.state.userInput.trim() !== ""){

    //   const content = [...this.state.content,{ 
    //     key: Math.random(),
    //     value:this.state.userInput,
    //     }];

    //   this.setState({
    //     content,
    //     userInput:"",
    //   })

    // }

    this.props.addNote();



  }

  openAddNote = () =>{

    // this.setState({
    //   openModal:!this.state.openModal,
    // });

    this.props.openAddNote();

  }

  handleEraseNote = (key) =>{

    // this.setState({
    //   content:this.state.content.filter(note => note.key !== key)
    // });

    this.props.deleteNote(key);

  }

  FilterNotes = (text) => {

    // this.setState({
    //   content:this.content
    // })

    this.props.filterNotes();


  }

            // <Button title="menu" 
            // style={styles.searchbar}
            // onPress={null}/>

  render() {

    let AddContent = null;
    let filteredContent = [];

    if(this.props.openModal){

      AddContent = <InputNotes 
                    handleClose={this.openAddNote}
                    onChangeText={this.handleUserInput} 
                    value={this.props.userInput}
                    onPress={this.handleAddNotes}/>

    }

    filteredContent = this.props.content.filter(note => note.value.toLowerCase().includes(this.props.userInput.toLowerCase()));

    return (
      <View style={styles.container}>

        <View style={styles.header}> 

          {AddContent}


            <TextInput placeholder="search your note" onChangeText={this.handleUserInput}/>

            <Button title="Add" onPress={this.openAddNote} style={styles.Button}/>

        </View>

        <View style={styles.List}>

          <FlatList
          data={filteredContent}
          renderItem={(content)=>(
            <ListItems 
            title={content.item.value}
            key={content.item.key}
            onPress={this.handleEraseNote.bind(this,content.item.key)}/>)}/>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:45,
    // alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  header:{
    flexDirection: "row", 
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchbar:{
    width: "70%",
  },
  List:{
    width: "100%",
  },
  Button:{
    width:"30%"
  }

});

const mapStateToProps = (state) => {

      return {
              openModal:state.notes.openModal,
              content:state.notes.content,
              userInput: state.notes.userInput
            };

}



export default connect(mapStateToProps,{saveUserInput, addNote, openAddMenu, deleteNote, filterNotes})(App);


