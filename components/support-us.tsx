'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Globe, Users } from "lucide-react"

export function SupportUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Oromo VR</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/experience" className="hover:underline">Experience</Link></li>
              <li><Link href="/vr" className="hover:underline">VR</Link></li>
              <li><Link href="/ar" className="hover:underline">AR</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/supportus" className="font-bold hover:underline">Support Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Support Our Mission</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Your support helps us preserve and share the rich cultural heritage of the Oromo people. Together, we can bridge cultures and foster understanding through innovative VR and AR experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-red-500" />
                    Preserve Culture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your donation helps us document and digitize Oromo traditions, ensuring they are preserved for future generations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                    Expand Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Support our efforts to make Oromo culture accessible to a global audience through cutting-edge VR and AR technologies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2 text-green-500" />
                    Empower Communities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your contribution helps empower Oromo communities by providing resources and platforms to share their stories.</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Make a Donation</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label>Donation Amount</Label>
                  <RadioGroup defaultValue="25" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="25" id="amount-25" />
                      <Label htmlFor="amount-25">$25</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50" id="amount-50" />
                      <Label htmlFor="amount-50">$50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="100" id="amount-100" />
                      <Label htmlFor="amount-100">$100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="amount-custom" />
                      <Label htmlFor="amount-custom">Custom</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input id="custom-amount" type="number" placeholder="Enter custom amount" />
                </div>
                <Button type="submit" className="w-full">Donate Now</Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Share your skills and time to help us in our mission. We need volunteers for various roles, including:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>VR/AR Development</li>
                    <li>Cultural Research</li>
                    <li>Content Creation</li>
                    <li>Community Outreach</li>
                  </ul>
                  <Button asChild>
                    <Link href="/contact">Contact Us to Volunteer</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Help us reach more people by sharing our mission with your network:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Follow us on social media</li>
                    <li>Share our content</li>
                    <li>Tell your friends about our VR/AR experiences</li>
                    <li>Write about us on your blog or website</li>
                  </ul>
                  <div className="flex space-x-4">
                    <Button variant="outline" asChild>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Impact</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl mb-6">
                Every contribution, no matter the size, helps us in our mission to preserve and share Oromo culture. Here's how your support makes a difference:
              </p>
              <ul className="text-left list-disc list-inside mb-8">
                <li>Fund the development of new VR and AR experiences</li>
                <li>Support cultural research and documentation efforts</li>
                <li>Enable us to collaborate with Oromo communities and artists</li>
                <li>Help maintain and improve our technology infrastructure</li>
                <li>Contribute to educational programs about Oromo culture</li>
              </ul>
              <p className="text-xl font-semibold">
                Together, we can ensure that the rich heritage of the Oromo people is celebrated and shared with the world for generations to come.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Oromo VR</h3>
              <p>Bringing Oromo culture to life through virtual and augmented reality.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/experience" className="hover:underline">Experience</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/support-us" className="hover:underline">Support Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Oromo VR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}