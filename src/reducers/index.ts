/*
 * Combine all available reducers to a single root reducer.
 */
import { combineReducers } from "redux";

/* Import here each of the reducers */
import Reviews, * as fromReviews from "./reviews";

export interface RootState {
  Reviews: fromReviews.State;
}

const reducers = {
  Reviews,
};

const combined = combineReducers<RootState>(reducers);

export default combined;

// Reviews
export const selectReviews = (state: RootState) =>
  fromReviews.selectReviews(state.Reviews);
export const selectReviewsLoading = (state: RootState) =>
  fromReviews.selectReviewsLoading(state.Reviews);
