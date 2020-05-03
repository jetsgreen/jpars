import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import Form from './components/Form/Form';
import VideoItems from './components/VideoItems/VideoItems';
import VideoDetails from './components/VideoDetails/VideoDetail';

class MovieContanier extends Component {
    handleSubmit= async (userInput) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAmDKuFgCXdea2kPgyZlO3hWWDzVE0-Z0o',
                q: userInput,
            }
        });
   
        
        console.log(response)
    }

    render() {
        return (
          
                <Grid justify ="center" container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <Form 
                               onFormSubmit={this.handleSubmit}/>
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetails/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoItems/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
        )
    }
}

export default MovieContanier
