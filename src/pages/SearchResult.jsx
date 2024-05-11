import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import { Badge } from "flowbite-react";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function SearchResult() {
  const { id } = useParams();

  const getCharacterInfo = async () => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    console.log("object", result.data);
    return result.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["characterInfo"],
    queryFn: getCharacterInfo,
  });

  return (
    <div>
      {isLoading ? <LoadingSpinner/> : (
        <>
          <CardItem
            imgSrc={data.image}
            name={data.name}
            origin={data.origin.name}
          />
          <div className="flex flex-wrap justify-center mt-5 gap-10">
            <Badge
              color="warning"
              size="xl"
              className="border-solid border-4 border-l-orange-500"
            >
              Gender: {data.gender}
            </Badge>
            <Badge
              color="warning"
              size="xl"
              className="border-solid border-4 border-l-orange-500"
            >
              Status: {data.status}
            </Badge>
          </div>
        </>
      )}
    </div>
  );
}
