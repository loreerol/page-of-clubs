import React from "react";
import { Route, HashRouter } from "react-router-dom";

// import Chat from "./Chat";
// import News from "./News";
// import Contact from "./Contact";
// import Info from "./Info";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Page of Clubs</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/News/">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/loreerol/pageofclubs">
                    Contact
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="https://github.com/loreerol/pageofclubs">
                      About
                    </DropdownItem>
                    <DropdownItem>Menu Item</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Night Mode</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </HashRouter>
    );
  }
}

export default App;
