import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32 px-4 md:pt-32 md:pb-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Professional Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Transform your business with our innovative solutions. We deliver excellence, innovation, and results that
              matter to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="#about"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors font-semibold text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/professional-business-team-working-together.jpg"
              alt="Professional business team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
