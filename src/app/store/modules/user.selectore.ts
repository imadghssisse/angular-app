// This file for manage select user to return state
import { createSelector } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { UserState } from './user.reducer';

// create select state from reducer
export const selectFeatureUsers = (state: any) => state.user;

// return select users from state user
export const selectUsers = createSelector(
  selectFeatureUsers,
  (state: UserState) => state.users
);

// return select search total from state user
export const selectTotalSearch = createSelector(
  selectFeatureUsers,
  (state: UserState) => state.totalCount
);