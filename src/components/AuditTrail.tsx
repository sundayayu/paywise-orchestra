import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, FileText, Search, Filter } from "lucide-react";

interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  requestId: string;
  details: string;
  ipAddress: string;
  userAgent: string;
  status: "success" | "failed" | "pending";
}

const mockAuditTrail: AuditEntry[] = [
  {
    id: "AUD-001",
    timestamp: "2024-01-16 14:30:25",
    action: "Payment Request Submitted",
    user: "John Smith",
    requestId: "PR-001",
    details: "New payment request for Tech Solutions Inc. - $15,000",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "success"
  },
  {
    id: "AUD-002",
    timestamp: "2024-01-16 14:45:12",
    action: "Level 1 Approval",
    user: "Sarah Johnson",
    requestId: "PR-002",
    details: "Approved payment request for Office Supplies Co. - $850",
    ipAddress: "192.168.1.101",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "success"
  },
  {
    id: "AUD-003",
    timestamp: "2024-01-16 15:20:33",
    action: "Level 2 Approval",
    user: "Mike Wilson",
    requestId: "PR-002",
    details: "Finance department approved payment request",
    ipAddress: "192.168.1.102",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "success"
  },
  {
    id: "AUD-004",
    timestamp: "2024-01-16 16:10:45",
    action: "Payment Processing",
    user: "System Admin",
    requestId: "PR-002",
    details: "Payment processed and sent to vendor",
    ipAddress: "192.168.1.1",
    userAgent: "System Process",
    status: "success"
  },
  {
    id: "AUD-005",
    timestamp: "2024-01-16 16:35:20",
    action: "Vendor Added",
    user: "Alice Brown",
    requestId: "V-004",
    details: "New vendor 'Equipment Rental Co.' added to system",
    ipAddress: "192.168.1.103",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "success"
  },
  {
    id: "AUD-006",
    timestamp: "2024-01-16 17:00:10",
    action: "Payment Request Rejected",
    user: "David Chen",
    requestId: "PR-005",
    details: "Rejected payment request - insufficient documentation",
    ipAddress: "192.168.1.104",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "failed"
  }
];

export const AuditTrail = () => {
  const [auditEntries, setAuditEntries] = useState(mockAuditTrail);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterAction, setFilterAction] = useState("all");

  const filteredEntries = auditEntries.filter(entry => {
    const matchesSearch = 
      entry.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.requestId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.details.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || entry.status === filterStatus;
    const matchesAction = filterAction === "all" || entry.action.toLowerCase().includes(filterAction.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesAction;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-status-approved text-white";
      case "failed": return "bg-status-rejected text-white";
      case "pending": return "bg-status-pending text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes("Request")) return <FileText className="h-4 w-4" />;
    if (action.includes("Approval")) return <User className="h-4 w-4" />;
    if (action.includes("Processing")) return <Calendar className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Audit Trail Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search audit entries..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterAction} onValueChange={setFilterAction}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="request">Payment Requests</SelectItem>
                <SelectItem value="approval">Approvals</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="vendor">Vendor Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Audit Entries */}
      <Card>
        <CardHeader>
          <CardTitle>System Activity Log</CardTitle>
          <p className="text-sm text-muted-foreground">
            Complete audit trail of all system activities and user actions
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredEntries.map((entry) => (
              <div key={entry.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getActionIcon(entry.action)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{entry.action}</span>
                        <Badge className={getStatusColor(entry.status)}>
                          {entry.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {entry.details}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                        <div>
                          <span className="font-medium">User:</span> {entry.user}
                        </div>
                        <div>
                          <span className="font-medium">Request ID:</span> {entry.requestId}
                        </div>
                        <div>
                          <span className="font-medium">IP Address:</span> {entry.ipAddress}
                        </div>
                        <div>
                          <span className="font-medium">Timestamp:</span> {entry.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEntries.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No audit entries match the current filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};