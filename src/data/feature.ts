export const features: Feature[] = [
  {
    title: 'See what`s inside',
    description:
      'Qoterra provides advanced features that enable business to get all the benefits of chat management',
    image: '/feature/left.png',
    reverse: false,
    accordion: [
      {
        title: 'Chat Management',
        content:
          'Chat management is a critical component of any business. Qoterra provides advanced features that enable business to get all the benefits of chat management',
      },
      {
        title: 'File Sharing',
        content:
          'File sharing is a critical component of any business. Qoterra provides advanced features that enable business to get all the benefits of file sharing',
      },
      {
        title: 'Task Management',
        content:
          'Task management is a critical component of any business. Qoterra provides advanced features that enable business to get all the benefits of task management',
      },
      {
        title: 'Integeration',
        content:
          'Integeration is a critical component of any business. Qoterra provides advanced features that enable business to get all the benefits of integration',
      },
    ],
  },
  {
    title: 'Integerate with your Existing Workflows',
    description:
      'Seamlessly integerate our chat management solution with your other tools and services for a streamlined workflow',
    cta: 'Free Trial',
    image: '/feature/right.png',
    reverse: true,
  },
] as const
