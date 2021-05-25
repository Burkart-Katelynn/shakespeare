import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Review from "../../models/interfaces/review";
import { selectReviews } from "../../reducers";
import styles from "./index.cssmodule.scss";
import ReviewCard from "./review-card";

const Reviews: FunctionComponent = () => {
  const reviews = useSelector(selectReviews);

  const renderReviews = (reviews: Review[]) => {
    if (reviews.length === 0) return <p>No reviews.</p>;

    return (
      <div>
        {reviews.map((review) => (
          <ReviewCard
            id={review.id}
            publish_date={review.publish_date}
            author={review.author}
            rating={review.rating}
            body={review.body}
          />
        ))}
      </div>
    );
  };

  return <div className={styles.reviews}>{renderReviews(reviews)}</div>;
};

export default Reviews;
