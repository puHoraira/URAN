const research = [
  {
    id: 'slam',
    category: 'Perception',
    status: 'Open for exploration',
    statusDetail: 'A future student or collaborator can lead this direction.',
    title: 'Localization, Mapping & Sensor Fusion',
    summary:
      'Robust state estimation for UAVs that must understand where they are when GPS is unreliable, unavailable, or not precise enough for the mission.',
    methods: ['Visual-inertial estimation', 'LiDAR and camera fusion', 'GPS-denied operation'],
    details: 'This direction will study how an aerial vehicle estimates its position and builds an understanding of its surroundings when GPS is weak or unavailable. It is open for a focused student project involving simulation, datasets, or flight experiments.',
  },
  {
    id: 'navigation',
    category: 'Autonomy',
    status: 'Open for exploration',
    statusDetail: 'Available for a future navigation project.',
    title: 'Autonomous Navigation & Path Planning',
    summary:
      'Planning safe, efficient trajectories and reacting to obstacles in changing environments, with attention to real-time operation on practical platforms.',
    methods: ['Motion planning', 'Obstacle avoidance', 'Mission adaptation'],
    details: 'This direction will explore how UAVs choose safe and efficient routes, respond to obstacles, and adapt a mission when the environment changes. A future researcher could define the planning problem and validate it in simulation or on a real platform.',
  },
  {
    id: 'swarm',
    category: 'Coordination',
    status: 'Open for exploration',
    statusDetail: 'Waiting for a researcher to take the lead.',
    title: 'Swarm Robotics & Multi-UAV Coordination',
    summary:
      'Distributed strategies that let multiple aerial vehicles share tasks, maintain formations, and coordinate without depending on a single point of control.',
    methods: ['Formation control', 'Task allocation', 'Distributed decision-making'],
    details: 'This direction will investigate how multiple UAVs can coordinate tasks, maintain formations, and share decisions. It is reserved for future work when the group has the right platform, research question, and team to explore multi-UAV systems.',
  },
  {
    id: 'perception',
    category: 'Perception',
    status: 'Open for exploration',
    statusDetail: 'Available for future computer-vision work.',
    title: 'Computer Vision & Scene Understanding',
    summary:
      'Onboard perception for detecting, tracking, and interpreting objects and environments under real-time and resource-constrained conditions.',
    methods: ['Object detection', 'Visual tracking', 'Scene understanding'],
    details: 'This direction will develop onboard visual understanding for detection, tracking, and scene interpretation. Future work may focus on efficient models, local datasets, or perception under difficult lighting and weather conditions.',
  },
  {
    id: 'sensor-fusion',
    category: 'Intelligence',
    status: 'Current research',
    statusDetail: 'Part of the group\'s first active UAV research project.',
    title: 'Mission-Adaptive Edge AI for UAVs',
    summary:
      'A resource-aware autonomy framework that helps one UAV interpret different mission contexts, select the right capability, and execute tasks through onboard intelligence.',
    methods: ['Multimodal context', 'Dynamic LoRA adapters', 'Mission Controller', 'PX4 and MAVLink'],
    details: 'The current research investigates how a single UAV can support multiple mission domains instead of depending on one fixed intelligence configuration. Natural-language commands, recent command history, and visual context are combined to identify the operational context. The mission is then decomposed into ordered tasks, with specialized capabilities selected and changed as the mission progresses.',
    researchQuestion: 'How can a resource-constrained UAV dynamically select and coordinate the intelligence required for each mission task while maintaining continuous, safe flight execution?',
    architecture: [
      'Multimodal context: combine the current command, recent command history, and visual scene information.',
      'Domain classification: identify contexts such as agriculture, emergency response, or infrastructure inspection.',
      'Task decomposition: convert a high-level mission into ordered executable tasks.',
      'Dynamic adaptation: activate task- and domain-specific LoRA adapters around a shared compact language model.',
      'Mission execution: manage waypoints, progress, events, replanning, and capability transitions.',
      'Flight integration: communicate with PX4 through MAVLink while sensing, control, and safety functions continue independently.',
    ],
    systemNotes: [
      'Shared Qwen2.5-0.5B-Instruct backbone for resource-constrained deployment',
      'Five planned capability adapters: agriculture, emergency, inspection, navigation, and obstacle handling',
      'Mission state maintained across task transitions and runtime events',
      'Layered safety with obstacle handling, flight-controller failsafes, and human approval or override',
    ],
  },
  {
    id: 'control',
    category: 'Control',
    status: 'Open for exploration',
    statusDetail: 'Available for a future flight-control project.',
    title: 'Intelligent Flight Control',
    summary:
      'Learning-based and adaptive control methods for stable, responsive flight when the model is uncertain or the environment introduces disturbances.',
    methods: ['Adaptive control', 'Reinforcement learning', 'PX4 and MAVLink integration'],
    details: 'This direction will study robust flight control when the aircraft model is uncertain or disturbances affect the vehicle. It is a natural future project for work connecting learning, control theory, PX4, and real flight tests.',
  },
  {
    id: 'applications',
    category: 'Impact',
    status: 'Open for exploration',
    statusDetail: 'Waiting for a mission-focused researcher.',
    title: 'UAV Applications & Field Robotics',
    summary:
      'Translating autonomy research into useful systems for inspection, monitoring, mapping, emergency response, and other real-world aerial missions.',
    methods: ['Mission design', 'Field evaluation', 'Human-centered autonomy'],
    details: 'This direction will connect UAV autonomy with useful missions such as inspection, mapping, monitoring, and emergency response. A future researcher can help choose a real application and turn it into a measurable field study.',
  },
  {
    id: 'learning-control',
    category: 'Control',
    status: 'Open for exploration',
    statusDetail: 'Available for a future learning project.',
    title: 'Learning-Based Control',
    summary:
      'Reinforcement learning and adaptive control methods for robust flight control in the presence of disturbances and model uncertainty.',
    methods: ['Policy learning', 'Model uncertainty', 'Disturbance rejection'],
    details: 'This direction will investigate how learning-based controllers can improve flight performance while remaining stable and testable. It is open for a researcher interested in simulation, safe learning, and real-world validation.',
  },
]

export default research
