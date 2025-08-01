import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FlowDiagram from "@/components/flow-diagram"
import { Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50 overflow-hidden">
      <div className="p-4 sm:p-6 lg:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Search for a transaction</CardTitle>
            <CardDescription>You can search for a transaction by ID, Amount, or Date Range.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end max-w-4xl">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="transaction-id">Transaction ID</Label>
                <Input type="text" id="transaction-id" placeholder="Enter Transaction ID" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="transaction-amount">Transaction Amount</Label>
                <Input type="text" id="transaction-amount" placeholder="Enter Amount" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="date-start">Date Range (Start)</Label>
                <div className="relative">
                  <Input type="date" id="date-start" className="pr-10" />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="date-end">Date Range (End)</Label>
                <div className="relative">
                  <Input type="date" id="date-end" className="pr-10" />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <main className="flex-grow p-4 sm:p-6 lg:p-8 pt-0">
        <div className="bg-white rounded-lg border shadow-sm h-full w-full">
          <FlowDiagram />
        </div>
      </main>
    </div>
  )
}
