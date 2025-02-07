import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import  ResponsiveTable  from "../components/Responsive-tabel"

const bookings = [
  {
    id: 1,
    customer: "empty",
    car: "empty",
    startDate: "empty",
    endDate: "empty",
    status: "empty",
  },
  
]

const columns = [
  { key: "customer", label: "Customer" },
  { key: "car", label: "Car" },
  { key: "startDate", label: "Start Date" },
  { key: "endDate", label: "End Date" },
  { key: "status", label: "Status" },
]

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bookings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Booking Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search bookings..." />
          </div>
          <ResponsiveTable columns={columns} data={bookings} />
        </CardContent>
      </Card>
    </div>
  )
}

