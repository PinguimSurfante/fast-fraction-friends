import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Check } from "lucide-react";
import { Menu } from "@/components/Menu";

const defaultLessons = [
  {
    id: 1,
    title: "What are Fractions? 🍰",
    description: "Learn the basics of fractions with our friendly owl teacher!",
    duration: "5 min",
    difficulty: "Easy",
    icon: "🍰"
  },
  {
    id: 2,
    title: "Parts of a Whole 🍕",
    description: "Discover how fractions show parts of pizzas, cakes, and more!",
    duration: "7 min",
    difficulty: "Easy",
    icon: "🍕"
  },
  {
    id: 3,
    title: "Fractions in Sets 🎾",
    description: "Learn about fractions when counting groups of objects!",
    duration: "6 min",
    difficulty: "Medium",
    icon: "🎾"
  },
  {
    id: 4,
    title: "Equal Fractions 🎭",
    description: "Find out how different fractions can mean the same thing!",
    duration: "8 min",
    difficulty: "Medium",
    icon: "🎭"
  },
  {
    id: 5,
    title: "Comparing Fractions ⚖️",
    description: "Learn which fractions are bigger or smaller!",
    duration: "10 min",
    difficulty: "Hard",
    icon: "⚖️"
  }
];

const difficultyColors = {
  Easy: "bg-kid-green",
  Medium: "bg-kid-yellow",
  Hard: "bg-kid-orange"
};

export default function Lessons() {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState(() => {
    const saved = localStorage.getItem("completedLessons");
    const completed = saved ? JSON.parse(saved) : [];
    return defaultLessons.map((lesson) => ({
      ...lesson,
      completed: completed.includes(lesson.id)
    }));
  });

  const completedLessons = lessons.filter((lesson) => lesson.completed).length;
  const progressPercentage = (completedLessons / lessons.length) * 100;

  const LessonCard = ({ lesson }: { lesson: typeof lessons[0] }) => (
    <Card className={`lesson-card ${lesson.completed ? 'border-kid-green/50' : 'border-kid-blue/50'}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{lesson.icon}</div>
            <div>
              <CardTitle className="text-xl text-purple-700 font-bold">
                {lesson.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={`${difficultyColors[lesson.difficulty]} text-purple-700 font-semibold`}>
                  {lesson.difficulty}
                </Badge>
                <span className="text-sm text-purple-500 font-medium">⏱️ {lesson.duration}</span>
              </div>
            </div>
          </div>
          {lesson.completed && (
            <div className="bg-kid-green rounded-full p-2">
              <Check className="h-6 w-6 text-green-700" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-purple-600 mb-4 font-medium">{lesson.description}</p>
        <Button 
          className="w-full kid-button font-bold text-lg py-3 rounded-2xl"
          onClick={() => {
            const completed = JSON.parse(localStorage.getItem("completedLessons") || "[]");
            if (!completed.includes(lesson.id)) {
              const updated = [...completed, lesson.id];
              localStorage.setItem("completedLessons", JSON.stringify(updated));
              setLessons((prev) => prev.map((l) => l.id === lesson.id ? { ...l, completed: true } : l));
            }
            navigate(`/lessons/${lesson.id}`);
          }}
        >
          <Play className="mr-2 h-5 w-5" />
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen p-6 space-y-8">
      <Menu />
      {/* Header Section */}
      <div className="kid-card max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl animate-bounce-slow">🦉</div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-purple-700 mb-2">
              Welcome to Fraction Lessons! 📚
            </h1>
            <p className="text-xl text-purple-600 font-medium">
              Hi there, young mathematician! I'm Professor Owl, and I'm here to make fractions super fun and easy! 🎉
            </p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-kid-purple/20 to-kid-pink/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-purple-700">Your Progress 🌟</h2>
            <Badge className="bg-kid-yellow text-purple-700 text-lg font-bold px-4 py-2">
              {completedLessons}/{lessons.length} Complete
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-4 mb-2" />
          <p className="text-purple-600 font-medium text-center">
            You've completed {completedLessons} out of {lessons.length} lessons! Keep going! 🚀
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Choose Your Next Adventure! 🗺️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>

      {/* Fun Encouragement */}
      <div className="kid-card max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">🎊</div>
        <h3 className="text-2xl font-bold text-purple-700 mb-2">
          You're Doing Amazing!
        </h3>
        <p className="text-lg text-purple-600 font-medium">
          Every lesson makes you a fraction superhero! Keep up the fantastic work! 💪✨
        </p>
      </div>
    </div>
  );
}