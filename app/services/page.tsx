import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Droplets, Hammer, Home, Ruler, Sparkles, Star, Wrench } from "lucide-react"

const services = [
  ["Gypsum False Ceiling", "जिप्सम फॉल्स सीलिंग", "gypsum-false-ceiling", "₹75–₹210 / sq.ft", "Joint-free modern finish with cove lighting for halls and bedrooms.", Home],
  ["PVC False Ceiling", "पीवीसी फॉल्स सीलिंग", "pvc-false-ceiling", "₹75–₹150 / sq.ft", "100% waterproof ceiling for kitchens, bathrooms and damp spaces.", Droplets],
  ["Grid Ceiling", "ग्रिड सीलिंग", "grid-ceiling", "₹45–₹115 / sq.ft", "Demountable tiles with easy access for office and retail services.", Ruler],
  ["Partition Wall", "पार्टिशन वॉल", "partition-wall", "₹100–₹750 / sq.ft", "Drywall and glass partitions without messy brickwork.", Wrench],
  ["WPC Wall Panel", "डब्ल्यूपीसी वॉल पैनल", "wpc-wall-panel", "₹180–₹650 / sq.ft", "Wood-look fluted louvers for TV walls and receptions.", Sparkles],
  ["UV Marble Sheet", "यूवी मार्बल शीट", "uv-marble-sheet", "₹45–₹120 / sq.ft", "High-gloss, cost-effective cladding for walls and niches.", Star],
  ["Modular TV Unit", "मॉड्यूलर टीवी यूनिट", "modular-tv-unit", "From ₹15,000+", "Custom entertainment units with concealed wiring and storage.", Hammer],
  ["Artificial Grass", "आर्टिफिशियल ग्रास", "artificial-grass", "₹40–₹150 / sq.ft", "Zero-maintenance evergreen flooring for balconies and terraces.", Droplets],
] as const

export const metadata = { title: "Interior & False Ceiling Services in Chandigarh", description: "Explore false ceiling, wall panel, partition, TV unit and artificial grass services in Chandigarh." }

export default function ServicesPage() {
  return <main className="services-index"><header className="site-header"><Link className="brand" href="/"><span className="brand-mark"><Home size={18} /></span><span>False Ceiling<br /><strong>Service</strong></span></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/services" aria-current="page">Services</Link><Link href="/#projects">Projects</Link><Link href="/#contact">Contact</Link></nav><a className="header-cta" href="tel:+917258951213">Call Now / +91 7258951213</a></header><section className="services-index-hero section-shell"><Link className="back-link" href="/">← Back to home</Link><div className="section-kicker">Our services</div><h1>One place for every<br /><em>interior finish.</em></h1><p>Explore our complete range of ceiling, wall and interior services for homes, offices and shops across Chandigarh.</p><div className="services-index-note"><Check size={19} /> Choose a service to see its details, pricing, and five project photos.</div></section><section className="services-index-grid section-shell">{services.map(([title, hindi, slug, price, text, Icon]) => <Link href={`/services/${slug}`} className="service-card" key={slug}><div className="service-icon"><Icon size={21} /></div><div className="service-card-top"><h2>{title}</h2><small>{hindi}</small><span>{price}</span></div><p>{text}</p><span className="service-card-link">View service details <ChevronRight size={15} /></span></Link>)}</section><section className="services-index-cta section-shell"><div><div className="section-kicker">Need help choosing?</div><h2>Tell us about<br /><em>your space.</em></h2></div><Link className="button button-primary" href="/#contact">Get a quote <ArrowRight size={17} /></Link></section></main>
}
