import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp, Users, Zap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Daimler Truck North America",
      position: "Data Analytics Intern", 
      period: "Jun 2024 - Present",
      location: "Gastonia, NC",
      description: "Engineered advanced analytics solutions for automotive manufacturing, focusing on quality assurance monitoring and real-time data integration.",
      achievements: [
        "Engineered and launched a Power BI dashboard enhancing quality assurance monitoring and streamlining manual reporting efforts by 40%",
        "Orchestrated real-time machine sensor data integration via API connections, analyzed with Python, and automated the pipeline using Alteryx, resulting in a 35% reduction in data processing time",
        "Engineered a Fast API-driven TPM platform with embedded QR code scanning and real-time alert notifications",
        "Constructed an interactive Streamlit application, storing processed data in Snowflake, enabling real-time visibility and accelerating decision-making"
      ],
      technologies: ["Python", "Power BI", "Alteryx", "Snowflake", "Fast API", "Streamlit"],
      impact: "40% reporting efficiency",
      icon: Building2
    },
    {
      company: "Ernst & Young (EY LLP)",
      position: "Associate Data Consultant",
      period: "Aug 2021 - Aug 2023", 
      location: "Chennai, India",
      description: "Provided data consulting services to Merck Animal Health, focusing on SQL optimization, data warehousing, and business intelligence solutions across EMEA region.",
      achievements: [
        "Refined SQL queries, stored procedures, and views in SQL Server, lowering query execution time by 42% and enhancing data processing efficiency",
        "Crafted interactive Power BI reports using DAX calculations and Power Queries, improving executive decision-making by 70%",
        "Spearheaded Data Warehouse and Lakehouse integrations using Snowflake, uplifting analytical efficiency by 35%",
        "Engineered and optimized data pipelines using Alteryx, enabling seamless ETL processes",
        "Partnered with Business Unit heads & sales reps across EMEA region to develop predictive analytics models and market segment strategies"
      ],
      technologies: ["SQL Server", "Power BI", "DAX", "Snowflake", "Alteryx", "Excel VBA"],
      impact: "70% decision improvement",
      icon: TrendingUp
    },
    {
      company: "Yogeesh Trading Pty Limited",
      position: "Business Data Analyst",
      period: "Jan 2020 - Jul 2021",
      location: "Durban, South Africa",
      description: "Designed interactive dashboards and optimized international trade operations through data-driven insights and SAP system management.",
      achievements: [
        "Designed interactive Tableau dashboards to visualize logistics data, enhancing decision-making for international trade",
        "Optimized procurement and cross-border trading efficiency by managing SAP sales & distribution and material management modules, reducing order processing time by 20%",
        "Developed custom SQL queries to monitor raw materials & machinery shipments between countries, providing delivery insights"
      ],
      technologies: ["Tableau", "SAP", "SQL", "Logistics Analytics"],
      impact: "20% process optimization",
      icon: Zap
    },
    {
      company: "SITEK INC",
      position: "Summer Intern",
      period: "Jul 2024 - Aug 2024",
      location: "Lexington, KY",
      description: "Supported data collection and analysis initiatives while gaining hands-on experience in business analytics and process optimization.",
      achievements: [
        "Streamlined data collection processes and improved operational efficiency",
        "Created comprehensive visualization reports for management decision-making",
        "Assisted in database management and maintenance operations"
      ],
      technologies: ["Excel", "SQL", "Data Visualization", "Process Analysis"],
      impact: "Process optimization",
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Professional <span className="gradient-neural bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A journey through data analytics, machine learning, and business intelligence across 
          diverse industries and challenging projects.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-success"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 neural-glow"></div>

              {/* Content Card */}
              <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                <Card className="gradient-card border-border/50 hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <exp.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{exp.position}</CardTitle>
                          <p className="text-lg font-semibold text-accent">{exp.company}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-success border-success/30">
                        {exp.impact}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-accent">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-success mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-accent">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;