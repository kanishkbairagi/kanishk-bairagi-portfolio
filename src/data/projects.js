import jawamImage from '../assets/projects/Jawam.png';
import dataStructureImg from '../assets/projects/data-structure.png';
import project3 from '../assets/projects/project-3.png';
import notationsImg from '../assets/projects/notations.png';
import habitGraphImg from '../assets/projects/Habit-graph.png';
import data1Img from '../assets/data1.png';
import data2Img from '../assets/data2.png';

export const projects = [
    {
        id: 1,
        title: "Jawam Infotech Official Website",
        subtitle: "Enterprise React SPA with Asynchronous AI Streaming & Edge Performance",
        timeline: "Jun 2026 – Sep 2026",
        role: "Frontend Engineer Intern",
        association: "Associated with Jawam Infotech",
        associationShort: "Jawam Infotech",
        category: "Production",
        featured: true,
        deployment: "jawaminfotech.com",
        github: "https://github.com/kanishkbairagi/Jawam-project.git",
        demo: "https://jawaminfotech.com/",
        image: jawamImage,
        description: "Architected and engineered the company's enterprise single-page application (SPA) across 46 production routes. Designed route-based dynamic code splitting (React.lazy / Suspense) and an asset transcoding pipeline reducing media payload by ~72% (Lighthouse 96+, FCP < 1.1s). Built an asynchronous AI chat support feature featuring streaming token parsing, token-bounded context management, client-side session caching, and strict XSS sanitization.",
        highlights: [
            "Architected 46-route React SPA with route-level code splitting (React.lazy / Suspense), minimizing initial bundle footprint to <140KB",
            "Engineered asynchronous AI chat engine with streaming token rendering, client session management & fallback caching",
            "Designed media transcoding & responsive delivery pipeline, reducing streaming assets from ~45MB to ~8.2MB (~72%+ reduction)",
            "Achieved 96+ Lighthouse score across Core Web Vitals (FCP: 1.05s, LCP: 1.78s, CLS: 0.00)",
            "Hardened client input surfaces with client-side sanitization against XSS and isolated API credentials via edge proxying"
        ],
        metrics: [
            { label: "Core Web Vitals", value: "96+ Score" },
            { label: "Media Assets", value: "-72% Red." },
            { label: "Initial JS Bundle", value: "<140 KB" },
            { label: "Route Chunking", value: "46 Routes" }
        ],
        skills: [
            "React.js Architecture",
            "Asynchronous AI Streaming",
            "Dynamic Code Splitting",
            "Core Web Vitals & WebPerf",
            "Client Session Management",
            "XSS Sanitization & Security"
        ],
        extraSkillsCount: 4,
        caseStudy: {
            bannerTitle: "Technical Design Document (RFC) & Architecture Spec",
            bannerDescription: "Production engineering specification detailing asynchronous distributed stream parsing, route-based bundle splitting across 46 pages, Core Web Vitals optimization, and client-side security mitigation.",
            architectureTitle: "System & Data Flow Architecture",
            architectureNodes: [
                {
                    title: "Client Layer (SPA)",
                    desc: "46-route React architecture with dynamic imports, lazy chunk loading, and decoupled state hooks."
                },
                {
                    title: "Streaming AI Engine",
                    desc: "Asynchronous REST/SSE streaming interface parsing real-time tokens with client session caching."
                },
                {
                    title: "Asset & WebPerf Pipeline",
                    desc: "AVIF/WebP image pipeline and lazy pre-fetching reducing media payload by ~72% (FCP < 1.1s)."
                },
                {
                    title: "Security & Input Layer",
                    desc: "Client-side DOM sanitization against XSS, sanitized form dispatch, and edge API key isolation."
                }
            ],
            deepDives: [
                {
                    title: "Component & State Architecture",
                    problem: "Managing state, shared navigation contexts, and assets across 46 distinct enterprise pages without bloated initial bundle sizes or cascading re-renders.",
                    solution: "Implemented route-based dynamic code splitting using React.lazy and Suspense boundaries. Engineered lightweight custom hooks for local UI state and isolated session caching, keeping the initial gzipped JavaScript bundle under 140KB."
                },
                {
                    title: "Asynchronous AI Chat Streaming & Context Management",
                    problem: "Delivering instantaneous responses to prospective enterprise clients without UI freezing or token exhaustion.",
                    solution: "Integrated an asynchronous streaming interface that processes tokens as they arrive via chunked streams. Maintained conversation history within strict token bounds, accompanied by exponential backoff and optimistic client-side fallback caching."
                },
                {
                    title: "Network & Asset Optimization Pipeline",
                    problem: "13 high-definition hero video assets and dozens of graphics severely degraded First Contentful Paint and mobile loading times (~45MB uncompressed media payload).",
                    solution: "Engineered an automated asset transcoding workflow targeting modern WebP/AVIF formats with responsive srcset bindings. Introduced intersection-observer-based lazy loading, slashing streaming media footprint by ~72% to ~8.2MB while preserving an initial JS bundle under 140KB."
                },
                {
                    title: "Security, Sanitization & Standards",
                    problem: "Unsanitized user inquiries or raw streaming Markdown from the AI model risked Cross-Site Scripting (XSS) and client-side vulnerabilities.",
                    solution: "Implemented client-side sanitization on all input buffers and streamed AI Markdown prior to DOM insertion. Enforced semantic HTML5 landmarks and ARIA tags for WCAG 2.1 AA accessibility compliance."
                }
            ],
            benchmarksTitle: "Core Web Vitals & Quantified Performance Benchmarks",
            benchmarksSub: "Chrome Lighthouse Verified",
            benchmarks: [
                { metric: "Lighthouse Performance", value: "96 / 100", benchmark: "Target: > 90", status: "Pass" },
                { metric: "First Contentful Paint (FCP)", value: "1.05s", benchmark: "Target: < 1.8s", status: "Optimal" },
                { metric: "Largest Contentful Paint (LCP)", value: "1.78s", benchmark: "Target: < 2.5s", status: "Optimal" },
                { metric: "Cumulative Layout Shift (CLS)", value: "0.00", benchmark: "Target: < 0.10", status: "Optimal" },
                { metric: "Initial JS Bundle", value: "< 140 KB", benchmark: "Gzipped Entry Target: < 200 KB", status: "Optimal" },
                { metric: "Transcoded Media Assets", value: "8.2 MB", benchmark: "Raw Video/Images: ~45 MB", status: "-72% Compressed" }
            ]
        }
    },
    {
        id: 2,
        title: "Algorithmic State Engine & Data Structure Visualizer",
        subtitle: "Interactive Algorithmic Execution Platform & Pedagogical Complexity Visualizer",
        timeline: "2025",
        role: "Algorithm & Systems Engineering",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Interactive",
        featured: false,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/data-structure-visualizerr",
        demo: "https://data-structure-visualizerr.vercel.app",
        image: dataStructureImg,
        metaBadges: [
            "135+ Verified Users (8 Countries)",
            "O(log N) AVL Guaranteed",
            "Vercel Telemetry"
        ],
        description: "Architected an interactive algorithmic execution engine visualizing amortized complexity, self-balancing tree rotations, and graph shortest path algorithms. Features state machines demonstrating contiguous memory reallocation, AVL tree invariants, and Dijkstra edge relaxations.",
        overviewDescription: "Architected an interactive algorithmic execution engine visualizing amortized complexity, self-balancing tree rotations, and graph shortest path algorithms. Features state machines demonstrating contiguous memory reallocation, AVL tree invariants, and Dijkstra edge relaxations. Validated through production telemetry with 135+ international students testing runtime mechanics during algorithm coursework.",
        cardHighlights: [
            "Dynamic AVL Self-Balancing with 4 Rotation Archetypes (LL, RR, LR, RL) maintaining strict O(log N) search bounds.",
            "Dijkstra's Shortest Path Tree (SPT) with Real-Time Distance Vector Relaxation & Priority Queue simulation."
        ],
        highlights: [
            "Dynamic AVL Self-Balancing with 4 Rotation Archetypes (LL, RR, LR, RL) enforcing height bounds h < 1.44 log2(N+2).",
            "Dijkstra's Shortest Path Tree (SPT) with real-time distance-vector relaxation and Priority Queue extraction.",
            "Trie lexicographical traversal with sub-linear autocomplete prediction in O(L) time where L is word length.",
            "Amortized analysis demonstrator with buffer doubling (C -> 2C); evaluated by 135+ international student users across 8 countries with 82% mobile engagement."
        ],
        metrics: [
            { label: "Core ADTs", value: "7 Structures" },
            { label: "Engine", value: "State-Driven Invariant Engine" },
            { label: "Complexity", value: "Real-Time Big-O Instrumentation" }
        ],
        skills: [
            "Algorithm Analysis",
            "AVL Trees",
            "Graph Theory (Dijkstra)",
            "Trie",
            "State Machines",
            "React.js"
        ],
        extraSkillsCount: 4,
        telemetry: {
            title: "Production Telemetry & Real-World Adoption",
            description: "Empirical telemetry and interaction metrics collected from Vercel analytics demonstrating international student usage and cross-platform verification.",
            stats: [
                { label: "Verified Users", value: "135+ Students", sub: "Peak Interaction" },
                { label: "Interaction Sessions", value: "200+ Page Views", sub: "Algorithmic Runs" },
                { label: "Global Reach", value: "8 Countries", sub: "Multi-Region" },
                { label: "Mobile Responsiveness", value: "82% Mobile", sub: "Cross-Platform" }
            ],
            screenshots: [
                {
                    id: 1,
                    title: "Live Traffic & Interaction Peak",
                    metricBadge: "135+ Unique Visitors • 200+ Page Views",
                    image: data1Img,
                    caption: "Live Traffic Telemetry: 135+ verified student users and 200+ algorithmic interaction sessions."
                },
                {
                    id: 2,
                    title: "Geographic Distribution & Device Breakdown",
                    metricBadge: "8 Countries • 82% Mobile Responsiveness",
                    image: data2Img,
                    caption: "Global Demographics: Multi-region adoption across 8 countries (India, USA, UK, Switzerland, France, etc.) with 82% mobile & 17% desktop usage."
                }
            ]
        },
        caseStudy: {
            bannerTitle: "Technical Design Document (RFC) & Architecture Spec",
            bannerDescription: "Technical specification detailing the decoupled state execution engine, invariant-preserving tree-rotation math, priority queue-edge relaxations, and pedagogical amortized memory profiling.",
            architectureTitle: "Algorithmic Execution & State Machine Architecture",
            architectureNodes: [
                {
                    title: "Decoupled Execution Engine",
                    desc: "Asynchronous step scheduler separating computational invariant updates from DOM/SVG coordinate rendering."
                },
                {
                    title: "Self-Balancing AVL Engine",
                    desc: "Invariant enforcement tracking Balance Factor BF ∈ {-1, 0, 1} with dynamic LL, RR, LR, and RL rotations."
                },
                {
                    title: "Graph & Shortest Path Simulator",
                    desc: "Weighted graph simulator with greedy edge relaxation d[v] = min(d[v], d[u] + w(u,v)) and Priority Queue extraction."
                },
                {
                    title: "Amortized Buffer Instrumentation",
                    desc: "Physical contiguous memory allocation demonstrator tracking array buffer doubling (C → 2C) and memory writes."
                }
            ],
            deepDives: [
                {
                    title: "Tree Balancing Mechanics & Worst-Case Bounds",
                    problem: "Unbalanced BST insertions degrade search complexity to O(N), breaking predictable lookup guarantees for dynamic datasets.",
                    solution: "Engineered an AVL engine dynamically tracking Balance Factors (BF = h_L - h_R). Triggered 4 rotation archetypes (LL, RR, LR, RL) to enforce height bounds h ≤ 1.44 log2(N + 2), guaranteeing strict O(log N) search."
                },
                {
                    title: "Shortest Path & Distance Vector Relaxation",
                    problem: "Undergraduate students struggle to visualize concurrent Priority Queue state transitions and distance vector relaxations during graph traversal.",
                    solution: "Simulated Dijkstra's algorithm on weighted digraphs, visualizing greedy edge relaxations d[v] = min(d[v], d[u] + w(u,v)) alongside real-time distance vector tables and optimal Shortest Path Tree (SPT) reconstruction."
                },
                {
                    title: "Amortized Complexity via Memory Buffer Doubling",
                    problem: "Abstract mathematical aggregate analysis of amortized O(1) append costs is difficult to conceptualize without physical memory representation.",
                    solution: "Constructed an animated contiguous memory buffer visualizing size vs. capacity. Illustrated buffer overflow reallocations (C → 2C) and element copy costs, empirically validating amortized O(1) bounds."
                },
                {
                    title: "Trie Lexicographical Traversal & Prefix Search",
                    problem: "Sub-linear string lookups and dynamic autocomplete require multi-branch tree traversing with termination validation.",
                    solution: "Built a prefix tree (Trie) visualizer with isEndOfWord termination markers, prefix traversal path tracking, and live autocomplete prediction in O(L) time where L is word length."
                }
            ],
            benchmarksTitle: "Asymptotic Complexity & Execution Benchmarks",
            benchmarksSub: "Strict Worst-Case & Amortized Bounds",
            benchmarks: [
                { metric: "AVL SEARCH BOUND", value: "O(log N)", benchmark: "Guaranteed via 4 Rotations", status: "Optimal" },
                { metric: "DIJKSTRA COMPLEXITY", value: "O((V+E) log V)", benchmark: "Min-Heap / Priority Queue", status: "Optimal" },
                { metric: "TRIE LOOKUP TIME", value: "O(L)", benchmark: "Sub-linear Prefix Traversal", status: "Optimal" },
                { metric: "ARRAY APPEND COST", value: "Amortized O(1)", benchmark: "Verified via Buffer Doubling", status: "Optimal" },
                { metric: "RENDERING TARGET", value: "60 FPS", benchmark: "Throttled Async Frame Queue", status: "Optimal" },
                { metric: "ACADEMIC ADOPTION", value: "135+ Verified Users", benchmark: "8 Countries • Vercel Telemetry", status: "Telemetry" }
            ]
        }
    },
    {
        id: 3,
        title: "Emoji Mood Diary",
        subtitle: "Color adaptive emotion tracker and visual journal",
        timeline: "2025",
        role: "Frontend Developer",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Web Apps",
        featured: false,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/emoji-based-mood-diary-with-color-adaptive-themes.git",
        demo: "https://emoji-based-mood-diary-with-color-a.vercel.app/",
        image: project3,
        description: "Built an interactive mood tracking web application that allows users to select and record their emotions through an intuitive emoji based interface. Designed a colorful, responsive UI with emotion categories, themed components, and an engaging user experience. Deployed the application on Vercel for live access.",
        highlights: [
            "Intuitive emoji based interface to select, capture, and reflect on daily emotions",
            "Emotion categories with color adaptive themed components and vivid UI states",
            "Engaging user experience with animated micro transitions and journal history",
            "Deployed on Vercel with responsive mobile and desktop support"
        ],
        metrics: [
            { label: "Theme Engine", value: "Color-Adaptive" },
            { label: "Interface", value: "Emoji-Based" },
            { label: "Deployment", value: "Vercel" }
        ],
        skills: [
            "Responsive Web Design",
            "JavaScript",
            "React.js",
            "UI/UX Design",
            "Vercel Deployment",
            "State Management"
        ],
        extraSkillsCount: 4
    },
    {
        id: 4,
        title: "Topological Knowledge Graph & Information Retrieval (IR) Engine",
        subtitle: "Interactive Force-Directed Physics Graph & Okapi BM25 Ranking Workspace",
        timeline: "2025",
        role: "Systems & Information Retrieval Engineering",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Systems & Web",
        featured: false,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/notation-app.git",
        demo: "https://notation-app-six.vercel.app/",
        image: notationsImg,
        description: "Architected an algorithmic knowledge workspace integrating an HTML5 Canvas n-body Force-Directed Knowledge Graph Visualizer and an Okapi BM25 Information Retrieval (IR) engine. Features Coulomb repulsion and Hooke spring physics simulations, Degree Centrality scoring, Breadth-First Search (BFS) shortest-path pathfinding, an inverted index with a prefix Trie, and AST-based bidirectional [[WikiLink]] backlink resolution.",
        highlights: [
            "Force-Directed Physics on HTML5 Canvas: Coulomb repulsion, Hooke spring attraction & damping velocity relaxation",
            "Okapi BM25 Probabilistic Ranking: Non-linear term saturation (k1=1.2) & document length normalization (b=0.75)",
            "Inverted Index & Prefix Trie: Postings list mapping Map<Term, PostingsList> & O(L) prefix autocomplete suggestions",
            "Graph Theory Analytics: Degree Centrality CD(v) = deg(v)/(|V|-1) and BFS Shortest Path traversal in O(|V| + |E|)",
            "AST-Driven Knowledge Graph: Bidirectional [[WikiLink]] resolution with an inbound backlinks drawer and query diagnostics HUD"
        ],
        metrics: [
            { label: "Graph Engine", value: "Force-Directed G=(V,E)" },
            { label: "Search Engine", value: "Okapi BM25 + Trie" },
            { label: "Pathfinding", value: "BFS O(|V|+|E|)" },
            { label: "Prefix Trie", value: "O(L) Lookups" }
        ],
        skills: [
            "Graph Theory (BFS)",
            "Information Retrieval (BM25)",
            "Prefix Trie",
            "Inverted Index",
            "HTML5 Canvas API",
            "AST Data Structures",
            "React.js"
        ],
        extraSkillsCount: 3,
        caseStudy: {
            bannerTitle: "Technical Design Document (RFC) & Information Retrieval Architecture Spec",
            bannerDescription: "Technical specification detailing the n-body force-directed physics simulation, probabilistic Okapi BM25 scoring function, prefix Trie postings index, and AST graph linking mechanisms.",
            architectureTitle: "Knowledge Graph & Information Retrieval Pipeline",
            architectureNodes: [
                {
                    title: "Physics Simulation Engine",
                    desc: "HTML5 Canvas n-body relaxation engine modeling Coulomb repulsion (Fr = kr / r²) and Hooke spring attraction (Fa = ks(d - l₀)) with velocity damping."
                },
                {
                    title: "Okapi BM25 Ranking Core",
                    desc: "Lexical tokenizer producing an Inverted Index (Term → Postings) evaluated via Okapi BM25 statistical scoring (k1=1.2, b=0.75)."
                },
                {
                    title: "Prefix Trie Autocomplete",
                    desc: "Multi-branch Trie structure storing vocabulary stems for sub-linear prefix lookups in O(L) time, bypassing full document scans."
                },
                {
                    title: "AST & Bidirectional WikiLinks",
                    desc: "Block-level Abstract Syntax Tree parser mapping bidirectional [[WikiLink]] references into an adjacency list G=(V, E) with backlinks drawer."
                }
            ],
            deepDives: [
                {
                    title: "Force-Directed Physics & Canvas Relaxation Engine",
                    problem: "Real-time layout of interconnected document graphs without edge tangling, overlap, or jitter required a stable numerical integration model running at 60 FPS.",
                    solution: "Engineered an n-body relaxation solver simulating Coulomb repulsive forces between all node pairs and Hooke spring tension along active edges. Applied velocity damping (μ = 0.85) and kinetic energy cutoffs to bring the topological graph into aesthetic equilibrium."
                },
                {
                    title: "Okapi BM25 Probabilistic Ranking vs. Naive Substrings",
                    problem: "Standard naive regex or includes() matching fails to account for term importance, query frequency saturation, and document length bias.",
                    solution: "Constructed an Inverted Index and implemented the Okapi BM25 statistical scoring model (k1 = 1.2, b = 0.75). Implemented Query Diagnostics Inspector modal to profile Term Frequency (TF), Inverse Document Frequency (IDF), and per-token score contributions in real time."
                },
                {
                    title: "Prefix Trie Autocomplete & Inverted Postings Lists",
                    problem: "Searching across multi-thousand token knowledge bases on every keystroke incurs O(N × M) scan latency, causing input frame drops.",
                    solution: "Decoupled search into a Prefix Trie for O(L) query completion and an Inverted Postings list mapping token hashes to document pointers. Reduced average search query latency to sub-2ms."
                },
                {
                    title: "Degree Centrality Analysis & BFS Shortest Path Traversal",
                    problem: "Users exploring sprawling research notes struggle to navigate semantic distances or identify pivotal high-importance hub topics.",
                    solution: "Implemented Degree Centrality analysis CD(v) = deg(v) / (|V| - 1) to dynamically size node radii, and integrated a Breadth-First Search (BFS) pathfinder computing the shortest semantic hop sequence in O(|V| + |E|) time."
                }
            ],
            benchmarksTitle: "Information Retrieval & Graph Complexity Benchmarks",
            benchmarksSub: "Algorithmic Invariants & Sub-Millisecond Profiling",
            benchmarks: [
                { metric: "Search Latency", value: "< 1.8 ms", benchmark: "Inverted Index + Trie", status: "Optimal" },
                { metric: "BM25 Scoring", value: "k1=1.2, b=0.75", benchmark: "Probabilistic Relevance Model", status: "Optimal" },
                { metric: "BFS Pathfinding", value: "O(|V| + |E|)", benchmark: "Shortest Path Traversal", status: "Optimal" },
                { metric: "Prefix Lookup", value: "O(L)", benchmark: "Trie Stem Autocomplete", status: "Optimal" },
                { metric: "Graph Simulation", value: "60 FPS", benchmark: "Damped Euler Numerical Solver", status: "Optimal" },
                { metric: "Centrality Metric", value: "Degree CD(v)", benchmark: "Hub Node Identification", status: "Optimal" }
            ]
        }
    },
    {
        id: 5,
        title: "Visual Habit Graph (VHG)",
        subtitle: "Directed Acyclic Graph (DAG) Routine Engine & Behavioral Optimization System",
        timeline: "2025",
        role: "Full-Stack Software Engineer",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Full-Stack & Systems",
        featured: false,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/visual-habit-graph.git",
        demo: "https://visual-habit-graph.vercel.app/",
        image: habitGraphImg,
        metaBadges: [
            "MERN Architecture",
            "O(|V| + |E|) Invariant Verified"
        ],
        description: "A Directed Acyclic Graph (DAG) behavioral optimization engine modeling habit prerequisites. Implements real-time O(|V| + |E|) cycle prevention, Kahn’s topological sort, and Critical Path Method (CPM) bottleneck analysis over a MERN stack.",
        highlights: [
            "Formal DAG Invariants: Engineered an O(|V| + |E|) 3-Color DFS cycle detection engine to prevent circular deadlocks.",
            "Topological Stratification: Implemented Kahn's algorithm to resolve linear milestone execution and unlock queues.",
            "Critical Path Method (CPM) Bottleneck Detection: Formulated daily routine optimization using forward and backward dynamic programming passes over the DAG, identifying zero-slack critical paths and cumulative bottleneck durations.",
            "Decoupled Full-Stack Architecture with Time-Series Persistence: Built a decoupled Node.js/Express REST API backed by MongoDB schemas for graph topologies and UTC-normalized habit completion logs, maintaining streak idempotency."
        ],
        metrics: [
            { label: "Graph Model", value: "Directed Acyclic Graph (DAG)" },
            { label: "Optimization", value: "Critical Path Method (CPM)" },
            { label: "Full-Stack", value: "MERN + D3.js SVG Engine" }
        ],
        skills: [
            "Directed Acyclic Graphs (DAG)",
            "Algorithms (DFS/Kahn's)",
            "Critical Path Method (CPM)",
            "Node.js",
            "Express.js",
            "MongoDB",
            "React.js",
            "D3.js",
            "REST APIs"
        ],
        extraSkillsCount: 3,
        caseStudy: {
            bannerTitle: "Technical Design Document (RFC) & Graph Optimization Spec",
            bannerDescription: "Production architectural design modeling routine dependencies as Directed Acyclic Graphs (DAGs), enforcing 3-color DFS cycle invariants, Kahn's topological stratification, and Critical Path Method (CPM) dynamic programming.",
            architectureTitle: "Full-Stack DAG & Behavioral Optimization Pipeline",
            architectureNodes: [
                {
                    title: "Client & D3.js Canvas",
                    desc: "React 18 frontend with interactive D3.js SVG canvas rendering DAG node topologies, topological strata, and golden critical paths."
                },
                {
                    title: "REST API & Ingestion",
                    desc: "Node.js / Express API controller handling payload sanitization, idempotency keys, and UTC-normalized timestamp serialization."
                },
                {
                    title: "Graph Algorithmic Engine",
                    desc: "Core algorithmic service executing 3-Color DFS cycle rejection, Kahn's in-degree zero queue, and CPM forward/backward passes in O(|V| + |E|)."
                },
                {
                    title: "Persistence Layer",
                    desc: "MongoDB collections storing HabitGraph (adjacency list, durations, weights) and HabitLog (time-series completion records)."
                }
            ],
            deepDives: [
                {
                    title: "Preventing Dependency Deadlocks (3-Color DFS)",
                    problem: "In a dynamic graph where users define arbitrary dependencies, users might introduce circular dependencies (e.g., A → B → C → A), creating an unresolvable deadlock where no habit can ever be unlocked.",
                    solution: "Implemented a 3-Color Depth-First Search cycle detection engine: Vertices are categorized into WHITE (unvisited), GRAY (in current recursion stack), and BLACK (fully explored). If a directed traversal encounters a GRAY vertex, a back-edge is proven to exist. The server aborts invalid edge mutations with HTTP status 400 Bad Request and returns the reconstructed cycle path sequence in O(|V| + |E|) time."
                },
                {
                    title: "Determining Execution Strata (Kahn’s Algorithm)",
                    problem: "The system must compute which habits are ready to execute immediately and linearize unlock tiers without evaluating every node on every click.",
                    solution: "Implemented Kahn’s Algorithm using an in-degree zero queue: Evaluates indegree counts and assigns discrete topological strata: Level(v) = max(Level(u)) + 1 for all (u,v) ∈ E. Guarantees that any habit only unlocks once all parent nodes in the adjacency list are satisfied in O(|V| + |E|) time."
                },
                {
                    title: "Finding Bottlenecks via Critical Path Method (CPM)",
                    problem: "Users need to know which prerequisite habit chain represents the primary bottleneck constraining total daily routine completion ('Which habits are holding back my entire day the most?').",
                    solution: "Formulated a two-pass Dynamic Programming scheduler over the DAG: Forward Pass calculates Earliest Start (ES) and Earliest Finish (EF). Backward Pass calculates Latest Finish (LF) and Latest Start (LS). Slack is calculated as Slack(v) = LF(v) - EF(v). Any habit or edge where Slack = 0 is classified as belonging to the Critical Path and rendered with a highlighted golden visual flow."
                },
                {
                    title: "Keystone Habit Centrality (Transitive Reachability)",
                    problem: "Quantifying high-leverage foundational habits that unlock the widest downstream sequence of productive behaviors.",
                    solution: "Using Breadth-First Search (BFS) over the directed adjacency list, the engine calculates the transitive closure size for every vertex in O(|V| · (|V| + |E|)). The habit with the highest transitive reach is designated the Keystone Habit, indicating the routine with the highest leverage on downstream success."
                }
            ],
            benchmarksTitle: "Algorithmic Complexity Matrix & Systems Benchmarks",
            benchmarksSub: "Asymptotic Guarantees & Verification Bounds",
            benchmarks: [
                { metric: "Cycle Prevention", value: "O(|V| + |E|)", benchmark: "3-Color DFS Back-Edge Traversal", status: "Optimal" },
                { metric: "Topological Sort", value: "O(|V| + |E|)", benchmark: "Kahn’s In-Degree Zero Queue", status: "Optimal" },
                { metric: "Bottleneck Discovery", value: "O(|V| + |E|)", benchmark: "Critical Path Method (CPM DP)", status: "Optimal" },
                { metric: "Keystone Centrality", value: "O(|V|·(|V|+|E|))", benchmark: "Transitive Reachability BFS", status: "Optimal" },
                { metric: "Auxiliary Space", value: "O(|V|)", benchmark: "State Machine & Call Stack", status: "Optimal" },
                { metric: "Stack Architecture", value: "MERN Stack", benchmark: "Node / Express / Mongo / React", status: "Full-Stack" }
            ]
        }
    }
];

export const contactInfo = {
    phone: "(+91) 9294769479",
    email: "kanishk.bairagi00@gmail.com",
    github: "https://github.com/kanishkbairagi",
    linkedin: "https://www.linkedin.com/in/kanishk-bairagi-bb20a641a/"
};
