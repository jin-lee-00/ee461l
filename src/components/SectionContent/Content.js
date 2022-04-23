export const homeObjOne = {
  id: 'projects',
  unit: 'project',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Manage Projects Here',
  headline: 'Projects',
  description: 'Create, find, and allocate',
  buttonLabel: 'projects button',
  imgStart: true,
  img: require('../../images/svg-1.svg'),
  alt: 'Projects',
  dark: false,
  primary: false,
  darkText: false,
  route: '/projects'
};

export const homeObjTwo = {
  id: 'resources',
  unit: 'resource',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Manage HWSets Here',
  headline: 'Resources',
  description: 'View capacity and availability',
  buttonLabel: 'Resources button',
  imgStart: false,
  img: require('../../images/svg-2.svg'),
  alt: 'Resources',
  dark: false,
  primary: false,
  darkText: true,
  route: '/resources'
};

export const homeObjThree = {
  id: 'datasets',
  unit: 'dataset',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Download Datasets Here',
  headline: 'Datasets',
  description: 'View and download PhysioNet Databases',
  buttonLabel: 'datasets button',
  imgStart: true,
  img: require('../../images/svg-3.svg'),
  alt: 'Datasets',
  dark: false,
  primary: false,
  darkText: false,
  route: '/datasets'
};

export const homeObjFour = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EE461L Group 2',
  headline: 'About',
  description: 'This mock HaaS platform is built using a Flask and React stack, and MongoDB',
  buttonLabel: 'about button',
  imgStart: false,
  img: require('../../images/svg-4.svg'),
  alt: 'About',
  dark: false,
  primary: false,
  darkText: true,
  route: '/about'
};