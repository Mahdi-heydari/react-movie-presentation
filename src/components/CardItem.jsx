/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

export default function CardItem({imgSrc, name, origin}) {
  return (
    <Card
      className="max-w-sm m-auto bg-cyan-700"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imgSrc}
    >
      <h5 className="text-xl font-bold tracking-tight text-black">
        {name}
      </h5>
      <p className="font-normal text-gray-800 ">
        origin: {origin}
      </p>
    </Card>
  );
}
