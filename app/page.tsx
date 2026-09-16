import {
  CreditCard,
  Hammer,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Quality Tools",
    description:
      "Professional-grade tools and equipment sourced from trusted manufacturers worldwide.",
  },
  {
    icon: Shield,
    title: "Verified Suppliers",
    description:
      "Every supplier on our platform is vetted and verified to guarantee authenticity.",
  },
  {
    icon: Truck,
    title: "County-Wide Delivery",
    description:
      "Fast and reliable delivery to every corner of Nakuru County.",
  },
  {
    icon: CreditCard,
    title: "M-Pesa Payments",
    description:
      "Seamless checkout with M-Pesa integration — pay the way you prefer.",
  },
] as const;

const catalogCategories = [
  "Hand & Power Tools",
  "Building Materials",
  "Plumbing Supplies",
  "Electrical & Lighting",
  "Paints & Finishes",
  "Safety & Protection",
] as const;

const contactChannels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@nakuruhardwarehub.co.ke",
    href: "mailto:hello@nakuruhardwarehub.co.ke",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Nakuru Town, Nakuru County, Kenya",
    href: "#contact",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        >
          <div className="flex items-center gap-2">
            <Hammer className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight">
              Nakuru Hardware Hub
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#products"
              className="transition-colors hover:text-foreground"
            >
              Products
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
          <a
            href="#products"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Shop Now
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Serving Nakuru County, Kenya
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Everything you need to build,
            <br />
            <span className="text-primary">delivered to your door.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The trusted online marketplace for hardware supplies, power tools,
            and building materials — connecting Nakuru&apos;s builders with
            verified suppliers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Products
            </a>
            <a
              href="#features"
              className="rounded-full border border-border px-8 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Learn More
            </a>
          </div>
        </section>

        <section
          id="features"
          aria-labelledby="features-heading"
          className="border-t border-border bg-muted/50"
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2
              id="features-heading"
              className="text-center text-3xl font-bold tracking-tight"
            >
              Built for builders
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
              Everything you need in one platform — from discovery to delivery.
            </p>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm"
                >
                  <Icon
                    className="mb-3 h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          aria-labelledby="products-heading"
          className="border-t border-border"
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="flex flex-col items-center text-center">
              <Package className="h-10 w-10 text-primary" aria-hidden="true" />
              <h2
                id="products-heading"
                className="mt-4 text-3xl font-bold tracking-tight"
              >
                Catalog coming soon
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                We&apos;re stocking the shelves. Here&apos;s what you&apos;ll
                be able to order once the store opens.
              </p>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catalogCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-xl border border-border bg-muted/30 p-6 text-center font-medium"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t border-border bg-muted/50"
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2
              id="contact-heading"
              className="text-center text-3xl font-bold tracking-tight"
            >
              Get in touch
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
              Questions, bulk orders, or supplier enquiries — we&apos;d love to
              hear from you.
            </p>
            <div className="mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              {contactChannels.map(
                ({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-colors hover:border-primary"
                  >
                    <Icon
                      className="mx-auto mb-3 h-7 w-7 text-primary transition-colors group-hover:text-foreground"
                      aria-hidden="true"
                    />
                    <h3 className="font-semibold">{label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {value}
                    </p>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nakuru Hardware Hub</p>
          <p>Made in Nakuru, Kenya</p>
        </div>
      </footer>
    </div>
  );
}