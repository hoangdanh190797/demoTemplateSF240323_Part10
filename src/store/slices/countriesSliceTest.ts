import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { RootState } from '../store';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface PostsState {
//   posts: Post[];
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: PostsState = {
//   posts: [],
//   status: 'idle',
//   error: null,
// };

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
//   return response.data;
// });

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.posts = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message ?? 'Something went wrong';
//       });
//   },
// });

// export const selectPosts = (state: RootState) => state.posts.posts;
// export const selectPostsStatus = (state: RootState) => state.posts.status;
// export const selectPostsError = (state: RootState) => state.posts.error;

// export default postsSlice.reducer;