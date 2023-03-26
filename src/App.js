import React, { useState,useEffect } from 'react'
import { Grid } from '@mui/material'
import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails'
import VideoList from './components/VideoList'
import './App.css';
import axios from 'axios'



const App = () => {
    const [state,setState] =useState({
        videos:[],
        selected:null
    })
    useEffect(async()=>{
        const response=await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBa2Sn__TGdniOXwxGSjGAT6cw1YqQtXfY&maxResults=50&part=snippet&type=video&q=lwiza`)
        setState({videos:response.data.items,selected:response.data.items[0]})
        
    },[])
    const handleSelect=(video)=>{
        setState(prev=>({...prev,selected:video}))
    }
    const handleSubmit= async(Term)=>{
        const response=await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBa2Sn__TGdniOXwxGSjGAT6cw1YqQtXfY&maxResults=50&part=snippet&type=video&q=${Term}`)
        setState({videos:response.data.items,selected:response.data.items[0]})
        console.log(response.data.items)
    }
    console.log("From App =>",state.selected)
      return (
    <Grid container spacing={10}>
        <Grid item xs={11} >
            <Grid container spacing={10 }>
                <Grid item xs={12}>
                    {/* SearchBar */}
                    <SearchBar handleOnformSubmit={handleSubmit}/>

                </Grid>
                <Grid item xs={8}>
                    {/* Video Details */}
                    <VideoDetails video={state.selected} id={state.selected} />
                </Grid>
                <Grid item xs={4}>
                    {/* Video List */}
                    <VideoList videos={state.videos} handleSelect={handleSelect} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default App
