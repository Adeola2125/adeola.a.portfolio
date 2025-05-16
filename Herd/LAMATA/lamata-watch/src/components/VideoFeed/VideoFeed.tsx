import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

interface VideoFeedProps {
  id: string;
  name: string;
  location: string;
  onAnomaly: (feedId: string, location: string) => void;
}

const VideoFeed: React.FC<VideoFeedProps> = ({ id, name, location, onAnomaly }) => {
  const [hasAnomaly, setHasAnomaly] = useState(false);
  const [confidenceLevel, setConfidenceLevel] = useState(0);
  
  // Generate a random background color for the feed
  const bgIndex = parseInt(id, 36) % 5 + 1;
  const feedBgClass = `bg-slate-${bgIndex * 100 + 700}`;
  
  useEffect(() => {
    // Simulate random anomaly detection
    const checkForAnomalies = () => {
      const randomValue = Math.random();
      // 10% chance of detecting an anomaly
      if (randomValue < 0.1) {
        const newConfidence = Math.floor(Math.random() * 40) + 60; // 60-99% confidence
        setConfidenceLevel(newConfidence);
        setHasAnomaly(true);
        onAnomaly(id, location);
        
        // Clear anomaly after some time
        setTimeout(() => {
          setHasAnomaly(false);
          setConfidenceLevel(0);
        }, Math.random() * 10000 + 5000); // Clear after 5-15 seconds
      }
    };
    
    const interval = setInterval(checkForAnomalies, Math.random() * 15000 + 10000); // Check every 10-25 seconds
    
    return () => clearInterval(interval);
  }, [id, location, onAnomaly]);
  
  return (
    <div className={`video-feed h-48 ${feedBgClass}`}>
      <div className="video-feed-overlay">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-white">{name}</h3>
            <p className="text-xs text-gray-300">{location}</p>
          </div>
          <div className={`anomaly-indicator ${hasAnomaly ? 'alert' : ''}`} />
        </div>
        {hasAnomaly && (
          <div className="mt-auto bg-black bg-opacity-60 rounded p-2 flex items-center text-red-400">
            <AlertTriangle className="h-4 w-4 mr-2" />
            <span className="text-xs">Anomaly detected ({confidenceLevel}% confidence)</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoFeed;
