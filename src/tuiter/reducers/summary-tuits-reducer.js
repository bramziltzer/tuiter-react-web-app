import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/summary-tuits.json';

const summaryTuitsSlice = createSlice({
    name: 'summary-tuits',
    initialState: tuits
});

export default summaryTuitsSlice.reducer;