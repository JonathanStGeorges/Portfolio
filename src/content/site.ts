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

export type ProjectOwnership = "personal" | "team" | "research";

export type ProjectEntry = {
  slug: string;
  title: string;
  category: string;
  bucket:
    | "Team Software / Leadership"
    | "AI / Vision"
    | "Simulation / Engines"
    | "Tools / Infrastructure"
    | "Research";
  ownership: ProjectOwnership;
  status: string;
  summary: string;
  problem: string;
  contribution: string;
  significance: string;
  contributionContext: string;
  sourceNote: string;
  repository?: string;
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
};

export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities: string[];
  evidence: string[];
  stack: string[];
  links: LinkItem[];
};

export type RepositoryEntry = {
  name: string;
  href: string;
  ownership: ProjectOwnership;
  category: string;
  summary: string;
  sourceNote: string;
};

export type RepositoryCatalogEntry = {
  name: string;
  href: string;
  ownership: ProjectOwnership;
  language: string;
  description?: string;
  updatedAt: string;
};

export const siteConfig = {
  name: "JJ / EXIBIST",
  role: "Engineer / Student",
  headline:
    "Building robotics, AI, simulation, and software systems with an architect’s eye for the code, tooling, and operator loop.",
  shortIntro:
    "I work across robot software, vision tooling, ML research, simulation architecture, and interface design. The thread through all of it is system thinking: how the codebase is shaped, how people use it, and whether it still holds up when the constraints get real.",
  locationLabel: "ASL Robotics / FRC Team 1884",
  github: "https://github.com/EXIBIST32132",
  teamGithub: "https://github.com/FRC1884",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/EXIBIST32132",
      note: "Personal repositories",
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
      "Robot code, operator workflow, subsystem architecture, and match-pressure reliability.",
  },
  {
    label: "AI / ML",
    description:
      "Small language models, behavioral modeling, face recognition, and practical training pipelines.",
  },
  {
    label: "Computer vision",
    description:
      "Tracking, OCR-assisted workflows, camera systems, and video-to-field analysis for robotics review.",
  },
  {
    label: "Simulation",
    description:
      "Deterministic runtime design, replayability, autonomous validation, and real-code compatibility.",
  },
  {
    label: "Tooling / infrastructure",
    description:
      "Planning tools, strategy backends, templates, and the shared engineering surfaces around the code.",
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
    bucket: "Research",
    ownership: "research",
    status: "Independent research track",
    summary:
      "Independent-study SLM work spanning baseline transformers, from-scratch modeling, optimizer and tokenizer experiments, and a local personalized agent track.",
    problem:
      "The project set out to explore how far a smaller language model could be pushed toward personalization and behavior replication without treating the model as a black box.",
    contribution:
      "Built the work as a staged research and implementation program: PyTorch baseline, from-scratch transformer components, optimized model track, tokenizer experiments, training pipeline work, evaluation scaffolding, and a local personalized agent runtime.",
    significance:
      "This is the clearest example of research, systems implementation, and product thinking meeting in one body of work.",
    contributionContext:
      "Personal research and implementation project.",
    sourceNote:
      "Grounded in the public `KREEL_PAI` repository plus the local SLM project materials inspected during the audit.",
    repository: "https://github.com/EXIBIST32132/KREEL_PAI",
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
    bucket: "Team Software / Leadership",
    ownership: "team",
    status: "Active team codebase",
    summary:
      "Public team robot code with operator board UI, state-first subsystem architecture, characterization workflows, and simulation-ready autonomous tooling.",
    problem:
      "Competition robot software has to support fast iteration, reliable operator interaction, autonomous validation, and field-ready debugging without collapsing under seasonal complexity.",
    contribution:
      "The portfolio frames this work as software and GitHub leadership inside a shared robot codebase: shaping structure, contributing to team-facing systems, and working across robot code, dashboard surfaces, and deployment flow.",
    significance:
      "This is the strongest proof that the work extends beyond standalone demos into collaborative, real-world engineering.",
    contributionContext:
      "Team repository. The site represents leadership, codebase responsibility, and contribution context rather than claiming sole authorship.",
    sourceNote:
      "Grounded in the public `FRC1884/Season2026` README and related deploy/docs references. The current README explicitly notes PathPlanA autos in the persistent deploy workflow.",
    repository: "https://github.com/FRC1884/Season2026",
    roles: ["Software leadership", "GitHub workflow ownership", "Team systems collaboration"],
    stack: [
      "Java",
      "WPILib",
      "AdvantageKit",
      "Operator board web UI",
      "maple-sim",
      "PathPlanA",
    ],
    domains: ["Robotics software", "Systems design", "Team engineering"],
    accent: "from-amber-300/30 via-amber-500/10 to-transparent",
    featured: true,
    artifacts: [
      {
        label: "Season2026 repository",
        href: "https://github.com/FRC1884/Season2026",
      },
      {
        label: "PathPlanA integration note",
        href: "https://raw.githubusercontent.com/FRC1884/Season2026/main/docs/PATHPLANA_INTEGRATION.md",
      },
      {
        label: "Team organization",
        href: "https://github.com/FRC1884",
      },
    ],
  },
  {
    slug: "pathplana",
    title: "PathPlanA",
    category: "Autonomous Tooling",
    bucket: "Team Software / Leadership",
    ownership: "team",
    status: "Active team toolchain repo",
    summary:
      "Flutter planner app for REBUILT autonomous authoring that exports deploy-backed auto libraries into the FRC 1884 robot workflow.",
    problem:
      "Autonomous authoring becomes harder to maintain when planning only exists as ad hoc edits inside a dashboard or directly in robot code.",
    contribution:
      "The public repo shows a dedicated planner surface with local auto galleries, field editing, deploy export, and an explicit integration contract into the Season2026 operator-board and auto queue flow.",
    significance:
      "It is the clearest evidence that autonomous tooling in the team stack goes beyond using upstream libraries and extends into team-specific planning software.",
    contributionContext:
      "Team repository. Included as part of the FRC1884 software ecosystem, not as upstream authorship of PathPlanner itself.",
    sourceNote:
      "Grounded in the public `FRC1884/PathPlanA` README and integration docs. This is separate from upstream PathPlanner by Team 3015 Ranger Robotics.",
    repository: "https://github.com/FRC1884/PathPlanA",
    roles: ["Toolchain design", "Autonomous authoring workflow", "Planner-to-robot integration"],
    stack: ["Dart", "Flutter", "Deploy library contracts", "Autonomous tooling"],
    domains: ["Robotics tooling", "Interfaces", "Systems integration"],
    accent: "from-lime-300/30 via-emerald-500/10 to-transparent",
    featured: true,
    artifacts: [
      {
        label: "PathPlanA repository",
        href: "https://github.com/FRC1884/PathPlanA",
      },
      {
        label: "Planner integration note",
        href: "https://raw.githubusercontent.com/FRC1884/PathPlanA/main/docs/INTEGRATION.md",
      },
    ],
  },
  {
    slug: "griffinsim",
    title: "GriffinSim",
    category: "Simulation",
    bucket: "Simulation / Engines",
    ownership: "team",
    status: "Deterministic simulator monorepo",
    summary:
      "Deterministic FRC-compatible simulation monorepo centered on replayability, fixed-step runtime design, and strict contracts.",
    problem:
      "Simulation becomes hard to trust when timing, rendering, and integration concerns are mixed together without deterministic boundaries.",
    contribution:
      "The active public repo shows a rebuild toward fixed-step scheduling, bridge contracts, replay logs, scenario loading, and contract-first module boundaries instead of an ad hoc simulator core.",
    significance:
      "It demonstrates systems maturity: simulation treated as infrastructure, not just visualization.",
    contributionContext:
      "Team repository represented as part of the broader FRC1884 simulation and tooling surface.",
    sourceNote:
      "Grounded in the public `FRC1884/GriffinSim` README and local matching repo evidence.",
    repository: "https://github.com/FRC1884/GriffinSim",
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
    bucket: "AI / Vision",
    ownership: "team",
    status: "Local web app / public repo",
    summary:
      "Local web app that converts wide-shot FRC match footage into field-space robot heatmaps, alliance overlays, and exportable tracking data.",
    problem:
      "Match footage is easy to watch but difficult to turn into quantitative field-position insight for scouting or review.",
    contribution:
      "Designed a workflow that ingests local or YouTube video, calibrates against the field image, seeds robots manually, tracks them through OpenCV, and exports visual overlays plus structured data.",
    significance:
      "Combines computer vision, UI workflow design, and a real robotics use case in one project.",
    contributionContext:
      "Public FRC1884 repo with local artifacts available during the audit.",
    sourceNote:
      "Grounded in the public `FRC1884/FRCHeatmap` README plus local example outputs used by the portfolio.",
    repository: "https://github.com/FRC1884/FRCHeatmap",
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
    slug: "frc-strategy",
    title: "FRC 1884 Strategy",
    category: "Team Strategy Software",
    bucket: "Team Software / Leadership",
    ownership: "team",
    status: "Backend and deployment scaffold",
    summary:
      "Fastify + TypeScript + SQLite scaffold for a strategy app that moves scouting, plans, and analytics off a prototype frontend and into a proper backend.",
    problem:
      "Strategy tooling becomes brittle if it stays browser-only while ingest, storage, analytics, and event planning continue to grow.",
    contribution:
      "The repo shows an incremental migration path: keep the current UI working, add typed server-backed routes, normalize the data model, and prepare production deployment assets.",
    significance:
      "This broadens the FRC1884 picture beyond robot code into the surrounding decision-support tooling used around events and planning.",
    contributionContext:
      "Team repository. Presented as part of the team software surface, not a claim of sole ownership.",
    sourceNote:
      "Grounded in the public `FRC1884/frc1884-strategy` README.",
    repository: "https://github.com/FRC1884/frc1884-strategy",
    roles: ["Backend structure", "Strategy tooling architecture", "Deployment surface"],
    stack: ["Fastify", "TypeScript", "SQLite", "Static frontend serving"],
    domains: ["Tools / infrastructure", "Web backends", "Team software"],
    accent: "from-indigo-300/30 via-indigo-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Public repository",
        href: "https://github.com/FRC1884/frc1884-strategy",
      },
    ],
  },
  {
    slug: "frc1884-scouting",
    title: "FRC 1884 Scouting",
    category: "Scouting Platform",
    bucket: "Team Software / Leadership",
    ownership: "team",
    status: "Team scouting monorepo",
    summary:
      "TypeScript scouting monorepo with multiple apps, shared packages, schemas, and architecture assets for the team scouting workflow.",
    problem:
      "Scouting systems tend to sprawl quickly when data capture, scanning, logging, and viewer tools evolve independently without a shared contract.",
    contribution:
      "The public repo structure shows a deliberate monorepo shape with apps, packages, schemas, and architecture artifacts instead of a single isolated scouting app.",
    significance:
      "It strengthens the case that the FRC1884 software footprint includes multi-surface team systems beyond robot code and vision tooling.",
    contributionContext:
      "Team repository. The description stays close to the observable public repo structure because the current branch has limited README detail.",
    sourceNote:
      "Grounded in the public `FRC1884/frc1884-scouting` repository structure and package manifest.",
    repository: "https://github.com/FRC1884/frc1884-scouting",
    roles: ["Scouting system structure", "Monorepo organization", "Shared contracts"],
    stack: ["TypeScript", "Yarn workspaces", "Apps", "Packages", "Schemas"],
    domains: ["Team software", "Tools / infrastructure", "Interfaces"],
    accent: "from-blue-300/30 via-blue-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Public repository",
        href: "https://github.com/FRC1884/frc1884-scouting",
      },
      {
        label: "Architecture asset",
        note: "The public repo includes scouting architecture diagrams and schema directories.",
      },
    ],
  },
  {
    slug: "camera-ai",
    title: "AI Camera Vision",
    category: "Computer Vision",
    bucket: "AI / Vision",
    ownership: "personal",
    status: "Personal repo",
    summary:
      "AI camera system with OpenCV face detection, a custom PyTorch face-recognition model, live overlays, training flow, and local-network serving.",
    problem:
      "A camera system is only useful if detection, recognition, training, calibration, and network access all work together as one workflow.",
    contribution:
      "Built a local system that supports camera configuration, live streaming, training from `ImageFolder` datasets, calibration/model file management, and LAN access.",
    significance:
      "This is the strongest direct match to the AI-powered camera / face-recognition thread in the portfolio brief.",
    contributionContext:
      "Personal repository.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/camera-ai` README and repo contents.",
    repository: "https://github.com/EXIBIST32132/camera-ai",
    roles: ["Vision pipeline implementation", "Model training workflow", "Local serving setup"],
    stack: ["Python", "OpenCV", "PyTorch", "Local web serving"],
    domains: ["Computer vision", "AI / ML", "Interfaces"],
    accent: "from-rose-300/30 via-rose-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/camera-ai",
      },
    ],
  },
  {
    slug: "voiceassist-prototype",
    title: "VoiceAssist Prototype",
    category: "Voice Interface",
    bucket: "AI / Vision",
    ownership: "personal",
    status: "SwiftUI prototype",
    summary:
      "Minimal SwiftUI voice assistant prototype for iPhone testing, built around a Linux-first workflow with App Intents and quick-trigger support.",
    problem:
      "Voice-first assistant ideas are hard to iterate on if the mobile app, trigger surface, and cross-machine workflow are all treated separately.",
    contribution:
      "Built a lightweight iOS testing surface with an xcodegen-driven setup, sync/build helpers, App Shortcut support, and a URL-scheme trigger path.",
    significance:
      "It adds a credible mobile and voice-interface thread to the GitHub footprint without pretending it is more than a prototype.",
    contributionContext:
      "Personal repository. Presented as a prototype with honest scope.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/SiriMod` README.",
    repository: "https://github.com/EXIBIST32132/SiriMod",
    roles: ["Prototype implementation", "Voice interaction surface", "Cross-machine workflow"],
    stack: ["SwiftUI", "xcodegen", "App Intents", "iOS tooling"],
    domains: ["Interfaces", "AI-adjacent tooling", "Mobile development"],
    accent: "from-pink-300/30 via-pink-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/SiriMod",
      },
    ],
  },
  {
    slug: "self-balancing-robot",
    title: "Self-Balancing Robot",
    category: "Controls / Robotics",
    bucket: "Team Software / Leadership",
    ownership: "personal",
    status: "Local WPILib project",
    summary:
      "Control-oriented robotics project built in WPILib Java around balance and robot-state behavior.",
    problem:
      "Balance systems force software, hardware assumptions, and iteration speed into the same loop.",
    contribution:
      "The available evidence confirms a WPILib / GradleRIO codebase. The portfolio keeps the framing honest: this is robot behavior and control work, not a claim about competition results.",
    significance:
      "It anchors the portfolio in embodied robotics rather than purely screen-based systems.",
    contributionContext:
      "Local project evidence exists, but a public repository link is not currently attached to the portfolio.",
    sourceNote:
      "Grounded in the inspected local `AutoBalance` project and its GradleRIO configuration.",
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
    slug: "drone-pathplanner-3d",
    title: "3D PathPlanner for Foam Planes / Drones",
    category: "Planning Tools",
    bucket: "Tools / Infrastructure",
    ownership: "personal",
    status: "Personal experimental planner app",
    summary:
      "JavaFX application inspired by FRC PathPlanner for planning, visualizing, and running 3D paths for foam airplanes and drones.",
    problem:
      "Path planning becomes much harder once movement leaves the field plane and needs a usable 3D editing and playback surface.",
    contribution:
      "Built a planner with a project browser, JSON autosave, Catmull-Rom spline generation, 3D visualization, plane playback, and packaging support for a desktop app.",
    significance:
      "It connects robotics-style planning instincts to a different domain and shows that the planning/tooling mindset extends beyond FRC.",
    contributionContext:
      "Personal repository inspired by PathPlanner, not related to authorship of the upstream PathPlanner project.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/3D_DronePathPlanner` README and repo contents.",
    repository: "https://github.com/EXIBIST32132/3D_DronePathPlanner",
    roles: ["Desktop app implementation", "3D path visualization", "Planner UX"],
    stack: ["Java", "JavaFX", "Maven", "JSON persistence"],
    domains: ["Tools / infrastructure", "Simulation", "Interfaces"],
    accent: "from-teal-300/30 via-teal-500/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/3D_DronePathPlanner",
      },
    ],
  },
  {
    slug: "calendar-today-tasks",
    title: "Today Tasks",
    category: "macOS Productivity App",
    bucket: "Tools / Infrastructure",
    ownership: "personal",
    status: "macOS application",
    summary:
      "Personal task and effort tracker for macOS with an always-on-top overlay, calendar views, timers, local notifications, and optional Codex-assisted voice-to-task extraction.",
    problem:
      "Productivity tools get more useful when scheduling, effort tracking, notifications, and quick capture live in the same surface instead of separate apps.",
    contribution:
      "Built a native macOS app with overlay behavior, timer/session tracking, calendar integration, sync hooks, and an optional AI-assisted capture flow.",
    significance:
      "It adds real platform breadth to the portfolio and reinforces the design-aware tooling side of the work.",
    contributionContext:
      "Personal repository. Included because the public README exposes enough implementation and product surface to support an honest summary.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/Calendar` README.",
    repository: "https://github.com/EXIBIST32132/Calendar",
    roles: ["Native app implementation", "Productivity workflow design", "Platform integration"],
    stack: ["SwiftUI", "macOS", "Firebase sync", "Calendar integration"],
    domains: ["Interfaces", "Tools / infrastructure", "Platform development"],
    accent: "from-stone-200/20 via-slate-400/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/Calendar",
      },
    ],
  },
  {
    slug: "oasis-alpha",
    title: "OASIS Alpha",
    category: "Engine / Systems",
    bucket: "Simulation / Engines",
    ownership: "personal",
    status: "Custom engine and services skeleton",
    summary:
      "Custom C++ engine and services skeleton for a multiplayer simulation environment with explicit module boundaries and contracts.",
    problem:
      "Large interactive systems become unreadable quickly when rendering, networking, and world logic are allowed to blur together.",
    contribution:
      "Structured the project around contracts, server/client boundaries, demo applications, tooling scripts, and an architecture that treats world systems as a platform problem.",
    significance:
      "Shows comfort with lower-level systems work, engine structure, and long-horizon architecture.",
    contributionContext:
      "Personal repository.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/Oasis` repository and inspected local README/docs.",
    repository: "https://github.com/EXIBIST32132/Oasis",
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
    bucket: "AI / Vision",
    ownership: "personal",
    status: "Browser-based ML tool",
    summary:
      "In-browser neural network builder, trainer, interpreter, and visualization environment powered by TensorFlow.js.",
    problem:
      "ML tooling is often opaque to beginners and visually thin even when the underlying ideas are spatial and dynamic.",
    contribution:
      "Built an interactive UI for architecture editing, training, live activations, inference, and plain-language task interpretation without requiring a backend.",
    significance:
      "Highlights the combination of technical depth and interface design that runs through the rest of the portfolio.",
    contributionContext:
      "Personal project with local repo evidence.",
    sourceNote:
      "Grounded in the inspected local repo README and the corresponding public repository reference.",
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
    slug: "aslrobotics-template",
    title: "ASL Robotics Template",
    category: "Template / Infrastructure",
    bucket: "Tools / Infrastructure",
    ownership: "personal",
    status: "Shared robotics template repo",
    summary:
      "Unified robotics template repository for FRC teams 1797 and 1884, built to be forked forward across seasons.",
    problem:
      "Team software gets easier to maintain when the common structure and baseline tooling are defined once and reused instead of rebuilt from scratch every season.",
    contribution:
      "The public repo packages a reusable Java / WPILib baseline and already includes planner and choreo-related artifacts in the root structure.",
    significance:
      "This gives the GitHub footprint a stronger infrastructure layer: not just using a codebase, but trying to standardize how future codebases begin.",
    contributionContext:
      "Personal repository created for shared team use.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/aslrobotics-template` README, description, and repo root contents.",
    repository: "https://github.com/EXIBIST32132/aslrobotics-template",
    roles: ["Template design", "Repository standardization", "Robotics infrastructure"],
    stack: ["Java", "WPILib", "AdvantageKit-oriented structure", "PathPlanner/Choreo artifacts"],
    domains: ["Tools / infrastructure", "Robotics software"],
    accent: "from-cyan-200/25 via-white/8 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/aslrobotics-template",
      },
    ],
  },
  {
    slug: "physics-engine",
    title: "PhysicsEngine",
    category: "Engine Experiment",
    bucket: "Simulation / Engines",
    ownership: "personal",
    status: "Early engine experiment",
    summary:
      "Early physics-engine and game-engine base-template experiment written in C.",
    problem:
      "Engine work often starts with core mechanics and data structures long before the project is mature enough to present as a full rendering platform.",
    contribution:
      "This repo is represented as an early low-level experiment rather than a finished engine: a first attempt at physics behavior plus a reusable base for later engine work.",
    significance:
      "It gives the simulation and engine narrative a clearer origin point without overstating the maturity of the repo.",
    contributionContext:
      "Personal repository. The public evidence is sparse, so the framing stays intentionally conservative.",
    sourceNote:
      "Grounded in the public `EXIBIST32132/PhysicsEngine` repository description and README.",
    repository: "https://github.com/EXIBIST32132/PhysicsEngine",
    roles: ["Low-level experimentation", "Engine base structure"],
    stack: ["C", "Physics engine experiment", "Game-engine template"],
    domains: ["Simulation", "Systems programming", "Engine architecture"],
    accent: "from-zinc-200/15 via-zinc-400/10 to-transparent",
    featured: false,
    artifacts: [
      {
        label: "Source repository",
        href: "https://github.com/EXIBIST32132/PhysicsEngine",
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
      "Operating inside a collaborative robotics software environment where repository structure, review quality, planning tools, and operator-facing systems affect real hardware and real match preparation.",
    responsibilities: [
      "Help shape repository organization and code workflow around the team’s software work.",
      "Contribute across robot code, operator-facing tooling, simulation work, and public engineering utilities.",
      "Translate technical complexity into interfaces and processes other team members can use under time pressure.",
      "Treat GitHub as an engineering surface: code review, structure, versioning, and shared ownership matter as much as the code itself.",
    ],
    evidence: [
      "Public org repositories now span Season2026, PathPlanA, GriffinSim, FRCHeatmap, frc1884-strategy, frc1884-scouting, and attendance tooling.",
      "PRE-Season2026 and season2025 public READMEs both explicitly credit PathPlanner + PathPlannerLib, Choreo/ChoreoLib, and maple-sim as part of the 2026-era stack.",
      "Season2026 docs explicitly preserve PathPlanA autos through deploy and operator-board selection flows.",
    ],
    stack: [
      "WPILib",
      "AdvantageKit",
      "PathPlanA",
      "PathPlanner",
      "Choreo",
      "maple-sim",
      "TypeScript tooling",
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
        label: "PathPlanA",
        href: "https://github.com/FRC1884/PathPlanA",
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

export const supportingRepositories: RepositoryEntry[] = [
  {
    name: "attendance-appsscript",
    href: "https://github.com/FRC1884/attendance-appsscript",
    ownership: "team",
    category: "Operations automation",
    summary:
      "Apps Script attendance tracking project deployed through GitHub workflows for the 2025-26 team season.",
    sourceNote: "Grounded in the public README.",
  },
  {
    name: "season2025",
    href: "https://github.com/EXIBIST32132/season2025",
    ownership: "personal",
    category: "Prior season robot code",
    summary:
      "Earlier public 1884 season code showing the shift toward AdvantageKit, hardware abstraction, maple-sim, Choreo, and PathPlanner-era workflow.",
    sourceNote: "Grounded in the public README.",
  },
];

export const personalRepositoryCatalog: RepositoryCatalogEntry[] = [
  {
    name: "Portfolio",
    href: "https://github.com/EXIBIST32132/Portfolio",
    ownership: "personal",
    language: "TypeScript",
    updatedAt: "2026-04-04",
  },
  {
    name: "ValentinesDay",
    href: "https://github.com/EXIBIST32132/ValentinesDay",
    ownership: "personal",
    language: "HTML",
    updatedAt: "2026-03-04",
  },
  {
    name: "Calendar",
    href: "https://github.com/EXIBIST32132/Calendar",
    ownership: "personal",
    language: "Swift",
    updatedAt: "2026-03-01",
  },
  {
    name: "KREEL_PAI",
    href: "https://github.com/EXIBIST32132/KREEL_PAI",
    ownership: "personal",
    language: "Python",
    updatedAt: "2026-02-25",
  },
  {
    name: "M1-ArchLinux",
    href: "https://github.com/EXIBIST32132/M1-ArchLinux",
    ownership: "personal",
    language: "Shell",
    updatedAt: "2026-02-04",
  },
  {
    name: "shannonCodex",
    href: "https://github.com/EXIBIST32132/shannonCodex",
    ownership: "personal",
    language: "None",
    description:
      "Fully autonomous AI hacker to find actual exploits in your web apps. Shannon has achieved a 96.15% success rate on the hint-free, source-aware XBOW Benchmark.",
    updatedAt: "2026-01-22",
  },
  {
    name: "SiriMod",
    href: "https://github.com/EXIBIST32132/SiriMod",
    ownership: "personal",
    language: "Swift",
    updatedAt: "2026-01-18",
  },
  {
    name: "Season2026",
    href: "https://github.com/EXIBIST32132/Season2026",
    ownership: "personal",
    language: "None",
    updatedAt: "2026-01-06",
  },
  {
    name: "SLM_Research",
    href: "https://github.com/EXIBIST32132/SLM_Research",
    ownership: "personal",
    language: "Python",
    updatedAt: "2025-12-30",
  },
  {
    name: "CodingCompetitionBowl",
    href: "https://github.com/EXIBIST32132/CodingCompetitionBowl",
    ownership: "personal",
    language: "Python",
    description: "Coding Competition Bowl web server.",
    updatedAt: "2025-12-03",
  },
  {
    name: "WebUIRoboOp",
    href: "https://github.com/EXIBIST32132/WebUIRoboOp",
    ownership: "personal",
    language: "None",
    updatedAt: "2025-10-02",
  },
  {
    name: "ToBeDeleted",
    href: "https://github.com/EXIBIST32132/ToBeDeleted",
    ownership: "personal",
    language: "Java",
    updatedAt: "2025-09-02",
  },
  {
    name: "3D_DronePathPlanner",
    href: "https://github.com/EXIBIST32132/3D_DronePathPlanner",
    ownership: "personal",
    language: "Java",
    description: "Watcha want",
    updatedAt: "2025-07-22",
  },
  {
    name: "ScreenStreamServer",
    href: "https://github.com/EXIBIST32132/ScreenStreamServer",
    ownership: "personal",
    language: "Makefile",
    updatedAt: "2025-06-15",
  },
  {
    name: "CommandLineProjectTemplate",
    href: "https://github.com/EXIBIST32132/CommandLineProjectTemplate",
    ownership: "personal",
    language: "Java",
    description: "Command line template",
    updatedAt: "2025-06-11",
  },
  {
    name: "season2025",
    href: "https://github.com/EXIBIST32132/season2025",
    ownership: "personal",
    language: "Java",
    updatedAt: "2025-05-24",
  },
  {
    name: "imagesStandard",
    href: "https://github.com/EXIBIST32132/imagesStandard",
    ownership: "personal",
    language: "HTML",
    description: "BOMBACLAT",
    updatedAt: "2025-04-01",
  },
  {
    name: "camera-ai",
    href: "https://github.com/EXIBIST32132/camera-ai",
    ownership: "personal",
    language: "Python",
    updatedAt: "2025-03-13",
  },
  {
    name: "Internal-wifi-network",
    href: "https://github.com/EXIBIST32132/Internal-wifi-network",
    ownership: "personal",
    language: "HTML",
    updatedAt: "2025-03-13",
  },
  {
    name: "allwpilib",
    href: "https://github.com/EXIBIST32132/allwpilib",
    ownership: "personal",
    language: "None",
    description: "Official Repository of WPILibJ and WPILibC",
    updatedAt: "2025-02-17",
  },
  {
    name: "PhysicsEngine",
    href: "https://github.com/EXIBIST32132/PhysicsEngine",
    ownership: "personal",
    language: "C",
    description:
      "My first try at a physics engine as well as my base template for a game engine",
    updatedAt: "2025-02-06",
  },
  {
    name: "JumpKingAI",
    href: "https://github.com/EXIBIST32132/JumpKingAI",
    ownership: "personal",
    language: "C++",
    updatedAt: "2025-01-26",
  },
  {
    name: "EXIBIST32132",
    href: "https://github.com/EXIBIST32132/EXIBIST32132",
    ownership: "personal",
    language: "None",
    updatedAt: "2025-01-26",
  },
  {
    name: "aslrobotics-template",
    href: "https://github.com/EXIBIST32132/aslrobotics-template",
    ownership: "personal",
    language: "Java",
    description:
      "The unified template repository for FRC teams 1797 and 1884. Fork off this template for the 2025-26 season and beyond!",
    updatedAt: "2024-12-07",
  },
  {
    name: "DoublePendulumAI",
    href: "https://github.com/EXIBIST32132/DoublePendulumAI",
    ownership: "personal",
    language: "Java",
    description: "...",
    updatedAt: "2024-11-27",
  },
  {
    name: "season2024",
    href: "https://github.com/EXIBIST32132/season2024",
    ownership: "personal",
    language: "None",
    description: "Official 2024 code for frc team 1884",
    updatedAt: "2024-03-31",
  },
  {
    name: "max-s",
    href: "https://github.com/EXIBIST32132/max-s",
    ownership: "personal",
    language: "Java",
    updatedAt: "2024-01-16",
  },
  {
    name: "preseason2024",
    href: "https://github.com/EXIBIST32132/preseason2024",
    ownership: "personal",
    language: "None",
    description: "Jonathan's fork for input into main",
    updatedAt: "2023-12-04",
  },
  {
    name: "practice2024R",
    href: "https://github.com/EXIBIST32132/practice2024R",
    ownership: "personal",
    language: "None",
    description: "Yum YUm",
    updatedAt: "2023-11-17",
  },
  {
    name: "practice2024",
    href: "https://github.com/EXIBIST32132/practice2024",
    ownership: "personal",
    language: "None",
    description: "Practice folder for members who are new to programming",
    updatedAt: "2023-11-17",
  },
  {
    name: "season-2023",
    href: "https://github.com/EXIBIST32132/season-2023",
    ownership: "personal",
    language: "Java",
    description: "Yung blud",
    updatedAt: "2023-11-13",
  },
  {
    name: "osxinj",
    href: "https://github.com/EXIBIST32132/osxinj",
    ownership: "personal",
    language: "None",
    description: "osx dylib injection",
    updatedAt: "2022-03-07",
  },
];

export const teamRepositoryCatalog: RepositoryCatalogEntry[] = [
  {
    name: "GriffinSim",
    href: "https://github.com/FRC1884/GriffinSim",
    ownership: "team",
    language: "Java",
    updatedAt: "2026-04-03",
  },
  {
    name: "Season2026COMP",
    href: "https://github.com/FRC1884/Season2026COMP",
    ownership: "team",
    language: "Java",
    updatedAt: "2026-04-02",
  },
  {
    name: "PathPlanA",
    href: "https://github.com/FRC1884/PathPlanA",
    ownership: "team",
    language: "Dart",
    updatedAt: "2026-03-31",
  },
  {
    name: "frc1884-scouting",
    href: "https://github.com/FRC1884/frc1884-scouting",
    ownership: "team",
    language: "TypeScript",
    updatedAt: "2026-03-24",
  },
  {
    name: "frc1884-strategy",
    href: "https://github.com/FRC1884/frc1884-strategy",
    ownership: "team",
    language: "JavaScript",
    updatedAt: "2026-03-22",
  },
  {
    name: "Season2026",
    href: "https://github.com/FRC1884/Season2026",
    ownership: "team",
    language: "Java",
    updatedAt: "2026-03-17",
  },
  {
    name: "FRCHeatmap",
    href: "https://github.com/FRC1884/FRCHeatmap",
    ownership: "team",
    language: "Python",
    updatedAt: "2026-03-13",
  },
  {
    name: "attendance-appsscript",
    href: "https://github.com/FRC1884/attendance-appsscript",
    ownership: "team",
    language: "JavaScript",
    description: "Attendance tracking via Google Apps Script",
    updatedAt: "2026-02-08",
  },
  {
    name: "PRE-Season2026",
    href: "https://github.com/FRC1884/PRE-Season2026",
    ownership: "team",
    language: "Java",
    updatedAt: "2026-01-26",
  },
  {
    name: "season2025",
    href: "https://github.com/FRC1884/season2025",
    ownership: "team",
    language: "Java",
    updatedAt: "2025-11-01",
  },
  {
    name: ".github",
    href: "https://github.com/FRC1884/.github",
    ownership: "team",
    language: "None",
    updatedAt: "2025-09-06",
  },
  {
    name: "season2024",
    href: "https://github.com/FRC1884/season2024",
    ownership: "team",
    language: "Java",
    description: "Official 2024 code for frc team 1884",
    updatedAt: "2024-04-10",
  },
  {
    name: "actual-preseason2024",
    href: "https://github.com/FRC1884/actual-preseason2024",
    ownership: "team",
    language: "Java",
    description: "Fixed version mismatches",
    updatedAt: "2023-12-04",
  },
  {
    name: "practice2024",
    href: "https://github.com/FRC1884/practice2024",
    ownership: "team",
    language: "Java",
    updatedAt: "2023-11-17",
  },
  {
    name: "preseason2024",
    href: "https://github.com/FRC1884/preseason2024",
    ownership: "team",
    language: "Java",
    description: "1884 and 1797 Pre-season folder for FRC",
    updatedAt: "2023-11-13",
  },
  {
    name: "1884-template",
    href: "https://github.com/FRC1884/1884-template",
    ownership: "team",
    language: "Java",
    updatedAt: "2023-09-03",
  },
  {
    name: "season-2023",
    href: "https://github.com/FRC1884/season-2023",
    ownership: "team",
    language: "Java",
    updatedAt: "2023-09-03",
  },
  {
    name: "post-2023",
    href: "https://github.com/FRC1884/post-2023",
    ownership: "team",
    language: "Java",
    description: "FRC Post season in 2023",
    updatedAt: "2023-05-23",
  },
  {
    name: "preseason-2023",
    href: "https://github.com/FRC1884/preseason-2023",
    ownership: "team",
    language: "Java",
    updatedAt: "2022-12-02",
  },
  {
    name: "practice-2023",
    href: "https://github.com/FRC1884/practice-2023",
    ownership: "team",
    language: "Java",
    updatedAt: "2022-11-28",
  },
];
