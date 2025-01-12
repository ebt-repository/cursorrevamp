import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-40 px-8">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/lovable-uploads/fe173a3d-0782-4c96-b199-8a7e5fba4293.png"
            alt="Featured artwork" 
            className="w-full h-[calc(100vh-12rem)] object-contain"
          />
        </div>
        <footer className="text-sm text-muted-foreground mt-8 pb-4">
          © 2024 ebt. All rights reserved
        </footer>
      </main>
    </div>
  );
};

export default Index;