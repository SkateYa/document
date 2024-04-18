import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
//第一个参数名字，你可以随便叫。
//第二个就是i具体的异步
export let changeNumThunk = createAsyncThunk('numSlice/changeMes', async (params) => {
    let res = await new Promise((resolve) => {
        console.log(params);
        setTimeout(() => {
            resolve(999);
        }, 1000)
    })
    return res;
})

let mesSlice = createSlice({
    name: "mesSlice",
    initialState: {
        mes: "hello"
    },
    reducers: {
        changeMes (state, action) {
            state.mes = action.payload
        }
    }
})
//异步的问题
let numSlice = createSlice({
    name: "numSlice",
    initialState: {
        num: 0
    },
    reducers: {
        addNum (state, action) {
            state.num += 1;
        }
    },
    extraReducers: (chunk) => {
        chunk
            .addCase(changeNumThunk.pending, () => {
                console.log("pending")
            })
            .addCase(changeNumThunk.fulfilled, (state, action) => {
                state.num = action.payload;
            })
    }
    // extraReducers: {
    //     [changeNumThunk.pending]: () => {

    //     },
    //     [changeNumThunk.fulfilled]: (state, action) => {
    //         state.num = action.payload;
    //     }
    // }
})

export let { changeMes } = mesSlice.actions;
export let { addNum } = numSlice.actions;
let store = configureStore({
    reducer: {
        mesReducer: mesSlice.reducer,
        numReducer: numSlice.reducer,
    }
})
export default store;