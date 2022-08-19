import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { useDispatch, useSelector } from 'react-redux'
import { NothingSelectedView } from "../views/NothingSelectedView"


export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal )

  const dispathc = useDispatch();

  const onClickNewNote = ()=>{
     dispathc( startNewNote() );
  }

  return (

    <JournalLayout>

        {
          (!!active)
          ? <NoteView /> 
          : <NothingSelectedView />
        }
        

        <IconButton
          disabled={ isSaving }
          onClick={ onClickNewNote }
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined />
        </IconButton>
    </JournalLayout>
  )
}
