"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function SiteNavbar() {
  const [active, setActive] = useState("home");

  const menus = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "menu", label: "Menu", href: "#menu" },
    { id: "why-us", label: "Why Us", href: "#why-us" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <Navbar expand="lg" sticky="top" className="coffee-navbar">
      <Container>
        <Navbar.Brand href="#home" className="coffee-brand">
          KOPI SENJA<span>.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="coffee-navbar-nav" />

        <Navbar.Collapse id="coffee-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {menus.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.href}
                active={active === item.id}
                className={active === item.id ? "menu-active" : ""}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}

            <a href="#menu" className="navbar-order">
              Order Now
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
