import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../actions/reviews";
import { selectReviewsLoading } from "../../reducers";
import Reviews from "../reviews";
import styles from "./index.cssmodule.scss";

const App = () => {
  const dispatch = useDispatch();
  const reviewsLoading = useSelector(selectReviewsLoading);

  useEffect(() => {
    dispatch(getReviews());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.app}>
      {reviewsLoading ? <h1>Loading...</h1> : <Reviews />}
    </div>
  );
};

export default App;
