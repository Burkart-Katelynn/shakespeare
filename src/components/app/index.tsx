import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../actions/reviews";
import Review from "../../models/interfaces/review";
import { selectReviews, selectReviewsLoading } from "../../reducers";
import styles from "./index.cssmodule.scss";

const App = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const reviewsLoading = useSelector(selectReviewsLoading);

  useEffect(() => {
    dispatch(getReviews());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderReviews = (reviews: Review[]) => {
    if (reviews.length === 0) return <p>No reviews.</p>;

    return (
      <div>
        {reviews.map((review) => (
          <p key={review.id}>{review.author}</p>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.app}>
      {reviewsLoading ? <h1>Loading...</h1> : renderReviews(reviews)}
    </div>
  );
};

export default App;
