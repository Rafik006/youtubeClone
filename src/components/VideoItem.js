import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'


const VideoItem = ({video,handleSelect}) => {
    console.log("From Video item=>",video.id.videoId)
  return (
    <Grid item xs={12}>
        <Paper style={{display:"flex", alignItems:"center" ,justifyContent:"center"}} onClick={()=>handleSelect(video)}>
            <img style={{marginRight:"20px", marginBottom:"10px"}} alt="thumbnails" src={video.snippet.thumbnails.medium.url}/>

        </Paper>
        <Paper>
            <Typography variant='subtitle1'>{video.snippet.title}</Typography>
            {/* <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography> */}
            <Typography  variant='subtitle1'><a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} target="_blank">{video.snippet.channelTitle}</a></Typography>
            
        </Paper>
    </Grid>
  )
}

export default VideoItem
