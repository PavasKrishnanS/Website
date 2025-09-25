import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Brain, 
  Cog,
  Sparkles,
  Building2,
  TrendingUp
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Data Management",
      icon: Code2,
      color: "text-accent",
      skills: [
        "Python", "SQL (MySQL, Oracle, SQL Server, Neo4j)", "C#", 
        "PySpark", "HTML", "CSS", "Fast API"
      ]
    },
    {
      title: "Visualization & BI Tools", 
      icon: BarChart3,
      color: "text-primary",
      skills: [
        "Power BI", "Tableau", "Tableau Prep", "Streamlit",
        "Excel", "DAX", "Google Sites"
      ]
    },
    {
      title: "Machine Learning & Model Management",
      icon: Brain,
      color: "text-success",
      skills: [
        "Regression", "Classification", "Time Series Analysis",
        "Anomaly Detection", "Predictive Modeling", "A/B Testing",
        "XG Boosting", "Scikit-learn", "TensorFlow", "MLFlow",
        "DagsHub", "DVC", "Microsoft ML Studio"
      ]
    },
    {
      title: "Data Engineering & Automation",
      icon: Database,
      color: "text-destructive",
      skills: [
        "Microsoft Fabric", "Databricks", "Snowflake", "Airflow",
        "Apache Spark", "Kafka", "Alteryx", "DBT (Data Build Tool)",
        "Prefect.io (Data Orchestration Tool)", "REST API", "Git", "GitHub"
      ]
    },
    {
      title: "AI/GenAI Ecosystem",
      icon: Sparkles,
      color: "text-accent",
      skills: [
        "Hugging Face", "Ollama", "Lang Chain", "Chroma DB (Vector Database)",
        "AI Agents (Crew AI, Autogen)", "RAG"
      ]
    },
    {
      title: "ERP Systems",
      icon: Building2, 
      color: "text-primary",
      skills: [
        "SAP ECC", "SAP MM", "SD module"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Technical <span className="gradient-neural bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive toolkit spanning data engineering, machine learning, AI, and business intelligence 
          to deliver end-to-end data solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="gradient-card border-border/50 hover-lift group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 bg-background/50 rounded-lg group-hover:scale-110 transition-transform">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <span className="group-hover:text-accent transition-colors">
                  {category.title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-background/50 text-foreground border-border/30 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-200 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skill Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="gradient-card border-border/50 hover-lift text-center">
          <CardContent className="p-6">
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 mx-auto text-accent" />
              <h3 className="text-2xl font-bold text-success">4+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="gradient-card border-border/50 hover-lift text-center">
          <CardContent className="p-6">
            <div className="space-y-2">
              <Brain className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-2xl font-bold text-success">50+</h3>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="gradient-card border-border/50 hover-lift text-center">
          <CardContent className="p-6">
            <div className="space-y-2">
              <BarChart3 className="h-8 w-8 mx-auto text-accent" />
              <h3 className="text-2xl font-bold text-success">8+</h3>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="gradient-card border-border/50 hover-lift text-center">
          <CardContent className="p-6">
            <div className="space-y-2">
              <Cog className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-2xl font-bold text-success">10+</h3>
              <p className="text-sm text-muted-foreground">Major Projects</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;