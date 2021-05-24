const fetchReviews = async () => {
  const response = await fetch("https://shakespeare.podium.com/api/reviews", {
    method: "GET",
    headers: {
      "x-api-key": "H3TM28wjL8R4#HTnqk?c",
    },
  });

  const reviews = await response.json();

  return reviews;
};

export const ReviewsService = {
  fetchReviews,
};
