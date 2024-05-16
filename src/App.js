import logo from './logo.svg';
import './App.css';
import CryptoTracker from './CryptoTracker';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CryptDisplay from './CryptDisplay';
function App() {
  return (
//     <Router>
//     <Switch>
//         <Route exact path="/" component={CryptoTracker} />
//         <Route path="/crypto/:id" component={CryptDisplay} />
//     </Switch>
// </Router>
<div className="App">
  <CryptoTracker/>
</div>
  );
}

export default App;
