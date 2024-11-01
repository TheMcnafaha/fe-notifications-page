import { AllNotifications } from "./components/notification-manager";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <AllNotifications />
    </main>
  );
}
