"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { rentalList } from "../../data/list.js";

export const runtime = "edge";

export default function RentalItem({ params }) {
  // get the param from the url
  // 'http://localhost/gallery/1'
  // useParams => 1
  const { id } = use(params);

  const rental = rentalList.find((item) => item.id == id);

  if (!rental) {
    notFound();
  }
  // render template
  return (
    <div className="box mt-1">
      {rental ? (
        <>
          <h2 className="title is-5">
            <i>{rental.name}</i> 
          </h2>
          <h3 className="subtitle is-6">
            ({rental.id + 1} of {rentalList.length})
          </h3>
          <Image
            src={rental.url}
            alt={rental.alt}
            width={400}
            height={200}
          />
          <p>{rental.description}</p>
        </>
      ) : (
        <p> Item not found</p>
      )}
    </div>
  );
}
