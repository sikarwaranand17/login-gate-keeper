
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">User ID</p>
                  <p className="font-medium text-xs">{user?.id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Activity Card */}
          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <p className="font-medium">Login successful</p>
                  <p className="text-sm text-gray-500">Just now</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <p className="font-medium">Account created</p>
                  <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Protected Content Card */}
          <Card>
            <CardHeader>
              <CardTitle>Protected Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">
                This content is only visible to authenticated users like you.
              </p>
              <p className="bg-blue-50 p-3 rounded text-blue-800 text-sm">
                You've successfully implemented authentication! This area would 
                contain your application's protected features and content.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
