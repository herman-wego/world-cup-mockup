import { useState } from "react";
import { MapPin, Plane, Hotel, Calendar, Clock, Trophy, ChevronRight, Globe, Shield, Ticket, Users, Star, ArrowRight } from "lucide-react";

// Color constants matching Wego brand
const COLORS = {
  wegoGreen: "#5CC64C",
  darkGreen: "#3A8F2E",
  navy: "#1A1F36",
  white: "#FFFFFF",
  lightGray: "#F5F7FA",
  medGray: "#E8ECF1",
  darkText: "#1A1F36",
  subText: "#6B7280",
  accent: "#8B1538", // World Cup deep red accent
  gold: "#D4A843",
};

// ─── HERO SECTION ────────────────────────────────────────────
function HeroSection() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, #2D1B4E 50%, ${COLORS.accent} 100%)`,
        minHeight: 420,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 w-32 h-32 rounded-full border-2 border-white" />
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full border border-white" />
        <div className="absolute bottom-12 left-1/3 w-24 h-24 rounded-full border border-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white bg-opacity-15 rounded-full px-4 py-1.5 mb-6">
          <Trophy size={16} color={COLORS.gold} />
          <span className="text-white text-sm font-medium">
            11 June - 19 July 2026
          </span>
        </div>

        <h1 className="text-5xl font-bold text-white leading-tight mb-4">
          FIFA World Cup 2026
        </h1>
        <p className="text-xl text-white text-opacity-90 mb-2">
          USA &middot; Mexico &middot; Canada
        </p>
        <p className="text-base text-white text-opacity-70 max-w-2xl mx-auto">
          Book flights and hotels to 16 host cities across 3 countries. The
          biggest World Cup ever — 48 teams, 104 matches.
        </p>
      </div>
    </div>
  );
}

// ─── SEARCH FORM (placeholder representation) ────────────────
function SearchForm() {
  const [tab, setTab] = useState("flights");
  return (
    <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        {/* Tabs */}
        <div className="flex gap-1 mb-5">
          {["flights", "hotels"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                tab === t
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t === "flights" ? <Plane size={16} /> : <Hotel size={16} />}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Search fields */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="border border-gray-200 rounded-xl p-3">
            <div className="text-xs text-gray-400 mb-1">From</div>
            <div className="text-sm font-medium text-gray-800">
              Your city
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3">
            <div className="text-xs text-gray-400 mb-1">To</div>
            <div className="text-sm font-medium text-gray-400">
              Host city
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3">
            <div className="text-xs text-gray-400 mb-1">Depart</div>
            <div className="text-sm font-medium text-gray-400">
              Select date
            </div>
          </div>
          <button
            className="text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-base"
            style={{ backgroundColor: COLORS.wegoGreen }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── KEY INFO STRIP ─────────────────────────────────────────
function KeyInfoStrip() {
  const items = [
    { icon: <Calendar size={20} />, label: "11 Jun - 19 Jul", sub: "39 days" },
    { icon: <Globe size={20} />, label: "3 Countries", sub: "16 cities" },
    { icon: <Users size={20} />, label: "48 Teams", sub: "12 groups" },
    { icon: <Trophy size={20} />, label: "104 Matches", sub: "First expanded WC" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#EEF7ED", color: COLORS.darkGreen }}
            >
              {item.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                {item.label}
              </div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HOST CITIES SECTION ────────────────────────────────────
function HostCitiesSection() {
  const cities = [
    { city: "New York / New Jersey", country: "USA", flag: "🇺🇸", tag: "FINAL", venue: "MetLife Stadium", tagColor: COLORS.gold },
    { city: "Mexico City", country: "Mexico", flag: "🇲🇽", tag: "OPENING", venue: "Estadio Azteca", tagColor: COLORS.accent },
    { city: "Los Angeles", country: "USA", flag: "🇺🇸", tag: null, venue: "SoFi Stadium" },
    { city: "Miami", country: "USA", flag: "🇺🇸", tag: null, venue: "Hard Rock Stadium" },
    { city: "Toronto", country: "Canada", flag: "🇨🇦", tag: null, venue: "BMO Field" },
    { city: "Dallas", country: "USA", flag: "🇺🇸", tag: null, venue: "AT&T Stadium" },
    { city: "Atlanta", country: "USA", flag: "🇺🇸", tag: null, venue: "Mercedes-Benz Stadium" },
    { city: "Houston", country: "USA", flag: "🇺🇸", tag: null, venue: "NRG Stadium" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mt-14">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Host Cities</h2>
          <p className="text-sm text-gray-500 mt-1">
            16 cities across the USA, Mexico, and Canada
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium" style={{ color: COLORS.wegoGreen }}>
          View all 16 cities <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cities.map((c, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* City image placeholder */}
            <div
              className="h-28 relative"
              style={{
                background: `linear-gradient(135deg, ${
                  c.country === "Mexico"
                    ? "#006847"
                    : c.country === "Canada"
                    ? "#FF0000"
                    : "#002868"
                }22, ${
                  c.country === "Mexico"
                    ? "#CE1126"
                    : c.country === "Canada"
                    ? "#FF0000"
                    : "#BF0A30"
                }33)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">{c.flag}</span>
              </div>
              {c.tag && (
                <div
                  className="absolute top-2 right-2 text-white text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: c.tagColor }}
                >
                  {c.tag}
                </div>
              )}
            </div>
            <div className="p-3">
              <div className="font-semibold text-sm text-gray-900">
                {c.city}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{c.venue}</div>
              <div className="flex items-center gap-1 mt-2 text-xs font-medium" style={{ color: COLORS.wegoGreen }}>
                <Plane size={12} /> Search flights
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── VISA GUIDE SECTION ─────────────────────────────────────
function VisaGuideSection() {
  const guides = [
    {
      country: "United States",
      flag: "🇺🇸",
      desc: "B1/B2 tourist visa or ESTA for eligible nationalities. Apply early — processing times are long.",
      cta: "US Visa Guide",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      desc: "eTA for visa-exempt nationalities, or visitor visa. Special FIFA fan provisions may apply.",
      cta: "Canada Visa Guide",
    },
    {
      country: "Mexico",
      flag: "🇲🇽",
      desc: "Tourist visa or visa-free entry for many nationalities. Check if you need a Forma Migratoria.",
      cta: "Mexico Visa Guide",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mt-14">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "#FEF3E2", color: "#D97706" }}
        >
          <Shield size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Visa Guides</h2>
          <p className="text-sm text-gray-500">
            Entry requirements for the 3 host countries
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {guides.map((g, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">{g.flag}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{g.country}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {g.desc}
            </p>
            <button
              className="flex items-center gap-1 text-sm font-medium"
              style={{ color: COLORS.wegoGreen }}
            >
              {g.cta} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── KEY DATES / SCHEDULE OVERVIEW ──────────────────────────
function ScheduleSection() {
  const phases = [
    {
      phase: "Group Stage",
      dates: "11 June - 29 June",
      detail: "48 teams in 12 groups of 4. Top 2 + best 8 third-placed teams advance.",
      matches: "72 matches",
    },
    {
      phase: "Round of 32",
      dates: "30 June - 3 July",
      detail: "New knockout round introduced for the expanded 48-team format.",
      matches: "16 matches",
    },
    {
      phase: "Round of 16",
      dates: "4 - 7 July",
      detail: "The classic knockout stage begins. Single elimination.",
      matches: "8 matches",
    },
    {
      phase: "Quarter-Finals",
      dates: "8 - 10 July",
      detail: "The final 8 teams compete for a place in the semis.",
      matches: "4 matches",
    },
    {
      phase: "Semi-Finals",
      dates: "13 - 14 July",
      detail: "Penultimate stage at marquee US venues.",
      matches: "2 matches",
    },
    {
      phase: "Final",
      dates: "19 July",
      detail: "MetLife Stadium, New York / New Jersey.",
      matches: "1 match",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mt-14">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "#EDE9FE", color: "#7C3AED" }}
        >
          <Clock size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Tournament Schedule
          </h2>
          <p className="text-sm text-gray-500">
            104 matches over 39 days
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`flex items-center gap-6 px-6 py-4 ${
              i < phases.length - 1 ? "border-b border-gray-100" : ""
            } ${p.phase === "Final" ? "bg-amber-50" : ""}`}
          >
            <div className="w-28 shrink-0">
              <div
                className={`text-sm font-bold ${
                  p.phase === "Final" ? "text-amber-700" : "text-gray-900"
                }`}
              >
                {p.phase}
              </div>
            </div>
            <div className="w-36 shrink-0 text-sm text-gray-600 font-medium">
              {p.dates}
            </div>
            <div className="flex-1 text-sm text-gray-500">{p.detail}</div>
            <div className="text-xs font-medium text-gray-400 shrink-0">
              {p.matches}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TRAVEL TIPS / ARTICLES SECTION ─────────────────────────
function ArticlesSection() {
  const articles = [
    {
      title: "World Cup 2026 Tickets: How to Buy, Prices & Tips",
      category: "Tickets",
      icon: <Ticket size={16} />,
    },
    {
      title: "Best Hotels Near World Cup Stadiums",
      category: "Hotels",
      icon: <Hotel size={16} />,
    },
    {
      title: "Getting Around: Flights Between Host Cities",
      category: "Transport",
      icon: <Plane size={16} />,
    },
    {
      title: "World Cup Fan Zones & Where to Watch",
      category: "Experience",
      icon: <Star size={16} />,
    },
    {
      title: "Travel Insurance for World Cup 2026",
      category: "Planning",
      icon: <Shield size={16} />,
    },
    {
      title: "Complete Match Schedule & Group Fixtures",
      category: "Schedule",
      icon: <Calendar size={16} />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mt-14">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            World Cup Travel Guides
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Everything you need to plan your World Cup trip
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium" style={{ color: COLORS.wegoGreen }}>
          View all articles <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {articles.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: COLORS.lightGray,
                  color: COLORS.subText,
                }}
              >
                {a.icon}
              </div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                {a.category}
              </span>
            </div>
            <h3 className="font-semibold text-sm text-gray-900 group-hover:text-green-600 transition-colors leading-snug">
              {a.title}
            </h3>
            <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: COLORS.wegoGreen }}>
              Read more <ArrowRight size={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── COUNTRIES PARTICIPATING (MENA Focus) ───────────────────
function MENATeamsSection() {
  const teams = [
    { name: "Saudi Arabia", flag: "🇸🇦", group: "Group H" },
    { name: "Qatar", flag: "🇶🇦", group: "Group A" },
    { name: "Morocco", flag: "🇲🇦", group: "Group F" },
    { name: "Egypt", flag: "🇪🇬", group: "Group I" },
    { name: "Iran", flag: "🇮🇷", group: "Group B" },
    { name: "Tunisia", flag: "🇹🇳", group: "Group K" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mt-14">
      <div
        className="rounded-2xl p-8"
        style={{
          background: `linear-gradient(135deg, ${COLORS.navy}, #2D1B4E)`,
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          MENA & South Asian Teams
        </h2>
        <p className="text-sm text-white text-opacity-70 mb-6">
          Cheer for the home region — multiple teams from our markets have
          qualified
        </p>
        <div className="grid grid-cols-6 gap-3">
          {teams.map((t, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-10 rounded-xl p-4 text-center hover:bg-opacity-20 transition-colors cursor-pointer"
            >
              <div className="text-3xl mb-2">{t.flag}</div>
              <div className="text-white text-sm font-semibold">{t.name}</div>
              <div className="text-white text-opacity-60 text-xs mt-1">
                {t.group}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-white bg-opacity-15 hover:bg-opacity-25 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors">
            Search flights for match days
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CTA BANNER ─────────────────────────────────────────────
function CTABanner() {
  return (
    <div className="max-w-5xl mx-auto px-6 mt-14 mb-16">
      <div
        className="rounded-2xl p-8 text-center"
        style={{ backgroundColor: "#EEF7ED" }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Planning Your World Cup Trip
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
          Compare flights and hotels across hundreds of providers. Book early
          for the best deals to the biggest sporting event of 2026.
        </p>
        <div className="flex justify-center gap-3">
          <button
            className="text-white font-semibold px-8 py-3 rounded-xl text-sm flex items-center gap-2"
            style={{ backgroundColor: COLORS.wegoGreen }}
          >
            <Plane size={16} /> Search Flights
          </button>
          <button className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-xl text-sm border border-gray-200 flex items-center gap-2">
            <Hotel size={16} /> Search Hotels
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE COMPONENT ────────────────────────────────────
export default function WorldCupLandingPage() {
  return (
    <div style={{ backgroundColor: COLORS.lightGray, minHeight: "100vh" }}>
      <HeroSection />
      <SearchForm />
      <KeyInfoStrip />
      <HostCitiesSection />
      <MENATeamsSection />
      <ScheduleSection />
      <VisaGuideSection />
      <ArticlesSection />
      <CTABanner />
    </div>
  );
}
