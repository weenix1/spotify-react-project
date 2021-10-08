export const fetchData = async (baseUrl) => {
  try {
    let response = await fetch(baseUrl);
    if (response.ok) {
      let data = await response.json();
      //   console.log(data)
      return data;
      // how can I use setData from here?
      // are there any other ways?
    } else {
      console.log("an error happened with the request :(");
    }
  } catch (error) {
    console.log(error);
  }
};
