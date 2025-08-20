import { useParams } from "react-router-dom";


export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Product Detail Page</h1>
      <p className="mt-4 text-gray-600">Showing details for product ID: {id}</p>
    </div>
  );
}
