import { assetPath } from '../utils/assetPath.js'

const projects = [
  {
    id: 'mission-adaptive-uav',
    status: 'In development',
    title: 'Mission-Adaptive Autonomous UAV System',
    summary:
      'A research platform for UAVs that can interpret mission context, select appropriate capabilities, and execute flight tasks on practical onboard hardware.',
    description:
      'This project explores how perception, language-guided mission understanding, planning, and flight control can work together in one dependable aerial system. The platform is being developed as a foundation for future experiments across navigation, inspection, monitoring, and other UAV missions.',
    overview:
      'The first URAN platform is a practical autonomous UAV system being developed through repeated indoor and outdoor flight experiments. The work focuses on making a real aircraft useful for research: understanding the mission, connecting software decisions to flight behavior, and learning from each test.',
    researchQuestion:
      'How can an aerial system combine onboard intelligence with dependable flight control so it can adapt to a mission without losing sight of real-world constraints?',
    approach: [
      'Build and test a multirotor platform in controlled and outdoor environments.',
      'Connect mission-level decisions with perception, planning, and flight-control capabilities.',
      'Study how compact onboard models can support useful autonomy under limited compute and communication.',
      'Use flight experiments to identify failure modes, safety requirements, and the next research questions.',
    ],
    gallery: [
      {
        src: assetPath('/projects/mission-adaptive-uav/outdoor.jpeg'),
        alt: 'URAN UAV flying during an outdoor field test',
        caption: 'Outdoor flight test',
      },
      {
        src: assetPath('/projects/mission-adaptive-uav/indoor.png'),
        alt: 'URAN UAV being tested near an indoor sports field',
        caption: 'Controlled indoor test',
      },
      {
        src: assetPath('/projects/mission-adaptive-uav/platform.jpeg'),
        alt: 'Top view of the URAN multirotor platform',
        caption: 'Current multirotor platform',
        fit: 'contain',
      },
    ],
    themes: ['Edge AI', 'Mission planning', 'Autonomous flight', 'PX4 integration'],
    milestones: [
      'Define a modular mission and capability architecture',
      'Connect high-level decisions to PX4 flight actions',
      'Evaluate performance under real-world resource and safety constraints',
    ],
  },
]

export default projects