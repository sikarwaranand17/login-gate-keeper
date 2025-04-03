
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AuthForm from "@/components/AuthForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading, isAuthenticated } = useAuth();
  
  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  
  const handleSubmit = async (data: { name?: string; email: string; password: string }) => {
    if (data.name) {
      const success = await register(data.name, data.email, data.password);
      if (success) {
        navigate("/dashboard");
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-md">
          <AuthForm
            type="register"
            onSubmit={handleSubmit}
            isLoading={isLoading}
            footer={
              <p className="text-sm text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in
                </Link>
              </p>
            }
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
