export default function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 bg-muted rounded-lg overflow-hidden flex items-center justify-center order-2 md:order-1">
            <img
              src="/business-growth-strategy-planning.jpg"
              alt="Business strategy planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Our Business</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience, we've helped hundreds of businesses achieve their goals through
              innovative solutions and dedicated service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experts is committed to understanding your unique needs and delivering customized solutions
              that drive real results for your organization.
            </p>

            <div className="space-y-4 pt-4">
              {["Expert Team", "Proven Track Record", "Customer Focused"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
