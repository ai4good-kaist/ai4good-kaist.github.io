/**
 * Resources data organized by category.
 * To add a new category, add a new object to this array.
 * To add a new resource, add it to the `items` array of the appropriate category.
 */
export const resourceCategories = [
  {
    id: 'papers',
    label: 'Key Papers & Surveys',
    description: 'Essential readings on AI for social good',
    items: [
      {
        title: 'AI for Social Good: A Survey',
        url: 'https://arxiv.org/abs/example',
        description: 'Comprehensive survey of AI applications for social impact across multiple domains.',
      },
      {
        title: 'Fairness and Abstraction in Sociotechnical Systems',
        url: 'https://doi.org/example',
        description: 'Foundational paper on understanding fairness in the context of complex social systems.',
      },
      {
        title: 'Datasheets for Datasets',
        url: 'https://arxiv.org/abs/example',
        description: 'Guidelines for documenting datasets to promote transparency and accountability.',
      },
    ],
  },
  {
    id: 'datasets',
    label: 'Datasets',
    description: 'Open datasets for AI for social good research',
    items: [
      {
        title: 'Korean Hate Speech Dataset',
        url: 'https://github.com/example',
        description: 'Annotated dataset for hate speech detection in Korean text.',
      },
      {
        title: 'UN Sustainable Development Goals Text Corpus',
        url: 'https://example.com',
        description: 'Large text corpus aligned with UN SDG targets for NLP research.',
      },
      {
        title: 'Accessibility Barriers Dataset',
        url: 'https://example.com',
        description: 'Crowdsourced dataset of physical accessibility barriers in urban environments.',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Frameworks',
    description: 'Open-source tools for responsible AI development',
    items: [
      {
        title: 'Fairlearn',
        url: 'https://fairlearn.org/',
        description: 'Microsoft toolkit for assessing and improving fairness of AI systems.',
      },
      {
        title: 'AI Fairness 360 (AIF360)',
        url: 'https://aif360.mybluemix.net/',
        description: 'IBM toolkit with metrics and algorithms for mitigating bias in machine learning.',
      },
      {
        title: 'Model Card Toolkit',
        url: 'https://github.com/tensorflow/model-card-toolkit',
        description: 'Tool for creating model cards to document ML model performance and limitations.',
      },
    ],
  },
  {
    id: 'funding',
    label: 'Funding & Opportunities',
    description: 'Grants, fellowships, and opportunities',
    items: [
      {
        title: 'Google AI for Social Good Program',
        url: 'https://ai.google/social-good/',
        description: 'Google program supporting AI research projects with social impact.',
      },
      {
        title: 'NRF AI Research Grants (Korea)',
        url: 'https://www.nrf.re.kr/',
        description: 'National Research Foundation of Korea grants for AI research.',
      },
      {
        title: 'Mozilla Responsible Computing Challenge',
        url: 'https://foundation.mozilla.org/',
        description: 'Grants for integrating ethics and responsibility into computing education.',
      },
    ],
  },
  {
    id: 'tutorials',
    label: 'Tutorials & Guides',
    description: 'Learning resources and how-to guides',
    items: [
      {
        title: 'Practical Guide to Fairness in ML',
        url: 'https://example.com',
        description: 'Step-by-step guide for practitioners on implementing fairness in machine learning pipelines.',
      },
      {
        title: 'Introduction to Participatory Design for AI',
        url: 'https://example.com',
        description: 'A tutorial on involving end-users and communities in the AI design process.',
      },
    ],
  },
  {
    id: 'organizations',
    label: 'Partner Organizations',
    description: 'External communities and organizations',
    items: [
      {
        title: 'Partnership on AI',
        url: 'https://partnershiponai.org/',
        description: 'Multi-stakeholder organization studying and formulating best practices for AI.',
      },
      {
        title: 'AI for Good Foundation (ITU)',
        url: 'https://aiforgood.itu.int/',
        description: 'United Nations platform for AI-driven solutions to advance the SDGs.',
      },
      {
        title: 'KAIST AI Graduate School',
        url: 'https://gsai.kaist.ac.kr/',
        description: 'KAIST Graduate School of AI — leading AI education and research in Korea.',
      },
    ],
  },
];
