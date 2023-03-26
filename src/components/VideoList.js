import React from 'react'
import {Grid } from '@mui/material'
import VideoItem from './VideoItem'

const VideoList = ({videos,handleSelect}) => {
    const arrayOfItem=videos.map((video,id)=><VideoItem handleSelect={handleSelect} key={id} video={video}/>)
    
  return (
    <Grid container spacing={10}>
        {arrayOfItem}

    </Grid>
  )
  
}

export default VideoList
