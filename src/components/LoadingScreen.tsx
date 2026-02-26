'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 30;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Brand */}
        <div className="space-y-2 text-center">
          <h1 className="text-5xl font-bold text-white font-serif tracking-tight">
            Lens
            <span className="block text-accent">Studios</span>
          </h1>
          <p className="text-sm text-gray-400 tracking-widest font-light">
            PREPARING YOUR VISUAL JOURNEY
          </p>
        </div>

        {/* Loading animation */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-8 bg-accent rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.15}s`,
                opacity: 0.6 + (0.4 * (1 + Math.sin((progress + i * 120) / 100 * Math.PI))),
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text with percentage */}
        <p className="text-gray-500 text-sm tracking-wide font-light">
          {Math.round(progress)}% Ready
        </p>
      </div>
    </div>
  );
}
