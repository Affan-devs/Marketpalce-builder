"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const bookings = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    car: "Tesla Model 3",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    car: "BMW X5",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    car: "Mercedes-Benz C-Class",
  },
  {
    name: "William Kim",
    email: "william.kim@email.com",
    car: "Audi Q7",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    car: "Toyota Camry",
  },
]

export default function RecentBookings() {
  return (
    <div className="space-y-8">
      {bookings.map((booking) => (
        <div key={booking.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${booking.name}.png`} alt={booking.name} />
            <AvatarFallback>
              {booking.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{booking.name}</p>
            <p className="text-sm text-muted-foreground">{booking.email}</p>
          </div>
          <div className="ml-auto font-medium">{booking.car}</div>
        </div>
      ))}
    </div>
  )
}

