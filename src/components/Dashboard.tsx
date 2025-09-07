import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentRequestForm } from "@/components/PaymentRequestForm";
import { ApprovalWorkflow } from "@/components/ApprovalWorkflow";
import { VendorManagement } from "@/components/VendorManagement";
import { AuditTrail } from "@/components/AuditTrail";
import { 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle, 
  TrendingUp,
  FileText,
  Users,
  CreditCard
} from "lucide-react";

interface PaymentRequest {
  id: string;
  vendor: string;
  amount: number;
  description: string;
  status: "pending" | "approved" | "rejected" | "processing" | "completed";
  requestedBy: string;
  requestDate: string;
  approvalLevel: number;
}

const mockRequests: PaymentRequest[] = [
  {
    id: "PR-001",
    vendor: "Tech Solutions Inc.",
    amount: 15000,
    description: "Software licensing renewal",
    status: "pending",
    requestedBy: "John Smith",
    requestDate: "2024-01-15",
    approvalLevel: 1
  },
  {
    id: "PR-002", 
    vendor: "Office Supplies Co.",
    amount: 850,
    description: "Monthly office supplies",
    status: "approved",
    requestedBy: "Sarah Johnson",
    requestDate: "2024-01-14",
    approvalLevel: 2
  },
  {
    id: "PR-003",
    vendor: "Marketing Agency",
    amount: 25000,
    description: "Q1 Marketing campaign",
    status: "processing",
    requestedBy: "Mike Wilson",
    requestDate: "2024-01-13",
    approvalLevel: 3
  }
];

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-status-pending text-white";
      case "approved": return "bg-status-approved text-white";
      case "rejected": return "bg-status-rejected text-white";
      case "processing": return "bg-status-processing text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const totalPending = mockRequests.filter(r => r.status === "pending").reduce((sum, r) => sum + r.amount, 0);
  const totalApproved = mockRequests.filter(r => r.status === "approved").reduce((sum, r) => sum + r.amount, 0);
  const totalProcessing = mockRequests.filter(r => r.status === "processing").reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Payment Management System</h1>
              <p className="text-muted-foreground">Automated vendor payment processing and approval workflow</p>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              New Payment Request
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="requests">Payment Requests</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Dashboard Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalPending.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    {mockRequests.filter(r => r.status === "pending").length} requests
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Approved</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalApproved.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    {mockRequests.filter(r => r.status === "approved").length} requests
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Processing</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalProcessing.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    {mockRequests.filter(r => r.status === "processing").length} requests
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${(totalPending + totalApproved + totalProcessing).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">All active requests</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Requests */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Payment Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{request.id}</span>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {request.vendor} • {request.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Requested by {request.requestedBy} on {request.requestDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">${request.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Level {request.approvalLevel}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <PaymentRequestForm />
          </TabsContent>

          <TabsContent value="approvals">
            <ApprovalWorkflow />
          </TabsContent>

          <TabsContent value="vendors">
            <VendorManagement />
          </TabsContent>

          <TabsContent value="audit">
            <AuditTrail />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};