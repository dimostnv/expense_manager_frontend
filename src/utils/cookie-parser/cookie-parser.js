function cookieParser(cookies) {
  const cookieReg = {};

  const cookieList = cookies.split(';');

  cookieList.forEach((cookie) => {
    let keyValuePair = cookie.split('=');
    cookieReg[keyValuePair[0].trim()] = keyValuePair[1];
  });

  return cookieReg;
}

export default cookieParser;