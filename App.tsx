"use client"
import React, { useEffect, useState } from 'react';
import { ArrowDown, Linkedin, Dribbble, Instagram, Globe, Settings, Github, Twitter } from 'lucide-react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import MuseBot from './components/MuseBot';
import AdminPanel from './components/AdminPanel';
import { Project, SiteContent, NavItem, SocialLink } from './types';

// Initial Data
const initialProjects: Project[] = [
  {
    id: 1,
    title: "Brutal Banking App",
    category: "FinTech",
    description: "Redesigning a banking interface to be less boring and more anxiety-inducing (in a good way). High contrast for high rollers.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#",
    bgColor: "bg-blue-200",
    figmaLink: "https://figma.com/community/file/12345"
  },
  {
    id: 2,
    title: "Retro Synth E-Comm",
    category: "E-Commerce",
    description: "A synth-wave inspired shop for modular synthesizers. Neon glows, CRT filters, and a checkout flow that feels like an arcade game.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#",
    bgColor: "bg-pink-200",
    figmaLink: "https://figma.com/community/file/67890"
  },
  {
    id: 3,
    title: "Minimalist Weather",
    category: "Mobile App",
    description: "It tells you if it's raining. That's it. No radar, no humidity, just 'YES' or 'NO'. The ultimate user-centric reductionism.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#",
    bgColor: "bg-yellow-200",
    figmaLink: "https://figma.com/community/file/13579"
  },
  {
    id: 4,
    title: "Typeface Tinder",
    category: "Web App",
    description: "Swipe left on Comic Sans. Swipe right on Helvetica. A dating app for typography nerds looking for their perfect ligature.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#",
    bgColor: "bg-green-200",
    figmaLink: "https://figma.com/community/file/11223"
  }
];

const initialNav: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'The Muse', href: '#muse' },
  { label: 'Contact', href: '#contact' },
];

const initialSocials: SocialLink[] = [
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/omkar-pawar-5370851b2/' },
    { platform: 'dribbble', url: '#' },
    { platform: 'globe', url: '#' },
    { platform: 'instagram', url: '#' },
];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // CMS State
  const [content, setContent] = useState<SiteContent>({
    navItems: initialNav,
    projects: initialProjects,
    socialLinks: initialSocials,
    email: "omipawar17@gmail.com",
    logoUrl: "",
    showLogo: true,
    showNav: true
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return <Linkedin size={24} />;
      case 'dribbble': return <Dribbble size={24} />;
      case 'instagram': return <Instagram size={24} />;
      case 'github': return <Github size={24} />;
      case 'twitter': return <Twitter size={24} />;
      case 'globe': return <Globe size={24} />;
      default: return <Globe size={24} />;
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case 'linkedin': return 'hover:bg-blue-700 hover:text-white hover:rotate-6';
      case 'dribbble': return 'hover:bg-pink-500 hover:text-white hover:-rotate-3';
      case 'instagram': return 'hover:bg-purple-500 hover:text-white hover:-rotate-6';
      case 'github': return 'hover:bg-gray-800 hover:text-white hover:rotate-3';
      case 'twitter': return 'hover:bg-blue-400 hover:text-white hover:-rotate-3';
      case 'globe': return 'hover:bg-deep-purple hover:text-white hover:rotate-3';
      default: return 'hover:bg-black hover:text-white';
    }
  };

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-hot-pink selection:text-white">
      
      {/* Admin Panel Injection */}
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        content={content}
        onUpdate={setContent}
      />

      {/* Admin Trigger */}
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-white border-4 border-black p-3 shadow-hard hover:shadow-hard-hover hover:-translate-y-1 active:translate-y-0 active:shadow-hard transition-all"
        title="CMS Settings"
      >
        <Settings size={24} className="animate-[spin_10s_linear_infinite]" />
      </button>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-2 bg-acid-green z-[60] transition-all duration-100 border-b border-black" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Pass dynamic nav items and logo to Header */}
      <Header 
        navItems={content.navItems} 
        logoUrl={content.logoUrl} 
        showLogo={content.showLogo ?? true} 
        showNav={content.showNav ?? true} 
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative max-w-5xl mx-auto text-center z-10">
                <div className="inline-block bg-acid-green border-2 border-black px-4 py-2 mb-6 rotate-[-2deg] shadow-hard-sm">
                    <span className="font-mono font-bold text-sm md:text-base">HELLO, HUMAN.</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
                    MAKING <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-purple to-hot-pink">DIGITAL</span> <br/>
                    CHAOS.
                </h1>
                
                <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
                    Senior UI/UX Designer obsessed with <span className="bg-yellow-300 px-1">bold aesthetics</span> and silky smooth interactions.
                </p>

                <a href="#work" className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full animate-bounce border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>

        {/* Marquee Strip */}
        <div className="bg-yellow-300 border-y-4 border-black overflow-hidden py-3">
            <div className="animate-marquee whitespace-nowrap flex gap-8 font-mono font-bold text-xl">
               {[...Array(10)].map((_, i) => (
                   <React.Fragment key={i}>
                       <span>UI DESIGN</span> ✦ <span>UX RESEARCH</span> ✦ <span>FRONTEND DEV</span> ✦ <span>PROTOTYPING</span> ✦
                   </React.Fragment>
               ))}
            </div>
        </div>
        <style>{`
            .animate-marquee {
                animation: marquee 20s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>

        {/* Work Section (Dynamic) */}
        <section id="work" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16 border-b-4 border-black pb-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase">Selected<br/>Works</h2>
                <span className="font-mono hidden md:block text-xl">2020 — PRESENT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {content.projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>

        {/* AI Bot Section */}
        <MuseBot />

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-acid-green border-b-4 border-black">
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-black border-4 border-white shadow-hard rotate-3 relative overflow-hidden">
                        <img src="https://picsum.photos/800/800?grayscale" alt="Portrait" className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white border-4 border-black p-4 font-black text-xl shadow-hard rotate-[-6deg]">
                        EST. 1995
                    </div>
                </div>
                <div className="md:col-span-7 space-y-6">
                    <h2 className="text-5xl font-black mb-6">NOT YOUR AVERAGE<br/>PIXEL PUSHER.</h2>
                    <p className="text-xl font-medium leading-relaxed">
                        I'm a multidisciplinary designer who believes that "user-friendly" doesn't have to mean "boring". With half a decade of experience, I bridge the gap between functional utility and emotional design.
                    </p>
                    <p className="text-lg font-mono border-l-4 border-black pl-4">
                        Currently building accessible, high-impact digital experiences. I write clean code, design dirty grids, and drink too much coffee.
                    </p>
                    
                    <div className="pt-6 flex gap-4 flex-wrap">
                         {['React', 'TypeScript', 'Figma', 'Tailwind', 'Motion', 'AI Integration'].map(skill => (
                             <span key={skill} className="px-3 py-1 border-2 border-black bg-white font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-default">
                                 {skill}
                             </span>
                         ))}
                    </div>
                </div>
             </div>
        </section>

        {/* Contact Section (Dynamic) */}
        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-6xl font-black mb-8">LET'S MAKE<br/>SOMETHING WEIRD.</h2>
            <p className="text-xl mb-12">Available for freelance projects and tea time chats.</p>
            
            <a href={`mailto:${content.email}`} className="inline-block bg-black text-white text-2xl font-bold px-12 py-6 border-4 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-hard-hover transition-all duration-300 shadow-hard">
                {content.email}
            </a>
        </section>
      </main>

      {/* Footer (Dynamic) */}
      <footer className="bg-black text-white py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="font-black text-2xl mb-2">OMKAR PAWAR</div>
                <div className="text-gray-400 font-mono text-sm">
                    © {new Date().getFullYear()} — All rights reserved (maybe).
                </div>
            </div>

            <div className="flex gap-4">
                {content.socialLinks.map((link, idx) => (
                    <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center bg-white text-black border-2 border-black transition-all duration-300 ${getSocialColor(link.platform)}`}
                    >
                        {getSocialIcon(link.platform)}
                    </a>
                ))}
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;