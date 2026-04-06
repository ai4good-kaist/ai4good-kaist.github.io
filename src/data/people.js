/**
 * People data grouped by category.
 * To add a new person, add an object to the appropriate category array.
 * To add a new category, add a new entry to the PEOPLE_CATEGORIES array
 * and a corresponding key in the people object.
 */

// The order here determines display order on the People page
export const PEOPLE_CATEGORIES = [
  { key: 'faculty', label: 'Faculty & Advisors' },
  { key: 'students', label: 'Students' },
];

export const people = {
  faculty: [
    {
      id: 'alice-oh',
      name: 'Alice Oh',
      role: 'Users&Information Lab',
      affiliation: 'School of Computing',
      photo: '/img/aliceoh_soc.jpg',
      links: {
        website: 'https://uilab.kr/',
        email: 'alice.oh@kaist.edu',
      },
    },
    {
      id: 'chulhee-yun',
      name: 'Chulhee Yun',
      role: 'Optimization & Machine Learning Lab.',
      affiliation: 'Graduate School of AI',
      photo: '/img/chulheeyun_gsai.jpg',
      links: {
        website: 'https://chulheeyun.github.io/',
        email: 'chulhee.yun@kaist.ac.kr',
      },
    },
    {
      id: 'edward-choi',
      name: 'Edward Choi',
      role: "Edward Choi's Lab",
      affiliation: 'Graduate School of AI',
      photo: '/img/edwardchoi_gsai.jpg',
      links: {
        website: 'http://mp2893.com',
        email: 'edwardchoi@kaist.ac.kr',
      },
    },
    {
      id: 'haewon-mcjeon',
      name: 'Haewon McJeon',
      role: 'KAIST IAM Group',
      affiliation: 'Graduate School of Green Growth and Sustainability',
      photo: '/img/haewonmcjeon_gsggs.webp',
      links: {
        website: 'https://kaist-iam.github.io/group/about.html',
        email: 'hmcjeon@kaist.ac.kr',
      },
    },
    {
      id: 'hwajung-hong',
      name: 'Hwajung Hong',
      role: 'DATA INTERACTION DESIGN Lab',
      affiliation: 'Industrial Design',
      photo: '/img/hwajunghong_id.png',
      links: {
        website: 'https://dxd-lab.github.io/',
        email: 'hwajung@kaist.ac.kr',
      },
    },
    {
      id: 'hyun-wook-ka',
      name: 'Hyun Wook Ka',
      role: 'Faculty',
      affiliation: 'Graduate School of Data Science',
      photo: '/img/hyunwookka_sts.jpg',
      links: {
        email: 'hyun.ka@kaist.ac.kr',
      },
    },
    {
      id: 'hyunjung-shim',
      name: 'Hyunjung Shim',
      role: 'Computer Vision and Machine Learning Lab',
      affiliation: 'Graduate School of AI',
      photo: '/img/hyunjungshim_gsai.jpg',
      links: {
        website: 'https://kaist-cvml.github.io/',
        email: 'kateshim@kaist.ac.kr',
      },
    },
    {
      id: 'hyunwoo-kim',
      name: 'Hyunwoo Kim',
      role: 'Computation & Cognition Lab',
      affiliation: 'Graduate School of AI',
      photo: '/img/hyunwookim_gsai.jpg',
      links: {
        website: 'https://coco-kaist.github.io/',
        email: 'hyunwookim.ai@gmail.com',
      },
    },
    {
      id: 'jihee-kim',
      name: 'Jihee Kim',
      role: 'Economic Progress and AI Research Group\n(econai@kaist)',
      affiliation: 'School of Business and Technology Management, Graduate School of Data Science, School of Computing',
      photo: '/img/jiheekim_bt.jpg',
      links: {
        website: 'http://econai.kaist.ac.kr https://jiheekim.net/',
        email: 'jiheekim@kaist.ac.kr',
      },
    },
    {
      id: 'joseph-seering',
      name: 'Joseph Seering',
      role: 'Collaborative Social Technologies Lab',
      affiliation: 'School of Computing',
      photo: '/img/josephseering_soc.jpg',
      links: {
        website: 'https://cstlab.org/',
        email: 'seering@kaist.ac.kr',
      },
    },
    {
      id: 'joyce-jiyoung-whang',
      name: 'Joyce Jiyoung Whang',
      role: 'Big Data Intelligence Lab',
      affiliation: 'School of Computing, Graduate School of AI, Graduate School of Data Science',
      photo: '/img/joycejiyoungwhang_soc.png',
      links: {
        website: 'https://bdi-lab.kaist.ac.kr/',
        email: 'jjwhang@kaist.ac.kr',
      },
    },
    {
      id: 'juho-kim',
      name: 'Juho Kim',
      role: 'KIXLAB',
      affiliation: 'School of Computing',
      photo: '/img/juhokim_soc.jpg',
      links: {
        website: 'https://www.kixlab.org/people',
        email: 'juhokim@kaist.ac.kr',
      },
    },
    {
      id: 'moon-choi',
      name: 'Moon Choi',
      role: 'AGING & TECHNOLOGY POLICY LAB',
      affiliation: 'Graduate School of Science and Technology Policy',
      photo: '/img/moonchoi_stp.jpg',
      links: {
        website: 'https://aging.kaist.ac.kr/',
        email: 'moonchoi365@gmail.com',
      },
    },
    {
      id: 'nuri-kim',
      name: 'Nuri Kim',
      role: "Nuri Kim's Lab",
      affiliation: 'Moon Soul Graduate School of Future Strategy',
      photo: '/img/nurikim_gsfs.webp',
      links: {
        website: 'https://www.nurikim.me/',
        email: 'nuri.kim@kaist.ac.kr',
      },
    },
    {
      id: 'so-yeon-ahn',
      name: 'So-Yeon Ahn',
      role: 'Language Education and Development Lab',
      affiliation: 'School of Digital Humanities and Computational Social Sciences',
      photo: '/img/soyeonahn_dhcss.jpg',
      links: {
        website: 'https://sites.google.com/view/soyeonahn/about',
        email: 'ahnsoyeon@kaist.ac.kr',
      },
    },
    {
      id: 'song-chong',
      name: 'Song Chong',
      role: "Song Chong's Lab",
      affiliation: 'Electrical Engineering, Graduate School of AI',
      photo: '/img/songchong_gsai.jpg',
      links: {
        website: 'https://sites.google.com/a/kaist.edu/song-chong',
        email: 'songchong@kaist.edu',
      },
    },
    {
      id: 'uichin-lee',
      name: 'Uichin Lee',
      role: 'Interactive Computing Lab',
      affiliation: 'AI Computing',
      photo: '/img/uichinlee_soc.jpg',
      links: {
        website: 'https://ic.kaist.ac.kr/',
        email: 'uclee@kaist.ac.kr',
      },
    },
  ],

  students: [
    {
      id: 'donggun-lee',
      name: 'Donggun Lee',
      role: 'Student',
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://donggunlee0.com',
        email: 'jlee4330@kaist.ac.kr',
      },
    },
    {
      id: 'jisu-shin',
      name: 'Jisu Shin',
      role: 'Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'jisu.shin@kaist.ac.kr',
      },
    },
    {
      id: 'juhyun-oh',
      name: 'Juhyun Oh',
      role: 'Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
      },
    },
  ],
};
