import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Edit, Camera } from "lucide-react";
import { Menu } from "@/components/Menu";

const avatarOptions = [
  "🐱", "🐶", "🐰", "🐻", "🦊", "🐼",
  "🦉", "🐸", "🐯", "🦁", "🐨", "🐵",
  "🦄", "🐧", "🐙", "🦋", "🐝", "🐞"
];

export default function Profile() {
  const [selectedAvatar, setSelectedAvatar] = useState("🐱");
  const [name, setName] = useState("Alex");
  const [parentEmail, setParentEmail] = useState("parent@example.com");
  const [isEditing, setIsEditing] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  const [completedLessons, setCompletedLessons] = useState(0);
  const [playedGames, setPlayedGames] = useState(0);

  useEffect(() => {
    const lessons = JSON.parse(localStorage.getItem("completedLessons") || "[]");
    const games = JSON.parse(localStorage.getItem("playedGames") || "[]");
    setCompletedLessons(lessons.length);
    setPlayedGames(games.length);
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile saved:", { name, parentEmail, avatar: selectedAvatar });
  };

  return (
    <div className="min-h-screen p-6 space-y-8">
      <Menu />

      <div className="kid-card max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl animate-wiggle">👤</div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-purple-700 mb-2">
              My Profile 🌟
            </h1>
            <p className="text-xl text-purple-600 font-medium">
              This is all about you! You can change your picture and information here! 😊
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Info Card */}
        <Card className="kid-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700 flex items-center justify-between">
              My Information 📝
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className={`${isEditing ? 'bg-kid-green hover:bg-green-400' : 'kid-button'} rounded-xl`}
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? "Save" : "Edit"}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <div className="text-8xl bg-white rounded-full p-4 shadow-lg border-4 border-kid-purple/20">
                  {selectedAvatar}
                </div>
                <Dialog open={showAvatarPicker} onOpenChange={setShowAvatarPicker}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full kid-button p-2">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="kid-card max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-purple-700 text-center">
                        Pick Your Avatar! 🎭
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-6 gap-3 p-4">
                      {avatarOptions.map((avatar) => (
                        <button
                          key={avatar}
                          onClick={() => {
                            setSelectedAvatar(avatar);
                            setShowAvatarPicker(false);
                          }}
                          className={`text-4xl p-3 rounded-2xl border-2 transition-all duration-300 hover:scale-110 ${
                            selectedAvatar === avatar
                              ? 'border-kid-purple bg-kid-purple/20'
                              : 'border-gray-200 hover:border-kid-purple/50'
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-lg text-purple-600 font-medium">
                Click the camera to change your avatar! 📸
              </p>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-bold text-purple-700">
                My Name 🏷️
              </Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg font-medium rounded-xl border-2 border-kid-purple/30 focus:border-kid-purple"
                  placeholder="Enter your name"
                />
              ) : (
                <div className="text-xl font-bold text-purple-700 bg-kid-blue/20 rounded-xl p-3">
                  {name}
                </div>
              )}
            </div>

            {/* Parent Email Input */}
            <div className="space-y-2">
              <Label htmlFor="parentEmail" className="text-lg font-bold text-purple-700">
                Parent's Email 📧
              </Label>
              {isEditing ? (
                <Input
                  id="parentEmail"
                  type="email"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="text-lg font-medium rounded-xl border-2 border-kid-purple/30 focus:border-kid-purple"
                  placeholder="parent@example.com"
                />
              ) : (
                <div className="text-lg font-medium text-purple-700 bg-kid-blue/20 rounded-xl p-3">
                  {parentEmail}
                </div>
              )}
            </div>

            {isEditing && (
              <Button onClick={handleSave} className="w-full kid-button font-bold text-lg py-3">
                Save Changes ✅
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Achievement Summary */}
        <Card className="kid-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700">
              My Achievements 🏆
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gradient-to-br from-kid-yellow/30 to-kid-orange/30 rounded-2xl p-4">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-purple-700">11</div>
                <div className="text-purple-600 font-medium">Total Stars</div>
              </div>
              <div className="text-center bg-gradient-to-br from-kid-green/30 to-kid-blue/30 rounded-2xl p-4">
                <div className="text-3xl mb-2">🏅</div>
                <div className="text-2xl font-bold text-purple-700">Level 3</div>
                <div className="text-purple-600 font-medium">Current Level</div>
              </div>
              <div className="text-center bg-gradient-to-br from-kid-pink/30 to-kid-purple/30 rounded-2xl p-4">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-2xl font-bold text-purple-700">{completedLessons}/5</div>
                <div className="text-purple-600 font-medium">Lessons Done</div>
              </div>
              <div className="text-center bg-gradient-to-br from-kid-blue/30 to-kid-purple/30 rounded-2xl p-4">
                <div className="text-3xl mb-2">🎮</div>
                <div className="text-2xl font-bold text-purple-700">{playedGames}/6</div>
                <div className="text-purple-600 font-medium">Games Played</div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-purple-700">Recent Achievements 🌟</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-kid-green/20 rounded-xl p-3">
                  <div className="text-2xl">🍕</div>
                  <div>
                    <div className="font-bold text-purple-700">Pizza Master!</div>
                    <div className="text-sm text-purple-600">Scored 500+ in Pizza Fractions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-kid-yellow/20 rounded-xl p-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <div className="font-bold text-purple-700">Quick Learner!</div>
                    <div className="text-sm text-purple-600">Completed 3 lessons in one day</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Encouragement */}
      <div className="kid-card max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">🌈</div>
        <h3 className="text-2xl font-bold text-purple-700 mb-2">
          You're Amazing, {name}!
        </h3>
        <p className="text-lg text-purple-600 font-medium">
          Keep being awesome and learning new things every day! We're so proud of you! 💫
        </p>
      </div>
    </div>
  );
}
