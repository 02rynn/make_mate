import { configureStore , createSlice} from '@reduxjs/toolkit'


let loginId = createSlice({
    name:'loginId',
    initialState:'',
    reducers : {
        //1. 추가
        setLoginId(state, action) {
          //  state.name = action.payload;
            return action.payload;
        },
        //2. 삭제
        removeLoginId(state, action) {  
           // state.name = '';
            return '';
        }
    }
})

export default configureStore({
  reducer: {
    loginId : loginId.reducer
  },
})

export let {setLoginId, removeLoginId} = loginId.actions;