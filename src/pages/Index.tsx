import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center px-8">
        <div className="max-w-7xl mx-auto flex justify-end">
          <img 
            src="/lovable-uploads/fe173a3d-0782-4c96-b199-8a7e5fba4293.png"
            alt="Featured artwork" 
            className="w-[90%] h-[calc(100vh-12rem)] object-contain"
          />
        </div>
      </main>
      <footer className="text-sm text-muted-foreground p-8">
        © 2025 ebt / all rights reserved
      </footer>
    </div>
  );
};

export default Index;