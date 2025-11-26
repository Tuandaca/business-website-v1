import { CheckCircle, Zap, Shield, Target } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Excellence in every project, delivered with precision and care.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick turnaround without compromising on quality standards.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data and projects protected with industry-leading security.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on achieving your business goals and objectives.",
    },
  ]

  return (
    <section id="services" className="bg-secondary py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine expertise, innovation, and dedication to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
