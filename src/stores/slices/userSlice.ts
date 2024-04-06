import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUserData } from '../../interfaces/auth.interface'

const initialState: IUserData = {
  id: 0,
  email: '',
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IUserData>) => {
      state = action.payload
    },
    setUsername: (state, action: PayloadAction<IUserData>) => {
      console.log(action.payload);
      state.username = action.payload.username
    },
  },
})

// Action creators are generated for each case reducer function
export const { setData, setUsername  } = userSlice.actions

export default userSlice.reducer
