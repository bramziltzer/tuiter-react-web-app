import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "logos/nasaicon.jpeg"
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        tuitLikeToggle(state, action) {
            console.log("clicked")
            const tuit = state.find(tuit => tuit._id === action.payload._id);
            if(tuit.liked) { // change likes number
                tuit.likes = tuit.likes - 1
            } else {
                tuit.likes = tuit.likes + 1
            }
            tuit.liked = !tuit.liked; // change liked status
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit =>
                    tuit._id === action.payload);
            console.log(index)
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {
    createTuit,
    deleteTuit,
    tuitLikeToggle
} = tuitsSlice.actions

export default tuitsSlice.reducer;