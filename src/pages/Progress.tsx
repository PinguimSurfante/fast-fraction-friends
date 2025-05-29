
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Award, TrendingUp } from "lucide-react";

const achievements = [
  { id: 1, title: "First Steps! 👶", description: "Completed your first lesson", earned: true, icon: "🌟" },
  { id: 2, title: "Pizza Master! 🍕", description: "Scored 500+ in Pizza Fractions", earned: true, icon: "🍕" },
  { id: 3, title: "Quick Learner! ⚡", description: "Completed 3 lessons in one day", earned: true, icon: "⚡" },
  { id: 4, title: "Memory Champion! 🧠", description: "Perfect score in Memory Match", earned: false, icon: "🧠" },
  { id: 5, title: "Fraction Explorer! 🗺️", description: "Tried all available games", earned: false, icon: "🗺️" },
  { id: 6, title: "Study Streak! 🔥", description: "Learned for 7 days in a row", earned: false, icon: "🔥" }
];

const weeklyProgress = [
  { day: "Mon", lessons: 2, games: 3 },
  { day: "Tue", lessons: 1, games: 2 },
  { day: "Wed", lessons: 3, games: 1 },
  { day: "Thu", lessons: 0, games: 4 },
  { day: "Fri", lessons: 1, games: 2 },
  { day: "Sat", lessons: 2, games: 3 },
  { day: "Sun", lessons: 1, games: 1 }
];

export default function Progress() {
  const totalLessons = 5;
  const completedLessons = 2;
  const totalGames = 6;
  const playedGames = 4;
  const totalStars = 11;
  const earnedAchievements = achievements.filter(a => a.earned).length;

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header Section */}
      <div className="kid-card max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl animate-bounce-slow">📊</div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-purple-700 mb-2">
              Your Amazing Progress! 🌟
            </h1>
            <p className="text-xl text-purple-600 font-medium">
              Look how much you've learned! You're becoming a fraction superhero! 🦸‍♀️
            </p>
          </div>
        </div>
      </div>

      {/* Level and XP */}
      <div className="max-w-4xl mx-auto">
        <div className="kid-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🏅</div>
              <div>
                <h2 className="text-3xl font-bold text-purple-700">Fraction Explorer</h2>
                <p className="text-lg text-purple-600 font-medium">Level 3</p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-kid-purple to-kid-pink text-white text-xl font-bold px-6 py-3">
              ⭐ {totalStars} Stars
            </Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-purple-600 font-medium">
              <span>Progress to Level 4</span>
              <span>85/100 XP</span>
            </div>
            <Progress value={85} className="h-6" />
            <p className="text-center text-purple-600 font-medium">
              Just 15 more XP to reach Level 4! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="kid-card text-center">
          <CardContent className="pt-6">
            <div className="text-4xl mb-3">📚</div>
            <div className="text-3xl font-bold text-purple-700 mb-2">
              {completedLessons}/{totalLessons}
            </div>
            <p className="text-purple-600 font-medium">Lessons Complete</p>
            <Progress value={(completedLessons / totalLessons) * 100} className="mt-3 h-3" />
          </CardContent>
        </Card>

        <Card className="kid-card text-center">
          <CardContent className="pt-6">
            <div className="text-4xl mb-3">🎮</div>
            <div className="text-3xl font-bold text-purple-700 mb-2">
              {playedGames}/{totalGames}
            </div>
            <p className="text-purple-600 font-medium">Games Played</p>
            <Progress value={(playedGames / totalGames) * 100} className="mt-3 h-3" />
          </CardContent>
        </Card>

        <Card className="kid-card text-center">
          <CardContent className="pt-6">
            <div className="text-4xl mb-3">🏆</div>
            <div className="text-3xl font-bold text-purple-700 mb-2">
              {earnedAchievements}/{achievements.length}
            </div>
            <p className="text-purple-600 font-medium">Achievements</p>
            <Progress value={(earnedAchievements / achievements.length) * 100} className="mt-3 h-3" />
          </CardContent>
        </Card>

        <Card className="kid-card text-center">
          <CardContent className="pt-6">
            <div className="text-4xl mb-3">📈</div>
            <div className="text-3xl font-bold text-purple-700 mb-2">7</div>
            <p className="text-purple-600 font-medium">Day Streak</p>
            <div className="mt-3 flex justify-center gap-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-kid-green rounded-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Activity */}
      <div className="max-w-4xl mx-auto">
        <Card className="kid-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              This Week's Activity 📅
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {weeklyProgress.map((day, index) => (
                <div key={day.day} className="text-center">
                  <div className="text-sm font-medium text-purple-600 mb-2">{day.day}</div>
                  <div className="space-y-2">
                    <div className="bg-kid-blue rounded-lg p-2">
                      <div className="text-xs text-purple-600">Lessons</div>
                      <div className="text-lg font-bold text-purple-700">{day.lessons}</div>
                    </div>
                    <div className="bg-kid-pink rounded-lg p-2">
                      <div className="text-xs text-purple-600">Games</div>
                      <div className="text-lg font-bold text-purple-700">{day.games}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Your Awesome Achievements! 🏆
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`kid-card ${achievement.earned ? 'border-kid-green/50 bg-gradient-to-br from-kid-green/10 to-white' : 'opacity-60'}`}
            >
              <CardContent className="pt-6 text-center">
                <div className={`text-5xl mb-3 ${achievement.earned ? 'animate-bounce-slow' : 'grayscale'}`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {achievement.description}
                </p>
                {achievement.earned ? (
                  <Badge className="bg-kid-green text-green-700 font-bold">
                    ✅ Earned!
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-purple-300 text-purple-600">
                    🔒 Locked
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Encouragement */}
      <div className="kid-card max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-purple-700 mb-2">
          You're Incredible! 
        </h3>
        <p className="text-lg text-purple-600 font-medium">
          Look at all this amazing progress! Keep learning and having fun - you're going to be a fraction master! 🌟
        </p>
      </div>
    </div>
  );
}
