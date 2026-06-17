export {};

declare global {
  interface Window {
    clarity?: (
      command: string,
      payload?: {
        ad_storage?: "granted" | "denied";
        analytics_storage?: "granted" | "denied";
      },
    ) => void;
  }
}
