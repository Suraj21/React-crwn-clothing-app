import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import  store  from './redux/store';

ReactDOM.render(
  //It is a component and which is a parent or eveything of application provided by redux
  // so that the user can store everything of application like state at application level or dispatch 
  // action or we can pull values to our components
 <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
