"use client";

import { useEffect, useState } from "react";

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInStandaloneMode, setIsInStandaloneMode] = useState(false);

  useEffect(() => {
    // Check for iOS and standalone mode
    const userAgent = window.navigator.userAgent;
    const ios = /iPhone|iPad|iPod/i.test(userAgent);
    const standalone =
      window.navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches;

    setIsIOS(ios);
    setIsInStandaloneMode(standalone);

    // Handle Android `beforeinstallprompt` event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      const promptEvent = deferredPrompt as BeforeInstallPromptEvent;
      await promptEvent.prompt();
      const choiceResult = await promptEvent.userChoice;
      console.log(`User choice: ${choiceResult.outcome}`);
      setDeferredPrompt(null);
    }
  };

  if (isIOS && !isInStandaloneMode) {
    return (
      <div
        style={{
          padding: "10px",
          backgroundColor: "#fff3cd",
          borderRadius: "5px",
        }}
      >
        <p>
          iOS에서 설치하려면 Safari 브라우저에서 <strong>공유 버튼</strong>을
          클릭한 후 <strong>홈 화면에 추가</strong>를 선택하세요.
        </p>
      </div>
    );
  }

  if (isInstallable) {
    return (
      <button
        onClick={handleInstall}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Install App
      </button>
    );
  }

  return null; // 설치 유도 조건이 없으면 아무것도 렌더링하지 않음
}
