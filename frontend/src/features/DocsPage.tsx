import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Book, Code2, Cpu, Globe, Layers, Shield, Terminal, Zap, ChevronRight, Search, 
    Menu, X, Moon, Sun, ArrowLeft, ExternalLink, MessageSquare, BookOpen, Settings,
    Lock, Database
} from 'lucide-react';
import { appStore, useAppStore } from '@/lib/store';
import logoDark from '../assets/txio2.png';
import logoLight from '../assets/txio3.png';

export const DocsPage: React.FC = () => {
    const { theme } = useAppStore();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const logo = theme === 'dark' ? logoDark : logoLight;

    const sections = [
        { id: 'intro', title: 'Introduction', icon: Book },
        { id: 'architecture', title: 'Architecture', icon: Cpu },
        { id: 'tx-composer', title: 'TX Composer', icon: Layers },
        { id: 'rpc-builder', title: 'RPC Builder', icon: Terminal },
        { id: 'security', title: 'Security', icon: Shield },
        { id: 'api-reference', title: 'API Reference', icon: Code2 },
    ];

    const toggleTheme = () => {
        appStore.updateSettings({ theme: theme === 'dark' ? 'light' : 'dark' });
    };

    return (
        <div className={`min-h-screen font-sans transition-colors duration-500 ${
            theme === 'dark' ? 'bg-near-black text-white' : 'bg-slate-50 text-slate-900'
        }`}>
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 h-16 border-b z-50 px-6 flex items-center justify-between backdrop-blur-xl ${
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
                        Back
                    </button>
                    <div className="h-6 w-px bg-slate-200 dark:bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="txio" className="h-6 w-auto" />
                        <span className="font-bold tracking-tighter">docs</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`relative hidden md:block w-64 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" />
                        <input 
                            type="text" 
                            placeholder="Search documentation..." 
                            className={`w-full pl-9 pr-4 py-1.5 text-xs rounded-full border transition-all outline-none ${
                                theme === 'dark' 
                                ? 'bg-white/5 border-white/10 focus:border-electric-violet/50' 
                                : 'bg-slate-100 border-slate-200 focus:border-electric-violet/30'
                            }`}
                        />
                    </div>
                    <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${
                            theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'
                        }`}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button 
                        onClick={() => appStore.setViewMode('app')}
                        className="px-4 py-2 bg-electric-violet text-white rounded-lg font-bold text-xs hover:bg-soft-purple transition-colors"
                    >
                        Go to IDE
                    </button>
                </div>
            </header>

            <div className="flex pt-16 h-[calc(100vh-4rem)]">
                {/* Sidebar */}
                <aside className={`fixed md:relative transition-all duration-300 z-40 h-full border-r ${
                    sidebarOpen ? 'w-64' : 'w-0 overflow-hidden border-none'
                } ${
                    theme === 'dark' ? 'bg-near-black border-white/5' : 'bg-white border-slate-100'
                }`}>
                    <div className="p-6 space-y-8 overflow-y-auto h-full custom-scrollbar">
                        <div className="space-y-1">
                            <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-2 ${
                                theme === 'dark' ? 'text-slate-600' : 'text-slate-400'
                            }`}>Getting Started</div>
                            {sections.map(section => (
                                <a 
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all group ${
                                        theme === 'dark' 
                                        ? 'hover:bg-white/5 text-slate-400 hover:text-white' 
                                        : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <section.icon size={16} className="group-hover:text-electric-violet transition-colors" />
                                    {section.title}
                                </a>
                            ))}
                        </div>

                        <div className="space-y-1">
                            <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-2 ${
                                theme === 'dark' ? 'text-slate-600' : 'text-slate-400'
                            }`}>Infrastructure</div>
                            {['Networks', 'RPC Endpoints', 'Security Buffers', 'Cloud Sync'].map(item => (
                                <a key={item} href="#" className={`block px-3 py-2 rounded-lg text-sm ${
                                    theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                                }`}>{item}</a>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-16 lg:p-24 relative">
                    <div className="max-w-3xl mx-auto space-y-16">
                        {/* Intro */}
                        <section id="intro" className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 text-electric-violet text-[10px] font-bold uppercase tracking-widest border border-electric-violet/20">
                                Documentation v2.4.0
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Getting Started with txio</h1>
                            <p className={`text-lg leading-relaxed ${
                                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                                txio is the world's first universal Web3 Infrastructure IDE. It bridges the gap between low-level protocol RPCs and high-level developer productivity. Whether you are building on Sui, Solana, or EVM, txio provides a unified workspace to execute and monitor your infrastructure.
                            </p>
                            
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Quick Installation</h3>
                                <div className={`p-4 rounded-xl font-mono text-sm border ${
                                    theme === 'dark' ? 'bg-near-black border-white/10 text-emerald-400' : 'bg-slate-100 border-slate-200 text-emerald-600'
                                }`}>
                                    <div># Install the universal CLI</div>
                                    <div>npm install -g @txio/infrastructure-cli</div>
                                    <div className="mt-2 text-slate-500"># Verify installation</div>
                                    <div>txio --version</div>
                                </div>
                            </div>
                        </section>

                        {/* Architecture */}
                        <section id="architecture" className="space-y-6 pt-16 border-t border-slate-200 dark:border-white/5">
                            <h2 className="text-3xl font-bold tracking-tight">System Architecture</h2>
                            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                                The txio engine is built on a modular, event-driven architecture. Unlike traditional REST-based tools, txio uses a persistent WebSocket layer to maintain "Hot Connections" with fullnodes.
                            </p>
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                                <div className={`p-6 rounded-2xl border ${
                                    theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-slate-200 shadow-sm'
                                }`}>
                                    <div className="w-10 h-10 rounded-xl bg-electric-violet/10 flex items-center justify-center text-electric-violet mb-4">
                                        <Globe size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Multi-Protocol Layer</h4>
                                    <p className="text-sm text-slate-500">Abstracts protocol-specific payload formats into a unified JSON-RPC 2.0 schema.</p>
                                </div>
                                <div className={`p-6 rounded-2xl border ${
                                    theme === 'dark' ? 'bg-white/[0.02] border-white/5' : 'bg-white border-slate-200 shadow-sm'
                                }`}>
                                    <div className="w-10 h-10 rounded-xl bg-soft-purple/10 flex items-center justify-center text-soft-purple mb-4">
                                        <Database size={20} />
                                    </div>
                                    <h4 className="font-bold mb-2">Object-Centric Store</h4>
                                    <p className="text-sm text-slate-500">Local cache for blockchain state, allowing for zero-latency lookups of frequent assets.</p>
                                </div>
                            </div>
                        </section>

                        {/* RPC Builder */}
                        <section id="rpc-builder" className="space-y-6 pt-16 border-t border-slate-200 dark:border-white/5">
                            <h2 className="text-3xl font-bold tracking-tight">The RPC Builder</h2>
                            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                                The RPC Builder is the core of txio. It allows you to construct raw requests with full autocomplete support for over 200+ methods across supported chains.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-1 bg-emerald-500/10 rounded-md"><Zap size={14} className="text-emerald-500"/></div>
                                    <div>
                                        <div className="font-bold text-sm">Smart Auto-Params</div>
                                        <div className="text-xs text-slate-500">Detects required arguments (e.g., Object IDs, Digests) and suggests values from your current workspace.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-1 bg-blue-500/10 rounded-md"><Terminal size={14} className="text-blue-500"/></div>
                                    <div>
                                        <div className="font-bold text-sm">Dry-Run Simulations</div>
                                        <div className="text-xs text-slate-500">Simulate execution on a local fork to predict gas costs and state changes without spending real assets.</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* TX Composer */}
                        <section id="tx-composer" className="space-y-6 pt-16 border-t border-slate-200 dark:border-white/5">
                            <h2 className="text-3xl font-bold tracking-tight">Advanced TX Composer</h2>
                            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                                Compose multiple operations into a single atomic transaction. The TX Composer handles the complex logic of object ownership and dependency resolution.
                            </p>
                            <div className={`p-6 rounded-2xl border ${
                                theme === 'dark' ? 'bg-near-black border-white/10' : 'bg-slate-900 text-white shadow-2xl'
                            }`}>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Transaction Script</span>
                                </div>
                                <div className="font-mono text-xs space-y-1">
                                    <div className="text-slate-500">// 1. Split gas coin for multiple transfers</div>
                                    <div className="text-emerald-400">const [c1, c2, c3] = tx.splitCoins(tx.gas, [100, 200, 300]);</div>
                                    <div className="mt-2 text-slate-500">// 2. Move Call to custom contract</div>
                                    <div className="text-blue-400">tx.moveCall(&#123; target: '0x1::game::play', arguments: [c1] &#125;);</div>
                                    <div className="mt-2 text-slate-500">// 3. Transfer remaining objects</div>
                                    <div className="text-soft-purple">tx.transferObjects([c2, c3], recipient);</div>
                                </div>
                            </div>
                        </section>

                        {/* Security */}
                        <section id="security" className="space-y-6 pt-16 border-t border-slate-200 dark:border-white/5">
                            <div className="flex items-center gap-3">
                                <Shield className="text-emerald-500" />
                                <h2 className="text-3xl font-bold tracking-tight">Security & Secrets</h2>
                            </div>
                            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                                Security is our highest priority. Your sensitive data never leaves your machine unless you explicitly enable Cloud Sync.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-slate-500/10"><Lock size={16} className="text-slate-500" /></div>
                                    <div>
                                        <div className="font-bold text-sm">Local-Only Key Storage</div>
                                        <div className="text-xs text-slate-500">Private keys are encrypted using AES-256 with a master password stored only in your secure enclave.</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-slate-500/10"><Globe size={16} className="text-slate-500" /></div>
                                    <div>
                                        <div className="font-bold text-sm">Air-Gapped Signing</div>
                                        <div className="text-xs text-slate-500">Support for Ledger and Trezor hardware wallets to keep your keys offline.</div>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* API Reference */}
                        <section id="api-reference" className="space-y-6 pt-16 border-t border-slate-200 dark:border-white/5">
                            <h2 className="text-3xl font-bold tracking-tight">Integration API</h2>
                            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                                Embed the txio engine directly into your CI/CD pipelines or internal dashboards using our headless SDK.
                            </p>
                            <div className={`p-4 rounded-xl border ${
                                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                            }`}>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Request SDK</div>
                                <code className="text-xs block whitespace-pre leading-relaxed text-electric-violet">
                                    {`import { TxioClient } from '@txio/sdk';\n\nconst client = new TxioClient({ apiKey: process.env.TXIO_KEY });\n\nconst tx = await client.createTransaction({\n  chain: 'solana',\n  action: 'swap',\n  params: { amount: 100 }\n});`}
                                </code>
                            </div>
                        </section>

                        {/* Community */}
                        <section className={`p-12 rounded-[2.5rem] text-center space-y-6 ${
                            theme === 'dark' ? 'bg-electric-violet/10 border border-electric-violet/20' : 'bg-electric-violet text-white shadow-2xl'
                        }`}>
                            <h3 className="text-2xl font-bold">Need more help?</h3>
                            <p className={theme === 'dark' ? 'text-slate-400' : 'text-white/80'}>Join our community of elite protocol engineers and infrastructure builders.</p>
                            <div className="flex justify-center gap-4">
                                <button className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                                    theme === 'dark' ? 'bg-white text-near-black hover:bg-slate-200' : 'bg-near-black text-white hover:bg-slate-900'
                                }`}>Join Discord</button>
                                <button className={`px-6 py-3 rounded-xl font-bold text-sm border transition-all ${
                                    theme === 'dark' ? 'border-white/10 hover:border-white/20' : 'border-white/20 hover:bg-white/10'
                                }`}>Twitter / X</button>
                            </div>
                        </section>

                        <footer className="pt-16 pb-8 flex justify-between items-center text-[10px] uppercase font-bold tracking-[0.4em] text-slate-500">
                            <span>© 2026 txio docs</span>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-electric-violet">Status</a>
                                <a href="#" className="hover:text-electric-violet">Legal</a>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
};
