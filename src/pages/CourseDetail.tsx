import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, PlayCircle, CheckCircle } from "lucide-react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-4">Web Development</Badge>
              <h1 className="text-4xl font-bold mb-4">Complete Web Development Bootcamp</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Master modern web development from scratch. Build real-world projects with HTML, CSS, JavaScript, React, and Node.js.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-muted-foreground">(3,245 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>12,500 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>40 hours</span>
                </div>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-8">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Build responsive websites with HTML5 and CSS3",
                    "Master JavaScript fundamentals and ES6+",
                    "Create dynamic web apps with React",
                    "Build RESTful APIs with Node.js and Express",
                    "Work with databases (MongoDB, PostgreSQL)",
                    "Deploy applications to production",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                <div className="space-y-3">
                  {[
                    { title: "Introduction to Web Development", lessons: 5, duration: "45 min" },
                    { title: "HTML5 & CSS3 Fundamentals", lessons: 12, duration: "2h 30min" },
                    { title: "JavaScript Essentials", lessons: 18, duration: "4h 15min" },
                    { title: "React Framework", lessons: 22, duration: "6h 45min" },
                    { title: "Backend Development with Node.js", lessons: 15, duration: "5h 20min" },
                  ].map((section, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{section.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {section.lessons} lessons • {section.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <div className="text-3xl font-bold text-primary mb-6">$99</div>
                <Button className="w-full mb-4" size="lg">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full mb-6">
                  Add to Wishlist
                </Button>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">This course includes:</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>40 hours on-demand video</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
