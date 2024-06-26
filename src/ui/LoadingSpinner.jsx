import { Spinner } from "flowbite-react";

export default function LoadingSpinner() {
  return (
    <div className="text-center absolute top-[50%] left-[50%]">
      <Spinner color="info" size="xl" aria-label="Loading" />
    </div>
  );
}
