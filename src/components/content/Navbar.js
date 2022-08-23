import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import logo from "../../images/Navbar.png";
import pancake from "../../images/icons/pancakeswap.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/user/userActions";
import { fetchInventoryData } from "../../redux/inventory/inventoryActions";

class NavBar extends React.Component {
  render() {
    const user = useSelector((state) => state.user);
    const inventory = useSelector((state) => state.inventory);

    console.log("user", user);
    console.log("inventory", inventory);
    
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchUser())
      dispatch(fetchInventoryData())
    },[dispatch])

    return (
      <Navbar
        className="navbar shadow-sm mb-5"
        expand
      >
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
          </Button>
          <img src={logo} alt="logo" className="logo-sidebar" />
          <h3>CryptoMC</h3>
        </div>
        <Button variant="outline-info" onClick={this.props.toggle}>
        
        {this.props.isOpen?<FontAwesomeIcon icon={faChevronLeft} />: <FontAwesomeIcon icon={faChevronRight} />}
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navbar-buttons" navbar>
            <a className="navbar-pancake" href="#" target="_blank"><img src={pancake} alt=""/>BUY $CMC</a>
            <button className="navbar-claim" href="#">CLAIM 23.039 $CMC</button>
            <img src={logo} alt="logo" className="navbar-logo"/>
            <div className="navbar-account">
              0 &nbsp;  $CMC <br/>
              <span className="navbar-bot-account">0X0000_00000</span> 
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
