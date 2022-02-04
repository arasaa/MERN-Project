import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'


const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    //to not refresh the browser
    e.preventDefault();
    dispatch(createPost(postData))
  };

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root}${classes.form}`}
        onSubmit={handleSubmit}
      >
      <Typography variant="h6">creating a post</Typography>
      <TextField
        name="creator"
        variant="outlined"
        label="creator"
        fullwidth="true"
        value={postData.creator}
        onChange={(e) =>
          setPostData({ ...postData, creator: e.target.value })
        }
      />
       <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullwidth="true"
        value={postData.title}
        onChange={(e) =>
          setPostData({ ...postData, title: e.target.value })
        }
      />
       <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullwidth="true"
        value={postData.message}
        onChange={(e) =>
          setPostData({ ...postData, message: e.target.value })
        }
      />
       <TextField
        name="tags"
        variant="outlined"
        label="Tags"
        fullwidth="true"
        value={postData.tags}
        onChange={(e) =>
          setPostData({ ...postData, tags: e.target.value })
        }
      />
      <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
      </div>
      <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullwidth='true'>submit</Button>
      <Button variant='contained' color='secondary' size='small' type='submit' onClick={clear} fullwidth='true'>clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
