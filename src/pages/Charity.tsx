import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin } from 'lucide-react';

const Charity = () => {
  const campaigns = [
    {
      id: 'gaza',
      title: 'Gaza Relief Fund',
      location: 'Gaza',
      goal: 'Goal: €25,000',
      description:
        'Emergency aid for families in Gaza. Funds support food parcels, clean water, and essential medical supplies through trusted partners on the ground.',
      image:
        'https://images.gofundme.com/ViaIFWNHiWsaWP3MWpki25-0Yww=/720x405/https://d2g8igdw686xgo.cloudfront.net/80124725_171573687844766_r.jpeg',
      status: 'Urgent',
      ctaPrimary: 'Donate to Gaza Fund',
      ctaPrimaryUrl: 'https://www.gofundme.com/f/tcd-msa-gaza-unity-appeal',
    },
    {
      id: 'sudan',
      title: 'Sudan Relief Fund',
      location: 'Sudan',
      goal: 'Goal: €20,000',
      description:
        'Humanitarian support for displaced families in Sudan. Donations help provide shelter, hygiene kits, and emergency healthcare.',
      image:
        'https://images.gofundme.com/hHTCN5PSDekYU8eJKnf4xoE_sb8=/720x405/https://d2g8igdw686xgo.cloudfront.net/81973561_1741183609233064_r.jpeg',
      status: 'Urgent',
      ctaPrimary: 'Donate to Sudan Fund',
      ctaPrimaryUrl: 'https://www.gofundme.com/f/tcd-msa-united-for-sudan',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-islamic-black mb-6">
              Charity
              <span className="block text-islamic-gold">Campaigns</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Two ongoing campaigns supported by the society. Every contribution helps deliver
              urgent aid and build long-term support for families in need.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="border-0 shadow-xl overflow-hidden bg-white">
                <div className="relative h-64">
                  <img
                    src={campaign.image}
                    alt={`${campaign.title} cover`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-islamic-black/40 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-islamic-gold text-islamic-black">
                    {campaign.status}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold text-islamic-black">
                    {campaign.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {campaign.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-islamic-gold" />
                      <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-islamic-gold" />
                      <span>{campaign.goal}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 gradient-gold text-islamic-black">
                      <a href={campaign.ctaPrimaryUrl}>{campaign.ctaPrimary}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency note */}
      <section className="py-16 bg-islamic-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              How Your Support Helps
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Donations are collected through verified GoFundMe pages managed by the society.
              We publish regular updates and receipts, and we work with trusted partners to
              deliver aid quickly and responsibly.
            </p>
            <Button asChild className="gradient-gold text-islamic-black px-8 py-3">
              <a href="https://www.instagram.com/tcdmsa/">View All Updates</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Charity;
