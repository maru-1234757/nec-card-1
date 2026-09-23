import React from "react";

export default function Product({ id, image, title }) {
  return (
    <div>
      <div>
        <li key={id}>{title}</li>
        <img src={image} />
      </div>
    </div>
  );
}
