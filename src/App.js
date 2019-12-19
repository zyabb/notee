import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarComponent from './sidebar/Sidebar';
import EditorComponent from './editor/Editor';
const firebase = require('firebase');
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({
          notes: notes
        });
      });
  }
  render() {
    return (
      <div className="app-container">
        <SidebarComponent></SidebarComponent>
        <EditorComponent></EditorComponent>
      </div>
    );
  }
}

export default App;
