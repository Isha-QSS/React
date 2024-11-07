import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';

const heading = React.createElement("div", { id: "first" }, [
  React.createElement("h1", {}, "hello world!"),
  React.createElement("h1", {}, "hello world2!"),
  React.createElement("h1", {}, "hello world3!"),
]);

const root = ReactDOM.createRoot(document.getElementById('he'));
root.render(heading);
