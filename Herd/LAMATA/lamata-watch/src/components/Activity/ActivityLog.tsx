import React from "react";
import { Alert } from "../Alert/AlertSystem";

interface ActivityLogProps {
  activities: Alert[];
}

const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
  const sortedActivities = [...activities].sort((a, b) => 
    b.timestamp.getTime() - a.timestamp.getTime()
  );
  
  return (
    <div className="bg-card border rounded-md overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">Recent Activity</h2>
      </div>
      <div className="overflow-y-auto max-h-96">
        {sortedActivities.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            No activity recorded yet
          </div>
        ) : (
          <ul>
            {sortedActivities.map((activity) => (
              <li 
                key={activity.id}
                className="activity-item border-b last:border-0 p-3 flex items-center"
              >
                <div className="mr-3">
                  <div className="h-2 w-2 rounded-full bg-destructive"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Anomaly detected at {activity.location}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp.toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;