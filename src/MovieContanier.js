import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import API from "../src/utils/API"
// import axios from 'axios';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';


class MovieContanier extends Component {
    state={
        search: '',
        results: [],
        selectedResulttId: null, 

    }

    handleInputChange = event => {
        this.setState({search: event.target.value})
        // const value = event.target.value;
        // const name = event.target.name;
        // this.setState({
        //     [name]: value
        // });
    };

  
    handleInputSubmit = (event) => {
        event.preventDefault();
        API.search(this.state.search).then(response => {
           
            console.log(response.data.results);
            this.setState({results: response.data.results, search: ''})

        })
        
    };
    
    viewMovie =(id) => {
     this.setState({selectedResulttId: id});
     console.log(id)
     const url = "https://www.themoviedb.org/movie/" + id
     window.location.href = url
    }

    render() {
        
        const results = this.state.results.map(result =>{
            return <Cards 
            key={result.id}
            title ={result.title} 
            overview ={result.overview}
            image ={"https://image.tmdb.org/t/p/w300" + result.poster_path}
            clicked={() => this.viewMovie (result.id)}
            id={this.state.selectedResulttId}/>
        })
        return (

            <Grid>
                <Header />
                <Grid item xs={12} style={{marginBottom:'15px'}}>

                    <Form
                        value={this.state.userInput}
                        handleInputChange={this.handleInputChange}
                        handleInputSubmit={this.handleInputSubmit} />
                </Grid>
                <Grid item xs={12} style={{padding:"16px"}}>

                    {results}
                </Grid>
            </Grid>

        )
    }
}

export default MovieContanier
