import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    positive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="bg-card border rounded-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          
          {change && (
            <div className="flex items-center mt-1">
              <span className={change.positive ? "text-green-500" : "text-red-500"}>
                {change.positive ? "↑" : "↓"} {Math.abs(change.value)}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs last week</span>
            </div>
          )}
        </div>
        <div className="h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;