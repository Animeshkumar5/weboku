import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, X, Linkedin, Twitter, Github, Globe, MapPin } from 'lucide-react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- Sub-Component: Counter ---
const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 30, 
    stiffness: 100, 
    duration: 2 
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

// --- Sub-Component: Process Card ---
const Card = ({ title, desc, icon, index }) => {
  return (
    <div 
      className="sticky top-0 h-screen flex items-center justify-center"
      style={{ top: `calc(10% + ${index * 30}px)`, zIndex: index + 1 }}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-5xl h-[400px] rounded-3xl bg-gray-800/90 backdrop-blur-xl border border-white/10 shadow-2xl p-10 flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10 flex items-start gap-8">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-tech uppercase tracking-wide">{title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">{desc}</p>
            <button className="flex items-center text-blue-400 font-bold text-lg hover:text-white transition-colors group">
              Learn How We Do It 
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 right-8 text-9xl font-bold text-white/5">0{index + 1}</div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const handleStartProject = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  const services = [
    { title: "Strategic Web Design", desc: "We don't just design pretty sites. We build conversion machines that turn visitors into paying customers.", icon: "🎨" },
    { title: "SEO Domination", desc: "Stop chasing algorithms. We implement proven strategies to rank you #1 for keywords that actually matter.", icon: "🚀" },
    { title: "Performance Marketing", desc: "Data-driven paid campaigns that maximize your ROI. Every dollar spent is tracked and optimized.", icon: "💰" },
    { title: "Brand Identity", desc: "Stand out in a crowded market. We craft memorable brand stories that resonate with your target audience.", icon: "✨" },
    { title: "Custom Development", desc: "Scalable, secure, and lightning-fast code. We build robust solutions for complex business problems.", icon: "💻" }
  ];

  // ✅ UPDATED TEAM DATA WITH LOCAL IMAGES
  const team = [
    {
      id: 1,
      name: "Anuj Agrahari",
      role: "Co-Founder",
      location: "Lucknow, IN",
      image: "/teamimages/Anuj1.png", // Correct path for Public folder
      bio: "Visionary leader with a passion for educational reform and digital assessment strategies. Dedicated to building scalable solutions.",
      skills: ["Assessments", "Mentoring", "Curriculum Design", "Video Marketing", "SEO"],
      experience: "3+ Years",
      social: { linkedin: "#", twitter: "#", globe: "#" }
    },
    {
      id: 2,
      name: "Ratnesh Pandey",
      role: "Co-Founder",
      location: "Lucknow, IN",
      image: "/teamimages/rat.png",
      bio: "Expert in project management and cybersecurity. Orchestrating complex digital infrastructures and strategic planning.",
      skills: ["SEO", "Project Management", "Cybersecurity", "Strategic Planning", "Execution"],
      experience: "3+ Years",
      social: { linkedin: "#", twitter: "#", globe: "#" }
    },
    {
      id: 3,
      name: "Akash Kumar Das",
      role: "Tech Team Lead",
      location: "Lucknow, IN",
      image: "/teamimages/Akash1.png",
      bio: "Full Stack Wizard specializing in the MERN stack. Leads the technical team to deliver robust and scalable web applications.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "System Design"],
      experience: "2+ Years",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Animesh Kumar",
      role: "Tech Team Lead",
      location: "Lucknow, IN",
      image: "/teamimages/Ani.png", 
      bio: "Full Stack Wizard specializing in the MERN stack. Leads the technical team to deliver robust and scalable web applications.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "System Design"],
      experience: "2+ Years",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    
    {
      id: 5,
      name: "Dimple",
      role: "Junior Developer",
      location: "Lucknow, IN",
      image: "/teamimages/Dimpal.png",
      bio: "Aspiring developer with a keen eye for frontend details and a passion for creating seamless user experiences.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
      experience: "1+ Years",
      social: { linkedin: "#", github: "#", twitter: "#" }
    }
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Projects" },
    { value: 98, suffix: "%", label: "Satisfaction" },
    { value: 10, suffix: "+", label: "Years Exp" },
    { value: 50, suffix: "+", label: "Experts" }
  ];

  const selectedMember = team.find(m => m.id === selectedTeamId);

  return (
    <div className="relative"> 
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&family=Outfit:wght@500;700&display=swap');
          
          .font-tech {
            font-family: 'Michroma', sans-serif;
          }
          
          .font-name {
            font-family: 'Outfit', sans-serif;
          }
        `}
      </style>

      {/* Click Explosion Overlay */}
      <AnimatePresence>
        {isExploding && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: 'fixed', top: coords.y, left: coords.x, width: '20px', height: '20px',
              borderRadius: '50%', backgroundColor: '#3b82f6', zIndex: 9999, pointerEvents: 'none',
              transform: 'translate(-50%, -50%)', boxShadow: '0 0 50px rgba(59, 130, 246, 0.5)'
            }}
          />
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-blue-500 mb-2 tabular-nums font-tech tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="text-white pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 pt-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-tech uppercase tracking-wide">Our Process</h2>
            <p className="text-xl text-gray-400">Scroll down to see how we deliver results.</p>
          </div>
          <div className="relative">
            {services.map((service, index) => (
              <Card key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-tech uppercase tracking-wide leading-relaxed">
              The Minds Behind <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.gray.200),theme(colors.sky.300),theme(colors.gray.200),theme(colors.white))] bg-[length:200%_auto] animate-shine"> Weboku</span>
            </h2>
            <p className="text-xl text-gray-400">Meet the experts driving your digital success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div
                layoutId={`card-${member.id}`}
                key={member.id}
                onClick={() => setSelectedTeamId(member.id)}
                className="group relative h-96 cursor-pointer rounded-3xl overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.blue.500)_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500 z-0" />
                <div className="absolute inset-[2px] bg-gray-900 rounded-[22px] z-10" />
                <div className="relative z-20 h-full w-full rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <motion.h3 layoutId={`title-${member.id}`} className="text-xl md:text-2xl font-bold text-white mb-1 font-name uppercase tracking-wide">
                        {member.name}
                      </motion.h3>
                      <motion.p layoutId={`role-${member.id}`} className="text-blue-400 font-medium mb-2">{member.role}</motion.p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" /> {member.location}
                      </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal Overlay */}
          <AnimatePresence>
            {selectedTeamId && selectedMember && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setSelectedTeamId(null)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />
                
                <motion.div
                  layoutId={`card-${selectedMember.id}`}
                  className="relative w-full max-w-4xl bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] z-10"
                >
                  <button onClick={(e) => { e.stopPropagation(); setSelectedTeamId(null); }} className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors">
                    <X size={24} />
                  </button>
                  <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                    <motion.img layoutId={`image-${selectedMember.id}`} src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                  </div>
                  <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto custom-scrollbar">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: 0.1 }}>
                      <motion.h2 layoutId={`title-${selectedMember.id}`} className="text-3xl md:text-4xl font-bold text-white mb-2 font-name uppercase tracking-wide">
                        {selectedMember.name}
                      </motion.h2>
                      <motion.p layoutId={`role-${selectedMember.id}`} className="text-xl text-blue-400 mb-6 font-medium">{selectedMember.role}</motion.p>
                      <p className="text-gray-300 leading-relaxed mb-8 text-lg">{selectedMember.bio}</p>
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Expertise & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                        <div><p className="text-gray-500 text-sm mb-1">Experience</p><p className="text-white font-bold">{selectedMember.experience}</p></div>
                        <div className="flex space-x-4">
                          {selectedMember.social.linkedin && <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>}
                          {selectedMember.social.twitter && <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>}
                          {selectedMember.social.github && <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"><Github size={20} /></a>}
                          {selectedMember.social.globe && <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"><Globe size={20} /></a>}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-32 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.white),theme(colors.gray.200),theme(colors.sky.300),theme(colors.gray.200),theme(colors.white))] bg-[length:200%_auto] animate-shine leading-tight py-2 font-tech uppercase tracking-wide">
            Ready to Scale Your Business?
          </h2>
          <div className="relative inline-block">
            <motion.span 
              animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-blue-500"
            />
            <button 
              onClick={handleStartProject}
              className="relative bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] z-10 font-tech tracking-tighter"
            >
              Start Your Project <ArrowRight className="ml-2" size={24} />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;