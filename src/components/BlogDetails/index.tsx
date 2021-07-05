import React, { useMemo } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { selectPost } from "../../app/Slices/blog";
import { useAppSelector } from "../../app/hooks";
const useStyles = makeStyles((theme:Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
  },
  title: {
    textAlign: "left",
    fontWeight: 900,
    color: "#383232e8",
    fontSize: 20,
  },
  content: {
    display: "flex",
  },
  commentTitle: {
    textAlign: "left",
    fontWeight: 900,
    color: "#383232e8",
    fontSize: 18,
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
  rootNestedCard: {
    minWidth: 275,
    background: " #d8d8ea",
    padding: 10,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titleCard: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    display: "flex",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const { blogId } = useParams<{ blogId: string }>();
  const posts = useAppSelector(selectPost);
  const blog = useMemo(() => {
    const newPost =
      posts.find((element: any) => element?.blogId === blogId) || {};
    return newPost;
  }, [blogId, posts]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              component={"h5"}
              variant={"h5"}
            >
              {blog?.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.content} component={"p"}>
              {blog?.content}
            </Typography>
          </Grid>
          <CommentForm />
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {blog?.comments?.map((comment: any) => {
                return <Comment comment={comment} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
