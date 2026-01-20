
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Heart, BookOpen, Filter, Users } from 'lucide-react';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Jumu'ah Prayer",
      description: "Weekly congregational prayer with khutbah",
      date: "Every Friday",
      time: "1:00 PM - 2:00 PM",
      location: "Prayer Room, Student Union",
      type: "prayer",
      recurring: true
    },
    {
      id: 2,
      title: "Sisters Halaqah",
      description: "Weekly reminder circle with Qur'an reflections and discussion",
      date: "Every Tuesday",
      time: "6:30 PM - 7:30 PM",
      location: "Prayer Room",
      type: "education",
      recurring: true,
      registrationUrl: "#"
    },
    {
      id: 3,
      title: "Sisters Halaqah",
      description: "Weekly reminder circle focused on faith, study, and sisterhood",
      date: "Every Saturday",
      time: "3:00 PM - 4:30 PM",
      location: "Prayer Room",
      type: "education",
      recurring: true,
      registrationUrl: "#"
    },
    {
      id: 4,
      title: "Charity Week Fundraiser",
      description: "Annual fundraising campaign for local and international charities",
      date: "April 5-12, 2024",
      time: "All Week",
      location: "Campus Wide",
      type: "charity",
      recurring: false
    },
    {
      id: 5,
      title: "Quran Study Circle",
      description: "Weekly Quran recitation and tafsir session",
      date: "Every Wednesday",
      time: "6:00 PM - 7:30 PM",
      location: "Islamic Center",
      type: "education",
      recurring: true
    },
    {
      id: 6,
      title: "Sisters' Social Evening",
      description: "Monthly gathering for Muslim sisters with dinner and activities",
      date: "April 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Community Room",
      type: "social",
      recurring: false,
      registrationUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Events', count: events.length },
    { id: 'prayer', name: 'Prayer', count: events.filter(e => e.type === 'prayer').length },
    { id: 'education', name: 'Education', count: events.filter(e => e.type === 'education').length },
    { id: 'social', name: 'Social', count: events.filter(e => e.type === 'social').length },
    { id: 'charity', name: 'Charity', count: events.filter(e => e.type === 'charity').length }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'prayer': return <Heart className="h-5 w-5" />;
      case 'education': return <BookOpen className="h-5 w-5" />;
      case 'social': return <Users className="h-5 w-5" />;
      case 'charity': return <Heart className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'prayer': return 'bg-green-100 text-green-800';
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'social': return 'bg-purple-100 text-purple-800';
      case 'charity': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-islamic-black mb-6">
              Events & 
              <span className="block text-islamic-gold">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join us for spiritual growth, learning opportunities, and community building. 
              From weekly prayers to educational lectures, social gatherings to charity drives.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={`${
                  selectedFilter === filter.id 
                    ? 'bg-islamic-gold hover:bg-islamic-gold/90' 
                    : 'border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-white'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter.name} ({filter.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover-scale border-0 shadow-lg bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-islamic-gold/10 rounded-lg text-islamic-gold">
                        {getEventIcon(event.type)}
                      </div>
                      <Badge className={`${getEventColor(event.type)} capitalize`}>
                        {event.type}
                      </Badge>
                    </div>
                    {event.recurring && (
                      <Badge variant="outline" className="text-xs">
                        Recurring
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-islamic-black">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  {event.registrationUrl && (
                    <div className="mt-6">
                      <Button
                        asChild
                        className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white"
                      >
                        <a href={event.registrationUrl}>Register</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
