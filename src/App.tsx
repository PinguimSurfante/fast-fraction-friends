import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

// Páginas principais
import Landing from "./pages/Landing";
import Lessons from "./pages/Lessons";
import Games from "./pages/Games";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Páginas de lições individuais
import Lesson1 from "./pages/lessons/Lesson1";
import Lesson2 from "./pages/lessons/Lesson2";
import Lesson3 from "./pages/lessons/Lesson3";
import Lesson4 from "./pages/lessons/Lesson4";
import Lesson5 from "./pages/lessons/Lesson5";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            {/* Redireciona a raiz para /landing */}
            <Route path="/" element={<Navigate to="/landing" replace />} />

            {/* Página pública (sem sidebar) */}
            <Route path="/landing" element={<Landing />} />

            {/* Rotas internas com sidebar */}
            <Route
              path="/*"
              element={
                <SidebarProvider defaultOpen={true}>
                  <div className="min-h-screen flex w-full">
                    <AppSidebar />
                    <main className="flex-1 overflow-auto">
                      <Routes>
                        <Route path="/lessons" element={<Lessons />} />
                        <Route path="/lessons/1" element={<Lesson1 />} />
                        <Route path="/lessons/2" element={<Lesson2 />} />
                        <Route path="/lessons/3" element={<Lesson3 />} />
                        <Route path="/lessons/4" element={<Lesson4 />} />
                        <Route path="/lessons/5" element={<Lesson5 />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/progress" element={<Progress />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                  </div>
                </SidebarProvider>
              }
            />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
