/**
 * Publications data.
 * Add new publications by adding objects to this array.
 *
 * Available tags: HCI, AI Ethics, Education, Accessibility,
 *   Sustainability, Health, Civic Tech, NLP, Fairness
 */
export const publications = [
  {
    id: 'pub-1',
    title: 'Towards Equitable AI: Measuring and Mitigating Bias in Language Models for Underrepresented Communities',
    authors: ['Seoyoung Cho', 'Alice Oh', 'David Chen'],
    venue: 'ACM FAccT 2025',
    year: 2025,
    tags: ['AI Ethics', 'Fairness', 'NLP'],
    abstract:
      'We present a comprehensive framework for measuring linguistic bias in large language models across multiple dimensions of identity, with concrete mitigation strategies.',
    links: {
      paper: 'https://doi.org/example',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-2',
    title: 'AI-Assisted Sign Language Recognition for Accessible Communication in Educational Settings',
    authors: ['Eunji Lee', 'Sunjun Park'],
    venue: 'CHI 2025',
    year: 2025,
    tags: ['Accessibility', 'HCI', 'Education'],
    abstract:
      'A real-time sign language recognition system designed for classroom environments, enabling more inclusive educational experiences for deaf students.',
    links: {
      paper: 'https://doi.org/example',
      pdf: 'https://example.com/paper.pdf',
      project: 'https://example.com/project',
    },
  },
  {
    id: 'pub-3',
    title: 'Community-Driven Data Collection for Environmental Monitoring: A Participatory AI Approach',
    authors: ['Minsu Jung', 'Hyunwoo Park', 'Yuki Tanaka'],
    venue: 'AAAI 2025',
    year: 2025,
    tags: ['Sustainability', 'Civic Tech'],
    abstract:
      'We propose a participatory framework where local communities contribute to environmental datasets using low-cost sensors and AI-powered quality assurance.',
    links: {
      paper: 'https://doi.org/example',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-4',
    title: 'Predicting Mental Health Outcomes from Social Media Text with Privacy-Preserving NLP',
    authors: ['Soobin Yoon', 'Alice Oh'],
    venue: 'EMNLP 2024',
    year: 2024,
    tags: ['Health', 'NLP', 'AI Ethics'],
    abstract:
      'A privacy-aware natural language processing pipeline for early detection of mental health signals in social media posts.',
    links: {
      paper: 'https://doi.org/example',
      pdf: 'https://example.com/paper.pdf',
      project: null,
    },
  },
  {
    id: 'pub-5',
    title: 'Designing Conversational Tutoring Systems for Low-Resource Language Learners',
    authors: ['Jaehyun Song', 'Minjoon Seo', 'Haeun Kim'],
    venue: 'ACL 2024',
    year: 2024,
    tags: ['Education', 'NLP'],
    abstract:
      'An adaptive conversational tutoring system that supports language learning for speakers of low-resource languages using few-shot learning.',
    links: {
      paper: 'https://doi.org/example',
      pdf: null,
      project: 'https://example.com/project',
    },
  },
  {
    id: 'pub-6',
    title: 'Fairness Audits in Practice: Lessons from Deploying Bias Detection Tools in Korean Public Sector AI',
    authors: ['Seoyoung Cho', 'Joonho Lee', 'Donggun Lee'],
    venue: 'CSCW 2024',
    year: 2024,
    tags: ['Civic Tech', 'Fairness', 'AI Ethics'],
    abstract:
      'We report on the deployment of fairness auditing tools within Korean government AI systems, documenting lessons learned and stakeholder responses.',
    links: {
      paper: 'https://doi.org/example',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-7',
    title: 'Leveraging Satellite Imagery and Deep Learning for Urban Poverty Mapping in Southeast Asia',
    authors: ['Minsu Jung', 'David Chen'],
    venue: 'NeurIPS 2023',
    year: 2023,
    tags: ['Sustainability', 'Civic Tech'],
    abstract:
      'A deep learning approach combining satellite imagery with census data for granular poverty mapping across urban areas in Southeast Asia.',
    links: {
      paper: 'https://doi.org/example',
      pdf: 'https://example.com/paper.pdf',
      project: 'https://example.com/project',
    },
  },
  {
    id: 'pub-8',
    title: 'Human-AI Collaboration for Accessible Document Summarization',
    authors: ['Eunji Lee', 'Yuna Park', 'Sunjun Park'],
    venue: 'ASSETS 2023',
    year: 2023,
    tags: ['Accessibility', 'HCI'],
    abstract:
      'A hybrid system where AI generates summaries and humans refine them, designed to make long documents accessible to people with cognitive disabilities.',
    links: {
      paper: 'https://doi.org/example',
      pdf: null,
      project: null,
    },
  },
];

/**
 * Available topic tags for filtering.
 * This list determines the filter buttons shown on the Publications page.
 */
export const PUBLICATION_TAGS = [
  'HCI',
  'AI Ethics',
  'Education',
  'Accessibility',
  'Sustainability',
  'Health',
  'Civic Tech',
  'NLP',
  'Fairness',
];
