import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, Tech Innovations",
      content:
        "Outstanding service and exceptional results. They truly understood our vision and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Founder, Growth Dynamics",
      content: "Professional, reliable, and results-driven. The best investment we made for our company this year.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      title: "Director, Creative Solutions",
      content: "Their expertise and attention to detail made all the difference. Highly recommended for any business.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="bg-secondary py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Hear from businesses we've helped succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
