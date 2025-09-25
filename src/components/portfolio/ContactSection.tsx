import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText,
  Send,
  CheckCircle,
  Sparkles,
  BarChart3
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pshanmugasundaram@clarku.edu, pavasofficial@gmail.com",
      href: "mailto:pshanmugasundaram@clarku.edu, pavasofficial@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "508-365-9299",
      href: "tel:+15083659299"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Charlotte, NC, USA",
      href: "https://maps.google.com/?q=Charlotte,NC"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/PavasKrishnanS",
      username: "@PavasKrishnanS"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pavas-krishnan/",
      username: "pavas-krishnan"
    },
    {
      icon: FileText,
      label: "Resume",
      href: "/assets/Pavas_Krishnan_CV.pdf",
      username: "Download CV"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Get In <span className="gradient-neural bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to collaborate on exciting projects or discuss opportunities in AI and data analytics? 
          Let's connect and create something amazing together.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Details */}
          <Card className="gradient-card border-border/50 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="gradient-card border-border/50 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <social.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{social.label}</p>
                    <p className="text-sm text-muted-foreground">{social.username}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Tableau Profile */}
       
        </div>
      </div>
    </section>
  );
};

export default ContactSection;