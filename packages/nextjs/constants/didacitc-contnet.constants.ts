import {
  DidacticContentClasses,
  DidacticContentCoverflowCardProps,
} from '~~/components/carousel-didactic-content/interfaces'

export const DidacticContentCards: DidacticContentCoverflowCardProps[] = [
  //group Blockchain
  {
    id: 'Blockchain-1',
    title: 'Block Analyst',
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
    value: 2,
    area: 'Blockchain',
  },
  slides: [
    {
      desciption: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
      img: {
        heigth: 50,
        path: '/assets/mode/mode004.jpg',
        width: 50,
      },
      title: 'Lorem Ipsum',
      quizz: {
        questions: [
          {
            statement: 'What is Lorem Ipsum?',
            answers: [
              {
                isCorrect: true,
                label: 'Lorem Ipsum is simply dummy text ',
                name: 'input-1',
                value: '1',
              },
              {
                isCorrect: false,
                label: 'It is a long established fact ',
                name: 'input-1',
                value: '3',
              },
              {
                isCorrect: false,
                label: 'Contrary to popular belief,',
                name: 'input-1',
                value: '3',
              },
            ],
          },
        ],
      },
    },
    {
      desciption: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
      img: {
        heigth: 50,
        path: '/assets/mode/mode004.jpg',
        width: 50,
      },
      title: 'Lorem Ipsum 2',
      quizz: {
        questions: [
          {
            statement: 'What is Lorem Ipsum?',
            answers: [
              {
                isCorrect: true,
                label: 'Lorem Ipsum is simply dummy text ',
                name: 'input-1',
                value: '1',
              },
              {
                isCorrect: false,
                label: 'It is a long established fact ',
                name: 'input-1',
                value: '3',
              },
              {
                isCorrect: false,
                label: 'Contrary to popular belief,',
                name: 'input-1',
                value: '3',
              },
            ],
          },
        ],
      },
    },
    {
      desciption: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
      img: {
        heigth: 50,
        path: '/assets/mode/mode004.jpg',
        width: 50,
      },
      title: 'Lorem Ipsum 3',
      quizz: {
        questions: [
          {
            statement: 'What is Lorem Ipsum?',
            answers: [
              {
                isCorrect: true,
                label: 'Lorem Ipsum is simply dummy text ',
                name: 'input-1',
                value: '1',
              },
              {
                isCorrect: false,
                label: 'It is a long established fact ',
                name: 'input-1',
                value: '3',
              },
              {
                isCorrect: false,
                label: 'Contrary to popular belief,',
                name: 'input-1',
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
