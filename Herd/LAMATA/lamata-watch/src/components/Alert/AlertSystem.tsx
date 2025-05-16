import React from "react";
import { AlertCircle, X } from "lucide-react";

export interface Alert {
  id: string;
  feedId: string;
  location: string;
  timestamp: Date;
  viewed: boolean;
}

interface AlertSystemProps {
  alerts: Alert[];
  onDismiss: (id: string) => void;
  onViewAll: () => void;
}

const AlertSystem: React.FC<AlertSystemProps> = ({ alerts, onDismiss, onViewAll }) => {
  const recentAlerts = alerts.slice(0, 5);
  
  if (recentAlerts.length === 0) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 flex flex-col gap-2">
      {recentAlerts.map((alert) => (
        <div 
          key={alert.id} 
          className={`bg-card border ${
            alert.viewed ? 'border-muted' : 'border-destructive'
          } rounded-md p-3 shadow-lg alert-notification`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-destructive" />
              <div>
                <h4 className="font-medium">Anomaly Detected</h4>
                <p className="text-sm text-muted-foreground">
                  {alert.location} - {alert.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <button 
              onClick={() => onDismiss(alert.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      
      {alerts.length > 5 && (
        <button 
          onClick={onViewAll}
          className="bg-primary text-primary-foreground rounded-md p-2 text-sm font-medium text-center"
        >
          View all {alerts.length} alerts
        </button>
      )}
    </div>
  );
};

export default AlertSystem;