import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  DialogTitle,
  TextareaAutosize,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    display: "flex",
  },
  dialog: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 200,
      overflow:'hidden'
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
      overflow:'hidden'
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 500,
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: 500,
    },
  },
  textArea: {
    minHeight: 100,
    border: "1px solid #949494",
    marginTop: 16,
    fontSize: 15,
    color: "#212121",
    width: "100%",
  },
}));
interface BlogFormProps {
  handleAddPost: any;
  handleClose: any;
  open: boolean;
}

export default function BlogForm({
  handleAddPost,
  handleClose,
  open,
}: BlogFormProps) {
  const classes = useStyles();
  const [state, setState] = useState({
    title: "",
    blogId: uuidv4(),
    content: "",
    date: new Date().toLocaleDateString(),
  });
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent className={classes.dialog}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>Title</FormLabel>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              value={state.title}
              onChange={(e) =>
                setState((prev) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                })
              }
            />
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>Content</FormLabel>
            <TextareaAutosize
              className={classes.textArea}
              placeholder="Please enter content of post"
              value={state.content}
              onChange={(e) =>
                setState((prev) => {
                  return {
                    ...prev,
                    content: e.target.value,
                  };
                })
              }
            />
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>Date</FormLabel>
            <TextField id="date" fullWidth disabled value={state.date} />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleAddPost(state)}
            color="primary"
            disabled={!state.title || !state.content}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
