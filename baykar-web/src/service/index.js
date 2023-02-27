import { create } from 'apisauce';
import { API_URL } from '../constants';
import Cookies from 'js-cookie';

let host = API_URL

let api = create({
  baseURL: host,
//   headers: {
    // Accept: 'application/vnd.github.v3+json',
    // 'x-api-version': '0.0',
    // "Access-Control-Allow-Origin": "*",
//   },
});

api.addResponseTransform(({ data }) => {
  if (data) {
    return data;
  }
});

if (Cookies.get('token')) {
  api.setHeader('Authorization', 'Bearer ' + Cookies.get('token'));
}

export default api;