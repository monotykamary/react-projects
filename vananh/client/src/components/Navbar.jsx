import React from "react";
import logo from '../img/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "../App.css";

class NavbarMain extends React.Component {
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
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="/home">
            <img src={logo} style={{width:100, marginTop: -7}} />
            Vân Anh Tourism
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/home">Trang chủ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/intro">Giới thiệu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/package">Gói du lịch</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/services">Dịch vụ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Liên hệ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/order">Đặt vé</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
