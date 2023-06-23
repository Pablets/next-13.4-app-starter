const request = async (url: RequestInfo, options: any) => {
  options = {
    credentials: 'include',
    mode: 'cors',
    cache: 'default',
    method: 'GET',
    ...options,
  };
  options.body = JSON.stringify(options.body);
  options.headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  const res = await fetch(url, options);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default request;
