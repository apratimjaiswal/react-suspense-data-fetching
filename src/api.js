const fetchColor = () => {
  return fetch("https://random-data-api.com/api/color/random_color")
    .then((res) => res.json())
    .then((res) => res);
};

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      else if (status === "error") throw result;
      else if (status === "success") return result;
    },
  };
};

export const fetchColorData = () => {
  return {
    color: wrapPromise(fetchColor()),
  };
};
