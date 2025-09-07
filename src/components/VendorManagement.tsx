import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Building, Plus, Search, Edit, Trash2 } from "lucide-react";

interface Vendor {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  taxId: string;
  status: "active" | "inactive";
  totalPayments: number;
  lastPayment: string;
}

const mockVendors: Vendor[] = [
  {
    id: "V-001",
    name: "Tech Solutions Inc.",
    contactPerson: "Robert Johnson",
    email: "robert@techsolutions.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Silicon Valley, CA 94000",
    taxId: "12-3456789",
    status: "active",
    totalPayments: 45000,
    lastPayment: "2024-01-10"
  },
  {
    id: "V-002",
    name: "Office Supplies Co.",
    contactPerson: "Maria Garcia",
    email: "maria@officesupplies.com",
    phone: "+1 (555) 987-6543",
    address: "456 Supply Avenue, Business District, NY 10001",
    taxId: "98-7654321",
    status: "active",
    totalPayments: 12500,
    lastPayment: "2024-01-14"
  },
  {
    id: "V-003",
    name: "Marketing Agency",
    contactPerson: "David Wilson",
    email: "david@marketingpro.com",
    phone: "+1 (555) 456-7890",
    address: "789 Creative Boulevard, Downtown, CA 90210",
    taxId: "45-6789012",
    status: "active",
    totalPayments: 75000,
    lastPayment: "2024-01-12"
  }
];

export const VendorManagement = () => {
  const [vendors, setVendors] = useState(mockVendors);
  const [searchTerm, setSearchTerm] = useState("");
  const [newVendor, setNewVendor] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    taxId: ""
  });
  const { toast } = useToast();

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddVendor = () => {
    const vendor: Vendor = {
      id: `V-${String(vendors.length + 1).padStart(3, '0')}`,
      ...newVendor,
      status: "active",
      totalPayments: 0,
      lastPayment: "Never"
    };
    
    setVendors([...vendors, vendor]);
    setNewVendor({
      name: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      taxId: ""
    });
    
    toast({
      title: "Vendor Added",
      description: `${vendor.name} has been successfully added to the system.`,
    });
  };

  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "bg-status-approved text-white" 
      : "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Add Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vendors..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Vendor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Vendor</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Company Name</Label>
                  <Input
                    id="name"
                    value={newVendor.name}
                    onChange={(e) => setNewVendor({...newVendor, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Person</Label>
                  <Input
                    id="contact"
                    value={newVendor.contactPerson}
                    onChange={(e) => setNewVendor({...newVendor, contactPerson: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newVendor.email}
                    onChange={(e) => setNewVendor({...newVendor, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={newVendor.phone}
                    onChange={(e) => setNewVendor({...newVendor, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={newVendor.address}
                  onChange={(e) => setNewVendor({...newVendor, address: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="taxId">Tax ID</Label>
                <Input
                  id="taxId"
                  value={newVendor.taxId}
                  onChange={(e) => setNewVendor({...newVendor, taxId: e.target.value})}
                />
              </div>
              
              <Button onClick={handleAddVendor} className="w-full">
                Add Vendor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Vendors Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVendors.map((vendor) => (
          <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{vendor.name}</CardTitle>
                </div>
                <Badge className={getStatusColor(vendor.status)}>
                  {vendor.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium">Contact Person</p>
                <p className="text-sm text-muted-foreground">{vendor.contactPerson}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{vendor.email}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{vendor.phone}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Total Payments</p>
                <p className="text-lg font-semibold">${vendor.totalPayments.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Last Payment</p>
                <p className="text-sm text-muted-foreground">{vendor.lastPayment}</p>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-3 w-3" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Trash2 className="mr-2 h-3 w-3" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};