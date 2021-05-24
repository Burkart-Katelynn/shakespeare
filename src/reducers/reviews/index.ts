import { reducerWithInitialState } from "typescript-fsa-reducers";
import { getReviews } from "../../actions/reviews";
import Review from "../../models/interfaces/review";

export interface State {
  reviews: Review[];
  reviewsLoading: number;
}

export const INITIAL_STATE: State = {
  reviews: [],
  reviewsLoading: 0,
};

const Reviews = reducerWithInitialState(INITIAL_STATE);

// getReviews
Reviews.case(getReviews.async.started, (state: State) => ({
  ...state,
  reviewsLoading: state.reviewsLoading + 1,
}));

Reviews.case(getReviews.async.done, (state: State, { result }) => ({
  ...state,
  reviews: result,
  reviewsLoading: state.reviewsLoading - 1,
}));

Reviews.case(getReviews.async.failed, (state: State) => ({
  ...state,
  reviewsLoading: state.reviewsLoading - 1,
}));

// Selectors

export const selectReviews = (state: State) => state.reviews;
export const selectReviewsLoading = (state: State) => state.reviewsLoading > 0;

export default Reviews;
