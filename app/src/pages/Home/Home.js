import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, } from "@mui/material";

import React, {useState } from "react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AttachmentIcon from '@mui/icons-material/Attachment';
import PhotoIcon from '@mui/icons-material/Photo';
import './Home.css'



const Home = props => {
    let ls = [
        { title: 'My note', content: 'reedme is not a normal text file reedme is not a normal text file reedme is not a normal text file reedme is not a normal text file reedme is not a normal text file' },
        { title: 'My note', content: 'reedme is not a normal text file' },
        { title: 'My note', content: 'reedme is not a normal text file' },
    ]
    const [m, setM] = useState([])
    const [show, setShow] = useState(false)





    return <div className="container" >
        <Card className="note-editor"  variant={'elevation'} >
            {show && <CardHeader  sx={{width:'20em'}} title={<TextField  sx={{width:'100%'}} onFocus={() => setShow(true)} label='Title' variant={'filled'} />} />}
            <CardContent className="textarea">
                <TextField multiline  sx={{width:'20em'}} rows={4} variant={'filled'} label='Note Content' onFocus={() => setShow(true)} />
            </CardContent>
            {show && <CardActions>
                <Button><ColorLensIcon /></Button>
                <Button><AttachmentIcon /></Button>
                <Button><PhotoIcon /></Button>
            </CardActions>}
        </Card>
        <Grid
            container
            sx={{ width: '80%', margin: '2em auto' }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start" >
            {ls.map((item, index) => <Grid key={index} xl={4}><Card variant={'elevation'} key={index} className="card">
                <CardHeader title={item.title} />
                <CardContent>
                    {!m.includes(index) ? item.content.slice(0, 100) : item.content}
                </CardContent>
                {item.content.length > 100 && <CardActions>
                    <Button size={'small'} sx={{ width: '50%' }} onClick={() => {
                        if (m.includes(index))
                            setM(m.filter(item => item !== index))
                        else
                            setM([...m, index])
                    }
                    }>learn more</Button>
                </CardActions>}
            </Card></Grid>)}
        </Grid>


    </div>
}

export default Home