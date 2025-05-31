import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Marca que o usuário pagou
    localStorage.setItem("userPaid", "true");

    // Redireciona para as lições
    window.location.href = "/#/lessons";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-kid-green/20 to-kid-purple/10 text-purple-700 text-center p-6">
      <div className="text-2xl font-bold">
        🥳 Purchase confirmed! We're unlocking your lessons...
      </div>
    </div>
  );
}
