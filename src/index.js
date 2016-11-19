import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PatientQuestionnaire from './Components/PatientQuestionnaire';

ReactDOM.render(
  <Provider store={store}>
    <PatientQuestionnaire/>
  </Provider>,
  document.getElementById('root')
);

