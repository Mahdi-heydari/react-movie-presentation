import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./ui/LoadingSpinner";
import CardItem from "./components/CardItem";

export default function App() {
  const fetchData = async () => {
    const result = await axios.get("https://rickandmortyapi.com/api/character");
    return result.data.results;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchData,
  });

  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-5  ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data.map((item) => (
          <CardItem
            key={item.id}
            name={item.name}
            imgSrc={item.image}
            origin={item.origin.name}
          />
        ))
      )}
    </div>
  );
}
