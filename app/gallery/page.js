'use client';
import React from 'react';
import { useState } from 'react';
import { rentalList } from "../data/list"
import Image from 'next/image';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % rentalList.length);
  }

  let rental = rentalList[index];
  return (
    <div className="rental-container">
      <div className="box">
        {/* <Header title="New Gallery" /> */}
        <button className="button is-primary" onClick={handleClick}>
          Next
        </button>
        <br/>
        <br/>
        <h2 className="title is-5">
          <i>{rental.name}</i>
        </h2>
        <br/>
        <h3 className="subtitle is-6">
          ({index + 1} of {rentalList.length})
        </h3>
        <br/>
      
        <Image
          src={rental.url}
          alt={rental.alt}
          width={400}
          height={200}
        />
        <br/><br/>
        <p>{rental.description}</p>
      </div>
    </div>
  );
};

export default Gallery;