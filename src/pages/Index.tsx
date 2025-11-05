import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    category: "Web Development",
    duration: "40 hours",
    students: 12500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    price: 99,
  },
  {
    id: "2",
    title: "Data Science with Python",
    instructor: "Michael Chen",
    category: "Data Science",
    duration: "35 hours",
    students: 8900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    price: 129,
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    instructor: "Emma Davis",
    category: "Design",
    duration: "28 hours",
    students: 15200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    price: 89,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-muted-foreground">Start learning with our most popular courses</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
