import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "logos/nasaicon.jpeg"
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "replies": 0,
    "retuits": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
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
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
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
        // tuitLikeToggle(state, action) {
        //     console.log("clicked")
        //     const tuit = state.find(tuit => tuit._id === action.payload._id);
        //     if(tuit.liked) { // change likes number
        //         tuit.likes = tuit.likes - 1
        //     } else {
        //         tuit.likes = tuit.likes + 1
        //     }
        //     tuit.liked = !tuit.liked; // change liked status
        // },
        // deleteTuit(state, action) {
        //     const index = state.findIndex(tuit =>
        //             tuit._id === action.payload);
        //     console.log(index)
        //     state.splice(index, 1);
        // },
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // }
    }
});

export const {
    createTuit,
    deleteTuit,
    tuitLikeToggle
} = tuitsSlice.actions

export default tuitsSlice.reducer;