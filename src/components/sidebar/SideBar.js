import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import { Nav, Button } from "react-bootstrap";
import logo from "../../images/Navbar.png";
import redbox from "../../images/redbox.png";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <img src={logo} alt="logo" className="logo-sidebar" />
          <h3>CryptoMC</h3>
        </div>

        <Nav className="flex-column pt-2 sidebar-nav">
          <div className="sidebar-second-header">
          <p>Welcome to the<br/>most delicius Nft in the world</p>
          </div>

          <Nav.Item className="active">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              HOME
            </Nav.Link>
          </Nav.Item>

          <div className="sidebar-third-header" >
          <p>CryptoMC<br/>PLAY & EARN</p>
          <img src={redbox} alt="redbox" className="redbox" />
          </div>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              INVENTORY
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              TOOLS
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              DELIVERY
            </Nav.Link>
          </Nav.Item>

          <div className="sidebar-third-header">
          <p>CRYPTOMC<br/>GET READY</p>
          </div>
          
          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              SHOP
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              WHITEPAPER
            </Nav.Link>
          </Nav.Item>
       
      </div>
    );
  }
}

export default SideBar;
