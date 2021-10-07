import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

export default function ControlledCarousel() {

  return (
    <Carousel className="top-gap">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9zZW1pdGUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2500&h=500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://images.unsplash.com/photo-1520039836429-c64bfbe2a64c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9obyUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2500&h=500'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1452800185063-6db5e12b8e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2500&h=500"
          alt="Denali National Park and Preserve"
        />

        <Carousel.Caption>
          <h3>Denali National Park and Preserve</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
