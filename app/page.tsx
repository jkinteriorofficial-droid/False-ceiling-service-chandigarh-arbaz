import { ArrowRight, Check, ChevronRight, Clock3, Droplets, Hammer, Home, MapPin, MessageCircle, Phone, Ruler, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react"

const services = [
  { title: "Gypsum False Ceiling", price: "₹75–₹210 / sq.ft", text: "Joint-free modern finishes with cove lighting, crafted for elegant halls, bedrooms, and living spaces.", icon: Home },
  { title: "PVC False Ceiling", price: "₹75–₹150 / sq.ft", text: "100% waterproof protection for kitchens and bathrooms, with a clean finish that stays easy to maintain.", icon: Droplets },
  { title: "Grid Ceiling", price: "₹45–₹115 / sq.ft", text: "Demountable tiles for offices and retail stores, designed for quick service access above the ceiling.", icon: Ruler },
  { title: "Partition Wall", price: "₹100–₹750 / sq.ft", text: "Sturdy drywall and glass partitions without messy brickwork—ideal for offices, clinics, and homes.", icon: Wrench },
  { title: "WPC Wall Panel", price: "₹180–₹650 / sq.ft", text: "Premium wood-look fluted louvers for statement TV feature walls, receptions, and hospitality interiors.", icon: Sparkles },
  { title: "UV Marble Sheet", price: "₹45–₹120 / sq.ft", text: "High-gloss, cost-effective marble cladding for pooja rooms, bathroom walls, and standout niches.", icon: Star },
  { title: "Modular TV Unit", price: "From ₹15,000+", text: "Custom-built entertainment units with concealed wiring, purposeful storage, and a polished finish.", icon: Hammer },
  { title: "Artificial Grass", price: "₹40–₹150 / sq.ft", text: "Zero-maintenance evergreen flooring for balconies and terraces that brings an instant outdoor feel.", icon: Droplets },
]

const values = ["1-Year Written Warranty", "Free On-Site Measurements", "0% Hidden Charges", "Expert In-House Installers"]

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="False Ceiling Service home"><span className="brand-mark"><Home size={18} /></span><span>False Ceiling<br /><strong>Service</strong></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#process">How it works</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="tel:+917258951213"><Phone size={16} /> Call now</a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><MapPin size={15} /> Serving Mani Majra & all Chandigarh</div>
          <h1>Beautiful ceilings.<br /><em>Better interiors.</em></h1>
          <p className="hero-lede">Top-rated false ceiling and interior works in Mani Majra, Chandigarh—installed cleanly, priced honestly, and built to last.</p>
          <p className="hero-note"><Check size={16} /> Free site visit <span>·</span> Direct-contractor pricing <span>·</span> 1-year written warranty</p>
          <div className="hero-actions"><a className="button button-primary" href="https://wa.me/917258951213?text=Hi%2C%20I%20need%20a%20free%20site%20visit%20for%20false%20ceiling%20work." target="_blank" rel="noreferrer"><MessageCircle size={18} /> Get a free quote <ArrowRight size={17} /></a><a className="button button-secondary" href="tel:+917258951213"><Phone size={17} /> Talk to an expert</a></div>
          <div className="rating"><span className="stars">★★★★★</span><span><strong>Trusted local workmanship</strong><br />For homes, offices & shops across Chandigarh</span></div>
        </div>
        <div className="hero-visual" aria-label="Architectural ceiling detail illustration" role="img"><div className="visual-label">INTERIORS / 2026</div><div className="ceiling-panel panel-one"></div><div className="ceiling-panel panel-two"></div><div className="ceiling-light"></div><div className="visual-caption"><span>Thoughtful details</span><strong>Made for your space.</strong></div></div>
      </section>

      <section className="trust-strip"><div className="section-shell trust-grid"><div><span className="trust-number">01</span><strong>Local & reliable</strong><p>Based in Mani Majra, serving Chandigarh with pride.</p></div><div><span className="trust-number">02</span><strong>Clean installation</strong><p>Low-dust work and careful finishing from our in-house team.</p></div><div><span className="trust-number">03</span><strong>Clear communication</strong><p>Itemized quotes with no surprise additions later.</p></div></div></section>

      <section className="intro section-shell"><div className="section-kicker">Why choose us</div><div className="intro-grid"><h2>Interiors that feel<br /><em>right from day one.</em></h2><p>Homeowners and businesses in Chandigarh choose falseceilingservice.com for reliable, low-dust, and timely interior installations. We bring direct-contractor accountability, honest material guidance, and a finish you can feel confident about.</p></div></section>

      <section className="hindi-section section-shell" lang="hi"><div className="section-kicker">आपके शहर में भरोसेमंद काम</div><div className="hindi-grid"><h2>आपका घर,<br /><em>आपकी पसंद का इंटीरियर।</em></h2><div><p>मनी माजरा और पूरे चंडीगढ़ में सुंदर false ceiling और interior work के लिए हमसे संपर्क करें। साफ-सुथरा installation, सही सलाह और बिना छुपे हुए charges के साथ आपका काम समय पर पूरा किया जाता है।</p><a className="button button-primary" href="https://wa.me/917258951213?text=Namaste%2C%20mujhe%20free%20site%20visit%20chahiye." target="_blank" rel="noreferrer">WhatsApp पर बात करें <ArrowRight size={17} /></a></div></div></section>

      <section id="services" className="services section-shell"><div className="section-heading"><div><div className="section-kicker">Our services</div><h2>Built around how<br /><em>you live & work.</em></h2></div><p>From one room to a complete commercial fit-out, get practical advice and a finish that suits your budget.</p></div><div className="service-grid">{services.map(({ title, price, text, icon: Icon }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={21} /></div><div className="service-card-top"><h3>{title}</h3><span>{price}</span></div><p>{text}</p><a href={`/services/${title.toLowerCase().replaceAll(" ", "-")}`}>Discuss this service <ChevronRight size={15} /></a></article>)}</div></section>

      <section className="values"><div className="section-shell"><div className="section-kicker">The difference</div><h2>Good work should come<br /><em>with good assurance.</em></h2><div className="value-grid">{values.map((value, index) => <div className="value-item" key={value}><span>0{index + 1}</span><ShieldCheck size={21} /><strong>{value}</strong></div>)}</div></div></section>

      <section id="process" className="process section-shell"><div className="section-heading"><div><div className="section-kicker">Our process</div><h2>Simple from<br /><em>start to finish.</em></h2></div><p>No confusing handoffs. You speak directly with the team doing the work.</p></div><div className="process-grid"><div className="process-step"><span>01</span><MessageCircle size={22} /><h3>Call or WhatsApp</h3><p>Tell us about your space and what you want to transform.</p><a href="tel:+917258951213">+91 7258951213</a></div><div className="process-step"><span>02</span><MapPin size={22} /><h3>Free site visit</h3><p>We measure your space and share an itemized quotation.</p></div><div className="process-step"><span>03</span><Wrench size={22} /><h3>Clean installation</h3><p>Our installers work neatly, safely, and to the agreed schedule.</p></div><div className="process-step"><span>04</span><ShieldCheck size={22} /><h3>Final handover</h3><p>Inspect the finish, then receive your 1-year written warranty.</p></div></div></section>

      <section id="contact" className="contact section-shell"><div><div className="eyebrow"><Clock3 size={15} /> Ready when you are</div><h2>Let&apos;s make your<br /><em>space feel new.</em></h2><p>Share your requirement today. We&apos;ll help you choose the right finish without the sales pressure.</p></div><div className="contact-actions"><a className="button button-light" href="https://wa.me/917258951213?text=Hi%2C%20I%20would%20like%20a%20free%20site%20visit." target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a><a className="contact-phone" href="tel:+917258951213"><Phone size={16} /> +91 7258951213</a></div></section>

      <footer className="footer"><div className="section-shell footer-grid"><div><a className="brand brand-footer" href="#top"><span className="brand-mark"><Home size={18} /></span><span>False Ceiling<br /><strong>Service</strong></span></a><p>Practical interior finishes, installed with care in Chandigarh.</p></div><div><strong>Visit / service area</strong><p>Mani Majra, Chandigarh<br />PIN: 160101</p></div><div><strong>Get in touch</strong><p><a href="tel:+917258951213">+91 7258951213</a><br /><a href="https://falseceilingservice.com">falseceilingservice.com</a></p></div></div><div className="section-shell footer-bottom"><span>© 2026 False Ceiling Service</span><span>Made for Chandigarh homes & businesses</span></div></footer>
    </main>
  )
}
