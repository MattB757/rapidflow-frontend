import { Instagram, Twitter, Music, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-gray-800">
                HexPrep
              </span>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Our mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  The process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Meet the team
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Hillsboro OR</li>
              <li className="text-gray-600">Chicago IL</li>
              <li>
                <a
                  href="mailto:contact@hexprep.com"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  contact@hexprep.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15033131528"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  (503) 313-1528
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          {/* Copyright */}
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            {/* dynamic year */}
            &copy; {new Date().getFullYear()} HexPrep
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-600 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
