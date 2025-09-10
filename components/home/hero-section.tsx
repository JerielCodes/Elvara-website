'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sprout, TrendingUp, Zap } from 'lucide-react';
import SectionContainer from '@/components/ui/section-container';

export default function HeroSection() {
  return (
    <SectionContainer background="gradient" size="large" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg" />
      </div>

      <div className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
            <Sprout className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Our mission is{' '}
            <span className="relative">
              growth
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 text-balance">
            Handling the systems and strategies that move your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" className="bg-white text-brand-green hover:bg-white/90 text-lg px-8" asChild>
            <Link href="/book">Book a Demo</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green text-lg px-8" asChild>
            <Link href="/pricing">See Plans</Link>
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <TrendingUp className="h-6 w-6 text-white" />
            <span className="text-white font-medium">AI-Powered Growth</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Zap className="h-6 w-6 text-white" />
            <span className="text-white font-medium">Complete Automation</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Sprout className="h-6 w-6 text-white" />
            <span className="text-white font-medium">Proven Results</span>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}