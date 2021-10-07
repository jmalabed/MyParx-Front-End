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
          <h3>Yosemite National Park</h3>
          <p>
            A shrine to human foresight, the strength of granite, the power of
            glaciers, the persistence of life, and the tranquility of the High
            Sierra.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1520039836429-c64bfbe2a64c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9obyUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2500&h=500"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Denali National Park and Preserve</h3>
          <p>
            Taiga forest gives way to high alpine tundra and snowy mountains,
            culminating in North America's tallest peak, 20,310' Denali.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1452800185063-6db5e12b8e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2500&h=500"
          alt="Denali National Park and Preserve"
        />

        <Carousel.Caption>
          <h3>Aurora Borealis</h3>
          <p>
            At this part of the country, in this time of the year, located
            entirely within your webpage?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
