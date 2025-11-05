import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const courses = [
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
  {
    id: "4",
    title: "Machine Learning A-Z",
    instructor: "David Kumar",
    category: "AI & ML",
    duration: "45 hours",
    students: 10300,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    price: 149,
  },
  {
    id: "5",
    title: "Digital Marketing Strategy",
    instructor: "Lisa Anderson",
    category: "Marketing",
    duration: "25 hours",
    students: 7800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    price: 79,
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    instructor: "James Wilson",
    category: "Mobile Development",
    duration: "38 hours",
    students: 9500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    price: 119,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Browse All Courses</h1>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive catalog of industry-leading courses
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search courses..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
