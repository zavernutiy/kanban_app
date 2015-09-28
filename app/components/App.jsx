//import uuid from 'node-uuid';
import AltContainer from 'alt/AltContainer';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
//import connect from '../decorators/connect';

export default class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //
    //    this.storeChanged = this.storeChanged.bind(this);
    //    this.state = NoteStore.getState();
    //}
    //componentDidMount() {
    //    NoteStore.listen(this.storeChanged);
    //}
    //componentWillUnmount() {
    //    NoteStore.unlisten(this.storeChanged);
    //}
    //storeChanged(state) {
    //    this.setState(state);
    //}
    render() {
        //const notes = this.props.notes;

        return (
            <div>
                <button className='add-note' onClick={this.addNote}>+</button>
                <AltContainer
                    stores={[NoteStore]}
                    inject={ {
                        items: () => NoteStore.getState().notes
                    } }
                >
                    <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
                </AltContainer>
            </div>
        );
    }
    addNote() {
        NoteActions.create({task: 'New task'});
    }
    editNote(id, task) {
        NoteActions.update({id, task});
    }
    deleteNote(id) {
        NoteActions.delete(id);
    }
}