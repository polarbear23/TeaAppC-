export const postFormToServer = async (url: string, reqBody: {}) => {
  const response = await fetch(url, fetchConfig(reqBody));

  const data = await response.json();

  return data;
};

interface postReq {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
}

const fetchConfig = (reqBody: {}): postReq => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  };
};
