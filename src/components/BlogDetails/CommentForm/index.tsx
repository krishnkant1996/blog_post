import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Theme,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addComment, replyComment } from "../../../app/Slices/blog";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
interface commentFormProps {
  isReply?: boolean;
  handleCancel?: any;
  commentId?: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  commentTitle: {
    textAlign: "left",
    fontWeight: 900,
    color: "#383232e8",
    fontSize: 18,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
  },
  textArea: {
    minHeight: 100,
    border: "1px solid #949494",
    fontSize: 15,
    color: "#212121",
    width: "100%",
  },
  rootCard: {
    minWidth: 275,
  },
  button: {
    display: "flex",
  },
}));

export default function CommentForm({
  isReply = false,
  handleCancel,
  commentId,
}: commentFormProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    comment: "",
    commentId: uuidv4(),
    date: new Date().toString(),
  });
  const { blogId } = useParams<{ blogId: string }>();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          {!isReply && (
            <Grid item xs={12}>
              <Typography
                component={"h5"}
                variant={"h5"}
                className={classes.commentTitle}
              >
                {"Add a comment"}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={"Name"}
              fullWidth
              variant="outlined"
              value={state.name}
              onChange={(e) =>
                setState((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              className={classes.textArea}
              aria-label="maximum height"
              placeholder={isReply ? "Reply" : "Comments"}
              value={state.comment}
              onChange={(e) =>
                setState((prev) => {
                  return {
                    ...prev,
                    comment: e.target.value,
                  };
                })
              }
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => {
                if (isReply) {
                  dispatch(
                    replyComment({
                      ...state,
                      blogId,
                      parentCommentId: commentId,
                    })
                  );
                } else {
                  dispatch(addComment({ ...state, blogId }));
                }
                setState({
                  name: "",
                  comment: "",
                  commentId: uuidv4(),
                  date: new Date().toString(),
                });
                handleCancel?.();
              }}
              disabled={!state.name || !state.comment}
              color="primary"
            >
              {isReply ? "Reply" : "Submit"}
            </Button>
            {isReply && (
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleCancel}
              >
                {"Cancel"}
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
