/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch("/")
  .then((response) => {
    console.log("response object ", response);
    console.log("response status ", response.status);

    return response.text();
  })
  .then((responseData) => console.log("response data ", responseData));

const landingPage = async () => {
  const response = await fetch("/");
  const data = await response.text();
  console.log("async await data ", data);
};

landingPage()

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

/* =================== 3. Print the Content-Type Header =================== */

// Your code here

/* ============== 4. Print the body of the response as text =============== */

// Your code here
