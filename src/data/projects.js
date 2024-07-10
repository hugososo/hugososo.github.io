import iveFyp from '../assets/ive_fyp.png'
import bookstore from '../assets/bookstore.png'
import bees from '../assets/bees.png'
import figure from '../assets/figure.png'

const projectItems = [
  {
    title: 'Dencentralized Bookstore',
    subtitle: 'Capstone Project - 2023',
    img: bookstore,
    description: 'Developed a full-stack decentralized e-commerce bookstore web application enabling online payments via cryptocurrency on the Ethereum chain.Utilized Echo to serve a REST API and React for the frontend, with smart contracts deployed using Hardhat.',
  },
  {
    title: 'CASL Mall Web Application',
    subtitle: 'IVE Final Year Project - 2021',
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
    subtitle: 'For Fun',
    img: figure,
    url: 'https://kono-vegeta.vercel.app/',
    description:
      'An 3D Model Display Website, built with Vue, Three.js. Playing Three.js is a interesting expenrience for me',
  },
]

export default projectItems
