// Function to fetch data using Promise
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Function to create table using Promise
function createTableWithPromise() {
  fetchDataWithPromise()
    .then((data) => {
      const tablePromise = $("#tablePromise").DataTable({
        data: data,
        columns: Object.keys(data[0]).map((key) => ({ data: key })),
      });
    })
    .catch((error) => console.error(error));
}

// Function to fetch data using Async/Await
async function fetchDataWithAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Function to create table using Async/Await
async function createTableWithAsyncAwait() {
  try {
    const data = await fetchDataWithAsyncAwait();
    const tableAsyncAwait = $("#tableAsyncAwait").DataTable({
      data: data,
      columns: Object.keys(data[0]).map((key) => ({ data: key })),
    });
  } catch (error) {
    console.error(error);
  }
}

// Call functions to create tables
createTableWithPromise();
createTableWithAsyncAwait();
