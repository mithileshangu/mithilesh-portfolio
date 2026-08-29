import React, { useState } from 'react';
import {
  Cpu,
  Server,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Globe,
  HardDrive,
  RefreshCw,
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  tech: string[];
  description: string;
  keyBenefits: string[];
}

export const EngineeringApproach: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('gateway');

  const architectureNodes: ArchitectureNode[] = [
    {
      id: 'clients',
      name: 'Client & Edge Layer',
      role: 'Global Delivery & Interaction',
      tech: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Cloudflare CDN'],
      description:
        'Single-page and server-rendered web applications delivering sub-second first-contentful paint, optimistic state updates, and accessible component architectures.',
      keyBenefits: [
        'Edge asset caching for instant international response',
        'Strict end-to-end TypeScript interface contracts',
        'Optimistic mutations with seamless rollback states',
      ],
    },
    {
      id: 'gateway',
      name: 'API Gateway & Ingress',
      role: 'Routing, Security & Rate-Limiting',
      tech: ['Envoy / NGINX', 'OAuth2 / JWT', 'Rate Limiting', 'gRPC-Web'],
      description:
        'Single entry point managing SSL termination, token authentication, dynamic traffic routing, and DDoS / burst protection before forwarding to downstream microservices.',
      keyBenefits: [
        'Centralized authentication & audit logging',
        'Sub-millisecond routing overhead with health checking',
        'Dynamic token verification and CORS enforcement',
      ],
    },
    {
      id: 'services',
      name: 'Application Services Tier',
      role: 'Business Logic & Real-Time Engines',
      tech: ['Node.js', 'Go', 'Express', 'WebSockets', 'REST & GraphQL'],
      description:
        'Stateless, horizontally scalable service containers implementing clean domain-driven design, transactional business logic, and concurrent event dispatchers.',
      keyBenefits: [
        'Stateless instances enabling instantaneous scale-out',
        'Concurrent request handling with async I/O pipelines',
        'Strict separation of concerns between domain logic and persistence',
      ],
    },
    {
      id: 'cache',
      name: 'Caching & Event Stream',
      role: 'Low-Latency Cache & Asynchronous Bus',
      tech: ['Redis', 'Apache Kafka', 'BullMQ', 'Pub/Sub'],
      description:
        'In-memory data store for sub-millisecond query caches, distributed locks, session persistence, and asynchronous worker queues for background compute tasks.',
      keyBenefits: [
        '95%+ cache hit ratio for heavy read queries',
        'Decoupled asynchronous worker processing for heavy jobs',
        'Real-time WebSocket event broadcasting',
      ],
    },
    {
      id: 'database',
      name: 'Persistence & Data Store',
      role: 'ACID Transactions & Analytical Storage',
      tech: ['PostgreSQL', 'TimescaleDB', 'Prisma / Drizzle', 'Cloud Storage'],
      description:
        'Resilient relational databases configured with index optimization, connection pooling, automated backups, and read replica distribution for analytical throughput.',
      keyBenefits: [
        'Strict ACID transaction safety and relation constraints',
        'Automated database migrations with rollbacks',
        'Read replica offloading for reporting and complex joins',
      ],
    },
  ];

  const activeNode =
    architectureNodes.find((n) => n.id === selectedNodeId) || architectureNodes[1];

  const engineeringPillars = [
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: 'Scalable Distributed Architectures',
      description:
        'Designing decoupled, stateless microservices that gracefully handle traffic spikes, failover scenarios, and distributed concurrency.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Low-Latency Performance',
      description:
        'Optimizing critical query paths, memory caching with Redis, and minimizing network roundtrips to consistently achieve sub-10ms P99 latencies.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Security & Reliability First',
      description:
        'Zero-trust API boundaries, encrypted environment management, defense against common web vulnerabilities, and automated health probing.',
    },
    {
      icon: <Workflow className="w-5 h-5 text-sky-400" />,
      title: 'Maintainability & Clean Craft',
      description:
        'Strict TypeScript type-safety from database to UI, clear modular boundaries, self-documenting code, and comprehensive automated test coverage.',
    },
  ];

  return (
    <section id="architecture" className="py-16 sm:py-20 bg-[#07080C] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING APPROACH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            System Architecture & Standards
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            How I architect resilient distributed systems, structure full-stack applications, and ensure continuous production reliability.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-3 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Flow Visualizer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-1">
                <Workflow className="w-3.5 h-3.5" />
                <span>INTERACTIVE SYSTEM PIPELINE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                End-to-End Request & Data Flow
              </h3>
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              Click a tier to inspect architectural details
            </div>
          </div>

          {/* Flow Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {architectureNodes.map((node, idx) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  id={`arch-node-${node.id}`}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-800/90 border-indigo-500/80 shadow-md ring-1 ring-indigo-500/30'
                      : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-center font-semibold">
                      {idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white truncate">{node.name}</div>
                    <div className="text-[10px] text-zinc-400 truncate mt-0.5">{node.role}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                    Stage {architectureNodes.findIndex((n) => n.id === activeNode.id) + 1}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400">{activeNode.role}</span>
                </div>
                <h4 className="text-lg font-bold text-white mt-1">{activeNode.name}</h4>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">{activeNode.description}</p>

            {/* Key Architectural Outcomes */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Key Architectural Outcomes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeNode.keyBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Reliability Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-center">
            <div className="text-2xl font-bold text-white font-mono">&lt; 10ms</div>
            <div className="text-xs text-zinc-400 mt-1">P99 Target Latency</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-center">
            <div className="text-2xl font-bold text-emerald-400 font-mono">99.9%</div>
            <div className="text-xs text-zinc-400 mt-1">Uptime Availability</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-center">
            <div className="text-2xl font-bold text-indigo-400 font-mono">100%</div>
            <div className="text-xs text-zinc-400 mt-1">Strict Type-Safety</div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-center">
            <div className="text-2xl font-bold text-white font-mono">0 Downtime</div>
            <div className="text-xs text-zinc-400 mt-1">Rolling Deployments</div>
          </div>
        </div>
      </div>
    </section>
  );
};
