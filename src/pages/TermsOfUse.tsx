import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function TermsOfUse() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9c3] via-[#d9f99d] to-[#a5f3fc] p-8">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-white/50">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">📜 Terms of Use</h1>
        <p className="text-xl text-purple-600 font-medium leading-relaxed mb-8">
          👉 By using this site, you agree to use it in a safe, fun, and educational way!
        </p>
        <div className="text-center mt-10">
          <Button
            onClick={() => navigate(-1)}
            className="kid-button text-lg px-8 py-4 text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-full"
          >
            ⬅️ Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
