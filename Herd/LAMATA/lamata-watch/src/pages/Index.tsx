import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import VideoFeed from "@/components/VideoFeed/VideoFeed";
import AlertSystem, { Alert } from "@/components/Alert/AlertSystem";
import ActivityLog from "@/components/Activity/ActivityLog";
import StatsCard from "@/components/Dashboard/StatsCard";
import { AlertTriangle, ArrowUpRight, Clock, Video } from "lucide-react";

// Sample feed data
const CAMERA_FEEDS = [
  { id: "cam1", name: "Front Entrance", location: "Main Building" },
  { id: "cam2", name: "Parking Lot", location: "North Side" },
  { id: "cam3", name: "Loading Dock", location: "Warehouse" },
  { id: "cam4", name: "Server Room", location: "IT Department" },
  { id: "cam5", name: "Reception", location: "Main Building" },
  { id: "cam6", name: "Executive Suite", location: "3rd Floor" },
];

const Index = () => {
  const { toast } = useToast();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [totalAnomalies, setTotalAnomalies] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  
  useEffect(() => {
    // Simulate calculating average response time (2-5 seconds)
    setResponseTime(Math.floor(Math.random() * 3) + 2);
  }, []);
  
  const handleAnomaly = (feedId: string, location: string) => {
    const newAlert: Alert = {
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      feedId,
      location,
      timestamp: new Date(),
      viewed: false,
    };
    
    setAlerts((prev) => [newAlert, ...prev]);
    setTotalAnomalies((prev) => prev + 1);
    
    // Show toast notification
    toast({
      title: "Anomaly Detected!",
      description: `Unusual activity detected at ${location}`,
      variant: "destructive",
    });
  };
  
  const dismissAlert = (id: string) => {
    setAlerts((prev) => 
      prev.map((alert) => 
        alert.id === id ? { ...alert, viewed: true } : alert
      )
    );
  };
  
  const viewAllAlerts = () => {
    // This would navigate to a detailed alerts page in a real application
    console.log("View all alerts clicked");
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Security Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time surveillance monitoring and anomaly detection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Active Cameras" 
            value={CAMERA_FEEDS.length} 
            icon={<Video className="h-5 w-5" />} 
          />
          <StatsCard 
            title="Detected Anomalies" 
            value={totalAnomalies} 
            icon={<AlertTriangle className="h-5 w-5" />} 
            change={{ value: 12, positive: false }}
          />
          <StatsCard 
            title="Avg Response Time" 
            value={`${responseTime}s`} 
            icon={<Clock className="h-5 w-5" />} 
            change={{ value: 8, positive: true }}
          />
          <StatsCard 
            title="System Status" 
            value="Operational" 
            icon={<ArrowUpRight className="h-5 w-5" />} 
          />
        </div>
        
        <div>
          <h2 className="text-xl font-medium mb-4">Live Camera Feeds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMERA_FEEDS.map((feed) => (
              <VideoFeed 
                key={feed.id}
                id={feed.id}
                name={feed.name}
                location={feed.location}
                onAnomaly={handleAnomaly}
              />
            ))}
          </div>
        </div>
        
        <div>
          <ActivityLog activities={alerts} />
        </div>
      </div>
      
      <AlertSystem 
        alerts={alerts.filter((a) => !a.viewed)} 
        onDismiss={dismissAlert}
        onViewAll={viewAllAlerts}
      />
    </DashboardLayout>
  );
};

export default Index;
