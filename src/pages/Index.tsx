
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Secure Authentication System — login-gate-keeper</title>
        <meta name="description" content="A robust authentication demo with user registration, secure login, and protected dashboard content." />
        <link rel="canonical" href="https://login-gate-keeper.lovable.app/" />
        <meta property="og:title" content="Secure Authentication System — login-gate-keeper" />
        <meta property="og:description" content="A robust authentication demo with user registration, secure login, and protected dashboard content." />
        <meta property="og:url" content="https://login-gate-keeper.lovable.app/" />
      </Helmet>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Authentication System
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A robust, easy-to-use authentication solution with user registration, login, and protected content.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {isAuthenticated ? (
                <Button 
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                  className="px-8"
                >
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    size="lg"
                    onClick={() => navigate("/register")}
                    className="px-8"
                  >
                    Get Started
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/login")}
                    className="px-8"
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Secure Authentication</h3>
                <p className="text-gray-600">
                  Industry-standard security practices to keep user accounts safe and protected.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">User Management</h3>
                <p className="text-gray-600">
                  Easy registration process and user profile management capabilities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Protected Routes</h3>
                <p className="text-gray-600">
                  Control access to specific content based on authentication status.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Try the Demo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Use these credentials to test the login functionality:
            </p>
            
            <div className="bg-white border rounded-lg p-4 max-w-md mx-auto">
              <div className="text-left mb-2">
                <span className="font-medium">Email:</span> 
                <code className="ml-2 bg-gray-100 px-2 py-1 rounded">demo@example.com</code>
              </div>
              <div className="text-left">
                <span className="font-medium">Password:</span> 
                <code className="ml-2 bg-gray-100 px-2 py-1 rounded">password</code>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
