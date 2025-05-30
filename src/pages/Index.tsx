
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to lessons page immediately
    navigate("/lessons", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl animate-bounce-slow mb-4">🧮</div>
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Fraction Fast Pack</h1>
        <p className="text-xl text-purple-600">Loading your learning adventure...</p>
      </div>
    </div>
  );
};

export default Index;
