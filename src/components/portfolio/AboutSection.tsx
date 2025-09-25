import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, BarChart3, Code2, Award, GraduationCap, Lightbulb } from "lucide-react";



const AboutSection = () => {
  const skills = [
    { icon: Brain, name: "Machine Learning", color: "text-accent" },
    { icon: Database, name: "Data Engineering", color: "text-success" },
    { icon: BarChart3, name: "Data Analytics", color: "text-primary" },
    { icon: Lightbulb, name: "AI", color: "text-accent" },
  ];

  const certifications = [
    "Microsoft Azure Data Engineer",
    "Microsoft Fabric Certified Data Engineer",
    "Microsoft Power BI Data Analyst",
    "Microsoft Azure AI Fundamentals", 
    "Data Engineering with Python",
    "Alteryx Designer Core",
    "SQL for Data Science",
    "Snowflake & Cloud Data Platforms"
  ];

  const education = {
    degree: "Master of Science–Information Technology",
    university: "Clark University, Worcester, MA",
    year: "Aug 2023-May 2025",
    gpa: "3.9/4.0"
  };

  return (
    <section id="about" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          About <span className="gradient-neural bg-clip-text text-transparent">Me</span>
        </h2>
        
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Professional Summary */}
        <div className="space-y-6">
          <Card className="gradient-card border-border/50 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Professional Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm an accomplished professional with a Master's degree in Information Technology and four years of hands-on experience at the dynamic intersection of data/analytical engineering and data science. My journey includes significant contributions at Ernst & Young (EY), where I specialized in SQL optimization, data preparation using Alteryx, and the design of actionable business intelligence solutions with Tableau and Power BI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My technical expertise spans a robust toolkit, with deep proficiency in Snowflake and Microsoft Azure for scalable, secure, and efficient data solutions. I am certified as a Microsoft Azure Data Engineer, Azure Data Analyst, and in Microsoft Fabric, validating my ability to architect and manage modern cloud-based data platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am deeply passionate about Artificial Intelligence, especially Generative AI and emerging Small Language Models (SLMs). My explorations include practical applications of RAG (Retrieval Augmented Generation) methods and the use of vector databases for enhanced information retrieval. I thrive on bridging the gap between sophisticated data engineering and actionable data science—delivering insights that drive business transformation through data, analytics, machine learning, and cloud solutions.
              </p>
            </CardContent>
          </Card>
           
            

          {/* Skills Grid */}
           <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="gradient-card border-border/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <skill.icon className={`h-8 w-8 mx-auto mb-3 ${skill.color}`} />
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-6">
          {/* Education */}
          <Card className="gradient-card border-border/50 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-accent">
                <GraduationCap className="h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{education.degree}</h3>
                <p className="text-muted-foreground">{education.university}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-success">{education.year}</span>
                  <span className="text-accent font-semibold">GPA: {education.gpa}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="gradient-card border-border/50 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-accent">
                <Award className="h-6 w-6" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fun Fact */}
          <Card className="gradient-card border-border/50 hover-lift">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-accent">Beyond the Basics!</h3>
              <p className="text-muted-foreground text-sm">
                I have hands-on experience in MLOps—including automated machine learning workflows, 
                experiment tracking with MLflow, and end-to-end model deployment. My ambition is to deploy 
                these skills across varied industries—including supply chain, finance, sports, pharmaceuticals, 
                and automotive, with a specific interest in autonomous driving and AI-powered innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;