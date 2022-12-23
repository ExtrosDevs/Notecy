import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextareaAutosize, TextField, Typography, } from "@mui/material";

import React, { useRef, useState } from "react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AttachmentIcon from '@mui/icons-material/Attachment';
import PhotoIcon from '@mui/icons-material/Photo';
import ShowMoreText from "react-show-more-text";
import './Home.css'



const Home = props => {
    const [ls, setLs] = useState([
        { title: 'My note', content: 'reedme is not a normal text file reedme is not a normal text file reedme is not a normal text file reedme is not a normal text file reedme is not a normal text file' },
        { title: 'My note', content: 'reedme is not a normal text file' },
        { title: 'My note', content: 'reedme is not a normal text file' },
    ])
    const [m, setM] = useState([])
    const [show, setShow] = useState(false)

    const [noteTitle, setNoteTitle] = useState()
    const [noteContent, setNoteContent] = useState()

    const note = useRef()
    const addNoteHandler = event => {
        event.preventDefault()

        setLs([...ls, { title: noteTitle, content: noteContent }])
    }
    const textAreaHandler = event => {
        setNoteContent(event.target.value)

    }

    return <div className="container" >
        <form onSubmit={addNoteHandler}>
            <Card className="note-editor" variant={'elevation'} >
                {show && <CardHeader sx={{ width: '20em' }} title={<TextField onChange={event => setNoteTitle(event.target.value)} sx={{ width: '100%' }} onFocus={() => setShow(true)} label='Title' variant={'filled'} />} />}
                <CardContent className="textarea">
                    <TextField label="Note" ref={note} multiline maxRows={4}  onInput={textAreaHandler} sx={{ width: '20em' }} onFocus={() => setShow(true)} variant={'filled'} />
                    {show && <Button sx={{ width: '100%' }} type={'submit'}>Add</Button>}
                </CardContent>
                {show && <CardActions>
                    <Button><ColorLensIcon /></Button>
                    <Button><AttachmentIcon /></Button>
                </CardActions>}
            </Card>

        </form>
        <Grid
            container
            sx={{ width: '80%', margin: '2em auto' }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start" >
            {ls.map((item, index) => <Grid key={index} xl={4}><Card variant={'elevation'} key={index} className="card">
                <CardHeader title={item.title} />
                <CardContent>
                    {/* <p className="test">{m.includes(index) ? item.content.slice(0, 100) + "..." : item.content}</p> */}
                    <ShowMoreText
                        lines={3}
                        more={<Button size={'small'} sx={{ width: '50%' }} >Show More</Button>}
                        less={<Button size={'small'} sx={{ width: '50%' }} >Show less</Button>}
                    >
                        {item.content}
                    </ShowMoreText>
                </CardContent>
          
            </Card></Grid>)}
        </Grid>


    </div>
}

export default Home