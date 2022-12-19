import { Button, Card, CardActions, CardContent, CardHeader, Grid, } from "@mui/material";

import React, { useState } from "react";

import './Home.css'


  
const Home = props => {
    let ls = ["ssds", `as
    as
    
    ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

    s
    
    s`, 'ss', 'a', `a    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
`, 'aaa']
    const [m, setM] = useState([])

    return <div >


        <Grid

            container
            sx={{ width: '70%', margin: '2em auto' }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start" >
            {ls.map((item, index) => <Grid key={index} xl={4}><Card variant={'elevation'} key={index} className="card">
                <CardHeader title='ss' />
                <CardContent>
                    {!m.includes(index) ? item.slice(0, 100) : item}
                </CardContent>
                {item.length > 200 && <CardActions>
                    <Button size={'small'} sx={{ width: '30%' }} onClick={() => {
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