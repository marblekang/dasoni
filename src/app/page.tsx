import PWAInstaller from "@/components/PWAInstaller";

export default function Home() {
  return (
    <main className="bg-gray-100 max-w-screen-1200 w-full h-full flex items-center justify-center">
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-[90%]">
        <h1 className="text-2xl font-bold text-center mb-4">
          Centered Mobile Layout
        </h1>
        <p className="text-gray-700 text-center">
          This is a mobile-centered layout with max-width 1200px and full
          viewport width.
        </p>
      </div>
      <PWAInstaller />
    </main>
  );
}
