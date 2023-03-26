import { Paper, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'


const VideoDetails = ({ video }) => {

//   const [allComments, setAllComments] = useState(JSON.parse(localStorage.getItem(`${id.videoId}`)));
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState("");
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const handleChange=event=>{
      setComment(event.target.value)
    }
    
    const handleSubmit=()=>{
        if(comment.length===0)return
        setAllComments(prev=>[...prev,comment])
        setComment("")
    }
    localStorage.setItem(video.id.videoId,JSON.stringify(allComments))
    console.log("from video Details =>",localStorage.getItem(`${video.id.videoId}`))
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "500px" }}>
        <iframe
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title}-{video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
      <Paper style={{ marginTop: "20px" }}>
        <Typography variant="h4">Comments</Typography>
        <TextField value={comment} style={{ width: "400px", fontSize: "100px" }} onChange={handleChange}/>
        <Button
          variant="contained"
          style={{
            position: "relative",
            top: "10px",
            left: "50px",
            width: "100px",
          }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Paper>
      <Paper  style={{margin:"50px auto"}}>
        {allComments.map(comment=><Typography key={uuidv4()} variant="h4" style={{borderRadius:"10px",paddingBottom:"25px"}}> <h2>Utilisateur YouTube:</h2> {comment} </Typography>)}

      </Paper>

    </React.Fragment>
  );
};

export default VideoDetails;
