<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MP2 Animation Studio — We Bring Stories to Life</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
/* ===== CSS VARIABLES ===== */
:root {
  --black: #080808;
  --black2: #0d0d0d;
  --black3: #111111;
  --black4: #161616;
  --card-bg: rgba(18,18,18,0.85);
  --red: #c0001a;
  --red-deep: #8b0000;
  --red-glow: rgba(192,0,26,0.3);
  --red-soft: rgba(192,0,26,0.12);
  --yellow: #f5c518;
  --yellow-soft: rgba(245,197,24,0.12);
  --white: #f0ece4;
  --white-dim: rgba(240,236,228,0.65);
  --white-faint: rgba(240,236,228,0.12);
  --border: rgba(240,236,228,0.08);
  --border-red: rgba(192,0,26,0.3);
  --font-display: 'Cinzel', serif;
  --font-ui: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --ease: cubic-bezier(0.23,1,0.32,1);
  --ease-bounce: cubic-bezier(0.34,1.56,0.64,1);
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.65;
  overflow-x: hidden;
  cursor: auto;
}
a { color: inherit; text-decoration: none; }
img, video { max-width: 100%; display: block; }
ul { list-style: none; }
button { border: none; background: none; cursor: pointer; font-family: inherit; }
input, textarea, select { font-family: inherit; }

/* ===== CUSTOM CURSOR ===== */
#cursor {
  display: none;
  position: fixed; top: 0; left: 0; z-index: 9999;
  pointer-events: none;
}
#cursor-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--red); position: absolute;
  transform: translate(-50%,-50%);
  transition: transform 0.1s var(--ease);
}
#cursor-ring {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(192,0,26,0.5);
  position: absolute;
  transform: translate(-50%,-50%);
  transition: transform 0.4s var(--ease), width 0.3s, height 0.3s, border-color 0.3s;
}
body.cursor-hover #cursor-ring {
  width: 56px; height: 56px;
  border-color: var(--yellow);
}

/* ===== NOISE TEXTURE OVERLAY ===== */
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 1; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
  opacity: 0.4;
}

/* ===== PAGE SYSTEM ===== */
.page { display: none; animation: pageIn 0.6s var(--ease) forwards; }
.page.active { display: block; }
@keyframes pageIn {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== NAVBAR ===== */
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 0 5%;
  display: flex; align-items: center; justify-content: space-between;
  height: 72px;
  background: rgba(8,8,8,0.75);
  backdrop-filter: blur(20px) saturate(150%);
  border-bottom: 1px solid var(--border);
  transition: all 0.4s var(--ease);
}
#navbar.scrolled {
  height: 60px;
  background: rgba(8,8,8,0.95);
  border-bottom-color: var(--border-red);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.3rem; font-weight: 700;
  letter-spacing: 0.05em;
  display: flex; align-items: center; gap: 10px;
}
.nav-logo span.red { color: var(--red); }
.nav-logo-mark {
  width: 42px; height: 42px; border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #f0f0f0;
  display: flex; align-items: center; justify-content: center;
}
.nav-logo-mark img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.nav-links {
  display: flex; gap: 2.2rem; align-items: center;
}
.nav-link {
  font-family: var(--font-ui); font-size: 0.78rem;
  font-weight: 600; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--white-dim);
  position: relative; padding: 4px 0;
  transition: color 0.3s;
}
.nav-link::after {
  content: ''; position: absolute; bottom: -2px; left: 0;
  width: 0; height: 1px; background: var(--red);
  transition: width 0.3s var(--ease);
}
.nav-link:hover, .nav-link.active { color: var(--white); }
.nav-link:hover::after, .nav-link.active::after { width: 100%; }
.nav-cta {
  font-family: var(--font-ui); font-size: 0.75rem;
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 9px 22px; border-radius: 4px;
  background: var(--yellow); color: #000;
  transition: all 0.3s var(--ease);
}
.nav-cta:hover {
  background: #fff; transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(245,197,24,0.3);
}
.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  width: 28px; padding: 4px 0;
}
.nav-hamburger span {
  display: block; height: 2px;
  background: var(--white); border-radius: 2px;
  transition: all 0.3s var(--ease);
}
.mobile-nav {
  display: none; position: fixed;
  inset: 72px 0 0; z-index: 999;
  background: rgba(8,8,8,0.98);
  backdrop-filter: blur(20px);
  flex-direction: column; align-items: center; justify-content: center;
  gap: 2.5rem; padding: 2rem;
}
.mobile-nav.open { display: flex; }
.mobile-nav .nav-link { font-size: 1.1rem; }

/* ===== SECTION SHARED ===== */
.section { padding: 110px 5%; position: relative; }
.section-label {
  font-family: var(--font-ui); font-size: 0.68rem;
  font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--red); display: flex; align-items: center; gap: 10px;
  margin-bottom: 16px;
}
.section-label::before {
  content: ''; width: 28px; height: 1px; background: var(--red);
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.55rem, 3vw, 2.35rem);
  font-weight: 700; line-height: 1.2;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}
.section-title em { font-style: normal; color: var(--red); }
.section-sub {
  color: var(--white-dim); font-size: 0.95rem;
  max-width: 520px; line-height: 1.75;
  margin-bottom: 3rem;
}

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-ui); font-size: 0.8rem;
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 14px 32px; border-radius: 4px;
  background: var(--yellow); color: #000;
  transition: all 0.3s var(--ease);
  position: relative; overflow: hidden;
}
.btn-primary::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(255,255,255,0.15);
  transform: translateX(-110%) skewX(-15deg);
  transition: transform 0.4s var(--ease);
}
.btn-primary:hover::before { transform: translateX(110%) skewX(-15deg); }
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(245,197,24,0.35);
}
.btn-outline {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-ui); font-size: 0.8rem;
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 13px 30px; border-radius: 4px;
  border: 1px solid var(--border-red);
  color: var(--white);
  transition: all 0.3s var(--ease);
}
.btn-outline:hover {
  background: var(--red-soft);
  border-color: var(--red);
  box-shadow: 0 0 28px var(--red-glow);
  transform: translateY(-2px);
}
.btn-red {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-ui); font-size: 0.8rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 13px 30px; border-radius: 4px;
  background: var(--red); color: var(--white);
  transition: all 0.3s var(--ease);
}
.btn-red:hover {
  background: #d90020; transform: translateY(-2px);
  box-shadow: 0 12px 40px var(--red-glow);
}

/* ===== GLASS CARD ===== */
.glass {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  transition: all 0.4s var(--ease);
}
.glass:hover {
  border-color: var(--border-red);
  box-shadow: 0 0 40px var(--red-glow), 0 20px 50px rgba(0,0,0,0.5);
  transform: translateY(-4px);
}

/* ===== SCROLL REVEAL ===== */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ===== DIVIDER ===== */
.divider {
  height: 1px; background: linear-gradient(90deg, transparent, var(--border-red), transparent);
  margin: 0 5%;
}

/* ===== PAGE HERO ===== */
.page-hero {
  min-height: 38vh; padding: 140px 5% 80px;
  display: flex; align-items: flex-end;
  background: linear-gradient(180deg, rgba(139,0,0,0.08) 0%, transparent 100%);
  border-bottom: 1px solid var(--border);
  position: relative; overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute; top: -80px; right: 5%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(192,0,26,0.1) 0%, transparent 70%);
  pointer-events: none;
}
.page-hero-content .section-title { font-size: clamp(1.65rem, 3vw, 2.55rem) !important; }

/* =====================
   ===== HOME PAGE =====
   ===================== */

/* HERO */
#hero {
  min-height: 100vh; position: relative;
  display: flex; align-items: center;
  overflow: hidden; padding: 0 5%;
}
.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(139,0,0,0.18) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 20% 80%, rgba(192,0,26,0.08) 0%, transparent 60%),
              var(--black);
}
.hero-grid {
  position: absolute; inset: 0; z-index: 0;
  background-image:
    linear-gradient(rgba(240,236,228,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(240,236,228,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
}
.hero-orb {
  position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
  animation: orbFloat 8s ease-in-out infinite;
}
.hero-orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(192,0,26,0.15) 0%, transparent 70%);
  right: -100px; top: -100px;
}
.hero-orb-2 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(192,0,26,0.1) 0%, transparent 70%);
  left: 5%; bottom: 10%;
  animation-delay: -4s;
}
@keyframes orbFloat {
  0%,100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(20px,-30px) scale(1.05); }
  66% { transform: translate(-15px,20px) scale(0.98); }
}
.hero-content {
  position: relative; z-index: 2;
  max-width: 720px; padding-top: 80px;
}
.hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-ui); font-size: 0.7rem;
  font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--yellow); border: 1px solid rgba(245,197,24,0.25);
  padding: 6px 14px; border-radius: 100px;
  background: rgba(245,197,24,0.06);
  margin-bottom: 28px;
  animation: fadeDown 0.8s var(--ease) both;
}
.hero-tag::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%;
  background: var(--yellow); animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 700; line-height: 1.12;
  letter-spacing: 0.01em;
  margin-bottom: 1.4rem;
  animation: fadeUp 0.9s 0.1s var(--ease) both;
}
.hero-title .highlight {
  color: var(--red);
  position: relative;
  display: inline-block;
}
.hero-title .highlight::after {
  content: '';
  position: absolute; bottom: -4px; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--red), transparent);
}
.hero-sub {
  color: var(--white-dim); font-size: 1rem; line-height: 1.8;
  max-width: 520px; margin-bottom: 2.5rem;
  animation: fadeUp 0.9s 0.2s var(--ease) both;
}
.hero-actions {
  display: flex; gap: 16px; flex-wrap: wrap;
  animation: fadeUp 0.9s 0.3s var(--ease) both;
}
.hero-stats {
  position: absolute; right: 5%; bottom: 12%;
  z-index: 2; display: flex; flex-direction: column; gap: 24px;
  animation: fadeLeft 0.9s 0.4s var(--ease) both;
}
.hero-stat {
  text-align: right;
}
.hero-stat-num {
  font-family: var(--font-display); font-size: 2.2rem;
  font-weight: 700; color: var(--red);
  line-height: 1;
}
.hero-stat-label {
  font-family: var(--font-ui); font-size: 0.65rem;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--white-dim);
}
.hero-scroll {
  position: absolute; bottom: 40px; left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  font-family: var(--font-ui); font-size: 0.6rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--white-dim);
}
.hero-scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(180deg, transparent, var(--red));
  animation: scrollLine 1.8s ease-in-out infinite;
}
@keyframes scrollLine {
  0%{opacity:0;transform:scaleY(0);transform-origin:top}
  50%{opacity:1;transform:scaleY(1);transform-origin:top}
  100%{opacity:0;transform:scaleY(1);transform-origin:bottom}
}
@keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeLeft { from{opacity:0;transform:translateX(24px)} to{opacity:1;transform:translateX(0)} }

/* STUDIO INTRO */
#studio-intro {
  padding: 100px 5%;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.intro-visual {
  position: relative;
}
.intro-visual-main {
  width: 100%; aspect-ratio: 16/10; border-radius: 18px;
  background: linear-gradient(135deg, var(--black3) 0%, var(--black4) 100%);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; position: relative;
  box-shadow: 0 24px 60px rgba(0,0,0,0.45);
}
.intro-visual-main::before {
  content: '';
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.34) 100%),
    radial-gradient(ellipse at 78% 28%, rgba(192,0,26,0.16), transparent 42%);
  z-index: 2;
}
.intro-visual-main::after {
  content: '';
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(240,236,228,0.14);
  border-radius: 12px;
  pointer-events: none;
  z-index: 3;
}
.intro-visual-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  position: relative;
  z-index: 1;
  transform: scale(1.02);
}
.intro-anim-rings {
  position: relative; width: 160px; height: 160px;
}
.ring {
  position: absolute; border-radius: 50%;
  border: 1px solid rgba(192,0,26,0.3);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  animation: ringPulse 3s ease-in-out infinite;
}
.ring:nth-child(1){width:60px;height:60px;background:rgba(192,0,26,0.3);}
.ring:nth-child(2){width:100px;height:100px;animation-delay:-1s;}
.ring:nth-child(3){width:140px;height:140px;animation-delay:-2s;}
.ring:nth-child(4){width:180px;height:180px;animation-delay:-0.5s;}
@keyframes ringPulse {
  0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.5}
  50%{transform:translate(-50%,-50%) scale(1.08);opacity:1}
}
.intro-badge {
  position: absolute; right: 20px; bottom: 20px;
  width: 92px; height: 92px; border-radius: 50%;
  background: var(--red); display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 0.62rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  font-weight: 700; text-align: center; line-height: 1.3;
  animation: none;
  box-shadow: 0 0 30px var(--red-glow), 0 10px 30px rgba(0,0,0,0.35);
  z-index: 4;
}
@keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
.intro-content { padding-right: 20px; }
.intro-features {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 16px; margin-top: 2rem;
}
.intro-feature {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 14px; border-radius: 8px;
  background: var(--black3); border: 1px solid var(--border);
  transition: border-color 0.3s;
}
.intro-feature:hover { border-color: var(--border-red); }
.intro-feature-icon {
  width: 36px; height: 36px; border-radius: 8px;
  background: var(--red-soft); display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0;
}
.intro-feature-text h4 {
  font-family: var(--font-ui); font-size: 0.8rem;
  font-weight: 700; margin-bottom: 2px;
}
.intro-feature-text p { font-size: 0.72rem; color: var(--white-dim); }

/* SERVICES PREVIEW */
#services-preview {
  padding: 100px 5%;
  background: var(--black2);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px; margin-top: 1.5rem;
}
.service-card {
  padding: 36px 28px; border-radius: 12px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  position: relative; overflow: hidden;
  transition: all 0.4s var(--ease);
}
.service-card-thumb {
  position: relative;
  width: calc(100% + 56px);
  margin: -36px -28px 24px;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.service-card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease), filter 0.5s var(--ease);
  filter: saturate(0.92) contrast(1.02);
}
.service-card:hover .service-card-thumb img {
  transform: scale(1.05);
  filter: saturate(1) contrast(1.06);
}
.service-card-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8,8,8,0.04) 0%, rgba(8,8,8,0.36) 100%);
  pointer-events: none;
}
.service-card::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--red-soft) 0%, transparent 60%);
  opacity: 0; transition: opacity 0.4s;
}
.service-card:hover::before { opacity: 1; }
.service-card:hover {
  border-color: var(--border-red);
  transform: translateY(-6px);
  box-shadow: 0 0 50px var(--red-glow), 0 24px 60px rgba(0,0,0,0.5);
}
.service-card-num {
  font-family: var(--font-display); font-size: 3rem;
  font-weight: 700; color: var(--white-faint);
  position: absolute; top: 20px; right: 24px;
  line-height: 1;
}
.service-card-icon {
  width: 52px; height: 52px; border-radius: 10px;
  background: var(--red-soft); border: 1px solid var(--border-red);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; margin-bottom: 20px;
  transition: all 0.3s var(--ease);
}
.service-card:hover .service-card-icon {
  background: var(--red); box-shadow: 0 0 20px var(--red-glow);
}
.service-card h3 {
  font-family: var(--font-ui); font-size: 1rem;
  font-weight: 700; margin-bottom: 10px;
}
.service-card p { font-size: 0.83rem; color: var(--white-dim); line-height: 1.7; }
.service-card-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-ui); font-size: 0.72rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--red); margin-top: 20px;
  transition: gap 0.3s;
}
.service-card:hover .service-card-link { gap: 10px; }

/* WHY CHOOSE US */
#why-us {
  padding: 100px 5%;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.why-content { order: 2; }
.why-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 20px; order: 1;
}
.why-card {
  padding: 28px 24px; border-radius: 10px;
  background: var(--card-bg); border: 1px solid var(--border);
  transition: all 0.4s var(--ease);
}
.why-card:hover {
  border-color: var(--border-red);
  transform: translateY(-4px);
  box-shadow: 0 0 30px var(--red-glow);
}
.why-card-icon {
  font-size: 1.8rem; margin-bottom: 16px;
}
.why-card h4 {
  font-family: var(--font-ui); font-size: 0.9rem;
  font-weight: 700; margin-bottom: 8px;
}
.why-card p { font-size: 0.78rem; color: var(--white-dim); line-height: 1.7; }

/* WORKS PREVIEW */
#works-preview {
  padding: 100px 5%;
  background: var(--black2);
}
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 1.5rem;
}
.work-card {
  border-radius: 10px; overflow: hidden;
  position: relative; aspect-ratio: 4/3;
  background: var(--black3); border: 1px solid var(--border);
  cursor: pointer;
}
.work-card-bg {
  position: absolute; inset: 0;
  transition: transform 0.6s var(--ease);
}
.work-card-bg img,
.work-card-bg video,
.portfolio-thumb-bg img,
.portfolio-thumb-bg video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.work-card:hover .work-card-bg { transform: scale(1.06); }
.work-card-bg-1 { background: linear-gradient(135deg, #1a0508, #3a000d); }
.work-card-bg-2 { background: linear-gradient(135deg, #050a1a, #001035); }
.work-card-bg-3 { background: linear-gradient(135deg, #0a0a0a, #1a1a1a); }
.work-card-bg-4 { background: linear-gradient(135deg, #0a0508, #1a0010); }
.work-card-bg-5 { background: linear-gradient(135deg, #050a08, #001a10); }
.work-card-bg-6 { background: linear-gradient(135deg, #0a0808, #1a0c00); }
.work-card-pattern {
  position: absolute; inset: 0; display: flex;
  align-items: center; justify-content: center;
  font-size: 4rem; opacity: 0.15;
}
.work-card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(0deg, rgba(8,8,8,0.92) 0%, transparent 50%);
  padding: 20px;
  display: flex; flex-direction: column; justify-content: flex-end;
  transform: translateY(20px); opacity: 0.7;
  transition: all 0.4s var(--ease);
}
.work-card:hover .work-card-overlay {
  transform: translateY(0); opacity: 1;
}
.work-tag {
  font-family: var(--font-ui); font-size: 0.62rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--red); margin-bottom: 6px;
}
.work-card-overlay h3 {
  font-family: var(--font-ui); font-size: 0.9rem; font-weight: 700;
}
.work-play {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%) scale(0.8); opacity: 0;
  width: 52px; height: 52px; border-radius: 50%;
  background: var(--red); display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; transition: all 0.4s var(--ease);
  box-shadow: 0 0 30px var(--red-glow);
}
.work-card:hover .work-play { opacity: 1; transform: translate(-50%,-50%) scale(1); }
.works-cta { text-align: center; margin-top: 3rem; }

/* TESTIMONIALS */
#testimonials {
  padding: 100px 5%;
}
.testimonials-header { text-align: center; }
.testimonials-header .section-label { justify-content: center; }
.testimonials-header .section-label::before { display: none; }
.testimonials-header .section-sub { margin: 0 auto 3rem; }
.testimonials-track {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 24px;
}
.testi-card {
  padding: 32px 28px; border-radius: 12px;
  background: var(--card-bg); border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  position: relative; overflow: hidden;
  transition: all 0.4s var(--ease);
}
.testi-card:hover {
  border-color: var(--border-red);
  box-shadow: 0 0 40px var(--red-glow);
  transform: translateY(-4px);
}
.testi-quote {
  font-size: 3rem; color: var(--red); line-height: 1;
  font-family: var(--font-display); margin-bottom: 16px;
  opacity: 0.6;
}
.testi-text {
  font-size: 0.88rem; color: var(--white-dim);
  line-height: 1.8; margin-bottom: 24px;
  font-style: italic;
}
.testi-stars { color: var(--yellow); font-size: 0.9rem; margin-bottom: 20px; }
.testi-author { display: flex; gap: 14px; align-items: center; }
.testi-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 1rem; font-weight: 700;
  background: var(--red); flex-shrink: 0;
}
.testi-author-name {
  font-family: var(--font-ui); font-size: 0.88rem; font-weight: 700;
}
.testi-author-role { font-size: 0.72rem; color: var(--white-dim); }

/* FAQ */
#faq {
  padding: 100px 5%;
  background: var(--black2);
}
.faq-container {
  max-width: 760px; margin: 0 auto;
}
.faq-header { text-align: center; margin-bottom: 3rem; }
.faq-header .section-label { justify-content: center; }
.faq-header .section-label::before { display: none; }
.faq-item {
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s;
}
.faq-item.open { border-color: var(--border-red); }
.faq-question {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 0;
  font-family: var(--font-ui); font-size: 0.92rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.3s;
}
.faq-question:hover { color: var(--red); }
.faq-item.open .faq-question { color: var(--red); }
.faq-icon {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid var(--border-red);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0; color: var(--red);
  transition: transform 0.4s var(--ease), background 0.3s;
}
.faq-item.open .faq-icon { transform: rotate(45deg); background: var(--red); color: var(--white); }
.faq-answer {
  max-height: 0; overflow: hidden;
  transition: max-height 0.5s var(--ease), padding 0.3s;
}
.faq-item.open .faq-answer { max-height: 200px; }
.faq-answer-inner {
  padding-bottom: 22px;
  font-size: 0.85rem; color: var(--white-dim); line-height: 1.8;
}

/* =========================
   ===== SERVICES PAGE =====
   ========================= */
.services-full-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 28px; margin-top: 2rem;
}
.service-full-card {
  padding: 40px 36px; border-radius: 14px;
  background: var(--card-bg); border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  position: relative; overflow: hidden;
  transition: all 0.4s var(--ease);
}
.service-full-card::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--red), var(--red-deep));
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s var(--ease);
}
.service-full-card:hover::after { transform: scaleX(1); }
.service-full-card:hover {
  border-color: var(--border-red);
  transform: translateY(-6px);
  box-shadow: 0 0 50px var(--red-glow), 0 24px 60px rgba(0,0,0,0.5);
}
.service-full-icon {
  width: 64px; height: 64px; border-radius: 14px;
  background: var(--red-soft); border: 1px solid var(--border-red);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; margin-bottom: 24px;
  transition: all 0.3s var(--ease);
}
.service-full-card:hover .service-full-icon {
  background: var(--red); box-shadow: 0 0 30px var(--red-glow);
}
.service-full-card h3 {
  font-family: var(--font-display); font-size: 1.2rem;
  font-weight: 700; margin-bottom: 12px;
}
.service-full-card > p { font-size: 0.85rem; color: var(--white-dim); line-height: 1.75; margin-bottom: 20px; }
.service-benefits { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
.service-benefit {
  display: flex; gap: 10px; align-items: flex-start;
  font-size: 0.8rem; color: var(--white-dim);
}
.service-benefit::before {
  content: '▸'; color: var(--red); flex-shrink: 0; line-height: 1.5;
}
.service-preview-area {
  margin-top: 24px; border-radius: 8px;
  height: 180px;
  background: linear-gradient(135deg, rgba(192,0,26,0.06) 0%, rgba(0,0,0,0) 100%);
  border: 1px solid var(--border-red);
  overflow: hidden;
}
.service-preview-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease), filter 0.5s var(--ease);
}
.service-full-card:hover .service-preview-area img {
  transform: scale(1.04);
  filter: saturate(1.05) contrast(1.04);
}
.services-cta-section {
  margin: 80px 5%;
  padding: 60px; border-radius: 16px;
  background: linear-gradient(135deg, rgba(192,0,26,0.15) 0%, rgba(139,0,0,0.08) 100%);
  border: 1px solid var(--border-red);
  text-align: center;
  position: relative; overflow: hidden;
}
.services-cta-section::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(192,0,26,0.2), transparent 60%);
}
.services-cta-section h2 {
  font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700; margin-bottom: 16px; position: relative;
}
.services-cta-section p {
  color: var(--white-dim); max-width: 480px; margin: 0 auto 2rem;
  position: relative;
}
.wa-btn {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-ui); font-size: 0.8rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 13px 28px; border-radius: 4px;
  background: #25D366; color: #fff;
  transition: all 0.3s var(--ease); position: relative;
}
.wa-btn:hover {
  background: #1ebe5d; transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(37,211,102,0.3);
}

/* ========================
   ===== WORKS PAGE =====
   ======================== */
.works-filters {
  display: flex; gap: 12px; flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.filter-btn {
  font-family: var(--font-ui); font-size: 0.72rem;
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 8px 20px; border-radius: 100px;
  border: 1px solid var(--border); color: var(--white-dim);
  transition: all 0.3s var(--ease);
}
.filter-btn.active, .filter-btn:hover {
  border-color: var(--red); color: var(--white); background: var(--red-soft);
  box-shadow: 0 0 20px var(--red-glow);
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 24px;
}
.portfolio-card {
  border-radius: 12px; overflow: hidden;
  border: 1px solid var(--border);
  background: var(--black3);
  transition: all 0.4s var(--ease);
  cursor: pointer;
}
.portfolio-card:hover {
  border-color: var(--border-red);
  transform: translateY(-6px);
  box-shadow: 0 0 40px var(--red-glow), 0 20px 60px rgba(0,0,0,0.5);
}
.portfolio-thumb {
  aspect-ratio: 16/9; position: relative; overflow: hidden;
}
.portfolio-thumb-bg {
  position: absolute; inset: 0;
  transition: transform 0.6s var(--ease);
}
.portfolio-card:hover .portfolio-thumb-bg { transform: scale(1.08); }
.portfolio-thumb-icon {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 3.5rem; opacity: 0.2;
}
.portfolio-thumb-btn {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%) scale(0.7); opacity: 0;
  transition: all 0.4s var(--ease);
  background: var(--red); color: var(--white);
  padding: 10px 22px; border-radius: 4px;
  font-family: var(--font-ui); font-size: 0.72rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 0 30px var(--red-glow);
}
.portfolio-card:hover .portfolio-thumb-btn { opacity: 1; transform: translate(-50%,-50%) scale(1); }
.portfolio-info { padding: 20px; }
.portfolio-cat {
  font-family: var(--font-ui); font-size: 0.62rem;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--red); margin-bottom: 6px;
}
.portfolio-info h3 {
  font-family: var(--font-ui); font-size: 0.95rem;
  font-weight: 700; margin-bottom: 6px;
}
.portfolio-info p { font-size: 0.78rem; color: var(--white-dim); }

/* ========================
   ===== ABOUT PAGE =====
   ======================== */
.about-intro-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 40px; align-items: center;
  padding: 64px 5% 44px;
}
.about-visual {
  position: relative;
  display: flex;
  align-items: center;
}
.about-visual-main {
  width: 100%;
  max-width: 420px;
  min-height: 0;
  border-radius: 20px; overflow: hidden;
  background: linear-gradient(180deg, #1a1a1a 0%, #101010 100%);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  box-shadow: 0 24px 60px rgba(0,0,0,0.42);
  padding: 0;
  margin: 0 auto 0 0;
}
.about-visual-main::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 38%),
    linear-gradient(180deg, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.1) 100%);
  z-index: 2;
}
.about-logo-big {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center 18%;
  border-radius: 0;
  box-shadow: none;
  position: relative; z-index: 1;
  transform: none;
}
.about-accent-card {
  position: absolute; right: -18px; bottom: 24px;
  padding: 16px 20px; border-radius: 10px;
  background: var(--red); min-width: 156px;
  box-shadow: 0 0 40px var(--red-glow);
  z-index: 4;
}
.about-accent-num {
  font-family: var(--font-display); font-size: 1.9rem; font-weight: 700;
}
.about-accent-label {
  font-family: var(--font-ui); font-size: 0.7rem;
  letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.8;
}
.about-copy .section-title {
  font-size: clamp(1.65rem, 2.8vw, 2.4rem);
  margin-bottom: 0.8rem;
}
.about-copy p {
  color: var(--white-dim);
  font-size: 0.88rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.stats-row {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 1px; background: var(--border);
  border: 1px solid var(--border);
  border-radius: 12px; overflow: hidden;
  margin: 36px 5% 60px;
}
.stat-box {
  padding: 40px 30px; background: var(--black3);
  text-align: center;
  transition: background 0.3s;
}
.stat-box:hover { background: var(--black4); }
.stat-box-num {
  font-family: var(--font-display); font-size: 2.4rem;
  font-weight: 700; color: var(--red); line-height: 1;
  margin-bottom: 8px;
}
.stat-box-label {
  font-family: var(--font-ui); font-size: 0.72rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--white-dim);
}
.mission-vision {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 28px; padding: 0 5% 80px;
}
.mv-card {
  padding: 44px 36px; border-radius: 14px;
  position: relative; overflow: hidden;
}
.mv-card-mission {
  background: linear-gradient(135deg, rgba(192,0,26,0.15) 0%, rgba(139,0,0,0.06) 100%);
  border: 1px solid var(--border-red);
}
.mv-card-vision {
  background: var(--card-bg); border: 1px solid var(--border);
}
.mv-card-icon {
  font-size: 2.5rem; margin-bottom: 20px;
}
.mv-card h3 {
  font-family: var(--font-display); font-size: 1.5rem;
  font-weight: 700; margin-bottom: 16px; color: var(--red);
}
.mv-card p { color: var(--white-dim); line-height: 1.8; font-size: 0.9rem; }
.team-grid {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 20px; padding: 0 5% 80px;
}
.team-card {
  border-radius: 12px; overflow: hidden;
  background: var(--card-bg); border: 1px solid var(--border);
  text-align: center; padding: 32px 20px;
  transition: all 0.4s var(--ease);
}
.team-card:hover {
  border-color: var(--border-red);
  transform: translateY(-6px);
  box-shadow: 0 0 40px var(--red-glow);
}
.team-avatar {
  width: 80px; height: 80px; border-radius: 50%;
  background: var(--red-soft); border: 2px solid var(--border-red);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 1.4rem; font-weight: 700;
  margin: 0 auto 16px; color: var(--red);
  transition: background 0.3s;
}
.team-card:hover .team-avatar { background: var(--red); color: var(--white); }
.team-name {
  font-family: var(--font-ui); font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;
}
.team-role { font-size: 0.75rem; color: var(--red); font-family: var(--font-ui); letter-spacing: 0.08em; }
.workflow-section { padding: 0 5% 80px; }
.workflow-steps {
  display: grid; grid-template-columns: repeat(5,1fr);
  gap: 0; position: relative; margin-top: 2rem;
}
.workflow-steps::before {
  content: '';
  position: absolute; top: 32px; left: 10%; right: 10%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-red), var(--red), var(--border-red), transparent);
}
.workflow-step {
  text-align: center; padding: 0 16px;
  position: relative;
}
.workflow-step-circle {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--black3); border: 1px solid var(--border-red);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 1.1rem; font-weight: 700;
  color: var(--red); margin: 0 auto 20px;
  transition: all 0.3s var(--ease);
  position: relative; z-index: 1;
}
.workflow-step:hover .workflow-step-circle {
  background: var(--red); color: var(--white);
  box-shadow: 0 0 30px var(--red-glow);
}
.workflow-step h4 {
  font-family: var(--font-ui); font-size: 0.82rem;
  font-weight: 700; margin-bottom: 8px;
}
.workflow-step p { font-size: 0.72rem; color: var(--white-dim); line-height: 1.6; }

/* ==========================
   ===== CONTACT PAGE =====
   ========================== */
.contact-grid {
  display: grid; grid-template-columns: 1fr 1.2fr;
  gap: 60px; padding: 60px 5% 80px;
}
.contact-info-panel {}
.contact-info-item {
  display: flex; gap: 16px; align-items: flex-start;
  padding: 20px; border-radius: 10px;
  background: var(--card-bg); border: 1px solid var(--border);
  margin-bottom: 16px;
  transition: border-color 0.3s;
}
.contact-info-item:hover { border-color: var(--border-red); }
.contact-info-icon {
  width: 44px; height: 44px; border-radius: 10px;
  background: var(--red-soft); border: 1px solid var(--border-red);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.contact-info-item h4 {
  font-family: var(--font-ui); font-size: 0.8rem;
  font-weight: 700; margin-bottom: 4px;
}
.contact-info-item p { font-size: 0.82rem; color: var(--white-dim); }
.contact-socials {
  display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;
}
.social-pill {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 18px; border-radius: 100px;
  border: 1px solid var(--border); background: var(--card-bg);
  font-family: var(--font-ui); font-size: 0.72rem;
  font-weight: 700; letter-spacing: 0.08em;
  transition: all 0.3s var(--ease);
}
.social-pill:hover {
  border-color: var(--border-red); background: var(--red-soft);
  box-shadow: 0 0 20px var(--red-glow);
}
.map-placeholder {
  margin-top: 24px; border-radius: 10px;
  height: 240px; background: var(--black3);
  border: 1px solid var(--border);
  overflow: hidden; position: relative;
}
.map-placeholder iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
.contact-form-panel {}
.contact-form {
  background: var(--card-bg); border: 1px solid var(--border);
  border-radius: 14px; padding: 44px 40px;
  backdrop-filter: blur(12px);
}
.contact-form h3 {
  font-family: var(--font-display); font-size: 1.4rem;
  font-weight: 700; margin-bottom: 8px;
}
.contact-form-sub { font-size: 0.82rem; color: var(--white-dim); margin-bottom: 28px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { margin-bottom: 16px; }
.form-group label {
  display: block; font-family: var(--font-ui); font-size: 0.72rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--white-dim); margin-bottom: 8px;
}
.form-group input, .form-group textarea, .form-group select {
  width: 100%; padding: 12px 16px; border-radius: 8px;
  background: var(--black3); border: 1px solid var(--border);
  color: var(--white); font-size: 0.88rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
  appearance: none;
}
.form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c0001a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}
.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
  border-color: var(--red);
  box-shadow: 0 0 20px var(--red-glow);
}
.form-group textarea { resize: vertical; min-height: 120px; }
.form-group select option { background: var(--black3); }
.form-success {
  display: none; text-align: center; padding: 40px 20px;
}
.form-success.show { display: block; animation: fadeUp 0.6s var(--ease) both; }
.form-success-icon {
  font-size: 3.5rem; margin-bottom: 16px;
  animation: successPop 0.6s var(--ease-bounce) both;
}
@keyframes successPop { from{transform:scale(0)} to{transform:scale(1)} }
.form-success h3 {
  font-family: var(--font-display); font-size: 1.4rem;
  font-weight: 700; color: var(--red); margin-bottom: 8px;
}
.form-success p { color: var(--white-dim); font-size: 0.88rem; }

/* WA FLOAT */
.wa-float {
  position: fixed; bottom: 28px; right: 28px; z-index: 800;
  width: 56px; height: 56px; border-radius: 50%;
  background: #25D366; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; box-shadow: 0 4px 24px rgba(37,211,102,0.4);
  transition: all 0.3s var(--ease);
  animation: waFloat 3s ease-in-out infinite;
}
.wa-float:hover {
  transform: scale(1.12);
  box-shadow: 0 8px 40px rgba(37,211,102,0.5);
}
@keyframes waFloat {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-6px)}
}
.wa-float-pulse {
  position: absolute; inset: -4px; border-radius: 50%;
  border: 2px solid rgba(37,211,102,0.4);
  animation: waPulse 2s ease-in-out infinite;
}
@keyframes waPulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.2);opacity:0} }

/* ===== FOOTER ===== */
footer {
  background: var(--black2);
  border-top: 1px solid var(--border);
  padding: 70px 5% 30px;
}
.footer-top {
  display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 60px; margin-bottom: 50px;
}
.footer-brand {}
.footer-logo {
  font-family: var(--font-display); font-size: 1.3rem;
  font-weight: 700; display: flex; align-items: center; gap: 10px;
  margin-bottom: 16px;
}
.footer-logo-mark {
  width: 42px; height: 42px; border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #f0f0f0; display: flex; align-items: center; justify-content: center;
}
.footer-logo-mark img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.footer-tagline {
  font-size: 0.82rem; color: var(--white-dim); line-height: 1.75;
  margin-bottom: 24px; max-width: 280px;
}
.footer-socials { display: flex; gap: 10px; }
.social-icon {
  width: 36px; height: 36px; border-radius: 8px;
  border: 1px solid var(--border); background: var(--black3);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; transition: all 0.3s var(--ease);
}
.social-icon:hover {
  border-color: var(--red); background: var(--red-soft);
  box-shadow: 0 0 16px var(--red-glow); transform: translateY(-2px);
}
.footer-col h4 {
  font-family: var(--font-ui); font-size: 0.72rem;
  font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--white); margin-bottom: 20px;
}
.footer-links { display: flex; flex-direction: column; gap: 10px; }
.footer-link {
  font-size: 0.82rem; color: var(--white-dim);
  transition: color 0.3s;
  display: flex; align-items: center; gap: 6px;
}
.footer-link::before { content: '▸'; color: var(--red); font-size: 0.65rem; opacity: 0; transition: opacity 0.3s; }
.footer-link:hover { color: var(--white); }
.footer-link:hover::before { opacity: 1; }
.footer-contact-item {
  display: flex; gap: 10px; align-items: flex-start;
  font-size: 0.82rem; color: var(--white-dim);
  margin-bottom: 12px;
}
.footer-contact-icon { color: var(--red); flex-shrink: 0; margin-top: 2px; }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 24px;
  display: flex; align-items: center; justify-content: space-between;
  font-size: 0.75rem; color: var(--white-faint);
  font-family: var(--font-ui);
}
.footer-bottom-red { color: var(--red); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1100px) {
  .services-grid { grid-template-columns: repeat(2,1fr); }
  .testimonials-track { grid-template-columns: repeat(2,1fr); }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .workflow-steps { grid-template-columns: repeat(3,1fr); }
  .workflow-steps::before { display: none; }
}
@media (max-width: 900px) {
  #studio-intro, #why-us, .about-intro-grid { grid-template-columns: 1fr; gap: 32px; }
  .hero-stats { display: none; }
  .why-content { order: 0; }
  .works-grid, .portfolio-grid { grid-template-columns: repeat(2,1fr); }
  .services-full-grid { grid-template-columns: 1fr; }
  .mission-vision { grid-template-columns: 1fr; }
  .stats-row { grid-template-columns: repeat(2,1fr); }
  .team-grid { grid-template-columns: repeat(2,1fr); }
  .contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 680px) {
  .nav-links, .nav-cta { display: none; }
  .nav-hamburger { display: flex; }
  .services-grid { grid-template-columns: 1fr; }
  .works-grid, .portfolio-grid { grid-template-columns: 1fr; }
  .testimonials-track { grid-template-columns: 1fr; }
  .intro-features { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .hero-title { font-size: 2rem; }
  .contact-form { padding: 28px 20px; }
  .form-row { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; gap: 32px; }
  .services-cta-section { padding: 36px 24px; margin: 40px 5%; }
  .team-grid { grid-template-columns: repeat(2,1fr); }
  .workflow-steps { grid-template-columns: repeat(2,1fr); }
  .stats-row { grid-template-columns: 1fr 1fr; }
</style>
</head>
<body>

<!-- Custom Cursor -->
<div id="cursor">
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>
</div>

<!-- Navbar -->
<nav id="navbar">
  <a class="nav-logo" href="#" onclick="navigateTo('home');return false;">
    <div class="nav-logo-mark"><img src="/logo.jpeg" alt="MP2 Animation Studio logo"></div>
    Animation <span class="red">Studio</span>
  </a>
  <ul class="nav-links">
    <li><a class="nav-link active" href="#" data-page="home" onclick="navigateTo('home');return false;">Home</a></li>
    <li><a class="nav-link" href="#" data-page="services" onclick="navigateTo('services');return false;">Services</a></li>
    <li><a class="nav-link" href="#" data-page="works" onclick="navigateTo('works');return false;">Our Works</a></li>
    <li><a class="nav-link" href="#" data-page="about" onclick="navigateTo('about');return false;">About</a></li>
    <li><a class="nav-link" href="#" data-page="contact" onclick="navigateTo('contact');return false;">Contact</a></li>
  </ul>
  <a class="nav-cta" href="#" onclick="navigateTo('contact');return false;">Get a Quote</a>
  <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobile-nav">
  <a class="nav-link" href="#" onclick="navigateTo('home');toggleMobileNav();return false;">Home</a>
  <a class="nav-link" href="#" onclick="navigateTo('services');toggleMobileNav();return false;">Services</a>
  <a class="nav-link" href="#" onclick="navigateTo('works');toggleMobileNav();return false;">Our Works</a>
  <a class="nav-link" href="#" onclick="navigateTo('about');toggleMobileNav();return false;">About</a>
  <a class="nav-link" href="#" onclick="navigateTo('contact');toggleMobileNav();return false;">Contact</a>
  <a class="btn-primary" href="#" onclick="navigateTo('contact');toggleMobileNav();return false;">Get a Quote</a>
</div>

<!-- WhatsApp Float -->
<a class="wa-float" href="https://wa.me/918610759752" target="_blank" title="Chat on WhatsApp">
  <div class="wa-float-pulse"></div>
  💬
</a>

<!-- ======================== -->
<!-- ===== HOME PAGE ===== -->
<!-- ======================== -->
<div id="page-home" class="page active">

  <!-- HERO -->
  <section id="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>

    <div class="hero-content">
      <div class="hero-tag">✦ Award-Winning Animation Studio</div>
      <h1 class="hero-title">
        We Bring <span class="highlight">Stories</span><br>
        to Life Through<br>Animation
      </h1>
      <p class="hero-sub">
        MP2 Animation Studio crafts cinematic 2D animations, motion graphics,
        and brand identities that captivate audiences and elevate your vision
        into unforgettable visual experiences.
      </p>
      <div class="hero-actions">
        <a class="btn-primary" href="#" onclick="navigateTo('works');return false;">
          ▶ View Portfolio
        </a>
        <a class="btn-outline" href="#" onclick="navigateTo('contact');return false;">
          Contact Us →
        </a>
      </div>
    </div>

    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-num">150+</div>
        <div class="hero-stat-label">Projects Done</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">98%</div>
        <div class="hero-stat-label">Client Satisfaction</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">2.5+</div>
        <div class="hero-stat-label">Years Experience</div>
      </div>
    </div>

    <div class="hero-scroll">
      <div class="hero-scroll-line"></div>
      Scroll
    </div>
  </section>

  <div class="divider"></div>

  <!-- STUDIO INTRO -->
  <section id="studio-intro">
    <div class="intro-visual reveal">
      <div class="intro-visual-main">
        <img src="/homepage.jpeg" alt="MP2 Animation Studio workspace">
      </div>
      <div class="intro-badge">MP2<br>Since<br>2021</div>
    </div>
    <div class="intro-content reveal reveal-delay-1">
      <div class="section-label">About the Studio</div>
      <h2 class="section-title">Crafting <em>Visual Magic</em> Since 2021</h2>
      <p class="section-sub">
        MP2 Animation Studio is a premier creative agency specializing in motion
        storytelling. We blend artistic vision with cutting-edge technique to deliver
        animations that don't just move — they resonate, inspire, and convert.
      </p>
      <p style="font-size:0.85rem;color:var(--white-dim);line-height:1.8;margin-bottom:2rem;">
        From startups to global brands, we've partnered with clients across industries to
        transform their ideas into cinematic experiences. Our team of passionate animators,
        motion designers, and creative strategists work in perfect sync to deliver results
        that exceed expectations every time.
      </p>
      <div class="intro-features">
        <div class="intro-feature">
          <div class="intro-feature-icon">🎬</div>
          <div class="intro-feature-text">
            <h4>Cinematic Quality</h4>
            <p>Hollywood-grade production values</p>
          </div>
        </div>
        <div class="intro-feature">
          <div class="intro-feature-icon">⚡</div>
          <div class="intro-feature-text">
            <h4>Fast Delivery</h4>
            <p>On-time, every project, every time</p>
          </div>
        </div>
        <div class="intro-feature">
          <div class="intro-feature-icon">🎯</div>
          <div class="intro-feature-text">
            <h4>Brand Focused</h4>
            <p>Strategy-driven creative output</p>
          </div>
        </div>
        <div class="intro-feature">
          <div class="intro-feature-icon">🌟</div>
          <div class="intro-feature-text">
            <h4>Award Winning</h4>
            <p>Recognized for excellence</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- SERVICES PREVIEW -->
  <section id="services-preview">
    <div class="section-label reveal">What We Do</div>
    <h2 class="section-title reveal reveal-delay-1">Our <em>Creative</em> Services</h2>
    <p class="section-sub reveal reveal-delay-2">From concept to delivery, we offer a full spectrum of animation and design services tailored to elevate your brand.</p>
    <div class="services-grid">
      <div class="service-card reveal">
        <div class="service-card-num">01</div>
        <div class="service-card-thumb"><img src="/services/1.png" alt="2D Animation service"></div>
        <div class="service-card-icon">🎞️</div>
        <h3>2D Animation</h3>
        <p>Frame-by-frame and rig-based animation with fluid motion and expressive character storytelling.</p>
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>
      </div>
      <div class="service-card reveal reveal-delay-1">
        <div class="service-card-num">02</div>
        <div class="service-card-thumb"><img src="/services/2.png" alt="Motion Graphics service"></div>
        <div class="service-card-icon">✨</div>
        <h3>Motion Graphics</h3>
        <p>Dynamic motion design for explainer videos, social media, and brand content that engages viewers.</p>
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>
      </div>
      <div class="service-card reveal reveal-delay-2">
        <div class="service-card-num">03</div>
        <div class="service-card-thumb"><img src="/services/3.png" alt="Logo Designing service"></div>
        <div class="service-card-icon">💎</div>
        <h3>Logo Designing</h3>
        <p>Iconic brand marks crafted with intentional symbolism, unique aesthetics, and timeless appeal.</p>
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>
      </div>
      <div class="service-card reveal reveal-delay-1">
        <div class="service-card-num">04</div>
        <div class="service-card-thumb"><img src="/services/4.png" alt="Logo Animation service"></div>
        <div class="service-card-icon">🌀</div>
        <h3>Logo Animation</h3>
        <p>Bring your brand to life with cinematic logo reveals and animated idents for any platform.</p>
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>
      </div>
      <div class="service-card reveal reveal-delay-2">
        <div class="service-card-num">05</div>
        <div class="service-card-thumb"><img src="/services/5.png" alt="Digital Marketing service"></div>
        <div class="service-card-icon">📣</div>
        <h3>Digital Marketing</h3>
        <p>Creative-led campaigns with animated content that drives engagement, reach, and conversions.</p>
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>
      </div>
      <div class="service-card reveal reveal-delay-3">
        <div class="service-card-num">06</div>
        <div class="service-card-thumb"><img src="/services/6.png" alt="Graphic Designing service"></div>
        <div class="service-card-icon">🖼️</div>
        <h3>Graphic Designing</h3>
        <p>Premium visual communication through posters, banners, social assets, and brand collateral.</p>
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>
      </div>
    </div>
    <div style="text-align:center;margin-top:3rem;">
      <a class="btn-outline" href="#" onclick="navigateTo('services');return false;">View All Services →</a>
    </div>
  </section>

  <div class="divider"></div>

  <!-- WHY CHOOSE US -->
  <section id="why-us">
    <div class="why-grid">
      <div class="why-card glass reveal">
        <div class="why-card-icon">🎨</div>
        <h4>Creative Team</h4>
        <p>A passionate collective of animators, designers, and storytellers with diverse global experience.</p>
      </div>
      <div class="why-card glass reveal reveal-delay-1">
        <div class="why-card-icon">⚙️</div>
        <h4>Professional Workflow</h4>
        <p>Structured processes with clear milestones, transparent communication, and revision cycles.</p>
      </div>
      <div class="why-card glass reveal reveal-delay-2">
        <div class="why-card-icon">🚀</div>
        <h4>Fast Delivery</h4>
        <p>We respect timelines. Our agile workflow ensures your project ships on schedule without compromise.</p>
      </div>
      <div class="why-card glass reveal reveal-delay-3">
        <div class="why-card-icon">🏆</div>
        <h4>Premium Quality</h4>
        <p>Every frame crafted with cinematic precision — we never settle for anything less than exceptional.</p>
      </div>
    </div>
    <div class="why-content reveal reveal-delay-1">
      <div class="section-label">Why MP2</div>
      <h2 class="section-title">The Studio That<br><em>Delivers</em> Excellence</h2>
      <p class="section-sub">
        We're not just an animation studio — we're your creative partner. From the first brief to the final render,
        our team is committed to producing work that sets you apart in an increasingly visual world.
      </p>
      <a class="btn-primary" href="#" onclick="navigateTo('about');return false;">Discover Our Story →</a>
    </div>
  </section>

  <div class="divider"></div>

  <!-- WORKS PREVIEW -->
  <section id="works-preview">
    <div class="section-label reveal">Portfolio</div>
    <h2 class="section-title reveal reveal-delay-1">Featured <em>Works</em></h2>
    <p class="section-sub reveal reveal-delay-2">A curated selection of our finest animation and branding projects.</p>

    <div class="works-grid">
      <div class="work-card reveal">
        <div class="work-card-bg work-card-bg-1">
          <video src="/works/adventure-preview.mp4" autoplay muted loop playsinline></video>
        </div>
        <div class="work-play">▶</div>
        <div class="work-card-overlay">
          <div class="work-tag">2D Animation</div>
          <h3>Adventure Sequence Preview</h3>
        </div>
      </div>
      <div class="work-card reveal reveal-delay-1">
        <div class="work-card-bg work-card-bg-2">
          <img src="/works/motion-ui-play.png" alt="Motion graphics showcase">
        </div>
        <div class="work-play">▶</div>
        <div class="work-card-overlay">
          <div class="work-tag">Motion Graphics</div>
          <h3>Interface Motion System</h3>
        </div>
      </div>
      <div class="work-card reveal reveal-delay-2">
        <div class="work-card-bg work-card-bg-3">
          <img src="/works/new-thevars-logo.png" alt="New Thevars logo design">
        </div>
        <div class="work-play">▶</div>
        <div class="work-card-overlay">
          <div class="work-tag">Logo Design</div>
          <h3>New Thevars Identity</h3>
        </div>
      </div>
      <div class="work-card reveal">
        <div class="work-card-bg work-card-bg-4">
          <video src="/works/mp2-logo-animation.mp4" autoplay muted loop playsinline></video>
        </div>
        <div class="work-play">▶</div>
        <div class="work-card-overlay">
          <div class="work-tag">Logo Animation</div>
          <h3>MP2 Logo Reveal</h3>
        </div>
      </div>
      <div class="work-card reveal reveal-delay-1">
        <div class="work-card-bg work-card-bg-5">
          <img src="/works/marketing-dashboard.png" alt="Digital marketing dashboard">
        </div>
        <div class="work-play">▶</div>
        <div class="work-card-overlay">
          <div class="work-tag">Digital Marketing</div>
          <h3>Performance Campaign Visuals</h3>
        </div>
      </div>
      <div class="work-card reveal reveal-delay-2">
        <div class="work-card-bg work-card-bg-6">
          <img src="/works/works-collage.png" alt="Creative works collage">
        </div>
        <div class="work-play">▶</div>
        <div class="work-card-overlay">
          <div class="work-tag">Graphic Design</div>
          <h3>Creative Showcase Grid</h3>
        </div>
      </div>
    </div>
    <div class="works-cta reveal">
      <a class="btn-red" href="#" onclick="navigateTo('works');return false;">View All Works →</a>
    </div>
  </section>

  <div class="divider"></div>

  <!-- TESTIMONIALS -->
  <section id="testimonials">
    <div class="testimonials-header">
      <div class="section-label">Testimonials</div>
      <h2 class="section-title reveal">What Clients <em>Say</em></h2>
      <p class="section-sub reveal">Don't take our word for it — hear from the brands we've helped grow.</p>
    </div>
    <div class="testimonials-track">
      <div class="testi-card reveal">
        <div class="testi-quote">"</div>
        <p class="testi-text">MP2 transformed our brand story into a visual masterpiece. The animation quality exceeded every expectation, and the team's creative input made the project truly extraordinary.</p>
        <div class="testi-stars">★★★★★</div>
        <div class="testi-author">
          <div class="testi-avatar">A</div>
          <div>
            <div class="testi-author-name">Ahmed Al-Rashid</div>
            <div class="testi-author-role">CEO, Nexara Group</div>
          </div>
        </div>
      </div>
      <div class="testi-card reveal reveal-delay-1">
        <div class="testi-quote">"</div>
        <p class="testi-text">Working with MP2 was seamless from brief to delivery. Their motion graphics for our product launch drove a 3x increase in engagement. Absolutely world-class studio.</p>
        <div class="testi-stars">★★★★★</div>
        <div class="testi-author">
          <div class="testi-avatar">S</div>
          <div>
            <div class="testi-author-name">Sarah Mitchell</div>
            <div class="testi-author-role">Marketing Director, TechFlow</div>
          </div>
        </div>
      </div>
      <div class="testi-card reveal reveal-delay-2">
        <div class="testi-quote">"</div>
        <p class="testi-text">Our logo animation from MP2 is used on every video we produce. It's cinematic, it's us — it commands attention immediately. The investment paid for itself within a week.</p>
        <div class="testi-stars">★★★★★</div>
        <div class="testi-author">
          <div class="testi-avatar">R</div>
          <div>
            <div class="testi-author-name">Rohan Verma</div>
            <div class="testi-author-role">Founder, Velix Creative</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- FAQ -->
  <section id="faq">
    <div class="faq-container">
      <div class="faq-header">
        <div class="section-label">FAQ</div>
        <h2 class="section-title reveal">Frequently Asked <em>Questions</em></h2>
      </div>
      <div class="faq-item reveal">
        <div class="faq-question" onclick="toggleFaq(this)">
          How long does animation production take?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Project timelines vary based on complexity. A typical 60-second 2D animation takes 2–3 weeks, while logo animations can be completed in 5–7 business days. Motion graphics for social media typically take 3–5 days. We always provide a clear timeline during the briefing phase.
          </div>
        </div>
      </div>
      <div class="faq-item reveal reveal-delay-1">
        <div class="faq-question" onclick="toggleFaq(this)">
          Do you provide logo animation services?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Absolutely! Logo animation is one of our signature services. We create cinematic reveals, kinetic typography idents, and looping animations for YouTube, broadcast, and social platforms. We can animate an existing logo or design one from scratch.
          </div>
        </div>
      </div>
      <div class="faq-item reveal reveal-delay-2">
        <div class="faq-question" onclick="toggleFaq(this)">
          Can you handle complete branding projects?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Yes! MP2 offers complete brand identity packages including logo design, color systems, typography guides, brand guidelines, and animated brand assets. We've helped dozens of companies build cohesive, memorable brands from the ground up.
          </div>
        </div>
      </div>
      <div class="faq-item reveal reveal-delay-3">
        <div class="faq-question" onclick="toggleFaq(this)">
          Do you offer digital marketing services?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            We provide creative digital marketing content including animated social media posts, ad creatives, campaign videos, and promotional reels optimized for different platforms. Our content is designed to stop the scroll and drive action.
          </div>
        </div>
      </div>
      <div class="faq-item reveal">
        <div class="faq-question" onclick="toggleFaq(this)">
          How can we contact and start a project?
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Getting started is easy! Fill out our contact form, drop us an email, or reach us directly on WhatsApp for a quick response. We begin with a free discovery call to understand your vision, then send a detailed proposal within 24–48 hours.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="footer-logo-mark"><img src="/logo.jpeg" alt="MP2 Animation Studio logo"></div>
          MP2 Animation Studio
        </div>
        <p class="footer-tagline">We craft cinematic animations and brand identities that bring your stories to life with precision and passion.</p>
        <div class="footer-socials">
          <a class="social-icon" href="https://www.instagram.com/mp2animationstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Instagram">&#128247;</a>
          <a class="social-icon" href="https://www.linkedin.com/company/119464012/admin/notifications/all/" target="_blank" title="LinkedIn">&#128188;</a>
          <a class="social-icon" href="https://www.facebook.com/search/top/?q=MP2%20Animation%20Studio" target="_blank" title="Facebook">&#128101;</a>
          <a class="social-icon" href="https://wa.me/918610759752" target="_blank" title="WhatsApp">&#128172;</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <div class="footer-links">
          <a class="footer-link" href="#" onclick="navigateTo('home');return false;">Home</a>
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Services</a>
          <a class="footer-link" href="#" onclick="navigateTo('works');return false;">Our Works</a>
          <a class="footer-link" href="#" onclick="navigateTo('about');return false;">About Us</a>
          <a class="footer-link" href="#" onclick="navigateTo('contact');return false;">Contact</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <div class="footer-links">
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">2D Animation</a>
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Motion Graphics</a>
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Logo Design</a>
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Logo Animation</a>
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Digital Marketing</a>
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Graphic Design</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📧</span>
          <a href="mailto:mp2animationstudio@gmail.com">mp2animationstudio@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <a href="tel:+918610759752">+91 8610759752</a>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span>244, Manapparai,<br>Trichy Dist. 621-312</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">🕐</span>
          <span>Mon–Sat, 9AM–7PM IST</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 <span class="footer-bottom-red">MP2 Animation Studio</span>. All rights reserved.</span>
      <span>Crafted with ❤️ & <span class="footer-bottom-red">passion</span></span>
    </div>
  </footer>
</div><!-- end page-home -->


<!-- ========================== -->
<!-- ===== SERVICES PAGE ===== -->
<!-- ========================== -->
<div id="page-services" class="page">
  <div class="page-hero">
    <div class="page-hero-content">
      <div class="section-label">What We Offer</div>
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">Our <em>Creative</em> Services</h1>
      <p class="section-sub" style="margin-bottom:0;">Premium animation, design, and digital services tailored for ambitious brands.</p>
    </div>
  </div>

  <section class="section">
    <div class="services-full-grid">
      <!-- 2D Animation -->
      <div class="service-full-card reveal">
        <div class="service-full-icon">🎞️</div>
        <h3>2D Animation</h3>
        <p>Professional frame-by-frame and rigged 2D animation for explainer videos, brand films, educational content, social media, and more. We bring characters and stories to life with fluid, expressive motion.</p>
        <div class="service-benefits">
          <div class="service-benefit">Character design & rigging for any style</div>
          <div class="service-benefit">Frame-by-frame or digital puppet animation</div>
          <div class="service-benefit">Storyboarding & animatics included</div>
          <div class="service-benefit">Custom music & voiceover integration</div>
          <div class="service-benefit">Multi-format delivery (MP4, MOV, GIF)</div>
        </div>
        <div class="service-preview-area"><img src="/services/1.png" alt="2D Animation preview"></div>
      </div>

      <!-- Motion Graphics -->
      <div class="service-full-card reveal reveal-delay-1">
        <div class="service-full-icon">✨</div>
        <h3>Motion Graphics</h3>
        <p>Dynamic visual communication through typography, icons, and abstract motion. Perfect for product launches, data visualization, YouTube intros, broadcast packages, and brand campaigns.</p>
        <div class="service-benefits">
          <div class="service-benefit">Kinetic typography & icon animation</div>
          <div class="service-benefit">UI/UX demo animations</div>
          <div class="service-benefit">Broadcast-ready quality (1080p / 4K)</div>
          <div class="service-benefit">Social media format optimization</div>
          <div class="service-benefit">After Effects source files available</div>
        </div>
        <div class="service-preview-area"><img src="/services/2.png" alt="Motion Graphics preview"></div>
      </div>

      <!-- Logo Designing -->
      <div class="service-full-card reveal">
        <div class="service-full-icon">💎</div>
        <h3>Logo Designing</h3>
        <p>Iconic, timeless brand marks crafted with intentional symbolism and aesthetic precision. We deliver logos that communicate your brand's essence at a glance and stand the test of time.</p>
        <div class="service-benefits">
          <div class="service-benefit">3 initial concepts with unlimited revisions</div>
          <div class="service-benefit">Vector files (AI, EPS, SVG, PDF)</div>
          <div class="service-benefit">Full color, black, and reversed variants</div>
          <div class="service-benefit">Brand usage guidelines included</div>
          <div class="service-benefit">Favicon & social media sizes</div>
        </div>
        <div class="service-preview-area"><img src="/services/3.png" alt="Logo Designing preview"></div>
      </div>

      <!-- Logo Animation -->
      <div class="service-full-card reveal reveal-delay-1">
        <div class="service-full-icon">🌀</div>
        <h3>Logo Animation</h3>
        <p>Cinematic logo reveals and animated idents that make an unforgettable first impression. From subtle elegance to dramatic reveals — we animate your brand with purpose and precision.</p>
        <div class="service-benefits">
          <div class="service-benefit">Custom reveal animation (5–10 sec)</div>
          <div class="service-benefit">Loop & static versions included</div>
          <div class="service-benefit">Transparent background (MOV/WebM)</div>
          <div class="service-benefit">Sound design & audio sting option</div>
          <div class="service-benefit">YouTube, broadcast & social versions</div>
        </div>
        <div class="service-preview-area"><img src="/services/4.png" alt="Logo Animation preview"></div>
      </div>

      <!-- Digital Marketing -->
      <div class="service-full-card reveal">
        <div class="service-full-icon">📣</div>
        <h3>Digital Marketing</h3>
        <p>Creative-first digital marketing powered by animation. We produce scroll-stopping animated ad creatives, social content, and campaign videos that drive real engagement and measurable results.</p>
        <div class="service-benefits">
          <div class="service-benefit">Animated social media content packs</div>
          <div class="service-benefit">Video ad creatives (Meta, YouTube, TikTok)</div>
          <div class="service-benefit">Promotional reels & stories</div>
          <div class="service-benefit">Campaign strategy & content calendar</div>
          <div class="service-benefit">A/B test variant production</div>
        </div>
        <div class="service-preview-area"><img src="/services/5.png" alt="Digital Marketing preview"></div>
      </div>

      <!-- Graphic Designing -->
      <div class="service-full-card reveal reveal-delay-1">
        <div class="service-full-icon">🖼️</div>
        <h3>Graphic Designing</h3>
        <p>Premium visual communication through strategic graphic design. From brand collateral to campaign assets, we create visuals that communicate clearly and leave a lasting impression.</p>
        <div class="service-benefits">
          <div class="service-benefit">Brand identity systems & style guides</div>
          <div class="service-benefit">Marketing materials & print design</div>
          <div class="service-benefit">Social media templates & banners</div>
          <div class="service-benefit">Presentation design (pitch decks)</div>
          <div class="service-benefit">Packaging & merchandise design</div>
        </div>
        <div class="service-preview-area"><img src="/services/6.png" alt="Graphic Designing preview"></div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <div class="services-cta-section">
    <h2>Ready to Start Your Project?</h2>
    <p>Let's discuss your vision and craft something extraordinary together. Get a free consultation today.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;">
      <a class="btn-primary" href="#" onclick="navigateTo('contact');return false;">Get a Free Quote →</a>
      <a class="wa-btn" href="https://wa.me/918610759752" target="_blank">
        💬 WhatsApp Us Now
      </a>
    </div>
  </div>

  <!-- Reuse footer from home (rendered via JS) -->
  <div id="services-footer"></div>
</div><!-- end page-services -->


<!-- ========================= -->
<!-- ===== WORKS PAGE ===== -->
<!-- ========================= -->
<div id="page-works" class="page">
  <div class="page-hero">
    <div class="page-hero-content">
      <div class="section-label">Portfolio</div>
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">Our <em>Creative</em> Works</h1>
      <p class="section-sub" style="margin-bottom:0;">Explore a curated showcase of animation, branding, and digital design projects.</p>
    </div>
  </div>

  <section class="section">
    <div class="works-filters">
      <button class="filter-btn active" onclick="filterWorks(this,'all')">All Projects</button>
      <button class="filter-btn" onclick="filterWorks(this,'animation')">2D Animation</button>
      <button class="filter-btn" onclick="filterWorks(this,'motion')">Motion Graphics</button>
      <button class="filter-btn" onclick="filterWorks(this,'logo')">Logo Animation</button>
      <button class="filter-btn" onclick="filterWorks(this,'branding')">Branding</button>
      <button class="filter-btn" onclick="filterWorks(this,'marketing')">Digital Marketing</button>
    </div>

    <div class="portfolio-grid" id="portfolio-grid">
      <div class="portfolio-card reveal" data-cat="animation">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><video src="/works/adventure-preview.mp4" autoplay muted loop playsinline></video></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">2D Animation</div>
          <h3>Adventure Sequence Preview</h3>
          <p>Character-driven animated scene focused on energy, motion, and cinematic environment design.</p>
        </div>
      </div>
      <div class="portfolio-card reveal reveal-delay-1" data-cat="motion">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><img src="/works/motion-ui-play.png" alt="Motion graphics interface"></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">Motion Graphics</div>
          <h3>Motion UI Control Frame</h3>
          <p>Broadcast-style motion graphics composition built around play-state UI and red neon system visuals.</p>
        </div>
      </div>
      <div class="portfolio-card reveal reveal-delay-2" data-cat="logo">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><video src="/works/mp2-logo-animation.mp4" autoplay muted loop playsinline></video></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">Logo Animation</div>
          <h3>MP2 Logo Animation</h3>
          <p>Looping animated reveal for the MP2 identity with high-contrast motion and glowing red accents.</p>
        </div>
      </div>
      <div class="portfolio-card reveal" data-cat="branding">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><img src="/works/new-thevars-logo.png" alt="New Thevars logo"></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">Branding</div>
          <h3>New Thevars Brand Crest</h3>
          <p>Luxury hospitality-style identity design with a crest mark, heritage cues, and premium gold finish.</p>
        </div>
      </div>
      <div class="portfolio-card reveal reveal-delay-1" data-cat="marketing">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><img src="/works/marketing-dashboard.png" alt="Marketing dashboard and social media visuals"></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">Digital Marketing</div>
          <h3>Social Campaign Dashboard</h3>
          <p>Performance-focused creative concept blending analytics, platform branding, and social content visuals.</p>
        </div>
      </div>
      <div class="portfolio-card reveal reveal-delay-2" data-cat="animation">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><img src="/works/works-collage.png" alt="Creative project collage"></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">2D Animation</div>
          <h3>Multi-Scene Animation Board</h3>
          <p>Composite artwork showing multiple animation directions, visual themes, and motion-design frames.</p>
        </div>
      </div>
      <div class="portfolio-card reveal" data-cat="motion">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><img src="/works/brand-logo-fire.png" alt="Glowing red brand emblem"></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">Motion Graphics</div>
          <h3>Energy Pulse Brand Frame</h3>
          <p>High-intensity motion keyframe concept built around emissive logo energy and particle impact.</p>
        </div>
      </div>
      <div class="portfolio-card reveal reveal-delay-1" data-cat="logo">
        <div class="portfolio-thumb">
          <div class="portfolio-thumb-bg"><video src="/works/new-thevars-animation.mp4" autoplay muted loop playsinline></video></div>
          <div class="portfolio-thumb-btn">▶ Watch Project</div>
        </div>
        <div class="portfolio-info">
          <div class="portfolio-cat">Logo Animation</div>
          <h3>New Thevars Logo Animation</h3>
          <p>Animated logo reveal sequence for the New Thevars identity, tailored for premium hospitality branding.</p>
        </div>
      </div>
    </div>
  </section>

  <div id="works-footer"></div>
</div><!-- end page-works -->


<!-- ========================= -->
<!-- ===== ABOUT PAGE ===== -->
<!-- ========================= -->
<div id="page-about" class="page">
  <div class="page-hero">
    <div class="page-hero-content">
      <div class="section-label">Our Story</div>
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">About <em>MP2</em> Studio</h1>
      <p class="section-sub" style="margin-bottom:0;">A passionate team of animators and designers committed to visual excellence since 2021.</p>
    </div>
  </div>

  <!-- INTRO GRID -->
  <div class="about-intro-grid">
    <div class="about-visual reveal">
      <div class="about-visual-main">
        <img class="about-logo-big" src="/works/poun.png" alt="MP2 team portrait">
      </div>
      <div class="about-accent-card">
        <div class="about-accent-num" data-count="2.5" data-suffix="+">2.5+</div>
        <div class="about-accent-label">Years of Excellence</div>
      </div>
    </div>
    <div class="about-copy reveal reveal-delay-1">
      <div class="section-label">Who We Are</div>
      <h2 class="section-title">More Than a Studio —<br><em>Your Creative Partner</em></h2>
      <p>
        Founded in 2021, MP2 Animation Studio was born from a shared belief: that powerful visuals
        have the ability to change how people feel about a brand. What started as a two-person motion
        graphics team has grown into a full-service creative studio trusted by brands across India and beyond.
      </p>
      <p>
        Today, our team of animators, designers, directors, and strategists collaborate under one roof
        to deliver end-to-end creative solutions — from brand identity and logo design to cinematic
        animations and digital marketing campaigns.
      </p>
      <p style="margin-bottom:1.6rem;">
        We don't just execute briefs — we ask the right questions, push creative boundaries, and deliver
        work that makes our clients proud. Every project is an opportunity to create something that
        matters, and we treat it that way.
      </p>
      <a class="btn-primary" href="#" onclick="navigateTo('contact');return false;">Work With Us →</a>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats-row">
    <div class="stat-box reveal">
      <div class="stat-box-num" data-count="150" data-suffix="+">150+</div>
      <div class="stat-box-label">Projects Completed</div>
    </div>
    <div class="stat-box reveal reveal-delay-1">
      <div class="stat-box-num" data-count="80" data-suffix="+">80+</div>
      <div class="stat-box-label">Happy Clients</div>
    </div>
    <div class="stat-box reveal reveal-delay-2">
      <div class="stat-box-num" data-count="12" data-suffix="+">12+</div>
      <div class="stat-box-label">Team Members</div>
    </div>
    <div class="stat-box reveal reveal-delay-3">
      <div class="stat-box-num" data-count="98" data-suffix="%">98%</div>
      <div class="stat-box-label">Client Satisfaction</div>
    </div>
  </div>

  <!-- MISSION & VISION -->
  <div class="mission-vision" style="padding:0 5% 60px;">
    <div class="mv-card mv-card-mission reveal">
      <div class="mv-card-icon">🎯</div>
      <h3>Our Mission</h3>
      <p>To empower brands through exceptional visual storytelling — delivering animations and designs that forge genuine connections between businesses and their audiences. We exist to make great creative accessible, impactful, and transformative.</p>
    </div>
    <div class="mv-card mv-card-vision reveal reveal-delay-1">
      <div class="mv-card-icon">🔭</div>
      <h3>Our Vision</h3>
      <p>To become the most trusted animation and creative studio in South Asia — known not just for the quality of our work, but for the strength of our partnerships. We envision a world where every brand has access to cinematic-quality creative content.</p>
    </div>
  </div>

  <!-- WORKFLOW -->
  <div class="workflow-section">
    <div class="section-label reveal">Our Process</div>
    <h2 class="section-title reveal reveal-delay-1">How We <em>Work</em></h2>
    <div class="workflow-steps">
      <div class="workflow-step reveal">
        <div class="workflow-step-circle">01</div>
        <h4>Discovery</h4>
        <p>We deep-dive into your brand, goals, and audience to define the creative direction.</p>
      </div>
      <div class="workflow-step reveal reveal-delay-1">
        <div class="workflow-step-circle">02</div>
        <h4>Strategy</h4>
        <p>Script, storyboard, and concept development aligned with your objectives.</p>
      </div>
      <div class="workflow-step reveal reveal-delay-2">
        <div class="workflow-step-circle">03</div>
        <h4>Design</h4>
        <p>Visual style frames, character designs, and motion tests for your approval.</p>
      </div>
      <div class="workflow-step reveal reveal-delay-3">
        <div class="workflow-step-circle">04</div>
        <h4>Production</h4>
        <p>Full animation and design production with progress updates at every stage.</p>
      </div>
      <div class="workflow-step reveal reveal-delay-4">
        <div class="workflow-step-circle">05</div>
        <h4>Delivery</h4>
        <p>Final files exported and delivered across all required formats and platforms.</p>
      </div>
    </div>
  </div>

  <!-- TEAM -->
  <section class="section" style="padding-top:0;">
    <div class="section-label reveal">The People</div>
    <h2 class="section-title reveal reveal-delay-1">Meet Our <em>Creative Team</em></h2>
    <div class="team-grid" style="margin-top:2rem;">
      <div class="team-card reveal">
        <div class="team-avatar">V</div>
        <div class="team-name">Vijai D</div>
        <div class="team-role">Content Creator</div>
      </div>
      <div class="team-card reveal reveal-delay-1">
        <div class="team-avatar">K</div>
        <div class="team-name">Kamalesh B</div>
        <div class="team-role">Graphics Designer</div>
      </div>
      <div class="team-card reveal reveal-delay-2">
        <div class="team-avatar">A</div>
        <div class="team-name">Abisheck Pandiyan R</div>
        <div class="team-role">Video Editor</div>
      </div>
    </div>
  </section>

  <!-- Why Trust Us -->
  <section style="padding:0 5% 80px;">
    <div class="section-label reveal">Why Trust Us</div>
    <h2 class="section-title reveal reveal-delay-1">Why Clients <em>Choose</em> MP2</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:2rem;" class="trust-grid">
      <div class="glass" style="padding:30px 24px;" class="reveal">
        <div style="font-size:1.8rem;margin-bottom:14px;">🤝</div>
        <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:8px;">True Partnership</h4>
        <p style="font-size:0.8rem;color:var(--white-dim);line-height:1.7;">We embed ourselves in your brand's world, not just your brief. Our clients aren't just projects — they're long-term creative relationships.</p>
      </div>
      <div class="glass" style="padding:30px 24px;">
        <div style="font-size:1.8rem;margin-bottom:14px;">🔒</div>
        <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:8px;">100% Ownership</h4>
        <p style="font-size:0.8rem;color:var(--white-dim);line-height:1.7;">You own everything we create. Full IP transfer on all projects — source files, assets, and rights — delivered with every package.</p>
      </div>
      <div class="glass" style="padding:30px 24px;">
        <div style="font-size:1.8rem;margin-bottom:14px;">💬</div>
        <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:8px;">Transparent Process</h4>
        <p style="font-size:0.8rem;color:var(--white-dim);line-height:1.7;">No hidden costs. No surprises. Clear milestones, regular previews, and open communication from day one to final delivery.</p>
      </div>
    </div>
  </section>

  <div id="about-footer"></div>
</div><!-- end page-about -->


<!-- ========================== -->
<!-- ===== CONTACT PAGE ===== -->
<!-- ========================== -->
<div id="page-contact" class="page">
  <div class="page-hero">
    <div class="page-hero-content">
      <div class="section-label">Get In Touch</div>
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">Let's Create <em>Something</em><br>Extraordinary</h1>
      <p class="section-sub" style="margin-bottom:0;">Ready to bring your story to life? We'd love to hear about your project.</p>
    </div>
  </div>

  <div class="contact-grid">
    <!-- Contact Info -->
    <div class="contact-info-panel reveal">
      <div class="section-label">Reach Us</div>
      <h2 class="section-title" style="font-size:1.8rem;margin-bottom:1.5rem;">Contact <em>Information</em></h2>

      <div class="contact-info-item">
        <div class="contact-info-icon">📧</div>
        <div>
          <h4>Email Us</h4>
          <p>mp2animationstudio@gmail.com</p>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">📞</div>
        <div>
          <h4>Call Us</h4>
          <p>+91 8610759752</p>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">📍</div>
        <div>
          <h4>Studio Location</h4>
          <p>244, Manapparai, Trichy Dist. 621-312</p>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">🕐</div>
        <div>
          <h4>Business Hours</h4>
          <p>Monday – Saturday: 9:00 AM – 7:00 PM IST<br>Sunday: By appointment only</p>
        </div>
      </div>

      <div class="contact-socials">
        <a class="social-pill" href="https://www.instagram.com/mp2animationstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">&#128247; Instagram</a>
        <a class="social-pill" href="https://www.linkedin.com/company/119464012/admin/notifications/all/" target="_blank">&#128188; LinkedIn</a>
        <a class="social-pill" href="https://www.facebook.com/search/top/?q=MP2%20Animation%20Studio" target="_blank">&#128101; Facebook</a>
        <a class="social-pill" href="https://wa.me/918610759752" target="_blank">&#128172; WhatsApp</a>
      </div>

      <div class="map-placeholder">
        <iframe
          title="MP2 Animation Studio location"
          src="https://www.google.com/maps?q=244%20Manapparai%2C%20Trichy%20Dist%20621-312&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <a class="social-pill" href="https://maps.app.goo.gl/x8EtuEj4t6UGy1PH6" target="_blank" style="margin-top:12px;display:inline-flex;">Open Exact Location</a>
    </div>

    <!-- Contact Form -->
    <div class="contact-form-panel reveal reveal-delay-1">
      <div class="contact-form" id="contact-form-wrap">
        <h3>Start a Project</h3>
        <p class="contact-form-sub">Fill out the form below and we'll get back to you within 24 hours.</p>

        <div id="form-content">
          <div class="form-row">
            <div class="form-group">
              <label>Your Name *</label>
              <input type="text" id="f-name" placeholder="John Smith" required>
            </div>
            <div class="form-group">
              <label>Email Address *</label>
              <input type="email" id="f-email" placeholder="john@company.com" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" id="f-phone" placeholder="+91 8610759752">
            </div>
            <div class="form-group">
              <label>Project Type *</label>
              <select id="f-type">
                <option value="">Select service...</option>
                <option>2D Animation</option>
                <option>Motion Graphics</option>
                <option>Logo Designing</option>
                <option>Logo Animation</option>
                <option>Digital Marketing</option>
                <option>Graphic Designing</option>
                <option>Full Branding Package</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Tell Us About Your Project *</label>
            <textarea id="f-message" placeholder="Describe your project, goals, timeline, and any specific requirements..."></textarea>
          </div>
          <button class="btn-primary" style="width:100%;justify-content:center;" onclick="submitForm()">
            Send Message ✦
          </button>
        </div>

        <div class="form-success" id="form-success">
          <div class="form-success-icon">🎬</div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. Our team will review your project and get back to you within 24 hours.<br><br>Meanwhile, feel free to WhatsApp us for a quicker response.</p>
          <br>
          <a class="wa-btn" href="https://wa.me/918610759752" target="_blank" style="display:inline-flex;margin-top:8px;">
            💬 Continue on WhatsApp
          </a>
        </div>
      </div>

      <!-- WhatsApp CTA -->
      <div style="margin-top:24px;padding:28px;border-radius:12px;background:rgba(37,211,102,0.07);border:1px solid rgba(37,211,102,0.2);display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
        <div style="font-size:2.5rem;">💬</div>
        <div style="flex:1;min-width:180px;">
          <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:4px;">Prefer WhatsApp?</h4>
          <p style="font-size:0.8rem;color:var(--white-dim);">Get a faster response directly through WhatsApp chat.</p>
        </div>
        <a class="wa-btn" href="https://wa.me/918610759752" target="_blank">Chat Now →</a>
      </div>
    </div>
  </div>

  <div id="contact-footer"></div>
</div><!-- end page-contact -->


<script>
// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
});

const interactiveEls = 'a,button,[onclick]';
document.addEventListener('mouseover', e => {
  if(e.target.closest(interactiveEls)) document.body.classList.add('cursor-hover');
});
document.addEventListener('mouseout', e => {
  if(e.target.closest(interactiveEls)) document.body.classList.remove('cursor-hover');
});

function animCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
  requestAnimationFrame(animCursor);
}
animCursor();

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ===== MOBILE NAV =====
function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

// ===== PAGE NAVIGATION =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    initReveal();
    initCounts(page);
  }, 100);
  // Close mobile nav
  document.getElementById('mobile-nav').classList.remove('open');
}

// ===== SCROLL REVEAL =====
function animateCount(el) {
  if(!el || el.dataset.animated === 'true') return;
  const target = Number(el.dataset.count || '0');
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();
  el.dataset.animated = 'true';

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function resetCounts(page = currentPage()) {
  document.querySelectorAll('#page-' + page + ' [data-count]').forEach(el => {
    el.dataset.animated = 'false';
    el.textContent = '0' + (el.dataset.suffix || '');
  });
}

function initCounts(page = currentPage()) {
  const countEls = document.querySelectorAll('#page-' + page + ' [data-count]');
  if(!countEls.length) return;

  resetCounts(page);

  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  countEls.forEach(el => countObserver.observe(el));
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        if(e.target.dataset.count) animateCount(e.target);
        e.target.querySelectorAll?.('[data-count]').forEach(animateCount);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('#page-' + currentPage() + ' .reveal').forEach(el => {
    observer.observe(el);
  });
  document.querySelectorAll('#page-' + currentPage() + ' [data-count]').forEach(el => {
    observer.observe(el);
  });
}

function currentPage() {
  const active = document.querySelector('.page.active');
  return active ? active.id.replace('page-','') : 'home';
}

// Run reveal on load
setTimeout(initReveal, 200);
setTimeout(() => initCounts(), 220);

// ===== FAQ ACCORDION =====
function toggleFaq(questionEl) {
  const item = questionEl.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

// ===== PORTFOLIO FILTER =====
function filterWorks(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
    if(show) {
      card.style.animation = 'pageIn 0.5s var(--ease) both';
    }
  });
}

// ===== CONTACT FORM =====
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const type = document.getElementById('f-type').value;
  const msg = document.getElementById('f-message').value.trim();

  if(!name || !email || !type || !msg) {
    alert('Please fill in all required fields.');
    return;
  }

  document.getElementById('form-content').style.display = 'none';
  document.getElementById('form-success').classList.add('show');
}

// ===== INJECT FOOTER TO SUBPAGES =====
function injectFooters() {
  const footerHTML = document.querySelector('#page-home footer').outerHTML;
  ['services-footer','works-footer','about-footer','contact-footer'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.innerHTML = footerHTML;
  });
}
document.addEventListener('DOMContentLoaded', injectFooters);

// Trigger initial reveal
window.addEventListener('load', () => {
  setTimeout(initReveal, 300);
});
</script>
</body>
</html>
