import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import Common from '@util/Common';

type TokenType = string | undefined;

const COOKIE_TOKEN = 'token';

const getSSRToken = (cookies: RequestCookies): TokenType => {
  const tokenCookie = cookies.get(COOKIE_TOKEN);
  if (tokenCookie !== undefined && tokenCookie.value.length > 0) {
    return tokenCookie.value;
  }
  return undefined;
};

const getCSRToken = (): TokenType => {
  const token = getCookie(COOKIE_TOKEN);
  return Common.isEmpty(token) ? undefined : String(token);
};

const getToken = (cookies?: RequestCookies): TokenType => {
  return cookies === undefined ? getCSRToken() : getSSRToken(cookies);
};

const setToken = (token: string) => {
  setCookie(COOKIE_TOKEN, token);
};

const deleteToken = (cookies?: RequestCookies) => {
  if (cookies === undefined) {
    if (hasCookie(COOKIE_TOKEN)) {
      deleteCookie(COOKIE_TOKEN);
    }
  } else {
    if (cookies.has(COOKIE_TOKEN)) {
      cookies.delete(COOKIE_TOKEN);
    }
  }
};

const checkToken = (cookies?: RequestCookies): boolean => {
  if (cookies === undefined) {
    if (hasCookie(COOKIE_TOKEN)) {
      return getCSRToken() !== undefined;
    }
  } else {
    if (cookies.has(COOKIE_TOKEN)) {
      return getSSRToken(cookies) !== undefined;
    }
  }
  return false;
};

export default {
  getToken,
  setToken,
  deleteToken,
  checkToken,
};
