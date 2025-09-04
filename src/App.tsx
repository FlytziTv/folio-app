import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Works from "./pages/Works";
import Stack from "./pages/Stack";
import { Header } from "./app/SZComponents/HeaderBar/Header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header global */}
      <Header />

      {/* Contenu des pages */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/works" element={<Works />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </main>
    </div>
  );
}
