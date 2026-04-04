export type LinkItem = {
  label: string;
  href: string;
  note?: string;
  external?: boolean;
};

export type FocusArea = {
  label: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type ProjectArtifact = {
  label: string;
  href?: string;
  note?: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  contribution: string;
  significance: string;
  roles: string[];
  stack: string[];
  domains: string[];
  accent: string;
  featured: boolean;
  image?: {
    src: string;
    alt: string;
  };
  artifacts: ProjectArtifact[];
  placeholder?: boolean;
};

export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities: string[];
  evidence: string[];
  links: LinkItem[];
};

export const siteConfig = {
  name: "JJ / EXIBIST",
  role: "Engineer / Student",
  headline:
    "Building robotics, AI, and simulation systems with an architect’s eye for the code, tooling, and operator loop.",
  shortIntro:
    "I work across robot software, vision tooling, ML research, simulation architecture, and interface design. The thread through all of it is system thinking: how the codebase is shaped, how people use it, and whether it still holds up when the constraints get real.",
  locationLabel: "ASL Robotics / FRC Team 1884",
  github: "https://github.com/EXIBIST32132",
  teamGithub: "https://github.com/FRC1884",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/EXIBIST32132",
      note: "Primary code surface",
      external: true,
    },
    {
      label: "FRC1884 Org",
      href: "https://github.com/FRC1884",
      note: "Team public repositories",
      external: true,
    },
  ] satisfies LinkItem[],
};

export const focusAreas: FocusArea[] = [
  {
    label: "Robotics software",
    description:
      "Robot code, operator workflow, stateful subsystems, and match-pressure reliability.",
  },
  {
    label: "AI / ML",
    description:
      "Small language models, behavioral modeling, local agents, and practical training pipelines.",
  },
  {
    label: "Computer vision",
    description:
      "Tracking, OCR-assisted workflows, and video-to-field analysis for scouting and review.",
  },
  {
    label: "Simulation",
    description:
      "Deterministic runtime design, replayability, bridge contracts, and real-code compatibility.",
  },
  {
    label: "Systems design",
    description:
      "Repository boundaries, operator tooling, infrastructure decisions, and end-to-end architecture.",
  },
  {
    label: "Interface design",
    description:
      "Technical UIs that stay readable under pressure instead of treating design as an afterthought.",
  },
];

export const principles: Principle[] = [
  {
    title: "Systems before features",
    description:
      "I care about boundaries, data flow, and operator workflow before I care about adding one more feature checkbox.",
  },
  {
    title: "Build for real constraints",
    description:
      "Robotics, simulation, and ML work only get interesting once timing, reliability, and debugging pressure enter the room.",
  },
  {
    title: "Design is part of the engineering",
    description:
      "Readable interfaces, good defaults, and visual clarity matter when a system has to be used quickly and correctly.",
  },
  {
    title: "Credibility comes from implementation",
    description:
      "I prefer concrete architecture, working artifacts, and clear technical tradeoffs over vague claims about innovation.",
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "personalized-slm",
    title:
      "Designing and Training a Personalized Small Language Model Capable of Human Behavioral Replication",
    category: "AI / Research",
    summary:
      "Independent-study style SLM work spanning baseline transformers, from-scratch modeling, optimizer and tokenizer experiments, and a local personalized agent track.",
    problem:
      "The project set out to explore how far a smaller language model could be pushed toward personalization and behavior replication without treating the model as a black box.",
    contribution:
      "Built the project as a staged research and implementation program: PyTorch baseline, from-scratch transformer components, optimized model track, tokenizer experiments, training pipeline work, evaluation scaffolding, and a local personalized agent runtime.",
    significance:
      "This is the clearest example of research, systems implementation, and product thinking meeting in one body of work.",
    roles: ["Research direction", "Model implementation", "Training pipeline design"],
    stack: ["Python", "PyTorch", "Transformer architectures", "Evaluation tooling"],
    domains: ["AI / ML", "Research", "Systems design"],
    accent: "from-cyan-400/35 via-cyan-500/10 to-transparent",
    featured: true,
    image: {
      src: "/projects/slm-transformer-block.png",
      alt: "Transformer block diagram from the personalized SLM project.",
    },
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/KREEL_PAI",
      },
      {
        label: "Research paper / writeup",
        note: "Placeholder: add final public paper or PDF when ready.",
      },
    ],
  },
  {
    slug: "frc-season-2026",
    title: "FRC Team 1884 Season 2026 Software Stack",
    category: "Robotics",
    summary:
      "Public team robot code with operator board UI, state-first subsystem architecture, characterization workflows, and simulation readiness.",
    problem:
      "Competition robot software has to support fast iteration, reliable operator interaction, and field-ready debugging without collapsing under seasonal complexity.",
    contribution:
      "Portfolio framing focuses on software and GitHub leadership: shaping code organization, collaborating on team-facing systems, and operating in a real robot codebase with deployment pressure.",
    significance:
      "This is the strongest proof that the work extends beyond standalone demos into collaborative, real-world engineering.",
    roles: ["Software leadership", "GitHub workflow ownership", "Team systems collaboration"],
    stack: ["Java", "WPILib", "AdvantageKit", "Operator board web UI"],
    domains: ["Robotics software", "Systems design", "Team engineering"],
    accent: "from-amber-300/30 via-amber-500/10 to-transparent",
    featured: true,
    artifacts: [
      {
        label: "Season2026 repository",
        href: "https://github.com/FRC1884/Season2026",
      },
      {
        label: "Team organization",
        href: "https://github.com/FRC1884",
      },
    ],
  },
  {
    slug: "griffinsim",
    title: "GriffinSim",
    category: "Simulation",
    summary:
      "Deterministic FRC-compatible simulation monorepo centered on replayability, fixed-step runtime design, and strict contracts.",
    problem:
      "Simulation becomes hard to trust when timing, rendering, and integration concerns are mixed together without deterministic boundaries.",
    contribution:
      "The active public repo shows a rebuild toward fixed-step scheduling, bridge contracts, replay logs, scenario loading, and contract-first module boundaries instead of an ad hoc simulator core.",
    significance:
      "It demonstrates systems maturity: simulation treated as infrastructure, not just visualization.",
    roles: ["Architecture exploration", "Simulation platform design", "Tooling and release flow"],
    stack: ["Java", "Gradle", "Deterministic runtime design", "Replay tooling"],
    domains: ["Simulation", "Systems design", "Robotics tooling"],
    accent: "from-sky-300/35 via-sky-500/10 to-transparent",
    featured: true,
    artifacts: [
      {
        label: "Public repository",
        href: "https://github.com/FRC1884/GriffinSim",
      },
      {
        label: "Architecture docs",
        note: "Available in the GriffinSim repository docs tree.",
      },
    ],
  },
  {
    slug: "frc-heatmap",
    title: "FRC Heatmap",
    category: "Vision Tooling",
    summary:
      "Local web app that converts wide-shot FRC match footage into field-space robot heatmaps, alliance overlays, and exportable tracking data.",
    problem:
      "Match footage is easy to watch but difficult to turn into quantitative field-position insight for scouting or review.",
    contribution:
      "Designed a workflow that ingests local or YouTube video, calibrates against the field image, seeds robots manually, tracks them through OpenCV, and exports visual overlays plus structured data.",
    significance:
      "Combines computer vision, UI workflow design, and a real robotics use case in one project.",
    roles: ["Product architecture", "Vision pipeline design", "Frontend and backend implementation"],
    stack: ["React", "TypeScript", "FastAPI", "OpenCV", "OCR tooling"],
    domains: ["Computer vision", "Robotics tooling", "Web apps"],
    accent: "from-emerald-300/35 via-emerald-500/10 to-transparent",
    featured: true,
    image: {
      src: "/projects/frc-heatmap-alliances.png",
      alt: "Alliance heatmap output from the FRC Heatmap project.",
    },
    artifacts: [
      {
        label: "Public repository",
        href: "https://github.com/FRC1884/FRCHeatmap",
      },
      {
        label: "Sample preview",
        note: "Portfolio uses a local example artifact from the project outputs.",
      },
    ],
  },
  {
    slug: "self-balancing-robot",
    title: "Self-Balancing Robot",
    category: "Controls / Robotics",
    summary:
      "Control-oriented robotics project built in WPILib Java around balance and robot-state behavior.",
    problem:
      "Balance systems force software, hardware assumptions, and iteration speed into the same loop.",
    contribution:
      "The public evidence in the local project confirms a WPILib / GradleRIO codebase. The portfolio frames it as hands-on controls and robot behavior work rather than overstating final competition outcomes.",
    significance:
      "It anchors the portfolio in embodied robotics rather than purely screen-based systems.",
    roles: ["Robot code implementation", "Controls iteration", "Hardware-software integration"],
    stack: ["Java", "WPILib", "GradleRIO"],
    domains: ["Robotics software", "Control-adjacent systems"],
    accent: "from-orange-300/35 via-orange-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Public repo / media",
        note: "Placeholder: add a public link or demo clip if available.",
      },
    ],
  },
  {
    slug: "oasis-alpha",
    title: "OASIS Alpha",
    category: "Engine / Systems",
    summary:
      "Custom C++ engine and services skeleton for a multiplayer simulation environment with explicit module boundaries and contracts.",
    problem:
      "Large interactive systems become unreadable quickly when rendering, networking, and world logic are allowed to blur together.",
    contribution:
      "Structured the project around contracts, server/client boundaries, demo applications, tooling scripts, and an architecture that treats world systems as a platform problem.",
    significance:
      "Shows comfort with lower-level systems work, engine structure, and long-horizon architecture.",
    roles: ["Architecture", "Engine and services structure", "Tooling design"],
    stack: ["C++", "CMake", "SDL2", "Client/server tooling"],
    domains: ["Systems programming", "Simulation", "Engine architecture"],
    accent: "from-fuchsia-300/30 via-fuchsia-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/Oasis",
      },
    ],
  },
  {
    slug: "neural-network-visualizer",
    title: "Neural Network Visualizer",
    category: "Interactive ML Tools",
    summary:
      "In-browser neural network builder, trainer, interpreter, and visualization environment powered by TensorFlow.js.",
    problem:
      "ML tooling is often opaque to beginners and visually thin even when the underlying ideas are spatial and dynamic.",
    contribution:
      "Built an interactive UI for architecture editing, training, live activations, inference, and plain-language task interpretation without requiring a backend.",
    significance:
      "Highlights the combination of technical depth and interface design that runs through the rest of the portfolio.",
    roles: ["Frontend engineering", "Interactive visualization", "ML tooling design"],
    stack: ["JavaScript", "TensorFlow.js", "Canvas", "Three.js"],
    domains: ["AI / ML", "Interfaces", "Technical education tooling"],
    accent: "from-violet-300/30 via-violet-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Public repo / demo",
        note: "Placeholder: add public URL if this project is published.",
      },
    ],
  },
  {
    slug: "graphics-engine-placeholder",
    title: "Voxel / Graphics Engine Work",
    category: "Placeholder",
    summary:
      "Reserved slot for graphics or voxel-engine work mentioned in the portfolio brief but not yet grounded with a public repository or artifact in this repo.",
    problem:
      "Graphics-engine work is part of the intended story, but it should not be overstated without a visible code surface or media.",
    contribution:
      "This slot exists so a future public repo, screenshots, or writeup can be added without restructuring the site.",
    significance:
      "Keeps the content model honest while leaving room for a real engine artifact later.",
    roles: ["Placeholder for future addition"],
    stack: ["Add when public"],
    domains: ["Graphics", "Engine systems"],
    accent: "from-white/15 via-white/5 to-transparent",
    featured: false,
    placeholder: true,
    artifacts: [
      {
        label: "Add repo or media",
        note: "Placeholder: replace with a real project link before treating this as a published case study.",
      },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: "GitHub / Software Leadership",
    organization: "ASL Robotics / FRC Team 1884",
    period: "Current",
    summary:
      "Operating in a collaborative robotics codebase where code structure, review quality, and toolchain decisions affect real hardware and real match preparation.",
    responsibilities: [
      "Help shape repository organization and code workflow around the team’s software work.",
      "Contribute to team-facing systems such as robot code, operator-facing tooling, simulation work, and public engineering utilities.",
      "Translate technical complexity into interfaces and processes other team members can use under time pressure.",
      "Treat GitHub as an engineering surface: code review, structure, versioning, and shared ownership matter as much as the code itself.",
    ],
    evidence: [
      "Public org repositories include Season2026, GriffinSim, FRCHeatmap, frc1884-scouting, and PathPlanA.",
      "Season2026 README documents operator board UI, state-first subsystems, characterization tooling, and simulation readiness.",
      "GriffinSim README documents deterministic runtime, replay logs, scenario tooling, and release automation.",
    ],
    links: [
      {
        label: "FRC1884 org",
        href: "https://github.com/FRC1884",
        external: true,
      },
      {
        label: "Season2026",
        href: "https://github.com/FRC1884/Season2026",
        external: true,
      },
      {
        label: "GriffinSim",
        href: "https://github.com/FRC1884/GriffinSim",
        external: true,
      },
    ],
  },
];
