<div className="side-nav">
  <div className="main-page-logo">
    <h1>Page of Clubs</h1>
  </div>
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  ); } }
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
