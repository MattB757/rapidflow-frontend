import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 border-2 border-white rounded-lg">
            <Image src={logo} width={100} height={40} alt="Logo" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Matthew&apos;s Professional Services
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Expert solutions in web development, design, and digital
                consulting services
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-white text-lg">
                  Proven Expertise: Custom solutions tailored for your unique
                  requirements
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-white text-lg">
                  Efficient Delivery: Reliable and timely project completion
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-white text-lg">
                  Scalable Solutions: Grows and adapts with your business needs
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Let Matthew handle the technical complexities so you can focus
                on your core business objectives.
              </p>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Get Started Today!
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="bg-white shadow-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-center text-black">
                  Get a Quote for Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="First name"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Company name"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="website"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company website
                    </Label>
                    <Input
                      id="website"
                      placeholder="Company website"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="serviceType"
                    className="text-sm font-medium text-gray-700"
                  >
                    Service Type
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-black focus:ring-black">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce-platform">
                        ECommerce Platform
                      </SelectItem>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="amazon">Amazon</SelectItem>
                      <SelectItem value="bigcommerce">BigCommerce</SelectItem>
                      <SelectItem value="magento">Magento</SelectItem>
                      <SelectItem value="other">None/Other</SelectItem>
                      <SelectItem value="salesforce">SalesForce</SelectItem>
                      <SelectItem value="shopify">Shopify</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                      <SelectItem value="squarespace">Squarespace</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="walmart">Walmart</SelectItem>
                      <SelectItem value="wix">Wix</SelectItem>
                      <SelectItem value="woocommerce">WooCommerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="budget"
                    className="text-sm font-medium text-gray-700"
                  >
                    Project Budget Range
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-black focus:ring-black">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500">
                        Monthly Order Volume (Min req - 500/mo)
                      </SelectItem>
                      <SelectItem value="500-1000">500-1000</SelectItem>
                      <SelectItem value="1001-5000">1001-5000</SelectItem>
                      <SelectItem value="5001-10k">5001-10,000</SelectItem>
                      <SelectItem value="10k+">10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors mt-6"
                  size="lg"
                >
                  Send
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
