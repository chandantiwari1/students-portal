import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import "./noti.css";
import { Box } from '@mui/system'
import { Card, List, ListItem } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    
    </Box>
);



const Noti = () => {
   const [notice,setNotice]= useState([]);

   useEffect(()=>{
       const getNot = async ()=>{
           const res = await axios.get("/notifications");
           setNotice(res.data);

           
                  
       }
       getNot();
   },{})
    return (
        <Box sx={{ flexGrow: 1 }} mt={10} overflow="hidden">
            <Grid container spacing={2}>
                <Grid item xs="small">
                    <Item>

                        <List>
                            <ListItem>
                                <Card sx={{ minWidth: 100}}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {notice.map((p)=>{
                                                return `${p.title}`
                                            })}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                        </Typography>

                                        <Typography variant="body2">
                                            {notice.map((desc)=>{
                                                return `${desc.desc}`
                                            })}
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Notifications
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Today's college is off {bull} thanks to all {bull}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            aktu notifications
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Notifications
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Today's college is off {bull} thanks to all {bull}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            aktu notifications
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Notifications
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Today's college is off {bull} thanks to all {bull}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            aktu notifications
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Notifications
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Today's college is off {bull} thanks to all {bull}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            aktu notifications
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </ListItem>
                        </List>
                    </Item>
                </Grid>
                <Grid item  >
                    <Item color="inherit">this is the second grid items</Item>
                </Grid>
                <Grid item xs>
                    <Item>here the next items will go up</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Noti
