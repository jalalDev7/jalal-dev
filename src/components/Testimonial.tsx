import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    text: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are top-notch.",
    author: "Jane Doe",
    position: "Project Manager at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    text: "I was impressed by the clean, efficient code and the ability to deliver complex features on time.",
    author: "John Smith",
    position: "CTO at StartupX",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    text: "Their expertise in React and Next.js significantly improved our application's performance and user experience.",
    author: "Emily Brown",
    position: "Lead Developer at WebSolutions",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
