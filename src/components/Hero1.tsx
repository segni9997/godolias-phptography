import { useEffect, useRef, useId } from "react";

// 1. Define specific interfaces to replace 'any'
interface YTPlayerOptions {
  videoId: string;
  playerVars?: {
    autoplay?: 0 | 1;
    mute?: 0 | 1;
    controls?: 0 | 1;
    rel?: 0 | 1;
    modestbranding?: 0 | 1;
    playsinline?: 0 | 1;
  };
  events?: {
    onReady?: (event: { target: YTPlayer }) => void;
    onStateChange?: (event: { data: number }) => void;
  };
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  destroy(): void;
}

declare global {
  interface Window {
    YT: {
      Player: new (id: string, options: YTPlayerOptions) => YTPlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

function VideoSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  
  const reactId = useId();
  // Clean the ID for compatibility with HTML/CSS selectors
  const playerId = `yt-player-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    const initPlayer = () => {
      if (window.YT && window.YT.Player && !playerRef.current && document.getElementById(playerId)) {
        playerRef.current = new window.YT.Player(playerId, {
          videoId: "jBB6hrGrC4I",
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
        });
      }
    };

    if (!window.YT) {
      if (!document.getElementById("youtube-api-script")) {
        const tag = document.createElement("script");
        tag.id = "youtube-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
      
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') return;

        if (entry.isIntersecting) {
          playerRef.current.playVideo();
        } else {
          playerRef.current.pauseVideo();
        }
      },
      { threshold: 0.5 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [playerId]);

  return (
    <main className="w-full h-screen bg-black flex items-center justify-center">
      <div
        ref={containerRef}
        // Added the style here as requested
        style={{ aspectRatio: '16/9' }}
        className="relative w-full max-w-[95%] h-[95%] overflow-hidden shadow-2xl bg-zinc-900"
      >
        <div id={playerId} className="absolute inset-0 w-full h-full" />
      </div>
    </main>
  );
}

export default VideoSection;