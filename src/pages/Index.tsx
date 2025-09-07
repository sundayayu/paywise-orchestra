import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dashboard } from "@/components/Dashboard";
import { SDLCDocumentation } from "@/components/SDLCDocumentation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="border-b bg-card shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <TabsList className="h-16 bg-transparent">
              <TabsTrigger value="dashboard" className="text-base">
                Payment System
              </TabsTrigger>
              <TabsTrigger value="documentation" className="text-base">
                SDLC Documentation
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="dashboard" className="mt-0">
          <Dashboard />
        </TabsContent>

        <TabsContent value="documentation" className="mt-0">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <SDLCDocumentation />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
