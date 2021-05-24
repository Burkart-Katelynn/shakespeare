import { actionCreatorFactory } from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import Review from "../models/interfaces/review";
import { ReviewsService } from "../services/reviews";

// Action creators
const create = actionCreatorFactory("APPOINTMENTS");

const createAsync = asyncFactory(create);

export const getReviews = createAsync<void, Review[]>(
  "GET_REVIEWS",
  async () => {
    try {
      return await ReviewsService.fetchReviews();
    } catch (e) {
      throw e;
    }
  }
);
