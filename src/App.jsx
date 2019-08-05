import React from 'react';
import './resources/styles/main.scss';
import AppBar from "./AppBar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <header className={"app-header"}>
        <AppBar/>
      </header>
      <main className={"app-main"}>
        <Main/>
      </main>
      <footer className={'app-footer'}>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
