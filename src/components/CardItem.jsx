/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function CardItem({imgSrc, name, origin, id}) {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/search/${id}`)
  }
  

  return (
    <Card
      className="max-w-sm max-md:max-w-xs max-md:h-full text-center  m-auto bg-[#189AB4] cursor-pointer"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imgSrc}
      onClick={handelClick}
    >
      <h5 className="text-xl max-md:text-lg font-bold  tracking-tight text-black">
        {name}
      </h5>
      <p className="font-normal max-md:text-sm  max-md: text-gray-800 ">
        origin: {origin}
      </p>
    </Card>
  );
}
