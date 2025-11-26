import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brand</h3>
            <p className="opacity-80 text-sm">Transforming businesses with innovative solutions.</p>
          </div>

          {[
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Press"],
            },
            {
              title: "Services",
              links: ["Solutions", "Consulting", "Support", "Pricing"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Contact", "Sitemap"],
            },
          ].map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">© 2025 Your Business Name. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Twitter", "LinkedIn", "Facebook"].map((social) => (
                <Link key={social} href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
