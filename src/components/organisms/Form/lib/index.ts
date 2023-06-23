export const EMAIL_REGEX = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+(.[a-zA-Z]{2,5}(.[a-zA-Z]{2,5})?)$';
export const Z_EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+(\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})?)$/g;
export const LINKEDIN_REGEX = '^(https://)?(www.)?linkedin.com(/[a-zA-Z0-9%]+((-|_|/)[a-zA-Z0-9%]+)*)/?$';
export const Z_LINKEDIN_REGEX = /^(https:\/\/)?(www.)?linkedin.com(\/[a-zA-Z0-9\%]+((\-|\_|\/)[a-zA-Z0-9\%]+)*)\/?$/g;

export const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
  linkedin: '',
};

export const ERRORS_INITIAL_STATE = {
  name: false,
  email: false,
  message: false,
  linkedin: false,
};
