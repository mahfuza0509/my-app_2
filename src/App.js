import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Button from './Button.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [filter, setFilter] = useState("main");


  const isActive = (name) => filter === name ? 'active' : '';

  return (
    <div className="container py-5">
      

      
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">
          <button
            className={`btn btn-outline-primary ${isActive("footer")}`}
            onClick={() => setFilter("footer")}
          >
            Footer
          </button>
          <button
            className={`btn btn-outline-success ${isActive("header")}`}
            onClick={() => setFilter("header")}
          >
            Header
          </button>
          <button
            className={`btn btn-outline-warning ${isActive("main")}`}
            onClick={() => setFilter("main")}
          >
            Main
          </button>
          <button
            className={`btn btn-outline-warning ${isActive("button")}`}
            onClick={() => setFilter("button")}
          >
            Main
          </button>
        </div>
      </div>

      
      <div className="card shadow">
        <div className="card-body text-center">
          {
            filter === "footer" ? <Footer /> :
            filter === "header" ? <Header /> :
            filter === "main" ? <Main /> :
            filter === "button" ? <Button /> :
            <p></p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
