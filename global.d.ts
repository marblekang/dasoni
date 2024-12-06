export {}; //export 키워드가 있어야 모듈로 인식하고 적용됨
declare global {
  interface Navigator {
    standalone?: boolean;
  }
  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    prompt(): Promise<void>;
    userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
  }
}
