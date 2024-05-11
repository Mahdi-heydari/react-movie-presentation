import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../ui/LoadingSpinner";
import CardItem from "../components/CardItem";
import { fetchData } from "../services/api";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchData,
  });

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
            id={item.id}
          />
        ))
      )}
    </div>
  );
}
