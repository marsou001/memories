import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import memories from './images/memories.png';
import { getPosts } from './actions/posts';

function App() {
    const [currentId, setCurrentId] = useState(null);
    const [, setRefresh] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('resize', () => setRefresh(prevState => !prevState));
    }, []);

    return (
        <Container maxWidth='lg' justify='center'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant={window.innerWidth < 500 ? 'h4' : 'h2'} align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-around' alignItems='stretch' spacing={3}>
                        <Grid className={classes.grid} item xs={12} sm={9} md={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid className={classes.grid}item xs={12} sm={9} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;