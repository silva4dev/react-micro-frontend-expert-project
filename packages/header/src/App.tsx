import './index.scss';
import * as React from 'react';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="p-20">
        <p className="text-2xl text-red-500 font-bold">Header remote!</p>
      </div>
    </>
  )
};
export default App