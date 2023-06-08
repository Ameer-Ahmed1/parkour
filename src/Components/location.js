const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

export default currentPos = navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback
);

// console.log(currentPos);

const id = navigator.geolocation.watchPosition(successCallback, errorCallback);
