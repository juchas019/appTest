import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import List from './List'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav';

function App() {

        return ( <Fragment>
                <Router>
                <div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Nav/>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper><h1 style={{paddingTop: '30px'}}>Search</h1></Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper><h1>Filter</h1></Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper>
                            <Route path="/list" component={List}/>
                            {/*<Route path="/dashboard" component={Dashboard}/>*/}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper><h1>Footer</h1></Paper>
                        </Grid>

                    </Grid>
                </div>
            </Router>

            </Fragment>
        );
}

export default App;
