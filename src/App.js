import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="container py-4">
      
      <nav className="mb-4 d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={() => setFilter("footer")}>Button1</button>
        <button className="btn btn-success" onClick={() => setFilter("header")}>Button2</button>
      </nav>

      
      <div className="main__content text-center p-4 border rounded bg-light">
        {
          filter === "footer" ? <Footer /> :
          filter === "header" ? <Header /> :
          <p className="text-muted">Выберите компонент для отображения</p>
        }
      </div>
    </div>
  );
}

export default App;
