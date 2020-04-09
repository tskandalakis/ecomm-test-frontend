import React from 'react';
import './index.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { SystemState } from '../../store/system/types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store';

interface NavMenuProps {
  system: SystemState;
}

class NavMenu extends React.Component<NavMenuProps> {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
        </Nav>
        <Nav>
          {this.props.system.loggedIn &&
            <>
              <NavDropdown title={this.props.system.user?.username} id="collasible-nav-dropdown" as={Link} to="/account">
                <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/signout">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </>
          }
          {!this.props.system.loggedIn &&
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link> |
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>
          }
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default withRouter(connect(
  mapStateToProps
)(NavMenu));
