import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, Clock, User, ArrowRight } from "lucide-react";

interface ApprovalItem {
  id: string;
  vendor: string;
  amount: number;
  description: string;
  requestedBy: string;
  requestDate: string;
  currentLevel: number;
  maxLevel: number;
  status: "pending" | "approved" | "rejected";
}

const mockApprovals: ApprovalItem[] = [
  {
    id: "PR-001",
    vendor: "Tech Solutions Inc.",
    amount: 15000,
    description: "Software licensing renewal",
    requestedBy: "John Smith",
    requestDate: "2024-01-15",
    currentLevel: 1,
    maxLevel: 3,
    status: "pending"
  },
  {
    id: "PR-004",
    vendor: "Equipment Rental Co.",
    amount: 5000,
    description: "Monthly equipment rental",
    requestedBy: "Alice Brown",
    requestDate: "2024-01-16",
    currentLevel: 2,
    maxLevel: 3,
    status: "pending"
  }
];

export const ApprovalWorkflow = () => {
  const { toast } = useToast();

  const handleApproval = (id: string, action: "approve" | "reject") => {
    toast({
      title: action === "approve" ? "Request Approved" : "Request Rejected",
      description: `Payment request ${id} has been ${action}d.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-status-pending text-white";
      case "approved": return "bg-status-approved text-white";
      case "rejected": return "bg-status-rejected text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Workflow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Approval Workflow Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-6 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <User className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">Staff Request</p>
                <p className="text-sm text-muted-foreground">Initial submission</p>
              </div>
            </div>
            
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-status-pending flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium">Department Head</p>
                <p className="text-sm text-muted-foreground">Level 1 Approval</p>
              </div>
            </div>
            
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-status-processing flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium">Finance Manager</p>
                <p className="text-sm text-muted-foreground">Level 2 Approval</p>
              </div>
            </div>
            
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-status-approved flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium">Payment Processing</p>
                <p className="text-sm text-muted-foreground">Final disbursement</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending Approvals */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockApprovals.map((item) => (
              <div key={item.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-lg">{item.id}</span>
                      <Badge className={getStatusColor(item.status)}>
                        Level {item.currentLevel} of {item.maxLevel}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.vendor}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${item.amount.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium">Description</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Requested By</p>
                    <p className="text-sm text-muted-foreground">
                      {item.requestedBy} on {item.requestDate}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Approval Comments</label>
                  <Textarea placeholder="Add your approval comments or reasons for rejection..." />
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleApproval(item.id, "approve")}
                    className="flex-1 bg-status-approved hover:bg-status-approved/90"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleApproval(item.id, "reject")}
                    className="flex-1 border-status-rejected text-status-rejected hover:bg-status-rejected hover:text-white"
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};