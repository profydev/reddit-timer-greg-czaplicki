import React, { fragment } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <fragment>
      <Header />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </fragment>
  );
}

export default App;
