  "use client";
import React from 'react';
import Image from 'next/image';
import { client } from "../lib/sanity";
import Search from "./Findcar";
import { useState ,useEffect} from 'react';

interface simplifiedCar {
  _id: string;
  name: string;
  type: string;
  slug: {
    current: string;
  };
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
}

async function getData() {
  const query = `*[_type == "car"]{
  _id,
  name,
    type,
    slug,
    image{
    asset->{url}
  },
  fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    
}`;
  const data = await client.fetch(query);
  return data;
}

export default function Navbar() {
  // const data = await getData();
  const [data, setData] = useState<simplifiedCar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };

    fetchData();
  }, []);
  return (
    <>
   <div className='w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
      <div className="input relative w-full md:w-auto">

        <Image src={'/filter.png'} alt='' width={24} height={24} className='absolute top-1/2 right-3 transform -translate-y-1/2'/>
      </div>
      <Search data={data} />
      <Image src={'/heart 2.png'} className='cursor-pointer' alt='' width={24} height={24} />

    </div>
     
</div>
  </>
  );
}

