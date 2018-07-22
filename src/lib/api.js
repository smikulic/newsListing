import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const postHeaders = {
  'Accept': '*/*',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsIm5hbWUiOiJTaW5pc2EiLCJlbWFpbCI6InNpbmlzYW1pa3VsaWNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImVtYWlsX3ZlcmlmaWNhdGlvbl9jb2RlIjoiOTY0NzkyIiwicGFzc3dvcmQiOiIkMmEkMTAkbTlYVWhsQTNwVGxiZXdGM0hGaHl3dW14MUJlcUJlQ1RFTVVyOXlPT21uOXNWUTh4NmNJczYiLCJwZXJtaXNzaW9ucyI6bnVsbCwidGltZXpvbmUiOiJBbWVyaWNhL0xvc19BbmdlbGVzIiwiaXBfYWRkcmVzcyI6IjE4NC4xNi4xODMuMTQvMzIiLCJvcHRpb25zIjp7fSwibWV0YWRhdGEiOnt9LCJsYXN0X2xvZ2luIjoiMjAxOC0wNy0yMVQwMToxNToyOC4yMjJaIiwibGFzdF9hY3RpdmUiOiIyMDE4LTA3LTIxVDAxOjE1OjI4LjIyMloiLCJ1cGRhdGVkIjoiMjAxOC0wNy0yMVQwMToxNToyOC4yMjJaIiwiY3JlYXRlZCI6IjIwMTgtMDctMjFUMDE6MTU6MjguMjIyWiIsImlhdCI6MTUzMjEzNTcyOSwiZXhwIjoxNTMzMzQ1MzI5fQ.I7lnzI85mU1u02ZahgW-0c6xxcYpoBtCqxKekn9Po8Q',
};

export function request(params) {
  const { url, method, payload } = params;
  const headers = method === 'POST' ? postHeaders : defaultHeaders;
  const options = {
     url,
     headers,
     method,
    ...{ data: payload },
  };
  return genericRequest(options);
}

function genericRequest(options) {
  return new Promise(
    function (resolve) {
      axios.request(options)
        .then((response) => {
          resolve(response);
        })
        .catch((errorResponse) => {
          const response = errorResponse.response;
          console.warn(response);
        });
    });
}
