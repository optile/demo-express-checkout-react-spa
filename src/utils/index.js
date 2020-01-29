export const getQueryStringFromObject = parameters => {
    const queryString = parameters.reduce(
      (acc, current) =>
        `${acc}${encodeURIComponent(current.name)}=${encodeURIComponent(
          current.value
        )}&`,
      ""
    );
    return queryString.slice(0, -1);
  };
