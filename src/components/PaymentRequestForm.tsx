import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, DollarSign } from "lucide-react";

export const PaymentRequestForm = () => {
  const [formData, setFormData] = useState({
    vendor: "",
    amount: "",
    description: "",
    category: "",
    urgency: "",
    attachments: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Request Submitted",
      description: "Your payment request has been submitted for approval.",
    });
    setFormData({
      vendor: "",
      amount: "",
      description: "",
      category: "",
      urgency: "",
      attachments: ""
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            New Payment Request
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="vendor">Vendor Name</Label>
                <Select value={formData.vendor} onValueChange={(value) => setFormData({...formData, vendor: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vendor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech-solutions">Tech Solutions Inc.</SelectItem>
                    <SelectItem value="office-supplies">Office Supplies Co.</SelectItem>
                    <SelectItem value="marketing-agency">Marketing Agency</SelectItem>
                    <SelectItem value="consulting-firm">Consulting Firm LLC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount ($)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    type="number"
                    className="pl-10"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software & Licenses</SelectItem>
                    <SelectItem value="office-supplies">Office Supplies</SelectItem>
                    <SelectItem value="marketing">Marketing & Advertising</SelectItem>
                    <SelectItem value="consulting">Consulting Services</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide details about this payment request..."
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachments">Supporting Documents</Label>
              <Input
                id="attachments"
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                onChange={(e) => setFormData({...formData, attachments: e.target.value})}
              />
              <p className="text-xs text-muted-foreground">
                Upload invoices, quotes, contracts, or other supporting documents (PDF, DOC, images)
              </p>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Submit Request
              </Button>
              <Button type="button" variant="outline" onClick={() => setFormData({
                vendor: "",
                amount: "",
                description: "",
                category: "",
                urgency: "",
                attachments: ""
              })}>
                Clear Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};