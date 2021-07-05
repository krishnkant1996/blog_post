import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import CommentForm from "../CommentForm";
interface initStylesProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  paddingComment: number;
}
interface commentProps {
  comment: any;
  parentId?: string;
  paddingComment?: number;
}
const initStyles = (props: initStylesProps) => {
  return makeStyles(() => ({
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
      background: "#f3f6ff",
      padding: 10,
      margin: 10,
      marginLeft: 10 * props?.paddingComment,
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
    cardHeader: {
      textAlign: "left",
    },
    content: {
      display: "flex",
    },
    cardTitle: {
      color: "#5c5fe3",
    },
  })); // returns a hook
};

export default function Comment({
  comment,
  parentId,
  paddingComment = 1,
}: commentProps) {
  const useStyles = initStyles({ paddingComment });
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const nestedComments = (comment?.children || []).map((comment: any) => {
    if (parentId) {
      paddingComment++;
    } else {
      paddingComment = 1;
    }
    return (
      <Comment
        key={comment.id}
        comment={comment}
        parentId={comment?.commentId}
        paddingComment={paddingComment}
      />
    );
  });
  const options: object = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(comment.date).toLocaleTimeString("en-US", options);
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Grid item xs={12}>
      <Card className={parentId ? classes.rootNestedCard : classes.rootCard}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar aria-label="recipe">
              {comment.name.toString()?.[0]?.toUpperCase()}
            </Avatar>
          }
          title={
            <Typography className={classes.cardTitle}>
              {capitalizeFirstLetter(comment.name)}
            </Typography>
          }
          subheader={date}
        />
        <CardContent>
          <Typography className={classes.content} component="p">
            {comment.comment}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={() => setOpen(true)}>
            Reply
          </Button>
        </CardActions>
        {isOpen && (
          <CommentForm
            isReply
            handleCancel={() => setOpen(false)}
            commentId={comment.commentId}
          />
        )}
      </Card>

      {comment?.children?.length > 0 && nestedComments}
    </Grid>
  );
}
