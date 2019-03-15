import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './frontend/clock';
import Tab from './frontend/tabs';
import App from './app';

const tabProps = [{ title: 'one', content: 'I am One'}, { title: 'two', content: 'I am Two'}, { title: 'three', content: 'I am Three'}];
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
