import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { set } from "idb-keyval";

export interface blogState {
  posts: any;
}

const initialState: blogState = {
  posts: [],
};

export const blogSlice = createSlice({
  name: "blogReducer",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      let posts = [...state.posts, action.payload];
      set("posts", JSON.stringify(posts));
      state.posts = posts;
    },
    setPosts: (state, action: PayloadAction<any>) => {
      let posts = action.payload;
      state.posts = posts;
    },
    addComment: (state, action: PayloadAction<any>) => {
      const posts = state.posts.map((post: any) => {
        if (post?.blogId.toString() === action.payload?.blogId.toString()) {
          const comments = post?.comments || [];
          post["comments"] = [
            ...comments,
            {
              name: action.payload?.name,
              comment: action.payload?.comment,
              commentId: action.payload?.commentId,
              date: action.payload?.date,
              children: [],
            },
          ];
        }
        return post;
      });
      set("posts", JSON.stringify(posts));
      state.posts = posts;
    },
    replyComment: (state, action) => {
      const { blogId, name, comment, commentId, date, parentCommentId } =
        action.payload;
      const posts = state.posts.map((post: any) => {
        if (post?.blogId.toString() === blogId.toString()) {
          const comments = (post.comments || []).map((prevComment: any) => {
            const findComment = (values: any, target: string) => {
              if (values.commentId === target) {
                const prevCommentChildren = values["children"] || [];
                values["children"] = [
                  ...prevCommentChildren,
                  { name, comment, commentId, date },
                ];
                return values;
              }
              const childernValues = values?.children || [];
              for (const child of childernValues) {
                const prevCommentValue: any = findComment(child, parentCommentId);
                if (prevCommentValue) {
                  return prevCommentValue;
                }
              }
            };
            findComment(prevComment, parentCommentId);
            return prevComment;
          });
          post["comments"] = comments;
        }
        return post;
      });
      set("posts", JSON.stringify(posts));
      state.posts = posts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, setPosts, addComment, replyComment } =
  blogSlice.actions;

export const selectPost = (state: RootState) => state.blogReducer.posts;

export default blogSlice.reducer;
