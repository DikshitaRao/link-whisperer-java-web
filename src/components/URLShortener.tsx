import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShortenedURL {
  id: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: Date;
}

const URLShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedURL[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const generateShortUrl = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `https://short.ly/${result}`;
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a URL to shorten",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(url)) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newShortenedUrl: ShortenedURL = {
      id: Date.now().toString(),
      originalUrl: url,
      shortUrl: generateShortUrl(),
      clicks: 0,
      createdAt: new Date(),
    };

    setShortenedUrls(prev => [newShortenedUrl, ...prev]);
    setUrl('');
    setIsLoading(false);
    
    toast({
      title: "Success!",
      description: "URL shortened successfully",
    });
  };

  const copyToClipboard = async (shortUrl: string, id: string) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
      toast({
        title: "Copied!",
        description: "Short URL copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy URL",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="bg-card border-border shadow-card">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="url"
                  placeholder="Enter your long URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 bg-input border-border text-foreground"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading || !url.trim()}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                {isLoading ? 'Shortening...' : 'Shorten'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {shortenedUrls.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Recent URLs</h3>
          {shortenedUrls.map((item) => (
            <Card key={item.id} className="bg-card border-border shadow-card animate-slide-up">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.originalUrl}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Created {item.createdAt.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {item.clicks} clicks
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-mono text-primary truncate">
                        {item.shortUrl}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(item.shortUrl, item.id)}
                      className="shrink-0"
                    >
                      {copiedId === item.id ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default URLShortener;