/**
 * Publications data.
 * Add new publications by adding objects to this array.
 *
 * Available tags: HCI, AI Ethics, Education, Accessibility,
 *   Sustainability, Health, Civic Tech, NLP, Fairness
 *
 * Patch Notes:
 *    - 2026.04.17 (Jisu): Originally, the template of "authors" field is ['xxx', 'xxx', 'xxx']. I just temporarily appended a long string for convenience.
 */
export const publications = [
  {
    id: 'pub-1',
    title: 'When Scaffolding Breaks: Investigating Student Interaction with LLM-Based Writing Support in Real-Time K-12 EFL Classrooms',
    authors: ['Junho Myung, Hyunseung Lim*, Hana Oh*, Hyoungwook Jin, Nayeon Kang, So-Yeon Ahn, Hwajung Hong, Alice Oh, Juho Kim'],
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    year: 2026,
    tags: ['Education', 'HCI'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2512.05506',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-2',
    title: 'ML-IAM v1.0: Emulating Integrated Assessment Models With Machine Learning',
    authors: ['Yen Shin, Changyoon Lee, Eunsu Kim, Junho Myung, Kiwoong Park, Jiheun Ha, Min-Young Choi, Bomi Kim, Hyun W. Ka, Jung-Hun Woo, Alice Oh, and Haewon McJeon'],
    venue: 'EGUsphere preprint',
    year: 2026,
    tags: ['Sustainability'],
    abstract:
      '',
    links: {
      paper: 'https://egusphere.copernicus.org/preprints/2026/egusphere-2025-5305/',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-3',
    title: 'Using deep learning to generate key variables in global mitigation scenarios',
    authors: ['Peijin Li, Rongqi Zhu, Haewon McJeon, Edward Byers, Peijie Zhou, Yang Ou'],
    venue: 'Nature Climate Change',
    year: 2025,
    tags: ['Sustainability'],
    abstract:
      '',
    links: {
      paper: 'https://www.nature.com/articles/s41558-025-02352-8',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-4',
    title: 'Dark and Bright Side of Participatory Red-Teaming with Targets of Stereotyping for Eliciting Harmful Behaviors from Large Language Models',
    authors: ['Sieun Kim, Yeeun Jo, Sungmin Na, Hyunseung Lim, Eunchae Lee, Yu Min Choi, Soohyun Cho, Hwajung Hong'],
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    year: 2026,
    tags: ['AI Ethics', 'NLP'],
    abstract:
      'A privacy-aware natural language processing pipeline for early detection of mental health signals in social media posts.',
    links: {
      paper: 'https://arxiv.org/abs/2602.19124',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-5',
    title: 'HateBuffer: Safeguarding Content Moderators’ Mental Well-Being through Hate Speech Content Modification',
    authors: ['Subin Park, Jeonghyun Kim, Jeanne Choi, Joseph Seering, Uichin Lee, Sung-Ju Lee'],
    venue: 'Proceedings of the ACM on Human-Computer Interaction: CSCW (2025)',
    year: 2025,
    tags: ['AI Ethics', 'HCI'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2508.00439',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-6',
    title: 'Are they lovers or friends? Evaluating LLMs' Social Reasoning in English and Korean Dialogues',
    authors: ['Eunsu Kim, Junyeong Park, Juhyun Oh, Kiwoong Park, Seyoung Song, A. Seza Doğruöz, Alice Oh, Najoung Kim'],
    venue: 'The 64th Annual Meeting of the Association for Computational Linguistics (ACL 2026)',
    year: 2026,
    tags: ['AI', 'NLP'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2510.19028',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-7',
    title: 'OLA: Output Language Alignment in Code-Switched LLM Interactions',
    authors: ['Juhyun Oh, Haneul Yoo, Faiz Ghifari Haznitrama, Alice Oh'],
    venue: 'The 64th Annual Meeting of the Association for Computational Linguistics (ACL 2026)',
    year: 2026,
    tags: ['AI', 'NLP'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2601.03589',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-8',
    title: 'Can LLMs Keep a Secret? Testing Privacy Implications of Language Models via Contextual Integrity Theory',
    authors: ['Hyunwoo Kim*, Niloofar Mireshghallah*, Xuhui Zhou, Yulia Tsvetkov, Maarten Sap, Reza Shokri, Yejin Choi'],
    venue: 'The Twelfth International Conference on Learning Representations (ICLR 2024)',
    year: 2024,
    tags: ['AI', 'Privacy', 'NLP'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2310.17884',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-9',
    title: 'Privasis: Synthesizing the Largest "Public" Private Dataset from Scratch',
    authors: ['Hyunwoo Kim*, Niloofar Mireshghallah*, Michael Duan, Rui Xin, Shuyue Stella Li, Jaehun Jung, David Acuna, Qi Pang, Hanshen Xiao, G. Edward Suh, Sewoong Oh, Yulia Tsvetkov, Pang Wei Koh, Yejin Choi'],
    venue: '',
    year: 2026,
    tags: ['AI', 'Privacy', 'NLP'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2602.03183',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-10',
    title: 'HAICOSYSTEM: An Ecosystem for Sandboxing Safety Risks in Human-AI Interactions',
    authors: ['Xuhui Zhou, Hyunwoo Kim*, Faeze Brahman*, Liwei Jiang, Hao Zhu, Ximing Lu, Frank Xu, Bill Yuchen Lin, Yejin Choi, Niloofar Mireshghallah, Ronan Le Bras, Maarten Sap'],
    venue: 'Second Conference on Language Modeling (COLM 2025)',
    year: 2025,
    tags: ['AI', 'Safety', 'NLP'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2409.16427',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-11',
    title: '"I Can\'t Keep Up": Accessibility Barriers in Video-Based Learning for Individuals with Borderline Intellectual Functioning',
    authors: ['Hyehyun Chu, Seungju Kim, Chen Zhou, Yu-Kai Hung, Saelyne Yang, Hyun W. Ka, Juho Kim'],
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    year: 2026,
    tags: ['AI', 'Assistive technology'],
    abstract:
      '',
    links: {
      paper: 'https://arxiv.org/abs/2602.08300',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-12',
    title: 'NarrAD: Automatic Generation of Audio Descriptions for Movies with Rich Narrative Context',
    authors: ['Jaehyeong Park, Junchel Ye, Seungkook Lee, Hyun W. Ka, Dongsu Han'],
    venue: 'Proceedings of the Winter Conference on Applications of Computer Vision (WACV 2025)',
    year: 2025,
    tags: ['AI', 'Assistive technology'],
    abstract:
      '',
    links: {
      paper: 'https://openaccess.thecvf.com/content/WACV2025/html/Park_NarrAD_Automatic_Generation_of_Audio_Descriptions_for_Movies_with_Rich_WACV_2025_paper.html',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-13',
    title: 'RainbowTact: An Automatic Tactile Graphics Translation Technique that Brings the Full Spectrum of Color to the Visually Impaired',
    authors: ['Hyun W. Ka, Rachel Kim '],
    venue: 'Computers Helping People with Special Needs (ICCHP 2024)',
    year: 2024,
    tags: ['AI', 'Assistive technology'],
    abstract:
      '',
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-031-62846-7_33',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-14',
    title: 'How do users identify and perceive stereotypes? understanding user perspectives on stereotypical biases in large language models',
    authors: ['Hyunseung Lim, Dasom Choi, Hwajung Hong'],
    venue: 'Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency (FAccT 2025)',
    year: 2025,
    tags: ['AI Ethics'],
    abstract:
      '',
    links: {
      paper: 'https://dl.acm.org/doi/full/10.1145/3715275.3732207',
      pdf: null,
      project: null,
    },
  },
  {
    id: 'pub-15',
    title: 'Authorship Drift: How Self-Efficacy and Trust Evolve During LLM-Assisted Writing',
    authors: ['Yeon Su Park, Nadia Azzahra Putri Arvi, Seoyoung Kim, Juho Kim'],
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    year: 2026,
    tags: [],
    abstract:
      '',
    links: {
      paper: '',
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
