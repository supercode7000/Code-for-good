import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <form method="post">
//     <input type="hidden" name="form-name" value="contact" />
//     <p>
//       <label>
//         Your Name: <input type="text" name="name" />
//       </label>
//     </p>
//     <p>
//       <label>
//         Your Email: <input type="email" name="email" />
//       </label>
//     </p>
//     <p>
//       <label>
//         Message: <textarea name="message" />
//       </label>
//     </p>
//     <p>
//       <button type="submit">Send</button>
//     </p>
//   </form>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
