import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="font-bold">ContentFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered content creation for creators who demand excellence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 ContentFlow. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
