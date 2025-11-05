import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  price: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  category,
  duration,
  students,
  rating,
  image,
  price,
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <Badge className="mb-3">{category}</Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{instructor}</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-2xl font-bold text-primary">${price}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
