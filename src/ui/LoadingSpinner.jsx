import { Spinner } from "flowbite-react";

export default function LoadingSpinner() {
  return (
    <div className="text-center">
      <Spinner color="info" size="xl" aria-label="Loading" />
    </div>
  );
}
