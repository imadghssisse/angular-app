// This reducer to manage the user state
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { totalSearch, setUsers } from './user.actions';

// type state user
export interface UserState {
    users: User[],
    user: User,
    totalCount: number | boolean
  }

// Initial state user
export const initialState: UserState = {
    users: [],
    user: {} as User,
    totalCount: false
};


// manage state change is state user
export const userReducer = createReducer(
    initialState,
    on(setUsers, (state, { data }) => ({
        ...state,
        users: [...data]
    })),
    on(totalSearch, (state, { totalCount }) => {        
        return {
            ...state,
            totalCount: totalCount
        }
    })
)