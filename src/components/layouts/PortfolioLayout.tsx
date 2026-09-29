import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Grid,
  Layers,
  MapPin,
  Sparkles,
  X,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'architecture' | 'object' | 'spatial';
  year: string;
  location: string;
  client: string;
  aspect: string;
  description: string;
  specs: string[];
}

export const PortfolioLayout: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'architecture' | 'object' | 'spatial'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'proj-01',
      title: 'Nordic Light Pavilion',
      category: 'architecture',
      year: '2026',
      location: 'Stockholm, Sweden',
      client: 'Västerås Culture Foundation',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/9]',
      description: 'A monolithic timber pavilion utilizing cross-laminated spruce and diffused clerestory fenestration to harvest low-angle winter sunlight.',
      specs: ['1,420 m² Footprint', 'Zero-Carbon Certified', 'Glulam Structural Frame'],
    },
    {
      id: 'proj-02',
      title: 'Kinetic Resonator Dial',
      category: 'object',
      year: '2025',
      location: 'Zurich, Switzerland',
      client: 'Horology Atelier',
      aspect: 'col-span-1 aspect-square',
      description: 'Hand-finished timekeeper milled from single-billet aerospace titanium with custom escapement geometry.',
      specs: ['Grade 5 Titanium', '42-hour Power Reserve', 'Sapphire Glass'],
    },
    {
      id: 'proj-03',
      title: 'Kyoto Sanctuary Courtyard',
      category: 'spatial',
      year: '2026',
      location: 'Kyoto, Japan',
      client: 'Private Residence',
      aspect: 'col-span-1 aspect-square',
      description: 'A minimalist dry-stone meditation garden flanked by charred cedar colonnades and sound-dampening basalt pools.',
      specs: ['Basalt & River Granite', 'Yakisugi Charred Cedar', 'Hidden Drainage Mesh'],
    },
    {
      id: 'proj-04',
      title: 'Archive for Contemporary Drawing',
      category: 'architecture',
      year: '2025',
      location: 'Munich, Germany',
      client: 'Bavarian Arts Council',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/9]',
      description: 'Climate-controlled archival vaults integrated seamlessly into subterranean limestone bedrock with public glass exhibition chambers above.',
      specs: ['Subterranean Geo-Cooling', 'Reinforced White Travertine', 'UV-Filtering Glazing'],
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[900px] select-none">
      {/* Portfolio Header */}
      <header className="border-b border-zinc-200/80 px-8 py-5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest uppercase text-zinc-900">
            Studio Claesson & Partners
          </span>
          <span className="text-zinc-300">/</span>
          <span className="text-xs text-zinc-500 font-mono">Stockholm · Zurich</span>
        </div>

        {/* Categories as clean typography */}
        <nav className="flex items-center gap-6 text-xs font-medium text-zinc-600">
          {(['all', 'architecture', 'object', 'spatial'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`capitalize transition-colors ${
                activeFilter === cat
                  ? 'text-zinc-900 font-bold border-b-2 border-zinc-900 pb-0.5'
                  : 'hover:text-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Intro Editorial Strip */}
      <section className="max-w-6xl mx-auto px-8 pt-14 pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 max-w-3xl leading-[1.15]">
          Architecture rooted in permanence, light, and reduction.
        </h1>
        <div className="flex items-center gap-6 text-xs text-zinc-500 font-mono mt-4">
          <span>14 Active Commissions</span>
          <span className="text-zinc-300">·</span>
          <span>Mies Crown Hall Nominee</span>
          <span className="text-zinc-300">·</span>
          <span>Monograph Available</span>
        </div>
      </section>

      {/* Project Exhibition Grid */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`${proj.aspect} group border border-zinc-200/80 rounded-2xl p-6 bg-zinc-50/50 hover:bg-zinc-100/60 hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between cursor-pointer`}
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="uppercase tracking-wider">{proj.category}</span>
                <span>{proj.year}</span>
              </div>

              {/* Minimal wireframe canvas preview */}
              <div className="my-auto text-center py-6">
                <div className="text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  {proj.title}
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-1 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200/70 text-xs">
                <span className="text-zinc-500 font-mono text-[11px]">{proj.client}</span>
                <span className="flex items-center gap-1 font-semibold text-zinc-900 group-hover:translate-x-0.5 transition-transform">
                  <span>View Monograph</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/25 backdrop-blur-xs"
          ></div>
          <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between pb-4 border-b border-zinc-200">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h2 className="text-2xl font-bold text-zinc-900">
                  {selectedProject.title}
                </h2>
                <div className="text-xs text-zinc-500 font-mono mt-1">
                  {selectedProject.location} — Client: {selectedProject.client}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6">
              <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
                Architectural Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-zinc-100">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
