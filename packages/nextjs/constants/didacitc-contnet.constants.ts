import {
  DidacticContentClasses,
  DidacticContentCoverflowCardProps,
} from '~~/components/carousel-didactic-content/interfaces'

export const DidacticContentCards: DidacticContentCoverflowCardProps[] = [
  //group Blockchain
  {
    id: 'Blockchain-1',
    title: 'Exploring Mode',
    img: {
      path: '/assets/badge-1.png',
      width: 50,
      height: 50,
    },
    description: 'Capable of analyzing and understanding block structure and the entire blockchain.',
    link: `content-didactic/Blockchain-1`,
    attributes: {
      area: 'Blockchain',
      value: 1,
    },
  },
  {
    id: 'Blockchain-2',
    title: 'Block Analyst',
    img: {
      path: '/assets/badge-2-without-backgound.png',
      width: 50,
      height: 50,
    },
    description:
      'Dedicates time to practical testing, such as completing tutorials and making transactions in test environments.',
    link: 'content-didactic/Blockchain-2',
    attributes: {
      area: 'Blockchain',
      value: 2,
    },
  },
  {
    id: 'Blockchain-3',
    title: 'Semantic Web',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description:
      'Ventures beyond the basics, seeking to understand the complexities and underlying protocols of blockchain.',
    link: 'content-didactic/Blockchain-3',
    attributes: {
      area: 'Blockchain',
      value: 3,
    },
  },
  //group Smart contracts
  {
    id: 'smart-contracts-1',
    title: 'Contract Engineer',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description: 'Develops and deploys simple smart contracts, demonstrating skills in contract creation.',
    link: 'content-didactic/smart-contracts-1',
    attributes: {
      area: 'Smart contracts',
      value: 4,
    },
  },
  {
    id: 'smart-contracts-2',
    title: 'Visionary Coder',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description: 'Shows vision in implementing smart contracts to solve specific problems.',
    link: 'content-didactic/smart-contracts-2',
    attributes: {
      area: 'Smart contracts',
      value: 5,
    },
  },
  {
    id: 'smart-contracts-3',
    title: 'Swift Deployer',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description: 'Ability to efficiently deploy contracts, optimizing the use of network resources.',
    link: 'content-didactic/smart-contracts-3',
    attributes: {
      area: 'Smart contracts',
      value: 6,
    },
  },
  //group token
  {
    id: 'token-1',
    title: 'Token Operator',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description: 'Actively participates in token exchanges, demonstrating skills in managing digital assets.',
    link: 'content-didactic/token-1',
    attributes: {
      area: 'Token',
      value: 7,
    },
  },
  {
    id: 'token-2',
    title: 'Market Analyst',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description: 'Understands token market dynamics and makes informed decisions on decentralized exchanges.',
    link: 'content-didactic/token-2',
    attributes: {
      area: 'Token',
      value: 8,
    },
  },
  {
    id: 'token-3',
    title: 'Portfolio Master',
    img: {
      path: '/assets/moon-badget-without-background.png',
      width: 50,
      height: 50,
    },
    description: 'Builds and manages a diversified portfolio of tokens with solid strategies.',
    link: 'content-didactic/token-3',
    attributes: {
      area: 'Token',
      value: 9,
    },
  },
]

const courseMock = {
  id: 'Blockchain-1',
  badget: {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: {
      path: '/assets/badge-1.png',
      heigth: 150,
      width: 150,
    },
    tags: ['web3.0', 'blockchain'],
    title: 'Badget 1',
    value: 1,
    area: 'Blockchain',
  },
  slides: [
    {
      title: 'Exploring Mode',
      desciption: `
      Mode, an Ethereum Layer 2, is designed to encourage and support a cooperative on-chain experience. Its goal is to enable developers and users to grow in a top-tier application ecosystem and be directly rewarded for their contributions through Sequencer Fee Sharing and User Referral fees.
            `,
      img: {
        heigth: 50,
        path: '/assets/mode/mode004.jpg',
        width: 50,
      },
      quizz: {
        questions: [
          {
            statement: 'Choose the best option',
            answers: [
              {
                isCorrect: true,
                label: 'The main goal of Mode is to reduce transaction costs',
                name: 'input-1',
                value: '1',
              },
              {
                isCorrect: false,
                label: 'The Mode Blockchain fosters cooperation through revenue-sharing incentives.',
                name: 'input-2',
                value: '2',
              },
              {
                isCorrect: false,
                label: "Mode operates on Ethereum's Layer 1.",
                name: 'input-3',
                value: '3',
              },
            ],
          },
        ],
      },
    },
    {
      title: 'Exploring the Core Features of Mode',
      desciption: `
      The Mode blockchain showcases several significant features, creating an environment conducive to cooperation and growth. Noteworthy aspects include an on-chain cooperative system for sharing contract revenues, a substantial fee reduction exceeding 95% thanks to Optimism's Bedrock upgrade, and seamless scalability for existing Ethereum applications.
            `,
      img: {
        heigth: 50,
        path: '/assets/mode/mode004.jpg',
        width: 50,
      },
      quizz: {
        questions: [
          {
            statement: 'Can you recognize which one is incorrect?',
            answers: [
              {
                isCorrect: false,
                label: 'The Mode blockchain shares contract revenues directly with participants.',
                name: 'input-1',
                value: '1',
              },
              {
                isCorrect: false,
                label: "Optimism's Bedrock has reduced fees on Mode by over 95%.",
                name: 'input-2',
                value: '2',
              },
              {
                isCorrect: true,
                label: 'Mode facilitates the transition of existing Ethereum applications.',
                name: 'input-3',
                value: '3',
              },
            ],
          },
        ],
      },
    },
    {
      title: 'Open Source Principles in Mode',
      desciption: `
      Mode operates on the OP Stack in collaboration with Optimism, contributing to the growth of Optimism's Superchain ecosystem. The emphasis on open-source principles guides the development of Mode.
            `,
      img: {
        heigth: 50,
        path: '/assets/mode/mode004.jpg',
        width: 50,
      },
      quizz: {
        questions: [
          {
            statement: 'Choose the correct answer',
            answers: [
              {
                isCorrect: false,
                label: "Mode's development is guided by closed-source principles.",
                name: 'input-1',
                value: '1',
              },
              {
                isCorrect: true,
                label: 'Mode contributes to the growth of the Superchain ecosystem of Ethereum.',
                name: 'input-2',
                value: '3',
              },
              {
                isCorrect: false,
                label: 'Optimism is the sole contributor to the development of the OP Stack.',
                name: 'input-3',
                value: '3',
              },
            ],
          },
        ],
      },
    },
  ],
}

export const MasterClasses: DidacticContentClasses[] = [
  courseMock,
  {
    ...courseMock,
    id: 'Blockchain-2',
  },
  {
    ...courseMock,
    id: 'Blockchain-3',
  },
  {
    ...courseMock,
    id: 'smart-contracts-1',
  },
  {
    ...courseMock,
    id: 'smart-contracts-2',
  },
  {
    ...courseMock,
    id: 'smart-contracts-3',
  },
  {
    ...courseMock,
    id: 'token-1',
  },
  {
    ...courseMock,
    id: 'token-2',
  },
  {
    ...courseMock,
    id: 'token-3',
  },
]
