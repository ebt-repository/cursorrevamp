import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/lovable-uploads/ccff6f2d-ef98-4c7f-8728-35bc6c49c384.png"
            alt="Featured artwork" 
            className="w-full h-[calc(100vh-8rem)] object-contain"
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