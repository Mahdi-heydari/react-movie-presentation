import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import { Badge } from "flowbite-react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { getCharacterInfo } from "../services/api";

export default function SearchResult() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["characterInfo"],
    queryFn: () => getCharacterInfo(id),
  });

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CardItem
            imgSrc={data.image}
            name={data.name}
            origin={data.origin.name}
            id={data.id}
          />
          <div className="flex flex-wrap justify-center mt-5 max-md:mt-10 gap-10">
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
