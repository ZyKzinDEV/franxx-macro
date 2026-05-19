import { Download, Crosshair, Zap, Shield, Cpu, Activity, Terminal, Check, Target, Settings2, CloudLightning } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      
      const a = document.createElement("a");
      a.href = "./franxx-macrov2.zip";
      a.download = "franxx-macrov2.zip";
      document.body.appendChild(a);
      a.click();
      
      document.body.removeChild(a);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-500/30">
      
      {/* Global Ambient Glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-zinc-900/30 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/30 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between py-8">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] bg-black flex items-center justify-center">
              <img 
                src="./logo.png" 
                alt="Franxx Logo" 
                className="w-full h-full object-cover object-top filter brightness-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>';
                }}
              />
            </div>
            <span className="font-bold text-2xl tracking-[0.2em] text-white">FRANXX</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-zinc-400">
            <a href="#features" className="hover:text-red-400 transition-colors">FEATURES</a>
            <a href="#about" className="hover:text-red-400 transition-colors">ABOUT</a>
            <div className="flex items-center gap-2 text-green-400 bg-green-950/20 px-4 py-1.5 rounded-full border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              100% EXTERNAL
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh] py-12 gap-16">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
            >
              <span className="text-white">ULTIMATE</span><br/>
              <span className="text-red-500 text-4xl md:text-5xl lg:text-6xl mt-4 block font-extrabold tracking-widest uppercase">Blade Ball Macro</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-xl md:text-2xl mb-12 leading-relaxed font-light"
            >
              Dominate the server with automated precision and zero latency. A powerful external macro designed for fast, precise and reliable automation across games, with special optimization for Blade Ball. Built for speed, simplicity, and consistency — helping you react faster without unnecessary complexity.
            </motion.p>

            {/* Hero Feature Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-950/30 border border-red-500/20 p-3 rounded-2xl">
                  <Zap className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-zinc-300 text-lg font-medium tracking-wide">Lightning Fast Reaction</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-950/30 border border-red-500/20 p-3 rounded-2xl">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-zinc-300 text-lg font-medium tracking-wide">Safe & External</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-start gap-4"
            >
              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="group relative bg-red-600 hover:bg-red-500 text-white text-xl font-bold px-10 py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] flex items-center justify-center gap-4 w-full sm:w-auto disabled:opacity-75 disabled:cursor-wait"
              >
                {isDownloading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                )}
                {isDownloading ? 'INITIATING...' : 'DOWNLOAD NOW'}
              </button>
              <p className="text-sm text-zinc-600 font-medium px-2 tracking-wide uppercase">
                Windows 10/11 x64 Only
              </p>
            </motion.div>
          </div>

          {/* Right Hero / Floating Image */}
          <div className="flex-1 relative flex items-end justify-center w-full min-h-[400px] lg:min-h-[500px] lg:-mr-10 xl:-mr-20 mt-12 lg:mt-0">
            {/* Deep ambient red glow in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-zinc-900/50 blur-[130px] rounded-[100%] pointer-events-none"></div>

            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 flex flex-col items-center justify-end w-full h-full pointer-events-none"
            >
              <img 
                src="./zero-two.png"
                alt="Zero Two"
                className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] object-contain filter brightness-90 contrast-[1.1] grayscale-[0.2] origin-bottom"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
                }}
                onError={(e) => {
                  // Fallback to a placeholder if the local image isn't found
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop";
                  e.currentTarget.className = "w-72 h-72 lg:w-[400px] lg:h-[400px] object-cover rounded-full opacity-50 grayscale mix-blend-screen drop-shadow-[0_0_40px_rgba(239,68,68,0.4)]";
                  e.currentTarget.style.maskImage = 'none';
                  e.currentTarget.style.WebkitMaskImage = 'none';
                }}
              />
            </motion.div>
          </div>
        </main>

        {/* Content Section: Features */}
        <section id="features" className="py-24 border-t border-zinc-900/50 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">PRECISION <span className="text-red-500">AUTOMATION</span></h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">Built for high-speed screen capture and efficient input automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-900 hover:border-red-900/50 transition-colors p-8 rounded-3xl">
              <div className="w-12 h-12 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                <Activity className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">Fast Input Execution</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                The macro is designed to trigger actions with extremely low delay, ensuring quick and consistent reactions during gameplay.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-900 hover:border-red-900/50 transition-colors p-8 rounded-3xl">
              <div className="w-12 h-12 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">Safe & External</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                Operates entirely outside of the game client. Franxx never reads or modifies game memory, functioning purely as an external macro tool.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-900 hover:border-red-900/50 transition-colors p-8 rounded-3xl">
              <div className="w-12 h-12 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                <Cpu className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">Performance Optimized</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                Designed to consume virtually zero CPU. No FPS drops, no lag, just a smooth, silent background process analyzing your screen.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section: Updates */}
        <section id="updates" className="py-24 border-t border-zinc-900/50 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">LATEST <span className="text-red-500">UPDATES</span></h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">Stay informed about the newest features and improvements.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
                   {/* Update Item 1 */}
            <div className="bg-zinc-950/50 border border-zinc-900 p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-colors hover:border-red-900/50">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-red-500" />
                  <h3 className="text-xl font-bold text-white tracking-wide">Version 2.0.0</h3>
                </div>
                <span className="text-sm font-medium px-3 py-1 bg-red-950/30 text-red-400 rounded-full border border-red-500/20 max-w-fit">May 19, 2026</span>
              </div>
              <ul className="space-y-3 text-zinc-400 font-light mt-6">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>New simplified UI</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>General optimization</span>
                </li>
                  <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>New Export/Import feature</span>
                </li>
              </ul>
            </div>
            {/* Update Item 1 */}
            <div className="bg-zinc-950/50 border border-zinc-900 p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-colors hover:border-red-900/50">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-zinc-500" />
                  <h3 className="text-xl font-bold text-white tracking-wide">Version 1.0.5</h3>
                </div>
                <span className="text-sm font-medium px-3 py-1 bg-zinc-900 text-zinc-500 rounded-full border border-zinc-800 max-w-fit">May 18, 2026</span>
              </div>
              <ul className="space-y-3 text-zinc-400 font-light mt-6">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>Official Launch</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>Fix crashes and lagging</span>
                </li>
                  <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>Significantly improved macro performance.</span>
                </li>
              </ul>
            </div>
            
            {/* Update Item 2 */}
            <div className="bg-zinc-950/50 border border-zinc-900 p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-colors hover:border-red-900/50">
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-700"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-zinc-500" />
                  <h3 className="text-xl font-bold text-zinc-300 tracking-wide">Version 1.0.0</h3>
                </div>
                <span className="text-sm font-medium px-3 py-1 bg-zinc-900 text-zinc-500 rounded-full border border-zinc-800 max-w-fit">Apr 10, 2026</span>
              </div>
              <ul className="space-y-3 text-zinc-400 font-light mt-6">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                  <span>Minor bug fixes and UI improvements in the main dashboard.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                  <span>Click delay fixed</span>
                </li>
              </ul>
            </div>
            
          </div>
        </section>

        {/* Content Section: Final CTA */}
        <section id="about" className="py-24 border-t border-zinc-900/50 flex flex-col items-center justify-center text-center relative z-10 w-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent blur-[80px] pointer-events-none"></div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight relative z-20">READY TO <span className="text-red-500">DOMINATE?</span></h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl font-light leading-relaxed relative z-20">
            Join thousands of players already using Franxx Macro to secure their victories. Download now and experience true visual automation.
          </p>
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="relative z-20 group bg-red-600 hover:bg-red-500 text-white text-xl font-bold px-12 py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] flex items-center justify-center gap-4 disabled:opacity-75 disabled:cursor-wait"
          >
            {isDownloading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            )}
            {isDownloading ? 'INITIATING...' : 'GET FRANXX MACRO'}
          </button>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm relative z-10">
          <div className="flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-zinc-500" />
            <span className="font-bold tracking-[0.2em] text-zinc-500">FRANXX</span>
          </div>
          <p className="text-zinc-600 font-light">&copy; {new Date().getFullYear()} Franxx Macro. All rights reserved. Not affiliated with Roblox Corporation.</p>
          <div className="flex gap-8 text-zinc-600 font-medium tracking-wide">
            <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-1">
              DISCORD
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">TERMS OF SERVICE</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
