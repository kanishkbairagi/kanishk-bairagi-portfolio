import jawamImage from '../assets/projects/Jawam.png';
import dataStructureImg from '../assets/projects/data-structure.png';
import project3 from '../assets/projects/project-3.png';
import notationsImg from '../assets/projects/notations.png';
import habitGraphImg from '../assets/projects/Habit-graph.png';
import data1Img from '../assets/data1.webp';
import data2Img from '../assets/data2.webp';
import note1Img from '../assets/note1.webp';
import note2Img from '../assets/note2.webp';

export const projects = [
    {
        id: 1,
        title: "Algorithmic State Engine & Data Structure Visualizer",
        subtitle: "Interactive Algorithmic State Engine & Invariant Visualizer",
        timeline: "2025",
        role: "Algorithm & Systems Engineering",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Algorithms",
        featured: true,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/data-structure-visualizerr",
        demo: "https://data-structure-visualizerr.vercel.app",
        image: dataStructureImg,
        metaBadges: [
            "151+ Verified Users (9 Countries)",
            "O(log N) AVL Guaranteed",
            "Vercel Telemetry"
        ],
        description: "Built an interactive execution engine to help students visualize abstract data structures and runtime invariants in real time. Features animated AVL tree self-balancing across all 4 rotation archetypes, Dijkstra's shortest path relaxation, and contiguous dynamic array buffer doubling (C -> 2C). Validated by 151+ international students across 9 countries.",
        overviewDescription: "Built an interactive execution engine to help students visualize abstract data structures and runtime invariants in real time. Features animated AVL tree self-balancing across all 4 rotation archetypes, Dijkstra's shortest path relaxation, and contiguous dynamic array buffer doubling (C -> 2C). Validated by 151+ international students across 9 countries during computer science coursework.",
        cardHighlights: [
            "Dynamic AVL Self-Balancing with 4 Rotation Archetypes (LL, RR, LR, RL) maintaining strict O(log N) search bounds.",
            "Dijkstra's Shortest Path Tree (SPT) with Real-Time Distance Vector Relaxation & Priority Queue simulation."
        ],
        highlights: [
            "Dynamic AVL Self-Balancing with 4 Rotation Archetypes (LL, RR, LR, RL) enforcing height bounds h < 1.44 log2(N+2).",
            "Dijkstra's Shortest Path Tree (SPT) with real-time distance-vector relaxation and Priority Queue extraction.",
            "Trie lexicographical traversal with prefix search in O(L) time where L is word length.",
            "Amortized analysis demonstrator with buffer doubling (C -> 2C); evaluated by 151+ international student users across 9 countries with 79% mobile engagement."
        ],
        metrics: [
            { label: "Global Users", value: "151+ Students", sub: "Across 9 Countries" },
            { label: "Core ADTs", value: "7 Structures", sub: "AVL, Graph, Trie & Arrays" },
            { label: "Tree Invariant", value: "O(log N)", sub: "Dynamic AVL Self-Balancing" },
            { label: "Complexity", value: "Real-Time Big-O", sub: "Zero-Overhead Profiling" }
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
            badgeText: "151+ Users Across 9 Countries",
            description: "Empirical telemetry and interaction metrics collected from Vercel analytics demonstrating global adoption.",
            stats: [
                { label: "Verified Users", value: "151+ Students", sub: "Production Users" },
                { label: "Interaction Sessions", value: "230+ Page Views", sub: "Algorithmic Runs" },
                { label: "Global Reach", value: "9 Countries", sub: "India, US, UK & EU" },
                { label: "Mobile Responsiveness", value: "79% Mobile", sub: "Cross-Platform" }
            ],
            screenshots: [
                {
                    id: 1,
                    title: "Live Telemetry",
                    metricBadge: "151+ Unique Students • 230+ Page Views",
                    metricBadgeMobile: "151+ Students • 230+ Views",
                    image: data1Img,
                    caption: "Live Traffic Telemetry: 151+ verified unique students and 230+ algorithmic interaction page views."
                },
                {
                    id: 2,
                    title: "Global Reach",
                    metricBadge: "9 Countries • 79% Mobile Responsiveness",
                    metricBadgeMobile: "9 Countries • 79% Mobile",
                    image: data2Img,
                    caption: "Global Demographics: Multi-region adoption across 9 countries (India: 134, USA: 9, UK: 2, Netherlands: 2, Switzerland, France, Philippines, Poland, Singapore) with 79% mobile & 20% desktop usage."
                }
            ]
        },
        caseStudy: {
            bannerTitle: "Technical Design Document (RFC) & Architecture Spec",
            bannerDescription: "Technical design document detailing the asynchronous animation queue, AVL self-balancing rotations, Dijkstra shortest-path relaxations, and dynamic array buffer doubling.",
            architectureTitle: "Algorithmic Execution & State Machine Architecture",
            architectureNodes: [
                {
                    title: "Decoupled Execution Engine",
                    desc: "Asynchronous step queue separating computational invariant updates from DOM/SVG coordinate rendering."
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
                    desc: "Contiguous memory allocation demonstrator tracking array buffer doubling (C → 2C) and memory writes."
                }
            ],
            deepDives: [
                {
                    title: "Tree Balancing Mechanics & Worst-Case Bounds",
                    problem: "In an unbalanced BST, sequential insertions degrade search complexity to O(N), breaking predictable lookup guarantees for dynamic datasets.",
                    solution: "Implemented an AVL tree that tracks the balance factor BF = h_L - h_R after every insertion. When |BF| > 1, the engine applies one of 4 rotation cases (LL, RR, LR, RL) to enforce height bounds h ≤ 1.44 log2(N + 2), guaranteeing strict O(log N) search."
                },
                {
                    title: "Shortest Path & Distance Vector Relaxation",
                    problem: "Understanding how Dijkstra's algorithm uses a priority queue to iteratively relax edges and maintain distance vectors is difficult without step-by-step visual feedback.",
                    solution: "Simulated Dijkstra's algorithm on weighted digraphs, visualizing greedy edge relaxations d[v] = min(d[v], d[u] + w(u,v)) alongside real-time distance vector tables and optimal Shortest Path Tree (SPT) reconstruction."
                },
                {
                    title: "Amortized Complexity via Memory Buffer Doubling",
                    problem: "Proving why dynamic array appending is amortized O(1) despite occasional expensive memory reallocations is unintuitive for students.",
                    solution: "Constructed an animated contiguous memory buffer visualizing size vs. capacity. Illustrated buffer overflow reallocations (C → 2C) and element copy costs, empirically validating amortized O(1) bounds."
                },
                {
                    title: "Trie Lexicographical Traversal & Prefix Search",
                    problem: "Prefix queries and dynamic autocomplete require multi-branch tree traversing with termination validation.",
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
                { metric: "ACADEMIC ADOPTION", value: "151+ Verified Users", benchmark: "9 Countries • Vercel Telemetry", status: "Telemetry" }
            ]
        }
    },
    {
        id: 2,
        title: "Topological Knowledge Graph & Information Retrieval (IR) Engine",
        subtitle: "Interactive Force-Directed Physics Graph & Okapi BM25 Ranking Workspace",
        timeline: "2025",
        role: "Systems & Information Retrieval Engineering",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Systems",
        featured: false,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/notation-app.git",
        demo: "https://notation-app-six.vercel.app/",
        image: notationsImg,
        metaBadges: [
            "70+ Verified Users (7 Countries)",
            "BM25 Sub-2ms Queries",
            "Vercel Telemetry"
        ],
        description: "A graph-based knowledge base that combines an interactive force-directed graph with an Okapi BM25 search engine. Simulates graph layout using Coulomb repulsion and Hooke spring physics on HTML5 Canvas at 60 FPS. Features sub-2ms search queries powered by an inverted index and prefix Trie, along with BFS shortest-path traversal between connected notes. Evaluated by 70+ users across 7 countries.",
        overviewDescription: "A graph-based knowledge base combining an interactive force-directed graph with an Okapi BM25 search engine. Simulates graph layout using Coulomb repulsion and Hooke spring physics on HTML5 Canvas at 60 FPS with sub-2ms queries. Validated by 70+ global users across 7 countries.",
        highlights: [
            "Force-Directed Physics on HTML5 Canvas: Coulomb repulsion, Hooke spring attraction & damping velocity relaxation at 60 FPS",
            "Okapi BM25 Probabilistic Ranking: Calibrated term saturation (k1=1.2) and document length normalization (b=0.75)",
            "Inverted Index & Prefix Trie: In-memory postings list Map<Term, PostingsList> with sub-2ms O(L) prefix autocomplete",
            "Graph Theory Analytics: Degree Centrality CD(v) = deg(v)/(|V|-1) and BFS Shortest Path traversal in O(|V| + |E|)",
            "AST-Driven Knowledge Graph: Bidirectional [[WikiLink]] parsing into an adjacency list with backlinks drawer; verified by 70+ students across 7 countries with 75% mobile usage."
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
        telemetry: {
            title: "Production Telemetry & Real-World Adoption",
            badgeText: "70+ Students Across 7 Countries",
            description: "Empirical telemetry collected from Vercel analytics demonstrating multi-region usage and engagement.",
            stats: [
                { label: "Verified Users", value: "70+ Students", sub: "Production Users" },
                { label: "Interaction Sessions", value: "112+ Page Views", sub: "Graph Explorations" },
                { label: "Global Reach", value: "7 Countries", sub: "India, US, EU, BR" },
                { label: "Mobile Responsiveness", value: "75% Mobile", sub: "Cross-Platform" }
            ],
            screenshots: [
                {
                    id: 1,
                    title: "Live Telemetry",
                    metricBadge: "70+ Unique Students • 112+ Page Views",
                    metricBadgeMobile: "70+ Students • 112+ Views",
                    image: note1Img,
                    caption: "Live Traffic Telemetry: 70+ verified unique students and 112+ knowledge graph interaction sessions."
                },
                {
                    id: 2,
                    title: "Global Reach",
                    metricBadge: "7 Countries • 75% Mobile Responsiveness",
                    metricBadgeMobile: "7 Countries • 75% Mobile",
                    image: note2Img,
                    caption: "Global Demographics: Multi-region adoption across 7 countries (India: 42, USA: 4, Brazil, Germany, Spain, France, Greece, Sweden) with 75% mobile & 25% desktop usage."
                }
            ]
        },
        caseStudy: {
            bannerTitle: "Technical Design Document (RFC) & Information Retrieval Architecture Spec",
            bannerDescription: "Technical design document detailing the HTML5 Canvas physics solver, Okapi BM25 search engine, prefix Trie autocomplete, and bidirectional graph backlinks.",
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
                    problem: "Laying out interconnected note graphs automatically without overlapping nodes or erratic visual jitter required an efficient numerical simulation running at 60 FPS.",
                    solution: "Implemented an n-body force-directed solver using Coulomb repulsion between all nodes and Hooke spring attraction along edges. Applied velocity damping (μ = 0.85) and a kinetic energy cutoff to stabilize the graph into equilibrium."
                },
                {
                    title: "Okapi BM25 Probabilistic Ranking vs. Naive Substrings",
                    problem: "Basic substring search (includes()) ranks matches arbitrarily, ignoring term rarity, repetition saturation, and document length bias.",
                    solution: "Constructed an Inverted Index and implemented the Okapi BM25 statistical scoring model (k1 = 1.2, b = 0.75). Implemented Query Diagnostics Inspector modal to profile Term Frequency (TF), Inverse Document Frequency (IDF), and per-token score contributions in real time."
                },
                {
                    title: "Prefix Trie Autocomplete & Inverted Postings Lists",
                    problem: "Scanning across multi-thousand-token documents on every keystroke causes search input lag and frame drops.",
                    solution: "Decoupled search into a Prefix Trie for O(L) query completion and an Inverted Postings list mapping token hashes to document pointers. Reduced average search query latency to sub-2ms."
                },
                {
                    title: "Degree Centrality Analysis & BFS Shortest Path Traversal",
                    problem: "Navigating large graph clusters makes it difficult to assess note importance or find the shortest connection between two related concepts.",
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
                { metric: "Centrality Metric", value: "Degree CD(v)", benchmark: "Hub Node Identification", status: "Optimal" },
                { metric: "GLOBAL ADOPTION", value: "70+ Verified Users", benchmark: "7 Countries • Vercel Telemetry", status: "Telemetry" }
            ]
        }
    },
    {
        id: 3,
        title: "Visual Habit Graph (VHG)",
        subtitle: "Directed Acyclic Graph (DAG) Routine Engine & Behavioral Optimization System",
        timeline: "2025",
        role: "Full-Stack Software Engineer",
        association: "Associated with LNCT, Indore",
        associationShort: "LNCT, Indore",
        category: "Systems",
        featured: false,
        deployment: "Vercel Live",
        github: "https://github.com/kanishkbairagi/visual-habit-graph.git",
        demo: "https://visual-habit-graph.vercel.app/",
        image: habitGraphImg,
        metaBadges: [
            "MERN Architecture",
            "O(|V| + |E|) Invariant Verified"
        ],
        description: "Full-stack routine planner that models daily habit dependencies as a Directed Acyclic Graph (DAG). Enforces cycle prevention using a 3-Color DFS algorithm in O(|V| + |E|) time, computes linear unlock queues with Kahn's topological sort, and identifies routine bottlenecks using the Critical Path Method (CPM).",
        highlights: [
            "DAG Invariant Enforcement: 3-Color DFS cycle detection rejecting circular dependencies in O(|V| + |E|) time",
            "Topological Stratification: Kahn's in-degree queue calculating execution unlock tiers across prerequisite habits",
            "Critical Path Method (CPM): Dynamic programming forward/backward passes identifying zero-slack routine bottlenecks",
            "Full-Stack MERN Architecture: Decoupled Express REST API, MongoDB time-series persistence, and interactive D3.js canvas"
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
            bannerDescription: "Technical design document detailing routine dependency modeling using Directed Acyclic Graphs (DAGs), 3-color DFS cycle detection, Kahn's algorithm, and Critical Path Method (CPM) dynamic programming.",
            architectureTitle: "Full-Stack DAG & Behavioral Optimization Pipeline",
            architectureNodes: [
                {
                    title: "Client & D3.js Canvas",
                    desc: "React frontend with interactive D3.js SVG canvas rendering DAG node topologies and the critical path."
                },
                {
                    title: "REST API & Ingestion",
                    desc: "Node.js / Express API controller handling payload validation, idempotency keys, and UTC timestamp serialization."
                },
                {
                    title: "Graph Algorithmic Engine",
                    desc: "Core algorithmic service executing 3-Color DFS cycle rejection, Kahn's in-degree queue, and CPM passes in O(|V| + |E|)."
                },
                {
                    title: "Persistence Layer",
                    desc: "MongoDB collections storing HabitGraph (adjacency list, durations, weights) and HabitLog (completion records)."
                }
            ],
            deepDives: [
                {
                    title: "Preventing Dependency Deadlocks (3-Color DFS)",
                    problem: "In a dynamic graph where users define arbitrary dependencies, circular dependencies (e.g., A → B → C → A) create deadlocks where prerequisite requirements can never be satisfied.",
                    solution: "Enforced DAG invariants using 3-Color Depth-First Search. Nodes are classified into WHITE (unvisited), GRAY (currently in recursion stack), and BLACK (fully explored). If traversal reaches a GRAY node, a cycle back-edge is detected. The server rejects the mutation with HTTP 400 in O(|V| + |E|) time and returns the offending cycle path."
                },
                {
                    title: "Determining Execution Strata (Kahn’s Algorithm)",
                    problem: "Calculating which habits are unlocked and ready for execution requires an efficient topological ordering that updates without re-evaluating the entire graph on every action.",
                    solution: "Implemented Kahn's Algorithm using an in-degree queue. Computes prerequisite tiers in O(|V| + |E|) time, ensuring a habit only unlocks once all incoming parent dependencies in the adjacency list are satisfied."
                },
                {
                    title: "Finding Bottlenecks via Critical Path Method (CPM)",
                    problem: "Users need to identify the exact sequence of prerequisite habits that constrains total daily routine completion.",
                    solution: "Formulated a two-pass dynamic programming algorithm over the DAG: a Forward Pass to compute Earliest Start/Finish (ES, EF) and a Backward Pass for Latest Start/Finish (LS, LF). Nodes with zero slack (Slack = LF - EF = 0) form the Critical Path and are highlighted on the canvas as primary routine bottlenecks."
                },
                {
                    title: "Keystone Habit Centrality (Transitive Reachability)",
                    problem: "Identifying high-leverage foundational habits that unlock the widest downstream sequence of productive behaviors.",
                    solution: "Using Breadth-First Search (BFS) over the directed adjacency list, the engine calculates the transitive closure size for every vertex in O(|V| · (|V| + |E|)). The habit with the highest transitive reach is designated the Keystone Habit."
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
    },
    {
        id: 4,
        title: "Jawam Infotech Official Website",
        subtitle: "Enterprise React SPA with Asynchronous AI Streaming & Edge Performance",
        timeline: "Jun 2026 – Sep 2026",
        role: "Frontend Engineer Intern",
        association: "Associated with Jawam Infotech",
        associationShort: "Jawam Infotech",
        category: "Production",
        featured: false,
        deployment: "jawaminfotech.com",
        github: "https://github.com/kanishkbairagi/Jawam-project.git",
        demo: "https://jawaminfotech.com/",
        image: jawamImage,
        description: "Engineered the primary company web application spanning 46 production routes. Implemented route-level code splitting to cut initial bundle size under 140KB, automated media compression to shrink assets from 45MB to 8.2MB, and built a streaming AI customer support assistant with client-side XSS sanitization.",
        highlights: [
            "Engineered 46-route React SPA with route-level code splitting (React.lazy / Suspense), keeping initial bundle under 140KB",
            "Built streaming AI chat widget with chunked token parsing, client-side session caching, and fallback states",
            "Automated video and image transcoding to WebP/AVIF, reducing media payload from ~45MB to ~8.2MB (~72% reduction)",
            "Achieved 96+ Lighthouse score across Core Web Vitals (FCP: 1.05s, LCP: 1.78s, CLS: 0.00)",
            "Sanitized input surfaces against XSS and isolated third-party API credentials behind edge proxies"
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
            bannerDescription: "Technical design document detailing route-based dynamic imports across 46 pages, streaming AI response handling, automated asset compression, and client-side input sanitization.",
            architectureTitle: "System & Data Flow Architecture",
            architectureNodes: [
                {
                    title: "Client Layer (SPA)",
                    desc: "46-route React architecture with dynamic imports, lazy chunk loading, and custom state hooks."
                },
                {
                    title: "Streaming AI Engine",
                    desc: "REST/SSE streaming interface parsing real-time tokens with client session caching."
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
                    problem: "A 46-page enterprise SPA without code splitting would yield a multi-megabyte bundle, causing slow initial page loads and high bounce rates.",
                    solution: "Used React.lazy and Suspense boundaries at the route level to split code into on-demand chunks. Kept shared navigation state in lightweight custom hooks, reducing the initial gzipped JavaScript bundle to under 140KB."
                },
                {
                    title: "Asynchronous AI Chat Streaming & Context Management",
                    problem: "Waiting for complete LLM responses over standard REST requests caused long loading delays and poor user feedback.",
                    solution: "Connected the chat widget to an asynchronous streaming endpoint that renders tokens chunk by chunk as they arrive. Implemented client-side session caching and bounded chat history to prevent memory leaks and token limit overruns."
                },
                {
                    title: "Network & Asset Optimization Pipeline",
                    problem: "13 high-definition hero videos and uncompressed graphics totaled ~45MB, severely degrading First Contentful Paint on mobile networks.",
                    solution: "Engineered an automated asset transcoding workflow targeting modern WebP/AVIF formats with responsive srcset bindings. Introduced intersection-observer-based lazy loading, slashing streaming media footprint by ~72% to ~8.2MB while preserving an initial JS bundle under 140KB."
                },
                {
                    title: "Security, Sanitization & Standards",
                    problem: "Unsanitized user inquiries or raw streaming Markdown from the AI model risked Cross-Site Scripting (XSS) and client-side DOM vulnerabilities.",
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
        id: 5,
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
        description: "A responsive mood journal featuring color-adaptive theme switching based on logged emotional states. Built with React and local storage for client-side persistence and animated state transitions.",
        highlights: [
            "Emoji-driven emotional logging with localized state persistence",
            "Dynamic color-adaptive themes mapping emotion vectors to UI palette transitions",
            "Animated transitions with Framer Motion and persistent journal history",
            "Fully responsive layout deployed on Vercel"
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
    }
];

export const contactInfo = {
    phone: "(+91) 9294769479",
    email: "kanishk.bairagi00@gmail.com",
    github: "https://github.com/kanishkbairagi",
    linkedin: "https://www.linkedin.com/in/kanishk-bairagi-bb20a641a/"
};
