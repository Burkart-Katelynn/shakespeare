import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import Review from "../../models/interfaces/review";
import { selectReviews } from "../../reducers";
import "./index.cssmodule.scss";
import ReviewCard from "./review-card";

const Reviews: FunctionComponent = () => {
  const reviews = useSelector(selectReviews);
  const pageSize = 10;
  const [reviewsCount, setReviewsCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [minIndex, setMinIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState<number>(pageSize);

  useEffect(() => {
    setReviewsCount(reviews.length);
  }, [reviews]);

  const renderReviews = (reviews: Review[]) => {
    if (reviews.length === 0)
      return <div className="noReviews">No reviews.</div>;

    return (
      <div>
        {reviews.map((review, index) =>
          index >= minIndex && index < maxIndex ? (
            <ReviewCard
              key={review.id}
              id={review.id}
              publish_date={review.publish_date}
              author={review.author}
              rating={review.rating}
              body={review.body}
            />
          ) : null
        )}
      </div>
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="reviews">
      <div className="reviewList">{renderReviews(reviews)}</div>
      <div className="pagination">
        <Pagination
          pageSize={pageSize}
          current={currentPage}
          total={reviewsCount}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Reviews;
