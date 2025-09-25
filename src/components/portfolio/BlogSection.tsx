import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight, TrendingUp, BookOpen, Lightbulb } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Wine Industry Overview",
      excerpt: "Exploring the global wine industry's growth trajectory, market size projections reaching 835 billion USD by 2030, and analysis of major producing countries including Italy, Spain, and France.",
      date: "2023-01-07",
      readTime: "6 min read",
      category: "Industry Analysis",
      featured: true,
      tags: ["Wine Industry", "Market Analysis", "Global Trade", "Growth Trends"],
      icon: TrendingUp,
      url: "https://www.linkedin.com/pulse/wine-industry-overview-pavas-krishnan-s/?trackingId=R32AiAjED4loB%2BVZ1p6r6g%3D%3D"
    },
    {
      title: "Data Analytics in Retail World",
      excerpt: "Understanding how data analytics transforms retail operations, from customer insights to inventory optimization and strategic decision-making using tools like Excel, Tableau, Python, and R.",
      date: "2021-07-04", 
      readTime: "7 min read",
      category: "Data Analytics",
      featured: true,
      tags: ["Retail Analytics", "Data Science", "Business Intelligence", "Customer Insights"],
      icon: BookOpen,
      url: "https://www.linkedin.com/pulse/data-analytics-retail-world-pavas-krishnan-s/?trackingId=Oim4l0vGlZ7eEWnflSixlQ%3D%3D"
    },
    {
      title: "India & Green Hydrogen Overview",
      excerpt: "Analyzing India's ambitious journey towards energy independence through green hydrogen, renewable energy targets of 450 gigawatts by 2030, and sustainable development initiatives under Mission 2047.",
      date: "2021-09-05",
      readTime: "5 min read", 
      category: "Energy & Sustainability",
      featured: true,
      tags: ["Green Hydrogen", "Renewable Energy", "India", "Energy Independence"],
      icon: Lightbulb,
      url: "https://www.linkedin.com/pulse/india-green-hydrogen-overview-pavas-krishnan-s/?trackingId=TysOXYmtm6m5stBWy7DdhA%3D%3D"
    },
    {
      title: "Building Scalable ETL Pipelines with Python and Apache Airflow",
      excerpt: "A comprehensive guide to designing and implementing robust data pipelines that can handle millions of records while maintaining data quality and reliability.",
      date: "2024-01-10", 
      readTime: "12 min read",
      category: "Data Engineering",
      featured: false,
      tags: ["Python", "ETL", "Airflow", "Data Pipeline"],
      icon: BookOpen
    },
    {
      title: "Deep Dive: Implementing RAG Architecture for Enterprise Chatbots",
      excerpt: "Learn how to build production-ready RAG systems that can understand context, retrieve relevant information, and provide accurate responses at scale.",
      date: "2024-01-05",
      readTime: "15 min read", 
      category: "AI Implementation",
      featured: false,
      tags: ["RAG", "LLM", "Chatbots", "Enterprise AI"],
      icon: Lightbulb
    },
    {
      title: "Power BI vs Tableau: A Data Analyst's Perspective",
      excerpt: "Comparing the two leading BI tools from a practitioner's viewpoint, covering features, performance, cost, and real-world use cases.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Business Intelligence", 
      featured: false,
      tags: ["Power BI", "Tableau", "Data Visualization", "BI Tools"],
      icon: BookOpen
    }
  ];

  const categories = ["All", "Industry Analysis", "Data Analytics", "Energy & Sustainability", "Data Engineering", "Business Intelligence", "AI Implementation"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Industry Analysis": return "text-accent border-accent/30 bg-accent/10";
      case "Data Analytics": return "text-primary border-primary/30 bg-primary/10";
      case "Energy & Sustainability": return "text-success border-success/30 bg-success/10";
      case "Data Engineering": return "text-primary border-primary/30 bg-primary/10";
      case "Business Intelligence": return "text-success border-success/30 bg-success/10";
      case "AI Implementation": return "text-destructive border-destructive/30 bg-destructive/10";
      default: return "text-muted-foreground border-border bg-muted";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Published <span className="gradient-neural bg-clip-text text-transparent">Articles</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Sharing knowledge, experiences, and insights from the world of data analytics, 
          AI, and machine learning through thoughtful articles and case studies.
        </p>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-accent">Featured Articles</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts
            .filter(post => post.featured)
            .slice(0, 2)
            .map((post, index) => (
                <Card key={index} className="gradient-card border-border/50 hover-lift group cursor-pointer"
                      onClick={() => post.url ? window.open(post.url, '_blank') : null}>
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={getCategoryColor(post.category)}>
                        <post.icon className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-muted/50 text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full mt-4 group">
                      {post.url ? 'Read on LinkedIn' : 'Read Article'}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
            ))}
        </div>
      </div>

    </section>
  );
};

export default BlogSection;