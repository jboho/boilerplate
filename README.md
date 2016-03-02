# Boilerplate

This is a boilerplate example showcasing _mostly_ [Redux](https://github.com/gaearon/redux) and [React Router](https://github.com/rackt/react-router) and it aims to provide different examples or use cases with the two libraries.

Based on http://emmenko.github.io/redux-react-router-async-example

## Features

- latest `react`, `redux`, `react-router`
- `devtools` + `HMR` for development
- `react`
  - higher-order components
  - higher-order functions
- `redux`
  - bootstrap initial state
  - store enhancers (e.g.: localStorage persistence)
  - middleware composition
  - easy-to-configure reducers
  - async actions
- `react-router`
  - nested routes
  - secured area by login
  - keep routes into state for easy time travel
- Immutable JS
  - injected into HTML by webpack for development (allows `HMR`)
  - bundled as a separate file for production
- Mocha test suite 
- development tools such as `webpack`, `babel`, `eslint`

## Development

```bash
$ npm install
$ npm start
```
