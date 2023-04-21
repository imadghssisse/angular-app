// file actions to manage user
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


// This action to get all users
export const setUsers = createAction(
  'FIND_ALL_USERS',
  props<{ data: User[] }>()
);

// This action to get total search users
export const totalSearch = createAction(
  'TOTAL_SEARCH',
  props<{ totalCount: number }>()
)