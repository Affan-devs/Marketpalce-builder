import Link from "next/link";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanity";

interface simplifiedCar {
  id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  slug: {
    current: string;
  };
}
async function getData() {
  const query = `*[_type == "car"]{
    id,
    name,
    type,
    image{
      asset->{url}
    },
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    "slug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function AdminPanel() {
  const data = await getData();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Car Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Fuel</th>
            <th className="border border-gray-300 p-2">Transmission</th>
            <th className="border border-gray-300 p-2">Seating</th>
            <th className="border border-gray-300 p-2">Price/Day</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product : simplifiedCar) => (
            <tr key={product.id} className="text-center">
              <td className="border border-gray-300 p-2">
                <img
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={50}
                  height={50}
                />
              </td>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.type}</td>
              <td className="border border-gray-300 p-2">{product.fuelCapacity}</td>
              <td className="border border-gray-300 p-2">{product.transmission}</td>
              <td className="border border-gray-300 p-2">{product.seatingCapacity}</td>
              <td className="border border-gray-300 p-2">{product.pricePerDay}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link href="/admin/add-product">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add New Product
          </button>
        </Link>
      </div>
    </div>
  );
}
