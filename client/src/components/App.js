import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Chat from "./Chat";
import News from "./News";
import Contact from "./Contact";
import Info from "./Info";

class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <HashRouter>
          <div className="app">
            <div className="side-nav">
              <div className="main-page-logo">
                <h1>Page of Clubs</h1>
              </div>
              <div className="book-nav">
                <div className="menu-items side-nav-menu">
                  <ul>
                    <li>
                      <NavLink to="/Chat">Chat</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="books" />
                <div className="pages">
                  <h2>1 2 3 .. 10</h2>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="top-nav">
                <div className="top-nav-search input-text">
                  <form>
                    <input
                      type="text"
                      name="search"
                      required=""
                      className="input-text-textarea"
                    />
                    <button type="submit" className="input-text-submit">
                      🔍
                    </button>
                  </form>
                </div>
                <div className="top-nav-menu menu-items">
                  <ul>
                    <li>
                      <NavLink to="/">News</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Info">Info</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main">
                <Route exact path="/" component={News} />
                <Route path="/chat" component={Chat} />
                <Route path="/contact" component={Contact} />
                <Route path="/Info" component={Info} />
              </div>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
