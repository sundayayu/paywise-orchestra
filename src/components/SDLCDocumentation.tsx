import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Workflow, 
  GitBranch, 
  Database, 
  Code2,
  Target,
  CheckCircle
} from "lucide-react";

export const SDLCDocumentation = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            SDLC Documentation & Analysis
          </CardTitle>
          <p className="text-muted-foreground">
            Complete System Development Life Cycle documentation for the Automated Payment System
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="actors">Actors</TabsTrigger>
              <TabsTrigger value="workflow">Workflow</TabsTrigger>
              <TabsTrigger value="usecase">Use Cases</TabsTrigger>
              <TabsTrigger value="context">Context</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
            </TabsList>

            <TabsContent value="problem" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Problem Statement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Current Situation</h4>
                    <p className="text-muted-foreground">
                      The organization currently relies on email-based vendor payment requests and approvals, 
                      creating significant challenges in tracking, accountability, and auditing processes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Problems</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Lack of centralized tracking for payment requests</li>
                      <li>No standardized approval workflow</li>
                      <li>Difficulty in maintaining audit trails</li>
                      <li>Risk of requests getting lost in email chains</li>
                      <li>Manual vendor management processes</li>
                      <li>No integration between departments</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Objectives</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Automate the payment request and approval process</li>
                      <li>Implement multi-level approval workflows</li>
                      <li>Maintain comprehensive audit trails</li>
                      <li>Centralize vendor management</li>
                      <li>Reduce processing time and errors</li>
                      <li>Improve transparency and accountability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Functional Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Payment request submission
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Multi-level approval workflow
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Vendor management system
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Payment processing automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Invoice generation and tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Comprehensive audit trail
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Dashboard and reporting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        User authentication and authorization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Non-Functional Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Security and data protection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Scalability for growing organization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        High availability (99.9% uptime)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Mobile-responsive interface
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Fast response times (&lt;3 seconds)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Integration capabilities
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        Compliance with financial regulations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-status-approved" />
                        User-friendly interface
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="actors" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Staff Member
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">Primary User</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Submit payment requests</li>
                      <li>• Upload supporting documents</li>
                      <li>• Track request status</li>
                      <li>• View payment history</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Department Head
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">Approver Level 1</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Review payment requests</li>
                      <li>• Approve/reject requests</li>
                      <li>• Add approval comments</li>
                      <li>• View department spending</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Finance Officer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">Approver Level 2</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Final approval authority</li>
                      <li>• Budget validation</li>
                      <li>• Financial compliance check</li>
                      <li>• Generate financial reports</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      System Admin
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">Administrator</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• User management</li>
                      <li>• System configuration</li>
                      <li>• Security settings</li>
                      <li>• Audit trail monitoring</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Vendor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">External Actor</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Receive payment notifications</li>
                      <li>• Submit invoices</li>
                      <li>• Update contact information</li>
                      <li>• View payment status</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Accounting System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">External System</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Receive payment data</li>
                      <li>• Process transactions</li>
                      <li>• Generate reports</li>
                      <li>• Maintain financial records</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="workflow" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Workflow className="h-5 w-5" />
                    Payment Request Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flow-chart">
                      {/* Workflow visualization will be added with Mermaid */}
                      <div className="bg-muted/50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4">Process Flow</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">1</div>
                            <div>
                              <p className="font-medium">Request Submission</p>
                              <p className="text-sm text-muted-foreground">Staff submits payment request with vendor details and documentation</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-status-pending text-white flex items-center justify-center text-sm font-medium">2</div>
                            <div>
                              <p className="font-medium">Department Head Review</p>
                              <p className="text-sm text-muted-foreground">Department head reviews and approves/rejects the request</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-status-processing text-white flex items-center justify-center text-sm font-medium">3</div>
                            <div>
                              <p className="font-medium">Finance Review</p>
                              <p className="text-sm text-muted-foreground">Finance officer validates budget and provides final approval</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-status-approved text-white flex items-center justify-center text-sm font-medium">4</div>
                            <div>
                              <p className="font-medium">Payment Processing</p>
                              <p className="text-sm text-muted-foreground">System processes payment and updates all stakeholders</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usecase" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5" />
                    Use Case Diagram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-3">Primary Use Cases</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Submit Payment Request</li>
                        <li>• Review and Approve Request</li>
                        <li>• Process Payment</li>
                        <li>• Manage Vendors</li>
                        <li>• Generate Reports</li>
                        <li>• Audit System Activity</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Secondary Use Cases</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• User Authentication</li>
                        <li>• Upload Documents</li>
                        <li>• Send Notifications</li>
                        <li>• Export Data</li>
                        <li>• Configure Workflow</li>
                        <li>• Backup System Data</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="context" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Context Diagram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 inline-block">
                      <h4 className="font-bold text-lg">Payment Management System</h4>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold">Internal Users</h5>
                        <p className="text-sm text-muted-foreground">Staff, Managers, Finance</p>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold">External Vendors</h5>
                        <p className="text-sm text-muted-foreground">Payment Recipients</p>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold">Accounting System</h5>
                        <p className="text-sm text-muted-foreground">Financial Integration</p>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold">Email Service</h5>
                        <p className="text-sm text-muted-foreground">Notifications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Database Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold">Key Tables</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• users (authentication)</li>
                          <li>• vendors (vendor management)</li>
                          <li>• payment_requests (core data)</li>
                          <li>• approvals (workflow tracking)</li>
                          <li>• audit_log (system activity)</li>
                          <li>• attachments (file storage)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5" />
                      Technology Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold">Frontend</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• React with TypeScript</li>
                          <li>• Tailwind CSS</li>
                          <li>• Shadcn/ui components</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold">Backend Options</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Supabase (recommended)</li>
                          <li>• Node.js + Express</li>
                          <li>• Python + Django</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};