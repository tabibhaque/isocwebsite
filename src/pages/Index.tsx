
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Heart, BookOpen, MapPin, User } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const upcomingEvents = [
    {
      title: "Jumu'ah Prayer",
      date: "Every Friday",
      time: "1:00 PM - 2:00 PM",
      location: "Prayer Room, Student Union",
      type: "prayer"
    },
    {
      title: "Islamic History Lecture",
      date: "March 25, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Lecture Theatre A",
      type: "education"
    },
    {
      title: "Community Iftar",
      date: "March 30, 2024",
      time: "6:30 PM - 9:00 PM",
      location: "Main Hall",
      type: "social"
    },
    {
      title: "Charity Week Fundraiser",
      date: "April 5-12, 2024",
      time: "All Week",
      location: "Campus Wide",
      type: "charity"
    }
  ];

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
      case 'prayer': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'education': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'social': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'charity': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-islamic-black mb-6">
                Welcome to Our
                <span className="block text-islamic-gold">Ummah</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                TCD MSA is more than just a student organization – we're a family. 
                Whether you're seeking spiritual growth, academic support, or lasting friendships, 
                you'll find your place here. From weekly prayers to social events, from 
                student support programs to charity initiatives, we're committed to nurturing 
                both your faith and your university experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
                  <span className="text-gray-700">Weekly congregational prayers and Islamic education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
                  <span className="text-gray-700">Peer support and academic guidance programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
                  <span className="text-gray-700">Community service and charitable initiatives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
                  <span className="text-gray-700">Social events and cultural celebrations</span>
                </li>
              </ul>
            </div>
            <div className="fade-in">
              <div className="relative">
                <img 
                  src="https://www.visittrinity.ie/wp-content/uploads/2024/08/SM_1561_0425-Pano_web_PhotoBySteMurray-1.jpg?w=1440" 
                  alt="Trinity College Dublin campus" 
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-islamic-black/30 to-transparent rounded-lg"></div>
                <div className="absolute inset-0 border-2 border-islamic-gold/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-islamic-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-islamic-black mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for spiritual growth, learning, and community building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="fade-in hover-scale border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-islamic-gold/10 rounded-lg text-islamic-gold border border-islamic-gold/20">
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-islamic-black">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {event.date}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={`${getEventColor(event.type)} capitalize border`}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-islamic-black text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Be Part of Something
              <span className="block text-islamic-gold">Greater</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Your journey of faith, growth, and service starts here. Join hundreds of 
              Muslim students who have found their home in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="gradient-gold text-islamic-black px-8 py-4 text-lg hover-scale hover:shadow-xl transition-all duration-200"
              >
                <a href="https://trinitysocietieshub.com/products/muslim-students-association?_pos=1&_sid=fcc8178eb&_ss=r">
                  <User className="mr-2 h-5 w-5" />
                  Join Our Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
