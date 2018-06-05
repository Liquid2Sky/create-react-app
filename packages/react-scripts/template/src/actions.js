/*
 * action types
 */

export const ADD_FOO = 'ADD_FOO';

/*
 * action creators
 */

export function addFoo(string) {
  return { type: ADD_FOO, string };
}
