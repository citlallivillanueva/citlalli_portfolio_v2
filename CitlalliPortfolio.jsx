import React, { useState, useEffect } from 'react';
import { ArrowDown, Menu, X, Mail, Linkedin, Instagram } from 'lucide-react';

export default function CitlalliPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Stylist Assistant",
      company: "Edgard Lopez Davila",
      period: "Spring 2025",
      category: "Fashion Styling",
      description: "Supporting high-fashion looks for photo shoots and fashion shows, managing garment sourcing and on-set styling logistics.",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Executive Assistant Intern",
      company: "EASTEAM",
      period: "Fall 2024",
      category: "Executive Support & Branding",
      description: "Coordinated Fashion Week events and campaigns, enhanced brand visibility through social media strategies.",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Fashion Week Intern",
      company: "Haus Incubator",
      period: "September 2024",
      category: "Event Coordination",
      description: "Coordinated logistics for multiple fashion brands, managed PR efforts and curated engaging Instagram content.",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Marketing Intern",
      company: "NuWa Marketing",
      period: "Summer 2024",
      category: "Marketing Research",
      description: "Conducted influencer research across 500+ profiles, developed market research reports and brand strategy.",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const skills = [
    "Brand Storytelling",
    "Trend Analysis",
    "Social Media Strategy",
    "Visual Content Curation",
    "Event Coordination",
    "PR & Media Relations",
    "Marketing Research",
    "Creative Communication"
  ];

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .scroll-indicator {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-sm">
        <div className="text-xl font-light tracking-wider">CITLALLI VILLANUEVA</div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="hover:opacity-70 transition-opacity"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex items-center justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="text-center space-y-8">
          {['Home', 'Experience', 'About', 'Contact'].map((item, i) => (
            <div 
              key={item}
              onClick={() => scrollToSection(i)}
              className="text-5xl md:text-7xl font-light cursor-pointer hover:text-gray-400 transition-colors duration-300"
              style={{
                animation: menuOpen ? `fadeInUp 0.6s ease-out ${i * 0.1}s both` : 'none'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #667eea 0%, transparent 50%)',
            transform: `scale(${1 + scrollY * 0.0005})`
          }}
        />
        <div className="text-center z-10 px-4">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-tight"
            style={{ 
              opacity: 1 - scrollY * 0.002,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            Citlalli
            <br />
            Villanueva
          </h1>
          <p 
            className="text-lg md:text-2xl text-gray-400 font-light tracking-wide mb-12"
            style={{ 
              opacity: 1 - scrollY * 0.002,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            Fashion Stylist & Brand Strategist
          </p>
          <div 
            className="scroll-indicator"
            style={{ 
              opacity: Math.max(0, 1 - scrollY * 0.01)
            }}
          >
            <ArrowDown size={32} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl md:text-7xl font-light mb-20 tracking-tight">Experience</h2>
        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center group"
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div 
                  className="aspect-square rounded-lg transition-transform duration-700 group-hover:scale-105"
                  style={{ background: exp.color }}
                >
                  <div className="w-full h-full flex items-center justify-center text-4xl font-light opacity-30">
                    {/* Placeholder for image - you'll add images later */}
                    {exp.company}
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-sm text-gray-500 mb-2 tracking-widest uppercase">{exp.category}</div>
                <h3 className="text-3xl md:text-4xl font-light mb-2">{exp.title}</h3>
                <div className="text-xl text-gray-400 mb-4">{exp.company}</div>
                <div className="text-sm text-gray-500 mb-6">{exp.period}</div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light mb-16 tracking-tight">About</h2>
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              Fashion professional currently pursuing a Bachelor of Arts in Business and Technologies 
              of Fashion at New York City College of Technology, with an expected graduation in June 2025.
            </p>
            <p>
              Specializing in brand storytelling, trend analysis, and visual content curation with hands-on 
              experience across styling, executive assistance, event coordination, and marketing research 
              within the fashion industry.
            </p>
            <p>
              Passionate about textile work including sewing, crocheting, and knitting, with a strong eye 
              for texture, proportion, and color.
            </p>
            
            <div className="pt-12">
              <h3 className="text-3xl font-light mb-8">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12">
              <h3 className="text-3xl font-light mb-6">Education</h3>
              <div className="text-gray-400">
                <div className="text-xl text-white mb-2">New York City College of Technology</div>
                <div>Bachelor of Arts in Business and Technologies of Fashion</div>
                <div className="text-sm mt-1">April 2020 – June 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-16 tracking-tight">Let's Connect</h2>
          <div className="space-y-8 text-xl md:text-2xl">
            <a 
              href="mailto:Citlallivillanuevav@gmail.com" 
              className="flex items-center justify-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail size={28} />
              Citlallivillanuevav@gmail.com
            </a>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <span className="text-2xl">📱</span>
              (917)-774-3102
            </div>
            <div className="flex justify-center gap-8 pt-8">
              <a 
                href="https://www.linkedin.com/in/citlalli-villanueva" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://instagram.com/knittedbycitlalli" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram size={32} />
              </a>
            </div>
          </div>
          
          <div className="mt-20 text-sm text-gray-600">
            © 2025 Citlalli Villanueva. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
