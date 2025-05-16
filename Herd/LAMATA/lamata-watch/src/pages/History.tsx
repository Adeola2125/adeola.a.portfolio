import React, { useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HistoryEvent {
  id: string;
  type: string;
  location: string;
  timestamp: Date;
  details: string;
}

const SAMPLE_HISTORY: HistoryEvent[] = [
  {
    id: "hist-1",
    type: "Anomaly",
    location: "Front Entrance",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    details: "Unidentified person loitering near entrance"
  },
  {
    id: "hist-2",
    type: "Alert",
    location: "Parking Lot",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    details: "Vehicle parked in restricted area"
  },
  {
    id: "hist-3",
    type: "System",
    location: "Server Room",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    details: "Temperature threshold exceeded"
  },
  {
    id: "hist-4",
    type: "Anomaly",
    location: "Reception",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    details: "Unusual activity detected after hours"
  },
  {
    id: "hist-5",
    type: "Alert",
    location: "Executive Suite",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    details: "Unauthorized access attempt"
  }
];

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState<HistoryEvent[]>(SAMPLE_HISTORY);
  const [timeFilter, setTimeFilter] = useState("all");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm) {
      setFilteredHistory(SAMPLE_HISTORY);
      return;
    }
    
    const filtered = SAMPLE_HISTORY.filter(
      event => 
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredHistory(filtered);
  };
  
  const filterByTime = (filter: string) => {
    setTimeFilter(filter);
    
    const now = new Date();
    let filtered = [...SAMPLE_HISTORY];
    
    switch (filter) {
      case "today":
        filtered = SAMPLE_HISTORY.filter(event => {
          const today = new Date(now);
          today.setHours(0, 0, 0, 0);
          return event.timestamp >= today;
        });
        break;
      case "week":
        filtered = SAMPLE_HISTORY.filter(event => {
          const weekAgo = new Date(now);
          weekAgo.setDate(weekAgo.getDate() - 7);
          return event.timestamp >= weekAgo;
        });
        break;
      case "month":
        filtered = SAMPLE_HISTORY.filter(event => {
          const monthAgo = new Date(now);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          return event.timestamp >= monthAgo;
        });
        break;
      default:
        // All events
        break;
    }
    
    setFilteredHistory(filtered);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Event History</h1>
          <p className="text-muted-foreground">
            Review past surveillance events and anomaly detections
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="secondary">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Tabs defaultValue="all" value={timeFilter} onValueChange={filterByTime}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="rounded-md border">
          <div className="p-4">
            {filteredHistory.length > 0 ? (
              <div className="divide-y">
                {filteredHistory.map((event) => (
                  <div key={event.id} className="py-4">
                    <div className="flex justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`inline-block h-2 w-2 rounded-full ${
                            event.type === 'Anomaly' ? 'bg-destructive' : 
                            event.type === 'Alert' ? 'bg-amber-500' : 'bg-blue-500'
                          }`}></span>
                          <span className="font-medium">{event.type}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {event.location}
                        </p>
                      </div>
                      <div className="text-sm text-right">
                        <div className="font-medium">
                          {event.timestamp.toLocaleDateString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {event.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">
                      {event.details}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No events found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;
