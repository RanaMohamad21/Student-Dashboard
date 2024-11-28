import { createSlice} from '@reduxjs/toolkit';

interface AuthenticationState {
    value: boolean;
}

const initialState: AuthenticationState = {
    value: false,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers:{
        login(state){
            state.value = true;
        },
        logout(state){
            state.value = false;
        }
    }
});

export const {login,logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;


