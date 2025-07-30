import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FlowDiagram from "@/components/flow-diagram"

export default function FlowDiagramLayout() {
  return (
    <div className="bg-gray-50 h-screen w-screen flex flex-col">
      <div className="w-full h-full mx-auto flex flex-col">
        <div className="p-4 sm:p-6 lg:p-8">
          <Card>
            <CardHeader>
              <CardTitle>Search for a transaction</CardTitle>
              <CardDescription>You can search for a transaction by ID, Amount, or Date Range.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end max-w-4xl">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="transactionId">Transaction ID</Label>
                  <Input type="text" id="transactionId" placeholder="Enter Transaction ID" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="amount">Transaction Amount</Label>
                  <Input type="number" id="amount" placeholder="Enter Amount" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="startDate">Date Range (Start)</Label>
                  <Input type="date" id="startDate" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="endDate">Date Range (End)</Label>
                  <Input type="date" id="endDate" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <main className="flex-grow overflow-hidden">
          <FlowDiagram />
        </main>
      </div>
    </div>
  )
}
