import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react"
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import {urlFor } from "@/app/lib/sanity";
import { client } from "@/app/lib/sanity";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
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

  interface Car {
    _id: string;
    name: string;
    type: string;
    image: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    brand: string;
    originalPrice: string;
    tags: string[];
    slug: {
      current: string;
    };
  }

  async function getCarBySlug(slug: string) {
    // Remove any quotes from the slug parameter
    const cleanSlug = slug.replace(/['"]+/g, "");

    const query = `*[_type == "car" && slug.current == "${cleanSlug}"][0]{
      _id,
      name,
      type,
      image,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      brand,
    originalPrice,
    tags,
    slug


    }`;

    const car = await client.fetch(query);
    return car;
  }

  export default async function Pay({
    params,
  }: {
    params: { slug: string };
  }) {
    const car: Car = await getCarBySlug(params.slug);
    const data: simplifiedCar[] = await getData();

    if (!car) {
      return <div>Car not found</div>;
    }
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6  flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">Name</label>
                <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">Phone Number</label>
                <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Address</label>
                <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Town/City</label>
                <Input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
          </CardContent>
        </Card>

    
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first">
              <Image src={"/Pick - Up (1).png"} alt="Pick Up" width={92} height={20} />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
            <div className="fourth">
              <Image src={"/Drop - Off (1).png"} alt="Drop Off" width={104} height={20} />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Image src={"/Credit Card.png"} alt="Credit Card" width={804} height={308} />
            <Image src={"/PayPal.png"} alt="PayPal" width={804} height={56} />
            <Image src={"/Bitcoin.png"} alt="Bitcoin" width={804} height={56} />
          </CardContent>
        </Card>

      
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <Image src={"/Confirmation.png"} alt="Confirmation" width={804} height={136} />
            <Link href={'/admin'}>
            <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
              Rent Now
            </button></Link>
            
            <Image src={"/Safe Data.png"} alt="Safe Data" width={548} height={100} />
          </CardContent>
        </Card>
      </div>
      <div className="details w-full flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center">
      <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Rental Summary</CardTitle>
        <p className="text-sm text-muted-foreground">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Car Details */}
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-[#4263EB]">
            <Image
              src={urlFor(car.image).url()}
              alt="Nissan GT-R"
              className="object-contain p-2"
              fill
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{car.name}</h3>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <Star className="h-5 w-5 text-muted-foreground" />
              <span className="ml-2 text-sm text-muted-foreground">440+ Reviewer</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium"> {car.originalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">$0</span>
          </div>
        </div>

        {/* Promo Code */}  
        <div className="flex gap-2">
          <Input placeholder="Apply promo code" className="flex-1" />
          <Button variant="outline">Apply now</Button>
        </div>

        {/* Total */}
        <div className="rounded-lg bg-muted p-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="text-lg font-semibold">Total Rental Price</h4>
              <p className="text-sm text-muted-foreground">Overall price and includes rental discount</p>
            </div>
            <span className="text-2xl font-bold"> {car.originalPrice}</span>
          </div>
        </div>
      </CardContent>
    </Card>

      </div>
    </div>
  );
}



