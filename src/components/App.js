import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article";
import Header from "./Header";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <App/>
      <Header/>
      <About/>
      <ArticleList Article={Article}/>
      
     
    </div>
  );
}

export default App;
