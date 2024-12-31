import { NewYearBanner } from "@/components/NewYearBanner";
import { SearchBox } from "@/components/SearchBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent">
      <NewYearBanner />
      
      <main className="container mx-auto pt-12 md:pt-24 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            enginee.online
          </h1>
        </div>

        <SearchBox />
      </main>

      <footer className="fixed bottom-0 w-full py-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-secondary-foreground">
          © 2025 enginee.online
        </div>
      </footer>
    </div>
  );
};

export default Index;