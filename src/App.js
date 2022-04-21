import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MoviesContainers from "./components/MoviesContainers";
function App() {
  return (
    <div style={{padding:'1em'}} className='App'>
      <MoviesContainers/>
    </div>
  );
}

export default App;
