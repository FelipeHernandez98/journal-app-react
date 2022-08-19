import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import React from 'react'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({ note }) => {

    const dispatch = useDispatch();
    const onClickNote = ()=>{
        dispatch( setActiveNote({ ...note }))
    }

    const newTitle = useMemo( () =>{
        return note.title.length > 17
            ? note.title.substring(0, 17) + '...'
            : note.title;
    });

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onClickNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container> 
                    <ListItemText
                        primary={newTitle}
                    />
                    <ListItemText
                        secondary={note.body}
                    />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
