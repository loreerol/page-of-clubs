import React from "react";
import { Route, HashRouter, NavLink } from "react-router-dom";

import Chat from "./Chat";
import News from "./News";
import Contact from "./Contact";
import Info from "./Info";

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

let isExpanded = "notExpanded";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navbar light expand="md">
            <NavbarBrand className="navbarbrand" href="/">
              Page of Clubs
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="navlink" to="/">
                    News
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navlink" to="/Chat">
                    Chat
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navlink" to="/Contact">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navlink" to="/Logout">
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="main">
            <div className="book-nav">
              <div className="books">
                <p>Books</p>
              </div>
              <div className="pagination">
                <Pagination size="sm" aria-label="Page navigation">
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                </Pagination>
              </div>
            </div>
            <div className="content">
              <Route exact path="/" component={News} />
              <Route path="/chat" component={Chat} />
              <Route path="/contact" component={Contact} />
              <Route path="/Info" component={Info} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
