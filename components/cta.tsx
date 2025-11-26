import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Transform Your Business?</h2>
        <p className="text-lg opacity-90 text-pretty">
          Join hundreds of successful businesses that have already partnered with us. Let's achieve great things
          together.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold mt-4"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  )
}
