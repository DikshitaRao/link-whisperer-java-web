import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, BarChart3, Globe } from 'lucide-react';
import URLShortener from '@/components/URLShortener';
import Stats from '@/components/Stats';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Shorten URLs instantly with our optimized infrastructure"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your links are protected with enterprise-grade security"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track clicks, locations, and engagement metrics"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Fast redirects from servers around the world"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Shorten Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> URLs</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create short, memorable links that drive engagement. Track performance with detailed analytics and manage all your URLs in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary/50">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* URL Shortener Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Shortening URLs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste your long URL below and get a shortened version instantly. Perfect for social media, emails, and anywhere you need clean, trackable links.
          </p>
        </div>
        
        <URLShortener />
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Platform Statistics
          </h2>
          <p className="text-muted-foreground">
            See how our URL shortener performs across different metrics
          </p>
        </div>
        
        <Stats />
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Our URL Shortener?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for developers, marketers, and businesses who need reliable URL shortening with powerful features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 URL Shortener. Ready to connect to your Java backend API.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
