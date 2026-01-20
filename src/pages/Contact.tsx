import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-24 pb-16 bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-islamic-black mb-6">
              Groups
              <span className="block text-islamic-gold">and Contacts</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Reach the society by email or join our WhatsApp community for updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-black flex items-center gap-3">
                  <Mail className="h-6 w-6 text-islamic-gold" />
                  Email the Society
                </CardTitle>
                <CardDescription className="text-gray-600">
                  We usually reply within 1-2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="gradient-gold text-islamic-black">
                  <a href="mailto:muslim@csc.tcd.ie">muslim@csc.tcd.ie</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-islamic-black flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-islamic-gold" />
                  WhatsApp Community
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Includes group chats for announcements, brothers, and sisters.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-gray-700 space-y-2">
                  <li>Announcements group chat</li>
                  <li>Brothers group chat</li>
                  <li>Sisters group chat</li>
                </ul>
                <Button asChild variant="outline" className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-islamic-black">
                  <a href="https://chat.whatsapp.com/KYLJU8lrXBX4vRRmQTnyJ8">Join the WhatsApp Community</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
