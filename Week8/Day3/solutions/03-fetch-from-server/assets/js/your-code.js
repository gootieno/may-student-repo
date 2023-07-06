export function getAllDogs() {
  // Your code here
  const url = "/dogs";
  // const headers = {"Content-Type": "Request body's Content-Type"};
  // Use the URLSearchParams API to format your body as shown below
  // const body = new URLSearchParams({
  //     key: "value"
  // });

  // const options = {
  //     method: "GET|POST|PUT|DELETE",
  //     headers: headers,
  //     body: body
  // };

  return fetch(url);
}

export function getDogNumberTwo() {
  // Your code here
  const url = "/dogs/2";

  return fetch(url);
}

export function postNewDog() {
  // Your code here
  const url = "/dogs";
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  //   Use the URLSearchParams API to format your body as shown below
  const body = new URLSearchParams({
    name: "Hachi Roku",
    age: 2,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  return fetch(url, options);
}

export function postNewDogV2(name, age) {
  // Your code here
  return fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ name, age }),
  });
}

export function deleteDog(id) {
  // Your code here
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: { AUTH: "ckyut5wau0000jyv5bsrud90y" },
  });
}
