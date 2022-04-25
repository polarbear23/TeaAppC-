export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const API_URL = {
  USER_REGISTER: `${SERVER_URL}/user/register`,
  USER_LOGIN: `${SERVER_URL}/user/login`,
  TEA: `${SERVER_URL}/tea`,
  ORDER: `${SERVER_URL}/order`,
  ORDERPRODUCTS: `${SERVER_URL}/order/product`,
};

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const LOCAL_STORAGE = {
  TOKEN: 'token',
};
