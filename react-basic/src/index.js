import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './components/HelloComponent'; // import file เข้ามาใช้จากโฟลเดอร์ components ที่เราสร้าง

// การสร้าง Class Component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>This is my 1st Component</h1>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
