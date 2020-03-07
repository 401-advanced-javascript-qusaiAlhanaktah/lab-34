/* eslint-disable no-unused-vars */
import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import Footer from './components/todo/footer.js';
import SettingsProvider from './components/context/context.js';
function App (){
  return (
    <>
      <SettingsProvider>
        <Header />
        <ToDo />
        <Footer />
      </SettingsProvider>
    </>
  );
}
export default App;
