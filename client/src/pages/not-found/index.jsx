import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button"; // Adjust the import path as needed

function NotFound() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Page doesn't exist</h1>
      <Button onClick={handleRedirect} className="mt-4">
        Redirect to Home
      </Button>
    </div>
  );
}

export default NotFound;
