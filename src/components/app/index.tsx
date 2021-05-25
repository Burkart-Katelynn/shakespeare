import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../actions/reviews";
import { PageHeader, Spin } from "antd";
import { selectReviewsLoading } from "../../reducers";
import Reviews from "../reviews";
import "./index.cssmodule.scss";

const App = () => {
  const dispatch = useDispatch();
  const reviewsLoading = useSelector(selectReviewsLoading);

  useEffect(() => {
    dispatch(getReviews());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app">
      <PageHeader className="header" title="2B || !2B" subTitle="reviews" />
      {reviewsLoading ? (
        <div className="loading">
          <Spin size="large" />
        </div>
      ) : (
        <Reviews />
      )}
    </div>
  );
};

export default App;
