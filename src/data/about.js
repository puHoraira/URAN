import { assetPath } from '../utils/assetPath.js'

// Core group identity. Keep this file easy to update as the group grows.

export const groupInfo = {
  name: 'UAV Research and Autonomous Navigation',
  subtitle: 'A research group in the Department of Computer Science and Engineering, University of Dhaka',
  tagline: 'Building capable, responsible, and field-ready aerial intelligence.',
  description: 'URAN studies how unmanned aerial vehicles can perceive, reason, navigate, and act in complex environments. We bring together machine learning, computer vision, robotics, and control to explore the full autonomy stack, from onboard sensing to dependable flight.',
  focusAreas: [
    'Autonomous Navigation',
    'Computer Vision for UAVs',
    'Multi-Agent Systems',
    'Intelligent Flight Control',
    'Edge AI and Embedded Intelligence',
    'UAV Applications and Field Robotics'
  ]
}

export const principalInvestigator = {
  name: 'Dr. Mosaddek Hossain Kamal',
  role: 'Professor and Group Supervisor',
  department: 'Department of Computer Science and Engineering, University of Dhaka',
  image: assetPath('/kamal.png'),
  email: 'mdabu-2021911202@cs.du.ac.bd',
  education: 'PhD in Electrical and Computer Engineering, Concordia University, Canada',
  faculty: 'https://du.ac.bd/faculty/faculty_details/CSE/1764',
  scholar: 'https://scholar.google.com/citations?user=QBwimpcAAAAJ&hl=en',
  researchgate: 'https://www.researchgate.net/profile/Mosaddek-Tushar',
  linkedin: 'https://bd.linkedin.com/in/mosaddek-tushar-82b345120',
  academia: 'https://concordia.academia.edu/MosaddekHossainKamalTushar'
}

export const technicalOfficers = [
  {
    name: 'Masud Rana',
    role: 'Lab Technical Officer',
    focus: 'Laboratory Technical Support',
    image: assetPath('/masudRanaLab.png'),
    facebook: 'https://www.facebook.com/masud.rana.599559',
    youtube: 'https://www.youtube.com/@masud58'
  }
]

export const mscStudents = [
  {
    name: 'Saif Hossain Mridul',
    role: 'MSc Student',
    focus: 'UAV Navigation Systems',
    image: assetPath('/team/mridul.jpg'),
    email: 'saifhossain@kaist.ac.kr'
  }
]

export const bscStudents = [
  {
    name: 'Md Abu Horaira',
    role: 'BSc Student',
    focus: 'Autonomous Flight Control',
    image: assetPath('/horaira.png'),
    email: 'mdabu-2021911202@cs.du.ac.bd',
    github: 'https://github.com/puHoraira'
  },
  {
    name: 'Md Adib Ahsan',
    role: 'BSc Student',
    focus: 'Computer Vision for Drones',
    image: assetPath('/team/adib.jpg'),
    email: 'adibahsan003@gmail.com',
  }
]
