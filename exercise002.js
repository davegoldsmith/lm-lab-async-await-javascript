import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const cats = "https://api.thecatapi.com/v1/images/search?limit=10";
const bbc = "https://bbc.co.uk"

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);

// Task 1 : implement fetchData with async/await
const asyncFetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch(error) {
    console.log(`Error occurred: ${error}`);
  }
};

asyncFetchData(bbc);