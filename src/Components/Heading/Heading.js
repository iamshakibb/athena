import React from "react";

export default function Heading({ heading, message }) {
  return (
    <div className="text-center heading mb-5">
      <h1>{heading}</h1>
      <p className="paragraphColor">{message}</p>
    </div>
  );
}
