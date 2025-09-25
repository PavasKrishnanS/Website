import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Eye, Database, Brain, BarChart3, Filter } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Hybrid Search RAG Chatbot",
      category: "AI",
      description: "AI-powered Retrieval-Augmented Generation chatbot using local LLMs, Chroma DB vector search, and Streamlit for secure, document-grounded answers.",
      longDescription: "Developed an AI-powered Retrieval-Augmented Generation (RAG) chatbot using local LLMs (Ollama/Gemma3), Chroma DB vector search, and Streamlit, delivering secure, document-grounded answers from factory safety manuals. Designed and deployed a full-stack private semantic search pipeline: PDF parsing and text chunking, embedding with Sentence Transformers, persistent vector database retrieval, and interactive web UI.",
      technologies: ["Python", "Ollama/Gemma3", "Chroma DB", "Streamlit", "Sentence Transformers", "PDF Processing"],
      image: "/api/placeholder/400/300",
      demoUrl: "https://github.com/PavasKrishnanS/Hybrid_search_RAG",
      githubUrl: "https://github.com/PavasKrishnanS/Hybrid_search_RAG",
      impact: "Private AI knowledge delivery",
      features: [
        "Local LLM integration with Ollama/Gemma3",
        "PDF-to-vector ingestion pipeline",
        "Similarity-based retrieval system",
        "Context-constrained language modeling",
        "Real-time confidential industrial knowledge delivery"
      ]
    },
    {
      title: "Seismic Insights: Earthquake Data Pipeline",
      category: "Analytics", 
      description: "Real-time data pipeline ingesting seismic data from USGS API into Microsoft Fabric Lakehouse with interactive Power BI visualization.",
      longDescription: "Developed a real-time data pipeline to ingest seismic data from the USGS API into a Microsoft Fabric Lakehouse. Implemented medallion architecture (bronze, silver, gold) with geolocation enrichment and magnitude classification. Built an interactive Power BI dashboard to visualize earthquake trends by date, magnitude, and region.",
      technologies: ["Microsoft Fabric", "Power BI", "USGS API", "Medallion Architecture", "Geolocation Services"],
      image: "/api/placeholder/400/300",
      demoUrl: "https://github.com/PavasKrishnanS/Seismic-Signals-Tracking-Global-Earthquakes-with-Microsoft-Fabric-and-Power-BI-",
      githubUrl: "https://github.com/PavasKrishnanS/Seismic-Signals-Tracking-Global-Earthquakes-with-Microsoft-Fabric-and-Power-BI-",
      impact: "Real-time seismic monitoring",
      features: [
        "Real-time USGS API data ingestion",
        "Medallion architecture implementation",
        "Geolocation enrichment and magnitude classification",
        "Interactive Power BI dashboard",
        "Earthquake trend visualization by date, magnitude, and region"
      ]
    },
    {
      title: "Boston Housing Loan Trends",
      category: "ML",
      description: "Enhanced housing market predictions using Linear Regression and improved loan approval processes using logistic regression with feature optimization.",
      longDescription: "Utilized statistical and data science techniques for predictive modelling and analysis. Enhanced housing market predictions through Linear Regression on the Boston Housing dataset, optimizing features for accuracy. Improved loan approval processes using logistic regression, one-hot encoding, and careful feature selection for better predictive performance.",
      technologies: ["Python", "Linear Regression", "Logistic Regression", "One-Hot Encoding", "Feature Selection", "Statistical Analysis"],
      image: "/api/placeholder/400/300",
      demoUrl: "https://github.com/PavasKrishnanS/Unlocking-Boston-Housing-Loan-Trends",
      githubUrl: "https://github.com/PavasKrishnanS/Unlocking-Boston-Housing-Loan-Trends",
      impact: "Optimized loan approval accuracy",
      features: [
        "Linear regression for housing market predictions",
        "Logistic regression for loan approval processes",
        "One-hot encoding and feature selection",
        "Statistical libraries for complex financial scenarios",
        "Data-driven insights for financial decision making"
      ]
    },
    {
      title: "End-to-End Data Integration with Snowflake",
      category: "Analytics",
      description: "Comprehensive data pipeline with Snowflake and Tableau integration, improving data processing efficiency by 60% for cloud-native applications.",
      longDescription: "Built a comprehensive data pipeline incorporating data engineering, transformation, & analytics processes, improving data processing efficiency by 60% to support cloud-native applications. Utilized Snowflake for efficient data processing, facilitating the integration of datasets into a cloud data lake for analysis and reporting.",
      technologies: ["Snowflake", "Tableau", "Cloud Data Lake", "ETL Pipeline", "Data Integration", "Analytics"],
      image: "/api/placeholder/400/300",
      demoUrl: "https://github.com/PavasKrishnanS/End-to-End-Data-Integration-and-Visualization-with-Snowflake-and-Tableau",
      githubUrl: "https://github.com/PavasKrishnanS/End-to-End-Data-Integration-and-Visualization-with-Snowflake-and-Tableau",
      impact: "60% processing efficiency improvement",
      features: [
        "End-to-end data engineering and transformation",
        "Snowflake cloud data lake integration",
        "50% reduction in data processing time",
        "Dynamic Tableau dashboards",
        "Cloud-native data architecture alignment"
      ]
    },
    {
      title: "Racing Insights: Formula 1 EDA",
      category: "Analytics",
      description: "Comprehensive exploratory data analysis on Formula 1 2023 dataset uncovering insights on driver performance, team statistics, and race outcomes.",
      longDescription: "Conducted comprehensive EDA on a Formula 1 2023 dataset to uncover insights on driver performance, team statistics, and race outcomes, identifying 55% more trends in race dynamics compared to previous analyses. Utilized Python libraries such as Pandas, NumPy, and Matplotlib to manipulate and visualize data.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA", "Data Visualization"],
      image: "/api/placeholder/400/300",
      demoUrl: "https://github.com/PavasKrishnanS/Formula-1-EDA",
      githubUrl: "https://github.com/PavasKrishnanS/Formula-1-EDA",
      impact: "80% more accurate predictions",
      features: [
        "Comprehensive driver performance analysis",
        "Team statistics and race outcome insights",
        "55% more trend identification in race dynamics",
        "Advanced data visualization techniques",
        "Predictive modeling for race outcomes"
      ]
    },
    {
      title: "E-Commerce Database Management System",
      category: "BI",
      description: "Robust relational database system in Oracle SQL with advanced data modeling, ERDs, and optimized queries for customer and inventory management.",
      longDescription: "Developed ERD and logical schema to create a robust relational database system in Oracle SQL, ensuring referential integrity and data consistency. Optimized SQL queries, improving database performance and reducing execution time by 30%. Incorporated advanced data modelling techniques to design and implement database structures.",
      technologies: ["Oracle SQL", "ERD", "Database Design", "Query Optimization", "Data Modeling", "Referential Integrity"],
      image: "/api/placeholder/400/300",
      demoUrl: "https://github.com/PavasKrishnanS/Unlocking-Boston-Housing-Loan-Trends",
      githubUrl: "https://github.com/PavasKrishnanS/Unlocking-Boston-Housing-Loan-Trends", 
      impact: "55% query performance improvement",
      features: [
        "Advanced ERD and logical schema design",
        "Referential integrity and data consistency",
        "30% reduction in SQL query execution time",
        "Customer accounts and order management",
        "Product inventory management system"
      ]
    }
  ];

  const categories = ["All", "AI", "ML", "Analytics", "BI"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI": return Brain;
      case "ML": return BarChart3;
      case "Analytics": return Database;
      case "BI": return Filter;
      default: return Database;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI": return "text-accent border-accent/30 bg-accent/10";
      case "ML": return "text-success border-success/30 bg-success/10"; 
      case "Analytics": return "text-primary border-primary/30 bg-primary/10";
      case "BI": return "text-destructive border-destructive/30 bg-destructive/10";
      default: return "text-muted-foreground border-border bg-muted";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Featured <span className="gradient-neural bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Showcasing innovative solutions in AI, machine learning, and data analytics that drive business value and solve complex problems.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "neural" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const CategoryIcon = getCategoryIcon(project.category);
          
          return (
            <Card key={index} className="gradient-card border-border/50 hover-lift group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={getCategoryColor(project.category)}>
                    <CategoryIcon className="h-3 w-3 mr-1" />
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="text-success border-success/30">
                    {project.impact}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-accent">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.longDescription}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-2 text-accent">Key Features:</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-success mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-accent">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="neural" size="sm" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;