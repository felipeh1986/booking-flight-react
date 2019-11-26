/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

export const GET_FLIGHTS_AVAILABLE= 'boilerplate/App/GET_FLIGHTS_AVAILABLE';
export const GET_FLIGHTS_SUCCESS = 'boilerplate/App/GET_FLIGHTS_SUCCESS';
export const GET_FLIGHTS_ERROR = 'boilerplate/App/GET_FLIGHTS_ERROR';

export const LOAD_RESERVATIONS= 'boilerplate/App/LOAD_RESERVATIONS';
export const LOAD_RESERVATIONS_SUCCESS= 'boilerplate/App/LOAD_RESERVATIONS_SUCCESS';
export const LOAD_RESERVATIONS_ERROR= 'boilerplate/App/LOAD_RESERVATIONS_ERROR';
