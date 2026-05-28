<!DOCTYPE html>
<html class="light" lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Saarthi AI | Inclusive Digital Companion</title>
    <!-- Tailwind CSS with Plugins -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
    
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "tertiary-fixed-dim": "#c0c1ff",
                        "on-surface-variant": "#554335",
                        "on-tertiary-container": "#231fb5",
                        "on-primary": "#ffffff",
                        "on-secondary": "#ffffff",
                        "surface-bright": "#fdf9f3",
                        "on-surface": "#1c1c18",
                        "on-error-container": "#93000a",
                        "surface": "#fdf9f3",
                        "on-tertiary-fixed": "#07006c",
                        "tertiary-fixed": "#e1e0ff",
                        "primary": "#f98d11", /* Unified Primary based on Theme Instructions */
                        "primary-brand": "#8f4e00", /* Original Primary from Screens */
                        "on-secondary-container": "#454385",
                        "error": "#ba1a1a",
                        "on-tertiary": "#ffffff",
                        "surface-container-high": "#ebe8e2",
                        "on-secondary-fixed-variant": "#413f81",
                        "surface-tint": "#8f4e00",
                        "inverse-surface": "#31302d",
                        "on-primary-fixed-variant": "#6d3a00",
                        "secondary-fixed-dim": "#c3c0ff",
                        "on-primary-container": "#5f3200",
                        "surface-dim": "#dddad4",
                        "surface-container-lowest": "#ffffff",
                        "background": "#fdf9f3",
                        "secondary": "#58579a",
                        "primary-fixed": "#ffdcc2",
                        "surface-container-low": "#f7f3ed",
                        "on-tertiary-fixed-variant": "#2f2ebe",
                        "outline-variant": "#dcc2af",
                        "outline": "#897362",
                        "on-background": "#1c1c18",
                        "primary-container": "#f98d11",
                        "on-secondary-fixed": "#140f54",
                        "error-container": "#ffdad6",
                        "surface-container": "#f1ede7",
                        "inverse-on-surface": "#f4f0ea",
                        "tertiary": "#494bd6",
                        "secondary-container": "#b6b4ff",
                        "primary-fixed-dim": "#ffb77b",
                        "secondary-fixed": "#e2dfff",
                        "surface-container-highest": "#e6e2dc",
                        "on-error": "#ffffff",
                        "tertiary-container": "#9c9fff",
                        "on-primary-fixed": "#2e1500",
                        "surface-variant": "#e6e2dc",
                        "inverse-primary": "#ffb77b",
                        "senior-accent": "#2D6A4F",
                        "senior-surface": "#D8F3DC"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "base": "8px",
                        "margin-desktop": "64px",
                        "card-padding": "32px",
                        "margin-mobile": "16px",
                        "container-max": "1280px",
                        "gutter": "24px"
                    }
                },
            },
        }
    </script>

    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #fdf9f3; color: #1c1c18; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(143, 78, 0, 0.1);
        }
        .mandala-bg {
            background-image: radial-gradient(circle at 2px 2px, rgba(143, 78, 0, 0.03) 1px, transparent 0);
            background-size: 24px 24px;
        }
        .ai-waveform span {
            display: inline-block;
            width: 3px;
            height: 12px;
            background-color: #f98d11;
            margin: 0 1px;
            border-radius: 2px;
            animation: wave 1s ease-in-out infinite;
        }
        @keyframes wave {
            0%, 100% { height: 8px; }
            50% { height: 20px; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="mandala-bg">
    <div id="root"></div>

    <!-- Dependencies -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/history@5/umd/history.development.js"></script>
    <script src="https://unpkg.com/react-router@6.3.0/umd/react-router.development.js"></script>
    <script src="https://unpkg.com/react-router-dom@6.3.0/umd/react-router-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <script type="text/babel">
        const { useState, useEffect } = React;
        const { createRoot } = ReactDOM;
        const { MemoryRouter, Routes, Route, Link, useNavigate, useLocation } = ReactRouterDOM;

        // --- Common Components ---

        const TopNav = ({ activeMode = "Home" }) => (
            <nav className="bg-surface/90 backdrop-blur-md border-b border-outline-variant fixed top-0 w-full z-50">
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
                    <Link to="/" className="font-bold text-2xl text-primary-brand tracking-tight">Saarthi</Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/amma" className={`${activeMode === "Amma" ? "text-primary-brand font-bold border-b-2 border-primary-brand" : "text-on-surface-variant hover:text-primary-brand"} pb-1 text-sm transition-colors`}>Amma</Link>
                        <Link to="/business" className={`${activeMode === "Business" ? "text-primary-brand font-bold border-b-2 border-primary-brand" : "text-on-surface-variant hover:text-primary-brand"} pb-1 text-sm transition-colors`}>Business</Link>
                        <Link to="/senior" className={`${activeMode === "Senior" ? "text-primary-brand font-bold border-b-2 border-primary-brand" : "text-on-surface-variant hover:text-primary-brand"} pb-1 text-sm transition-colors`}>Senior</Link>
                        <Link to="/student" className={`${activeMode === "Student" ? "text-primary-brand font-bold border-b-2 border-primary-brand" : "text-on-surface-variant hover:text-primary-brand"} pb-1 text-sm transition-colors`}>Student</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">language</button>
                        <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-brand">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCagVxOukjirWslV5H29yXhjLVBKsxNWjDnanMJPLm0YnxpwfvPJtmTZqDq2CZTaSMfQ2DrkUgUDLvDrWuL6z2VkbuGJBRPcjTm9DvNCfaN0IMGki6HjReMzF68kT_v63DvxXWcbaNwZmzS9DoMd6Ecy01D7HdFpD4d_iDaQgz2uHk1KyRwr5lAZEvgeJo2Ki72JFHp2cJCzlPfRFVCh87hmZsjpgMGuE_O0ODXQfcD9AeF_ZIySTmZdjvGQRBGVJx7DTBWa0pNag" className="w-full h-full object-cover" alt="Profile" />
                        </Link>
                        <Link to="/signup" className="px-6 py-2 rounded-full bg-primary-brand text-on-primary text-sm font-bold hover:shadow-lg transition-all active:scale-95">Sign Up</Link>
                    </div>
                </div>
            </nav>
        );

        const Footer = () => (
            <footer className="bg-surface-container-low border-t border-outline-variant/30 py-12 mt-auto">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-bold text-primary-brand">Saarthi</div>
                        <p className="text-sm text-on-surface-variant max-w-xs">© 2024 Saarthi AI. Empowering India through Inclusive Technology.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#" className="text-on-surface-variant hover:text-primary-brand underline">Accessibility</a>
                        <a href="#" className="text-on-surface-variant hover:text-primary-brand underline">Privacy</a>
                        <a href="#" className="text-on-surface-variant hover:text-primary-brand underline">Terms</a>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">share</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">hub</span>
                        </div>
                    </div>
                </div>
            </footer>
        );

        const MobileNav = ({ mode = "home" }) => (
            <div className="fixed bottom-0 left-0 w-full flex justify-around items-center py-2 px-margin-mobile bg-surface-container-lowest border-t border-outline-variant shadow-lg md:hidden z-50">
                <Link to="/" className={`flex flex-col items-center justify-center ${mode === 'home' ? 'text-primary' : 'text-on-surface-variant'} px-4 py-1`}>
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-bold">Home</span>
                </Link>
                <Link to="/amma" className={`flex flex-col items-center justify-center ${mode === 'amma' ? 'bg-primary-container text-on-primary-container rounded-xl scale-90' : 'text-on-surface-variant'} px-4 py-1`}>
                    <span className="material-symbols-outlined">face_3</span>
                    <span className="text-[10px] font-bold">Amma</span>
                </Link>
                <Link to="/business" className={`flex flex-col items-center justify-center ${mode === 'business' ? 'bg-secondary-container text-on-secondary-container rounded-xl scale-90' : 'text-on-surface-variant'} px-4 py-1`}>
                    <span className="material-symbols-outlined">business_center</span>
                    <span className="text-[10px] font-bold">Biz</span>
                </Link>
                <Link to="/senior" className={`flex flex-col items-center justify-center ${mode === 'senior' ? 'bg-senior-surface text-senior-accent rounded-xl scale-90' : 'text-on-surface-variant'} px-4 py-1`}>
                    <span className="material-symbols-outlined">elderly</span>
                    <span className="text-[10px] font-bold">Senior</span>
                </Link>
                <Link to="/student" className={`flex flex-col items-center justify-center ${mode === 'student' ? 'bg-tertiary-container text-on-tertiary-container rounded-xl scale-90' : 'text-on-surface-variant'} px-4 py-1`}>
                    <span className="material-symbols-outlined">school</span>
                    <span className="text-[10px] font-bold">Student</span>
                </Link>
            </div>
        );

        const CompanionWidget = () => (
            <div className="fixed right-6 bottom-24 md:bottom-12 z-50">
                <button className="group relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-container shadow-2xl flex items-center justify-center overflow-hidden active:scale-90 transition-transform">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all"></div>
                    <span className="material-symbols-outlined text-[32px] md:text-[40px] text-on-primary-container group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>graphic_eq</span>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-error rounded-full border-2 border-surface animate-pulse"></div>
                </button>
            </div>
        );

        // --- Screen Components ---

        const HomePage = () => (
            <div className="min-h-screen flex flex-col">
                <TopNav activeMode="Home" />
                <main className="pt-20">
                    <section className="relative py-20 px-margin-mobile md:px-margin-desktop overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-8 animate-fade-in">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold border border-orange-200">
                                    <span>✨</span> India's AI-Powered Digital Companion
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-extrabold text-indigo-950 leading-tight">
                                    Technology Made Simple for <span className="text-primary-brand">Everyone</span>
                                </h1>
                                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                                    Saarthi is your personal AI guide to learn, grow, stay safe and do more with technology.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link to="/signup" className="flex items-center gap-2 px-8 py-4 bg-primary-brand text-white rounded-xl font-bold hover:bg-orange-900 transition-all shadow-xl active:scale-95">
                                        Get Started Today
                                    </Link>
                                    <Link to="/login" className="flex items-center gap-2 px-8 py-4 border-2 border-indigo-950 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                                        Login to Saarthi
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdwBFZ3go-K8mGSW9p0oYo2FHZDVGEbSG6CphuBjtyehGUoNAiKi-FdP9Wvx1GsAEnhBlfCfyKkkbHcope5wwcVbIjw8_o1_D_YiRZC3hSFK5JsKY-uqtFtIV8oR0SA17I_FEW4OE8m9GvVJO5YrlN1EytQevviBZMWAeGU5mYUUrA_lwsVNNqpK6p5qCd8yyG7GDTCeLM-s1o7_pGTFGBu5cHNM_D75trn6cBYumIZ5lM4mtYZbNll8vToK5Gv1M-a13RxDeBMA" className="rounded-[40px] shadow-2xl w-full" alt="Indian Family" />
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-surface-container/50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                            <h2 className="text-4xl font-black text-indigo-950 mb-2">Choose Your Saarthi Mode</h2>
                            <p className="text-gray-500">Personalized experience crafted for your world</p>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                            {[
                                { title: "Amma Mode 🌸", desc: "For homemakers & mothers", color: "border-primary-brand", link: "/amma", img: "https://lh3.googleusercontent.com/aida/ADBb0ujlL2yaPeup1mGta7bUT4oFITJWCbwNDgCDCThCfLFDupm8YZgTTbQlG2_B_y51D8qi9m1a1TKBvsR_SMPDgLr4cvbIhCUh2PCGJSxZi8EuJImFwBDYIlnVJk0YkCK47D2zTxblvGn8If2o78CXyHjlyQCeclm4m64X_EuKuC1VYuwyLGLX08pck-65j6QRmnkfUdFA6ordL4Bnqpnv_Kvc58x1Ux6UE4k0rYJy-ntuverXakOVV4NsUA" },
                                { title: "Business Mode 💼", desc: "For entrepreneurs & owners", color: "border-secondary", link: "/business", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdtTO0QaO_DuuVU16-7mogVULVcuctbJ_FjR59Z8zDQXqjJ9QAaMH-BiPeuzsw_0opMs1ss819UdWXcnuoRV35sB--WEwrH3qw8nIzlYw0woJrDJmtxRrvUd51YzyvUFjkwSK24dym6zuAKajUzY4Vjx8OdG_BsFydGugXukjDbKBTK9XohANwf3rBqLhDXPPyELEPoK6a_OeVXDQbeKIxdzoxKmI_mBs9lrsouJOaeEqy_HSEzWGZyaUh-VxUKYT6h2ramlCSow" },
                                { title: "Senior Mode 👴", desc: "For safe, easy connection", color: "border-senior-accent", link: "/senior", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmNuRjAjjJ_zxX_l3BDRuiNLgzJiBSufegZ68Cc0kmUClO4zS85MDM7d-JFeTs1hZFFT0LgRHVhMnzPDyzDnk6Jpetv7gprYs_YD3ZclsEUh-rdFl6kcS2gsyftUnsX8aEyZI3FyUGBsEVAMDj5ZawQOrfBrL2ehAIVSnZljIicTj1rYfxtIIcQUjt-4slFbUqJAqtdITSR0_sdGu874nFYcdG_IVrpZvM9qNsjWDtKhpjoevg-KEXtU3YYfxRnSg3LTF6wi6K1Q" },
                                { title: "Student Mode 🎓", desc: "For learning and growth", color: "border-tertiary", link: "/student", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrrZs73R3jZKIg7RjI2YRoRmqNaguH61jCtcYOHplO2MA1C2GrmB6OOBvb6hyBdvg2buQSJE5GXSFldLX2QCuPm5j1nTly7xnfmQJ6d0b6dj7qEAPIvvo0v0_TBOXsQ40Vvf9f-JGg9Fri799v4-7R5ik3SGwobjliq4Kw3UbMFYxq2ly72hsMIc6LtDNkQZCXYucKEQUGWVMM3bgZQaSVimGw3CS-KJzbPBHqFcRO4RN1g9Q13L9S2HNwJRjj8GiH_AtIhFIAXg" }
                            ].map((mode, i) => (
                                <div key={i} className={`bg-white rounded-3xl overflow-hidden shadow-lg border-b-4 ${mode.color} hover:scale-[1.02] transition-transform flex flex-col`}>
                                    <div className="p-6 bg-orange-50/50">
                                        <h3 className="text-xl font-bold text-indigo-950">{mode.title}</h3>
                                        <p className="text-xs text-gray-600 mt-1">{mode.desc}</p>
                                        <img src={mode.img} className="rounded-xl w-full h-40 object-cover mt-4" alt={mode.title} />
                                    </div>
                                    <div className="p-6 mt-auto">
                                        <Link to={mode.link} className="w-full bg-indigo-950 text-white py-3 rounded-full font-bold shadow-md hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2">
                                            Explore <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileNav mode="home" />
                <CompanionWidget />
            </div>
        );

        const AmmaPage = () => (
            <div className="min-h-screen flex flex-col">
                <TopNav activeMode="Amma" />
                <main className="pt-20">
                    <section className="relative pt-12 pb-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
                        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed mb-6 animate-fade-in">
                                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>face_3</span>
                                    <span className="font-bold text-sm">Amma Mode Active</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-black text-on-surface mb-6 leading-tight">
                                    Amma Mode: <br/>
                                    <span className="text-primary-brand">Simplify Home Life</span>
                                </h1>
                                <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
                                    Meet your new digital saarthi. Designed specifically for the heart of the home, helping you manage everything from kitchen hacks to family security with ease.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-8 py-4 bg-primary-brand text-on-primary rounded-full font-bold text-xl flex items-center gap-2 shadow-lg hover:bg-orange-900 transition-all active:scale-95">
                                        Get Started
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-full">
                                        <div className="ai-waveform flex items-center"><span></span><span></span><span></span><span></span><span></span></div>
                                        <span className="font-bold text-primary-brand">"Hey Saarthi, what's for dinner?"</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img src="https://lh3.googleusercontent.com/aida/ADBb0ujlL2yaPeup1mGta7bUT4oFITJWCbwNDgCDCThCfLFDupm8YZgTTbQlG2_B_y51D8qi9m1a1TKBvsR_SMPDgLr4cvbIhCUh2PCGJSxZi8EuJImFwBDYIlnVJk0YkCK47D2zTxblvGn8If2o78CXyHjlyQCeclm4m64X_EuKuC1VYuwyLGLX08pck-65j6QRmnkfUdFA6ordL4Bnqpnv_Kvc58x1Ux6UE4k0rYJy-ntuverXakOVV4NsUA" className="w-full h-auto drop-shadow-2xl" alt="Amma Illustration" />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileNav mode="amma" />
                <CompanionWidget />
            </div>
        );

        const SeniorPage = () => (
            <div className="min-h-screen flex flex-col">
                <TopNav activeMode="Senior" />
                <main className="pt-20">
                    <section className="bg-senior-surface/50 py-24 px-margin-mobile md:px-margin-desktop">
                        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-gutter">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-senior-accent/10 text-senior-accent font-bold text-sm">
                                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>elderly</span>
                                    Empowering Our Elders
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-senior-accent leading-tight">Senior Mode: <br/><span className="text-primary-brand">Safe & Connected</span></h1>
                                <p className="text-lg text-on-surface-variant max-w-lg">A simplified, high-contrast digital companion designed specifically for seniors. Saarthi provides gentle guidance for daily digital tasks.</p>
                                <button className="bg-senior-accent text-on-primary px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2">
                                    Activate Senior Mode
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmNuRjAjjJ_zxX_l3BDRuiNLgzJiBSufegZ68Cc0kmUClO4zS85MDM7d-JFeTs1hZFFT0LgRHVhMnzPDyzDnk6Jpetv7gprYs_YD3ZclsEUh-rdFl6kcS2gsyftUnsX8aEyZI3FyUGBsEVAMDj5ZawQOrfBrL2ehAIVSnZljIicTj1rYfxtIIcQUjt-4slFbUqJAqtdITSR0_sdGu874nFYcdG_IVrpZvM9qNsjWDtKhpjoevg-KEXtU3YYfxRnSg3LTF6wi6K1Q" className="w-full max-w-[500px] mx-auto drop-shadow-2xl" alt="Seniors" />
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileNav mode="senior" />
                <CompanionWidget />
            </div>
        );

        const BusinessPage = () => (
            <div className="min-h-screen flex flex-col">
                <TopNav activeMode="Business" />
                <main className="pt-20">
                    <section className="bg-secondary min-h-[819px] flex items-center text-on-secondary overflow-hidden">
                        <div className="container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
                            <div className="space-y-8 animate-fade-in">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-sm">
                                    <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>business_center</span>
                                    Professional Growth Hub
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">Business Mode: <br/><span className="text-primary-fixed">Scale Your Ambition</span></h1>
                                <p className="text-lg opacity-80 max-w-xl">Unlock powerful tools designed for the Indian entrepreneur. From localized AI marketing to seamless WhatsApp integration.</p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-bold text-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group active:scale-95">
                                        Get Started
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdtTO0QaO_DuuVU16-7mogVULVcuctbJ_FjR59Z8zDQXqjJ9QAaMH-BiPeuzsw_0opMs1ss819UdWXcnuoRV35sB--WEwrH3qw8nIzlYw0woJrDJmtxRrvUd51YzyvUFjkwSK24dym6zuAKajUzY4Vjx8OdG_BsFydGugXukjDbKBTK9XohANwf3rBqLhDXPPyELEPoK6a_OeVXDQbeKIxdzoxKmI_mBs9lrsouJOaeEqy_HSEzWGZyaUh-VxUKYT6h2ramlCSow" className="rounded-3xl shadow-2xl border-4 border-primary/20 transform rotate-1" alt="Entrepreneur" />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileNav mode="business" />
                <CompanionWidget />
            </div>
        );

        const StudentPage = () => (
            <div className="min-h-screen flex flex-col">
                <TopNav activeMode="Student" />
                <main className="pt-20">
                    <section className="bg-gradient-to-tr from-purple-100 to-white py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
                        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-6">
                                    <span className="material-symbols-outlined text-sm">school</span>
                                    <span className="font-bold text-xs uppercase tracking-wider">Learning Revolution</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-black text-on-surface mb-6 leading-tight">
                                    Student Mode:<br/><span className="text-secondary">Build Your Future</span>
                                </h1>
                                <p className="text-lg text-on-surface-variant mb-10 max-w-lg">Empower your academic journey with Saarthi's specialized AI tools. From smart summaries to personalized career roadmaps.</p>
                                <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-xl transition-all">
                                    Explore All Tools
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrrZs73R3jZKIg7RjI2YRoRmqNaguH61jCtcYOHplO2MA1C2GrmB6OOBvb6hyBdvg2buQSJE5GXSFldLX2QCuPm5j1nTly7xnfmQJ6d0b6dj7qEAPIvvo0v0_TBOXsQ40Vvf9f-JGg9Fri799v4-7R5ik3SGwobjliq4Kw3UbMFYxq2ly72hsMIc6LtDNkQZCXYucKEQUGWVMM3bgZQaSVimGw3CS-KJzbPBHqFcRO4RN1g9Q13L9S2HNwJRjj8GiH_AtIhFIAXg" className="w-full max-w-[550px] drop-shadow-2xl animate-float" alt="Students" />
                        </div>
                    </section>
                </main>
                <Footer />
                <MobileNav mode="student" />
                <CompanionWidget />
            </div>
        );

        const ProfilePage = () => {
            const navigate = useNavigate();
            return (
                <div className="min-h-screen flex flex-col">
                    <TopNav />
                    <main className="pt-28 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                        <section className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="relative">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                    <img alt="Meena Devi" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCagVxOukjirWslV5H29yXhjLVBKsxNWjDnanMJPLm0YnxpwfvPJtmTZqDq2CZTaSMfQ2DrkUgUDLvDrWuL6z2VkbuGJBRPcjTm9DvNCfaN0IMGki6HjReMzF68kT_v63DvxXWcbaNwZmzS9DoMd6Ecy01D7HdFpD4d_iDaQgz2uHk1KyRwr5lAZEvgeJo2Ki72JFHp2cJCzlPfRFVCh87hmZsjpgMGuE_O0ODXQfcD9AeF_ZIySTmZdjvGQRBGVJx7DTBWa0pNag" />
                                </div>
                                <div className="absolute bottom-1 right-1 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] font-bold border border-white flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                                    Bharat First
                                </div>
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold mb-2">Namaste, Meena Devi</h1>
                                <p className="text-on-surface-variant font-medium text-lg mb-6 max-w-2xl">Manage your personalized AI experience and switch between modes to match your day's journey.</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <button className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-xl hover:bg-surface-variant transition-colors text-sm font-bold">
                                        <span className="material-symbols-outlined text-primary-brand">edit</span> Edit Profile
                                    </button>
                                    <button onClick={() => navigate('/login')} className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-xl hover:bg-red-100 transition-colors text-sm font-bold">
                                        <span className="material-symbols-outlined">logout</span> Sign Out
                                    </button>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                            <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border-2 border-primary-brand flex flex-col md:flex-row shadow-xl">
                                <div className="w-full md:w-2/5 p-card-padding bg-primary-fixed/30 flex items-center justify-center">
                                    <img src="https://lh3.googleusercontent.com/aida/ADBb0ujlL2yaPeup1mGta7bUT4oFITJWCbwNDgCDCThCfLFDupm8YZgTTbQlG2_B_y51D8qi9m1a1TKBvsR_SMPDgLr4cvbIhCUh2PCGJSxZi8EuJImFwBDYIlnVJk0YkCK47D2zTxblvGn8If2o78CXyHjlyQCeclm4m64X_EuKuC1VYuwyLGLX08pck-65j6QRmnkfUdFA6ordL4Bnqpnv_Kvc58x1Ux6UE4k0rYJy-ntuverXakOVV4NsUA" className="w-48 object-contain" />
                                </div>
                                <div className="flex-1 p-card-padding flex flex-col justify-between">
                                    <div>
                                        <span className="bg-primary-container/20 text-on-primary-container px-3 py-1 rounded-full text-xs font-bold">ACTIVE MODE</span>
                                        <h2 className="text-2xl font-bold mt-4 mb-2">Amma Mode</h2>
                                        <p className="text-on-surface-variant text-sm mb-6">Empowering you with household management, nutritional guidance, and local connections.</p>
                                    </div>
                                    <Link to="/amma" className="w-full bg-primary-brand text-on-primary py-4 rounded-xl font-bold text-center hover:opacity-95 transition-all">
                                        View Amma Dashboard
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:col-span-5 glass-card rounded-3xl p-card-padding flex flex-col shadow-xl">
                                <h3 className="text-xl font-bold mb-6">My AI Companion</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="bg-white/50 border border-outline-variant p-4 rounded-2xl flex gap-4">
                                        <span className="material-symbols-outlined text-primary-brand">check_circle</span>
                                        <div>
                                            <p className="font-bold text-sm">Suggested a new recipe</p>
                                            <p className="text-xs text-on-surface-variant">Moong Dal Halwa for dinner</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-auto w-full bg-indigo-950 text-white py-4 rounded-full font-bold flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>mic</span>
                                    Talk to Saarthi
                                </button>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        };

        const LoginPage = () => {
            const navigate = useNavigate();
            return (
                <div className="min-h-screen flex flex-col bg-surface">
                    <header className="flex justify-between items-center px-6 md:px-16 h-16 w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b">
                        <Link to="/" className="font-bold text-2xl text-primary-brand">Saarthi</Link>
                        <div className="flex gap-2">
                            <button className="material-symbols-outlined p-2 text-on-surface-variant">language</button>
                            <button className="material-symbols-outlined p-2 text-on-surface-variant">help</button>
                        </div>
                    </header>
                    <main className="flex-grow flex flex-col md:flex-row pt-16">
                        <section className="hidden md:flex flex-1 bg-primary-fixed items-center justify-center p-12 overflow-hidden">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-black text-on-primary-fixed mb-6">Welcome Back</h1>
                                <p className="text-lg opacity-80 mb-12">Reconnecting you with opportunities, knowledge, and your digital community.</p>
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSh0m0MtU965tIYq91YJROP_YkRs81n5HsWRu8z-Fl2k4XnqtOA5jbZlrImJSyhZB9sAuYEC_INLg-7fiaAfmr1gzN_bHNZSQCLHOFiISHvePFbzmvtVXjGePvKzUCtGG4KQOLhZRuuhzH6zqc7TElh002g3fRipDGdcHIItfyBt26Qg4_ZWT8zSJVyzFecoPlI6mPyvx0OuygJ6WcUuCLFdIJTcM6kXxcun7_3pNZbON9u0vPdoAgZdXSEqgB5fU_1YEfrQ0BBg" className="rounded-3xl shadow-2xl w-full h-80 object-cover" />
                            </div>
                        </section>
                        <section className="flex-1 flex items-center justify-center p-8">
                            <div className="w-full max-w-sm space-y-8">
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold">Sign in</h2>
                                    <p className="text-gray-600 mt-2">New here? <Link to="/signup" className="text-primary-brand font-bold hover:underline">Create an account</Link></p>
                                </div>
                                <form className="space-y-6" onSubmit={(e) => {e.preventDefault(); navigate('/profile');}}>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Email or Phone</label>
                                        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-primary-brand focus:border-primary-brand outline-none" placeholder="name@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Password</label>
                                        <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-primary-brand focus:border-primary-brand outline-none" placeholder="••••••••" />
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                                            <input type="checkbox" className="rounded text-primary-brand" /> Remember me
                                        </label>
                                        <Link to="/forgot-password" title="Recover Password" className="text-primary-brand font-bold">Forgot password?</Link>
                                    </div>
                                    <button className="w-full bg-primary-brand text-white py-4 rounded-full font-bold shadow-lg hover:shadow-orange-200 transition-all">Login Now</button>
                                </form>
                                <div className="relative flex items-center py-5">
                                    <div className="flex-grow border-t border-gray-200"></div>
                                    <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase">or</span>
                                    <div className="flex-grow border-t border-gray-200"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-full border border-gray-200 hover:bg-gray-50 font-bold text-sm">
                                        Google
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-3 rounded-full border border-gray-200 hover:bg-gray-50 font-bold text-sm">
                                        Phone
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>
            );
        };

        const SignupPage = () => {
            const navigate = useNavigate();
            const [step, setStep] = useState(1);
            
            return (
                <div className="min-h-screen flex flex-col bg-surface">
                    <header className="flex justify-between items-center px-6 md:px-16 h-16 w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b">
                        <Link to="/" className="font-bold text-2xl text-primary-brand">Saarthi</Link>
                        <div className="flex items-center gap-4">
                            <button className="material-symbols-outlined p-2 text-on-surface-variant">language</button>
                            <Link to="/login" className="text-sm font-bold text-primary-brand hover:underline">Log In Instead</Link>
                        </div>
                    </header>
                    <main className="flex-grow flex flex-col md:flex-row pt-16">
                         <section className="hidden md:flex flex-1 bg-primary-fixed items-center justify-center p-12 overflow-hidden">
                             <div className="max-w-md space-y-8">
                                <h1 className="text-5xl font-black text-on-primary-fixed">Your digital companion.</h1>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-primary-brand">verified_user</span>
                                        </div>
                                        <p className="text-on-primary-fixed font-bold">Trusted and Secure Support</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-primary-brand">auto_awesome</span>
                                        </div>
                                        <p className="text-on-primary-fixed font-bold">AI-Powered Ease In Your Language</p>
                                    </div>
                                </div>
                             </div>
                         </section>
                         <section className="flex-1 flex items-center justify-center p-8">
                            <div className="w-full max-w-md">
                                <div className="flex items-center gap-4 mb-12">
                                    {[1, 2, 3].map((s) => (
                                        <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${step >= s ? 'bg-primary-brand' : 'bg-gray-200'}`}></div>
                                    ))}
                                </div>
                                
                                {step === 1 && (
                                    <div className="animate-fade-in space-y-8">
                                        <h2 className="text-3xl font-bold">Create your account</h2>
                                        <div className="space-y-6">
                                            <input className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-primary-brand" placeholder="Full Name" />
                                            <input className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-primary-brand" placeholder="Email or Phone Number" />
                                            <button onClick={() => setStep(2)} className="w-full bg-primary-brand text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2">
                                                Next Step <span className="material-symbols-outlined">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="animate-fade-in space-y-8">
                                        <h2 className="text-3xl font-bold">Choose your path</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { id: 'amma', name: 'Amma Mode', icon: 'face_3' },
                                                { id: 'biz', name: 'Entrepreneur', icon: 'storefront' },
                                                { id: 'senior', name: 'Senior', icon: 'elderly' },
                                                { id: 'student', name: 'Student', icon: 'school' }
                                            ].map(m => (
                                                <button key={m.id} className="p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-brand text-center space-y-2 bg-white">
                                                    <span className="material-symbols-outlined text-primary-brand text-3xl">{m.icon}</span>
                                                    <p className="font-bold text-sm">{m.name}</p>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={() => setStep(1)} className="px-6 py-4 rounded-full border border-gray-200 font-bold">Back</button>
                                            <button onClick={() => setStep(3)} className="flex-1 bg-primary-brand text-white py-4 rounded-full font-bold">Continue</button>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="animate-fade-in space-y-8">
                                        <h2 className="text-3xl font-bold">Secure your journey</h2>
                                        <div className="space-y-6">
                                            <input type="password" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none" placeholder="Password" />
                                            <input type="password" className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none" placeholder="Confirm Password" />
                                            <button onClick={() => navigate('/profile')} className="w-full bg-primary-brand text-white py-4 rounded-full font-bold">Complete Signup</button>
                                            <button onClick={() => setStep(2)} className="w-full text-gray-500 font-bold text-sm">Back to Selection</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                         </section>
                    </main>
                    <Footer />
                </div>
            );
        };

        const ForgotPasswordPage = () => {
             const navigate = useNavigate();
             const [sent, setSent] = useState(false);

             return (
                <div className="min-h-screen flex flex-col bg-surface">
                    <header className="flex justify-between items-center px-6 md:px-16 h-16 w-full fixed top-0 bg-white/80 border-b">
                         <Link to="/" className="font-bold text-2xl text-primary-brand">Saarthi</Link>
                    </header>
                    <main className="flex-grow flex items-center justify-center p-6">
                        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center">
                            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-primary-brand text-4xl">lock_reset</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Forgot Password?</h2>
                            <p className="text-gray-600 mb-8">Enter your registered identity to receive a recovery link.</p>
                            
                            {!sent ? (
                                <form className="space-y-6" onSubmit={(e) => {e.preventDefault(); setSent(true)}}>
                                    <input className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-primary-brand" placeholder="Email or Phone Number" required />
                                    <button className="w-full bg-primary-brand text-white py-4 rounded-full font-bold">Send Link</button>
                                </form>
                            ) : (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="bg-green-50 text-green-700 p-4 rounded-xl font-bold text-sm">
                                        Recovery link sent successfully!
                                    </div>
                                    <button onClick={() => navigate('/login')} className="w-full bg-indigo-950 text-white py-4 rounded-full font-bold">Back to Login</button>
                                </div>
                            )}
                        </div>
                    </main>
                    <Footer />
                </div>
             );
        };

        const App = () => {
            const location = useLocation();

            useEffect(() => {
                window.scrollTo(0, 0);
            }, [location]);

            return (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/amma" element={<AmmaPage />} />
                    <Route path="/business" element={<BusinessPage />} />
                    <Route path="/senior" element={<SeniorPage />} />
                    <Route path="/student" element={<StudentPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                </Routes>
            );
        };

        const root = createRoot(document.getElementById('root'));
        root.render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    </script>
</body>
</html>