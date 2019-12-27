import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebaritem/SidebarItem';

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button className={classes.newNoteBtn} onClick={this.newNoteBtnClick}>
            {this.state.addingNote ? 'Cancel' : 'New Note'}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter note title"
                onKeyUp={e => this.updateTitle(e.target.value)}
              ></input>
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItem
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                    classes={this.props.classes}
                  ></SidebarItem>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div>Add a note?</div>;
    }
  }
  selectNote = (note, index) => {
    this.props.selectNote(note, index);
  };
  deleteNote = note => {
    console.log('deleteing');
    this.props.deleteNote(note);
  };
  updateTitle = text => {
    this.setState({ title: text });
  };
  newNoteBtnClick = () => {
    console.log('clicked');
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };
  newNote = () => {
    // this.props.newNote(this.state.title);
    console.log('newNote clicked');
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };
}

export default withStyles(styles)(SidebarComponent);
