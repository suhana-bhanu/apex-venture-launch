import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, BookOpen, DollarSign, TrendingUp, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

const analyticsData = [
  { month: "Jan", enrollments: 245, revenue: 24500 },
  { month: "Feb", enrollments: 312, revenue: 31200 },
  { month: "Mar", enrollments: 289, revenue: 28900 },
  { month: "Apr", enrollments: 398, revenue: 39800 },
  { month: "May", enrollments: 445, revenue: 44500 },
  { month: "Jun", enrollments: 520, revenue: 52000 },
];

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage courses, users, and analytics</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Course
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">15,234</p>
                <p className="text-xs text-primary">+12% this month</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold">124</p>
                <p className="text-xs text-secondary">8 pending review</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">$52,000</p>
                <p className="text-xs text-accent">+18% this month</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Enrollments</p>
                <p className="text-2xl font-bold">520</p>
                <p className="text-xs text-primary">This month</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={analyticsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="enrollments" fill="hsl(var(--primary))" name="Enrollments" />
              <Bar dataKey="revenue" fill="hsl(var(--secondary))" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Web Development Bootcamp", instructor: "Sarah Johnson", students: 12500, status: "Active" },
                    { name: "Data Science with Python", instructor: "Michael Chen", students: 8900, status: "Active" },
                    { name: "UI/UX Design Masterclass", instructor: "Emma Davis", students: 15200, status: "Active" },
                  ].map((course, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{course.name}</TableCell>
                      <TableCell>{course.instructor}</TableCell>
                      <TableCell>{course.students.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {course.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="mt-6">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Student management coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="instructors" className="mt-6">
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Instructor management coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
