import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, MousePointer, Link, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      title: "Total URLs",
      value: "1,234",
      icon: Link,
      description: "URLs shortened",
      trend: "+12% from last month"
    },
    {
      title: "Total Clicks",
      value: "45,678",
      icon: MousePointer,
      description: "Clicks tracked",
      trend: "+8% from last month"
    },
    {
      title: "Analytics",
      value: "Real-time",
      icon: BarChart3,
      description: "Performance tracking",
      trend: "Live updates"
    },
    {
      title: "Uptime",
      value: "99.9%",
      icon: Clock,
      description: "Service availability",
      trend: "Last 30 days"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
            <p className="text-xs text-primary mt-2">
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;