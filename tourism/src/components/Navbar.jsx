import React from "react";
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
            <NavbarBrand href="#">Du lịch ABC</NavbarBrand>
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
                  <NavLink href="/service">Dịch vụ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Liên hệ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/pictures">Thư viện ảnh</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Đặt vé</NavLink>
                </NavItem>
                <NavItem>
                  <Button href="/login" color="success">Đăng nhập</Button>{" "}
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
