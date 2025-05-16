import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle, Bell, CheckCircle, Info, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "alert" | "warning" | "info" | "success";
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: "notif-1",
    type: "alert",
    title: "Critical Alert",
    description: "Unauthorized access detected at Front Entrance",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    read: false,
  },
  {
    id: "notif-2",
    type: "warning",
    title: "Motion Detected",
    description: "Movement detected in Parking Lot after hours",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
  },
  {
    id: "notif-3",
    type: "info",
    title: "System Update",
    description: "The system has been updated to version 1.2.0",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: true,
  },
  {
    id: "notif-4",
    type: "success",
    title: "Anomaly Resolved",
    description: "The previously detected anomaly has been resolved",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    read: true,
  },
  {
    id: "notif-5",
    type: "warning",
    title: "Battery Low",
    description: "Camera 3 (Loading Dock) battery level is below 20%",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
    read: true,
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>(SAMPLE_NOTIFICATIONS);
  const [activeTab, setActiveTab] = React.useState("all");
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const filteredNotifications = React.useMemo(() => {
    switch (activeTab) {
      case "unread":
        return notifications.filter(n => !n.read);
      case "alerts":
        return notifications.filter(n => n.type === "alert");
      case "general":
        return notifications.filter(n => n.type === "info" || n.type === "success");
      default:
        return notifications;
    }
  }, [activeTab, notifications]);
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  
  const clearAll = () => {
    setNotifications([]);
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated with system alerts and notifications
            </p>
          </div>
          <div className="flex space-x-2">
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            )}
            <Button variant="outline" onClick={clearAll}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">
                All
                <Badge className="ml-2" variant="secondary">{notifications.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                <Badge className="ml-2" variant="secondary">{unreadCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-4">
            {renderNotificationList(filteredNotifications, markAsRead, deleteNotification, getNotificationIcon)}
          </TabsContent>
          
          <TabsContent value="unread" className="mt-4">
            {renderNotificationList(filteredNotifications, markAsRead, deleteNotification, getNotificationIcon)}
          </TabsContent>
          
          <TabsContent value="alerts" className="mt-4">
            {renderNotificationList(filteredNotifications, markAsRead, deleteNotification, getNotificationIcon)}
          </TabsContent>
          
          <TabsContent value="general" className="mt-4">
            {renderNotificationList(filteredNotifications, markAsRead, deleteNotification, getNotificationIcon)}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

const renderNotificationList = (
  notifications: Notification[], 
  markAsRead: (id: string) => void,
  deleteNotification: (id: string) => void,
  getNotificationIcon: (type: string) => React.ReactNode
) => {
  if (notifications.length === 0) {
    return (
      <div className="text-center py-12">
        <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No notifications</h3>
        <p className="text-muted-foreground">You're all caught up!</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`p-4 border rounded-lg ${notification.read ? "" : "bg-accent/50"}`}
        >
          <div className="flex items-start gap-4">
            <div className="mt-1">
              {getNotificationIcon(notification.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{notification.title}</h3>
                <span className="text-xs text-muted-foreground">
                  {formatTimestamp(notification.timestamp)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {notification.description}
              </p>
            </div>
            <div className="flex gap-2">
              {!notification.read && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as read
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => deleteNotification(notification.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatTimestamp = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return "Just now";
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
  
  return date.toLocaleDateString();
};

export default Notifications;
