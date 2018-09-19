
export default function (url = ``, myMethod = 'GET', data = {}) {
  let myHeaders = new Headers();
  let init = {
      method: myMethod,
      headers: myHeaders,
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
  };
  if (myMethod === 'POST' || myMethod === 'PUT') {
    myHeaders.append('Content-Type', 'application/json');
    init.body = JSON.stringify(data);
  }
  return fetch(url, init)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else throw new Error('Network response was not ok.')
    })
    .catch(error => console.error(error));
};
