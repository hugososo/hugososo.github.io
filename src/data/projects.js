import iveFyp from '../assets/ive_fyp.png'
import daytaPrj from '../assets/dayta_prj.jpg'
import bees from '../assets/bees.png'
import figure from '../assets/figure.png'

const projectItems = [
  {
    title: 'Admin Panel',
    subtitle: 'Dayta Software Engineer Intern - 2022',
    img: daytaPrj,
    description:
      'An internal system built by React and GoLang for Dayta business team to handle their business work and routine job',
  },
  {
    title: 'CASL Mall Web Application',
    subtitle: 'IVE FYP - 2021',
    img: iveFyp,
    description:
      'An Commercial Mall Application built with Ionic React and the CMS built by Node.js, using Google Data Studio generate user behavior chart from Firebase Database for business analysis',
  },
  {
    title: 'Alpha Bees Club NFT Mint Site',
    subtitle: 'Side Project - 2021',
    img: bees,
    url: 'https://www.alphabeesclub.com/',
    description:
      'An NFT Community NFT Mint Site, built with React, Web3.js, Ethers.js, the smart contract using Solidity followed ERC721A Protocol and already deployed to Ethereum Mainnet',
  },
  {
    title: '3D Model Display Website',
    subtitle: 'For Fun / J',
    img: figure,
    url: 'https://kono-vegeta.vercel.app/',
    description:
      'An 3D Model Display Website, built with Vue, Three.js. Playing Three.js is a interesting expenrience for me',
  },
]

export default projectItems
