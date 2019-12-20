import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/SidebarItem';

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
            <Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
              Submit Note
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
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
    // this.setState({ title: null, addingNote: false });
  };
}

export default withStyles(styles)(SidebarComponent);
