import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Configure system preferences and surveillance parameters
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium">Notifications</h2>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for critical anomalies
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your devices
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">SMS Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive SMS for critical system alerts
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium">Detection Sensitivity</h2>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="motion-sensitivity">Motion Sensitivity</Label>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Slider
                  id="motion-sensitivity"
                  defaultValue={[75]}
                  max={100}
                  step={1}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="anomaly-threshold">Anomaly Threshold</Label>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <Slider
                  id="anomaly-threshold"
                  defaultValue={[60]}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium">Contact Information</h2>
            <Separator className="my-4" />
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergency-contact">Emergency Contact</Label>
                  <Input id="emergency-contact" placeholder="Name of contact" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency-phone">Emergency Phone Number</Label>
                  <Input id="emergency-phone" placeholder="Phone number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emergency-email">Emergency Email</Label>
                <Input id="emergency-email" type="email" placeholder="Email address" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium">System</h2>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Use dark theme for interface
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-Update</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically install updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>System Version</Label>
                  <Badge variant="outline">v1.2.0</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Database Status</Label>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Connected</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
