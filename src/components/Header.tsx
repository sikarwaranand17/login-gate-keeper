
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">AuthSystem</Link>
        
        <nav>
          <ul className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <li className="hidden md:block text-sm text-gray-600">
                  Welcome, {user?.name}
                </li>
                <li>
                  <Button variant="ghost" onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
                <li>
                  <Button 
                    variant={location.pathname === "/dashboard" ? "default" : "outline"}
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button 
                    variant={location.pathname === "/login" ? "default" : "outline"} 
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </li>
                <li>
                  <Button 
                    variant={location.pathname === "/register" ? "default" : "secondary"}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
