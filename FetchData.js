
let state = {
  response: ''
}
const FetchData = () => {
  callApi()
    .then(res => {state.response = res.express})
    .catch(err => console.log(err));
   return state.response;
}
const callApi = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}


export default FetchData;