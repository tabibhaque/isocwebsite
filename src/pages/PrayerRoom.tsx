import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';

const PrayerRoom = () => {
  const prayerTimes = [
    { name: 'Fajr', time: '5:30 AM', note: 'Congregation 5:45 AM' },
    { name: 'Dhuhr', time: '1:10 PM', note: 'Congregation 1:30 PM' },
    { name: 'Asr', time: '4:30 PM', note: 'Congregation 4:45 PM' },
    { name: 'Maghrib', time: 'Sunset', note: 'Congregation 5 minutes after adhan' },
    { name: 'Isha', time: '8:15 PM', note: 'Congregation 8:30 PM' },
    { name: "Jumu'ah", time: '1:00 PM', note: 'Khutbah 1:05 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-islamic-black mb-6">
              Prayer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find daily prayer timings and directions to the campus prayer room.
              Times may vary by season; check weekly announcements for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-islamic-black">
              Prayer Timings
            </h2>
            <Badge className="bg-islamic-gold text-islamic-black">This Week</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerTimes.map((prayer) => (
              <Card key={prayer.name} className="border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-islamic-black">{prayer.name}</CardTitle>
                  <CardDescription className="text-gray-600 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {prayer.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{prayer.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-islamic-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-islamic-black">
                How to Get There
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Once you enter Goldsmith, on the immediate far left go through the doors into the corridor,
                take the first door right and continue straight following the signs to the prayer room.
              </p>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-islamic-gold" />
                <span>Prayer Room, Goldsmith Building, Trinity College Dublin</span>
              </div>
            </div>
            <div className="w-full">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-xl bg-black/90">
                <iframe
                  title="Prayer room directions video"
                  className="w-full h-full"
                  src="about:blank"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Video coming soon. Replace the embed link with your directions video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrayerRoom;
