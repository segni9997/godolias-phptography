
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Footer } from "./Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-serif text-primary mb-6">404</h1>
          <h2 className="text-3xl font-serif text-primary mb-4">Portfolio Not Found</h2>
          <p className="text-secondary mb-8">Sorry, we couldn't find the portfolio item you're looking for.</p>
          <Link to="/portfolio">
            <Button className="bg-sectext-secondary hover:bg-muted text-muted-foreground">Back to Portfolio</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
