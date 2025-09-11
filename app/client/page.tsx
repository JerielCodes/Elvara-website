'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import MetricCard from '@/components/client/metric-card';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Calendar, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MessageSquare,
  BarChart3,
  Settings,
  Bell,
  Lock
} from 'lucide-react';

const mockMetrics = [
  {
    title: 'Calls Answered',
    value: '1,247',
    change: '+23%',
    changeType: 'increase' as const,
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: 'Appointments Booked',
    value: '89',
    change: '+18%',
    changeType: 'increase' as const,
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: 'Revenue Generated',
    value: '$24,580',
    change: '+31%',
    changeType: 'increase' as const,
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    title: 'New Leads',
    value: '156',
    change: '+12%',
    changeType: 'increase' as const,
    icon: <Users className="h-5 w-5" />,
  },
];

const recentActivity = [
  { time: '2 min ago', activity: 'New appointment booked for tomorrow at 2:00 PM', type: 'booking' },
  { time: '15 min ago', activity: 'AI handled inquiry about pricing and services', type: 'call' },
  { time: '1 hour ago', activity: 'Social media post published with 24 engagements', type: 'social' },
  { time: '2 hours ago', activity: 'SEO report generated - ranking improved for 3 keywords', type: 'seo' },
  { time: '3 hours ago', activity: 'Lead nurturing email sent to 45 prospects', type: 'marketing' },
];

export default function ClientPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <main className="pt-16">
          <SectionContainer background="gradient" size="large">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
                <Lock className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Client Portal Coming Soon
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                We're building a comprehensive dashboard where you'll be able to monitor your business growth in real-time.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-brand-green hover:bg-white/90 mr-4"
                onClick={() => setIsAuthenticated(true)}
              >
                Preview Dashboard
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green">
                Contact Support
              </Button>
            </div>
          </SectionContainer>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-16 bg-gray-50 min-h-screen">
        <SectionContainer background="default" className="bg-white border-b">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's how your business is growing.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="text-brand-green border-brand-green">
                Growth Plan
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="gray">
          <AnimatedSection>
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mockMetrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
                  <Bell className="h-5 w-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`p-2 rounded-full ${
                          item.type === 'booking' ? 'bg-green-100' :
                          item.type === 'call' ? 'bg-blue-100' :
                          item.type === 'social' ? 'bg-purple-100' :
                          item.type === 'seo' ? 'bg-brand-green/10' : 'bg-gray-100'
                        }`}>
                          {item.type === 'booking' && <Calendar className="h-4 w-4 text-green-600" />}
                          {item.type === 'call' && <Phone className="h-4 w-4 text-blue-600" />}
                          {item.type === 'social' && <MessageSquare className="h-4 w-4 text-purple-600" />}
                          {item.type === 'seo' && <TrendingUp className="h-4 w-4 text-brand-green" />}
                          {item.type === 'marketing' && <Users className="h-4 w-4 text-gray-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{item.activity}</p>
                          <p className="text-xs text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      <span className="text-sm">View Reports</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Calendar className="h-6 w-6 mb-2" />
                      <span className="text-sm">Manage Bookings</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Phone className="h-6 w-6 mb-2" />
                      <span className="text-sm">Call Logs</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <MessageSquare className="h-6 w-6 mb-2" />
                      <span className="text-sm">Social Media</span>
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-brand-green/5 rounded-lg border border-brand-green/20">
                    <h4 className="font-semibold text-gray-900 mb-2">Coming Soon</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time call monitoring</li>
                      <li>• Advanced analytics dashboard</li>
                      <li>• Custom reporting tools</li>
                      <li>• Integration management</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}