import React from 'react';
import { motion } from 'framer-motion';
import { 
    Globe, Layers, Zap, Shield, Cpu, Code2, ArrowLeft, ExternalLink, 
    Blocks, Network, Cpu as Chip, Database
} from 'lucide-react';
import { appStore, useAppStore } from '@/lib/store';
import logoDark from '../assets/txio2.png';
import logoLight from '../assets/txio3.png';

export const EcosystemPage: React.FC = () => {
    const { theme } = useAppStore();
    const logo = theme === 'dark' ? logoDark : logoLight;

    const chains = [
        { name: 'Sui', desc: 'Object-centric L1 for mass adoption.', color: '#38bdf8' },
        { name: 'Solana', desc: 'High-performance blockchain with parallel execution.', color: '#14f195' },
        { name: 'EVM', desc: 'Universal support for Ethereum and L2 ecosystems.', color: '#6366f1' },
        { name: 'Aptos', desc: 'The safe and scalable Layer 1 blockchain.', color: '#2dd4bf' },
        { name: 'Cosmos', desc: 'The internet of blockchains.', color: '#ef4444' },
        { name: 'Polkadot', desc: 'The multi-chain vision.', color: '#e6007a' }
    ];

    const partners = [
        { name: 'Mysten Labs', role: 'Core Infrastructure' },
        { name: 'Solana Foundation', role: 'Strategic Partner' },
        { name: 'Coinbase', role: 'Wallet Integration' },
        { name: 'Chainlink', role: 'Data Oracle' }
    ];

    return (
        <div className={`min-h-screen font-sans selection:bg-electric-violet/30 overflow-x-hidden ${
            theme === 'dark' ? 'bg-near-black text-white' : 'bg-slate-50 text-slate-900'
        }`}>
            {/* Nav */}
            <nav className={`fixed top-0 left-0 right-0 h-20 border-b z-50 px-6 md:px-12 flex items-center justify-between backdrop-blur-xl ${
                theme === 'dark' ? 'bg-near-black/50 border-white/5' : 'bg-white/50 border-slate-200'
            }`}>
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => appStore.setViewMode('landing')}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                            theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        <ArrowLeft size={16} />
                        Home
                    </button>
                    <div className="h-6 w-px bg-slate-200 dark:bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="txio" className="h-6 w-auto" />
                        <span className="font-bold tracking-tighter">ecosystem</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => appStore.setViewMode('app')}
                        className="px-5 py-2 bg-electric-violet text-white rounded-lg font-bold text-xs hover:bg-soft-purple transition-colors shadow-lg"
                    >
                        Go to IDE
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 text-electric-violet text-[10px] font-bold uppercase tracking-widest border border-electric-violet/20">
                        Universal Connectivity
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                        United by <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-soft-purple">Universal Infrastructure.</span>
                    </h1>
                    <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                        txio bridges the gap between fragmented ecosystems. One interface to build across all major protocols.
                    </p>
                </motion.div>
            </section>

            {/* Chains Grid */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chains.map((chain, i) => (
                        <motion.div 
                            key={chain.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-[2.5rem] border group transition-all ${
                                theme === 'dark' ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]' : 'bg-white border-slate-200 hover:shadow-2xl'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center`} style={{ backgroundColor: `${chain.color}15`, color: chain.color }}>
                                    <Network size={28} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-slate-500/10 text-[10px] font-bold uppercase tracking-widest text-slate-500">Active</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{chain.name}</h3>
                            <p className={`text-sm leading-relaxed mb-8 ${
                                theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                            }`}>{chain.desc}</p>
                            <button className="flex items-center gap-2 text-xs font-bold text-electric-violet group-hover:gap-3 transition-all uppercase tracking-widest">
                                Explore Integration <ExternalLink size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Partner Section */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl font-bold tracking-tight">Our Strategic <br /> Partners.</h2>
                        <p className={`text-lg ${
                            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                        }`}>Collaborating with core dev teams to build the future of blockchain tooling.</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                            {partners.map(p => (
                                <div key={p.name} className={`px-6 py-3 rounded-2xl border ${
                                    theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-sm'
                                }`}>
                                    <div className="text-sm font-bold">{p.name}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">{p.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-electric-violet/20 blur-[100px] rounded-full"></div>
                        <div className={`relative p-12 rounded-[3rem] border backdrop-blur-3xl grid grid-cols-2 gap-8 ${
                            theme === 'dark' ? 'bg-near-black/50 border-white/10' : 'bg-white/50 border-slate-200 shadow-2xl'
                        }`}>
                            <div className="aspect-square rounded-2xl bg-slate-500/10 flex items-center justify-center"><Blocks size={40} className="text-slate-500" /></div>
                            <div className="aspect-square rounded-2xl bg-electric-violet/10 flex items-center justify-center"><Chip size={40} className="text-electric-violet" /></div>
                            <div className="aspect-square rounded-2xl bg-soft-purple/10 flex items-center justify-center"><Database size={40} className="text-soft-purple" /></div>
                            <div className="aspect-square rounded-2xl bg-slate-500/10 flex items-center justify-center"><Layers size={40} className="text-slate-500" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center">
                <div className={`max-w-4xl mx-auto p-16 rounded-[4rem] relative overflow-hidden ${
                    theme === 'dark' ? 'bg-electric-violet border border-electric-violet/20' : 'bg-slate-900 text-white'
                }`}>
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Globe size={160} /></div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Add your protocol to <br /> the txio network.</h3>
                    <div className="flex justify-center gap-6 relative z-10">
                        <button className="px-8 py-4 bg-white text-near-black rounded-2xl font-bold hover:bg-slate-100 transition-all active:scale-95">Integrate Now</button>
                        <button className="px-8 py-4 bg-near-black/20 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all">Developer Docs</button>
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center text-[10px] uppercase font-bold tracking-[0.5em] text-slate-500">
                Universal Infrastructure Ecosystem © 2026
            </footer>
        </div>
    );
};
