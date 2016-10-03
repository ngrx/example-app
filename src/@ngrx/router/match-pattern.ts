import * as pathToRegexp from 'path-to-regexp';
import { HistoryLocation } from 'history';

const cache: { [pattern: string]: any } = {};

const getMatcher = (pattern: string) => {
  let matcher = cache[pattern];

  if (!matcher) {
    const keys: any[] = [];
    const regex = pathToRegexp(pattern, keys);
    matcher = cache[pattern] = { keys, regex };
  }

  return matcher;
};

function truncatePathnameToPattern(pathname: string, pattern: string) {
  return pathname.split('/').slice(0, pattern.split('/').length).join('/');
}

const parseParams = (pattern: string, match: pathToRegexp.PathRegExp[], keys: any[]) =>
  match.slice(1).reduce<any>((params, value, index) => {
    params[keys[index].name] = value;
    return params;
  }, {});

export interface Match {
  pattern: string;
  params: any;
  isExact: boolean;
  pathname: string;
}

export function matchPattern(pattern: string, location: HistoryLocation, matchExactly: boolean, parent?: { pathname: string }): Match | null {
  const specialCase = !matchExactly && pattern === '/';

  if (specialCase) {
    return {
      pattern,
      params: null,
      isExact: location.pathname === '/',
      pathname: '/'
    };
  } else {
    if (!matchExactly && parent && pattern.charAt(0) !== '/') {
      pattern = parent.pathname +
        (parent.pathname.charAt(parent.pathname.length - 1) !== '/' ? '/' : '') +
        pattern;
    }

    const matcher = getMatcher(pattern);
    const pathname = matchExactly ?
      location.pathname : truncatePathnameToPattern(location.pathname, pattern);
    const match = matcher.regex.exec(pathname);

    if (match) {
      const params = parseParams(pattern, match, matcher.keys);
      const locationLength = location.pathname.split('/').length;
      const patternLength = pattern.split('/').length;
      const isExact = locationLength === patternLength;
      return { pattern, params, isExact, pathname };
    } else {
      return null;
    }
  }
};