import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9c3] via-[#d9f99d] to-[#a5f3fc] p-8">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-white/50 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">📬 Contact Us</h1>
        <p className="text-xl text-purple-600 font-medium mb-4">
          Feel free to reach out to us! We'd love to hear from you. 💌
        </p>
        <p className="text-2xl font-bold text-purple-700 mb-8">📸  @fractionfast</p>

        <div className="text-center mt-12">
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
