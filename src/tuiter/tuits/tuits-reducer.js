import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk, createTuitThunk, deleteTuitThunk, updateTuitThunk}
  from "../../services/tuits-thunks";


const initialState = {
    tuits: [],
    loading: false
 }
 

// const currentUser = {
//     "userName": "Virgin Atlantic",
//     "handle": "@virgin",
//     "image": "/images/virgin-1.svg",
// };
   
// const templateTuit = {
// ...currentUser,
// "topic": "Space",
// "time": "2h",
// "liked": false,
// "replies": 0,
// "retuits": 0,
// "likes": 0,
// }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
  [createTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    state.tuits.push(payload)
},

  [deleteTuitThunk.fulfilled]:
  (state, { payload }) => {
  state.loading = false
  state.tuits = state.tuits
    .filter(t => t._id !== payload)
},

  [findTuitsThunk.pending]:
     (state) => {
        state.loading = true
        state.tuits = []
  },
  [findTuitsThunk.fulfilled]:
     (state, { payload }) => {
        state.loading = false
        state.tuits = payload
  },
  [findTuitsThunk.rejected]:
     (state, action) => {
        state.loading = false
        state.error = action.error
  },
  [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits
      .findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = {
      ...state.tuits[tuitNdx],
      ...payload
    }
  }

},

 reducers: {
    // toggleLike(state, action) {
    //     const post = state.find((post) => post._id === action.payload._id);
    //     if (post.liked) {
    //         post.likes -= 1;
    //     }
    //     else {
    //         post.likes += 1;
    //     }
    //     post.liked = !post.liked;
    // },
    // deleteTuit(state, action) {
    //     const index = state
    //        .findIndex(tuit =>
    //           tuit._id === action.payload);
    //     state.splice(index, 1);
    //   },   
    // createTuit(state, action) {
    //     state.unshift({
    //       ...action.payload,
    //       ...templateTuit,
    //       _id: (new Date()).getTime(),
    //     })
    //   }
   
  }
});

// export const {toggleLike, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;