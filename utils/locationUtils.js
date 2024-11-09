const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(new Error("Unable to retrieve location."));
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

const fillLocation = async ({
  streetSetter,
  areaSetter,
  citySetter,
  pinCodeSetter,
  latSetter,
  longSetter,
}) => {
  const { latitude, longitude } = await getLocation();
  const { street, area, city, pinCode } = await reverseGeocode(
    latitude,
    longitude
  );
  streetSetter(street);
  areaSetter(area);
  citySetter(city);
  pinCodeSetter(pinCode);
  latSetter(latitude);
  longSetter(longitude);
};

const reverseGeocode = async (latitude, longitude) => {
  // !todo reverse geocode

  await new Promise((resolve) => setTimeout(resolve, 1000));

  let street, area, city, pinCode;
  street = city = area = "dash test";
  pinCode = 1234;

  return { street, area, city, pinCode };
};

export { getLocation, reverseGeocode, fillLocation };
