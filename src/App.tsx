import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'

function App() {
  return (
    <div className='app bg-black'>
      <Header />
      <Main />
    </div>
    // <div className="container bg-gray-200 rounded-xl shadow border p-8 m-10">
    //   <p className="text-3xl text-gray-700 font-bold mb-5">
    //     Welcome!
    //   </p>
    //   <p className="text-gray-500 text-lg">
    //     React and Tailwind CSS in action
    //   </p>
    // </div>
  );
}

export default App;
