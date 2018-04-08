import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
      <div className="home">
        <h1>Agathe Lelong</h1>
          <Link to="/list"><button>Show the List</button></Link></div>        
        )
}
const List = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}
module.exports = {
  Home,
  List
};
