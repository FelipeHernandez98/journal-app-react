import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, creatingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = ()=>{
    return async(dispatch, getState ) => {
        
        dispatch( creatingNewNote() );
        
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ));
        await setDoc( newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote(newNote) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoadingNotes = () =>{
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const notes = await loadNotes(uid);

        dispatch( setNotes(notes))

    }
}

export const startSaveNote = () =>{
    return async( dispatch, getState ) => {

        dispatch( setSaving());

        const { uid } = getState().auth;
        const { active } = getState().journal;

        const noteFirestore = { ...active };
        delete noteFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ active.id }`);
        await setDoc( docRef, noteFirestore, { merge: true })

        dispatch( updateNote( active ) );

    }
}