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
      photoStyle: { objectPosition: 'top' },
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
      photoStyle: { objectPosition: 'top' },
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
      role: 'Assistive AI Lab',
      affiliation: 'School of Transdisciplinary Studies, Graduate School of Data Science',
      photo: '/img/hyunwookka_sts.jpg',
      links: {
        website: 'http://aailab.kaist.ac.kr',
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
      photo: '/img/hyunwoo.jpg',
      links: {
        website: 'https://hyunw.kim',
        email: 'hyunwookim.ai@gmail.com',
      },
    },
    {
      id: 'jihee-kim',
      name: 'Jihee Kim',
      role: 'Economic Progress and AI Research Group',
      affiliation: 'School of Business and Technology Management, Graduate School of Data Science, School of Computing',
      photo: '/img/jiheekim_bt.jpg',
      links: {
        website: 'https://jiheekim.net/',
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
      photo: '/img/song_chong.jpg',
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
      role: "Master's Student",
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
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'jisu.shin@kaist.ac.kr',
      },
    },
    {
      id: 'juhyun-oh',
      name: 'Juhyun Oh',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://juhyunohh.github.io/',
        email: '411juhyun@kaist.ac.kr',
      },
    },
    {
      id: 'juhoon-lee',
      name: 'Juhoon Lee',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://juhoonlee.com',
        email: 'juhoonlee@kaist.ac.kr',
      },
    },
    {
      id: 'heechan-lee',
      name: 'Heechan Lee',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://heechanlee.com',
        email: 'hclee99@kaist.ac.kr',
      },
    },
    {
      id: 'braahmi-padmakumar',
      name: 'Braahmi Padmakumar',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'pjbrahmi@kaist.ac.kr',
      },
    },
    {
      id: 'minju-yoo',
      name: 'Minju Yoo',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://minjuu1.github.io',
        email: 'minjuyoo@kaist.ac.kr',
      },
    },
    {
      id: 'jeonggyu-kang',
      name: 'Jeonggyu Kang',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'jeonggyumarkk@kaist.ac.kr',
      },
    },
    {
      id: 'junho-myung',
      name: 'Junho Myung',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://junhomyung.github.io/',
        email: 'junho00211@kaist.ac.kr',
      },
    },
    {
      id: 'hyehyun-chu',
      name: 'Hyehyun Chu',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://hyehyunchu.vercel.app/',
        email: 'hyenchu@kaist.ac.kr',
      },
    },
    {
      id: 'jiheun-ha',
      name: 'Jiheun Ha',
      role: "Master's Student",
      affiliation: 'Graduate School of Green Growth and Sustainability, KAIST',
      photo: null,
      links: {
        email: 'jiheun@kaist.ac.kr',
      },
    },
    {
      id: 'eunsu-kim',
      name: 'Eunsu Kim',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://eunsu-k1m.github.io',
        email: 'kes0317@kaist.ac.kr',
      },
    },
    {
      id: 'junyeong-park',
      name: 'Junyeong Park',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://jjjunyeong.github.io',
        email: 'junyeong.park@kaist.ac.kr',
      },
    },
    {
      id: 'sunwoo-kim',
      name: 'Sunwoo Kim',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'sunwoo.kim@kaist.ac.kr',
      },
    },
    {
      id: 'yeon-su-park',
      name: 'Yeon Su Park',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://yeonsuuuu28.github.io/',
        email: 'yeonsupark@kaist.ac.kr',
      },
    },
    {
      id: 'jieun-han',
      name: 'Jieun Han',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://zeunie.github.io/',
        email: 'jieun_han@kaist.ac.kr',
      },
    },
    {
      id: 'hyun-seung-moon',
      name: 'Hyun Seung Moon',
      role: 'PhD Student',
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://hyunseungmoon.net/',
        email: 'mzes0401@kaist.ac.kr',
      },
    },
    {
      id: 'jae-young-choi',
      name: 'Jae Young Choi',
      role: "Master's Student",
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://jaeyoungchoi1.github.io',
        email: 'jaeyoungchoi@kaist.ac.kr',
      },
    },
    {
      id: 'kyungyoon-jung',
      name: 'Kyungyoon Jung',
      role: 'MS-PhD Student',
      affiliation: 'Brain & Cognitive Sciences, KAIST',
      photo: null,
      links: {
        email: 'juliecandoit98@kaist.ac.kr',
      },
    },
    {
      id: 'hyeyeon-seo',
      name: 'Hyeyeon Seo',
      role: "Master's Student",
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        email: 'hseo01@kaist.ac.kr',
      },
    },
    {
      id: 'jaeryung-chung',
      name: 'Jaeryung Chung',
      role: "Master's Student",
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://jaeryungchung.com/',
        email: 'jaeryung.ch@gmail.com',
      },
    },
    {
      id: 'jun-seong-kim',
      name: 'Jun Seong Kim',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://junseongkim.com/',
        email: '09jkim@kaist.ac.kr',
      },
    },
    {
      id: 'jungwoo-rhee',
      name: 'Jungwoo Rhee',
      role: 'PhD Student',
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://jungwoorhee.com/',
        email: 'jwoorhee@kaist.ac.kr',
      },
    },
    {
      id: 'sieun-kim',
      name: 'Sieun Kim',
      role: "Master's Student",
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        email: 'sieunkim@kaist.ac.kr',
      },
    },
    {
      id: 'suyoun-lee',
      name: 'Suyoun Lee',
      role: "Master's Student",
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://jennifersuyounlee.com',
        email: 'jenslee705@kaist.ac.kr',
      },
    },
    {
      id: 'haneul-yoo',
      name: 'Haneul Yoo',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://haneul-yoo.github.io/',
        email: 'haneul.yoo@kaist.ac.kr',
      },
    },
    {
      id: 'hyun-lee',
      name: 'Hyun Lee',
      role: "Master's Student",
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://hyun-lee.web.app',
        email: 'hyunini0408@kaist.ac.kr',
      },
    },
    {
      id: 'sueun-jang',
      name: 'Sueun Jang',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'sueun.jang@kaist.ac.kr',
      },
    },
    {
      id: 'seungho-cho',
      name: 'Seungho Cho',
      role: 'Undergraduate Student',
      affiliation: 'Electrical Engineering, KAIST',
      photo: null,
      links: {
        email: 'cho.seungho@kaist.ac.kr',
      },
    },
    {
      id: 'esther-kang',
      name: 'Esther Kang',
      role: "Master's Student",
      affiliation: 'Graduate School of Data Science, KAIST',
      photo: null,
      links: {
        email: 'esther.kang@kaist.ac.kr',
      },
    },
    {
      id: 'chaeeun-shim',
      name: 'Chaeeun Shim',
      role: 'PhD Student',
      affiliation: 'Graduate School of AI, KAIST',
      photo: null,
      links: {
        email: 'chaeeun@kaist.ac.kr',
      },
    },
    {
      id: 'jeewon-yang',
      name: 'Jeewon Yang',
      role: 'MS-PhD Student',
      affiliation: 'Graduate School of AI, KAIST',
      photo: null,
      links: {
        email: 'jwyang.ai@gmail.com',
      },
    },
    {
      id: 'jiyoung-lee',
      name: 'Jiyoung Lee',
      role: 'PhD Student',
      affiliation: 'Graduate School of AI, KAIST',
      photo: null,
      links: {
        website: 'https://jiyounglee-0523.github.io/',
        email: 'jiyounglee0523@kaist.ac.kr',
      },
    },
    {
      id: 'sujeong-im',
      name: 'Sujeong Im',
      role: 'PhD Student',
      affiliation: 'Graduate School of AI, KAIST',
      photo: null,
      links: {
        email: 'sujeongim@kaist.ac.kr',
      },
    },
    {
      id: 'jiho-jin',
      name: 'Jiho Jin',
      role: 'PhD Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://jinjh0123.github.io/',
        email: 'jinjh0123@kaist.ac.kr',
      },
    },
    {
      id: 'yen-shin',
      name: 'Yen Shin',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        website: 'https://yenshin1891.github.io/',
        email: 'yeeun@kaist.ac.kr',
      },
    },
    {
      id: 'hyunseung-lim',
      name: 'Hyunseung Lim',
      role: 'MS-PhD Student',
      affiliation: 'Industrial Design, KAIST',
      photo: null,
      links: {
        website: 'https://hyunseunglim.com/',
        email: 'charlie9807@kaist.ac.kr',
      },
    },
    {
      id: 'hyeok-yun',
      name: 'Hyeok Yun',
      role: "Master's Student",
      affiliation: 'School of Business and Technology Management, KAIST',
      photo: null,
      links: {
        email: 'ed_yun98@kaist.ac.kr',
      },
    },
    {
      id: 'jungwon-kim',
      name: 'Jungwon Kim',
      role: "Master's Student",
      affiliation: 'School of Business and Technology Management, KAIST',
      photo: null,
      links: {
        email: 'jungwonkim126@kaist.ac.kr',
      },
    },
    {
      id: 'hyoshin-kim',
      name: 'Hyoshin Kim',
      role: 'PhD Student',
      affiliation: 'School of Business and Technology Management, KAIST',
      photo: null,
      links: {
        email: 'hyoshin.kim@kaist.ac.kr',
      },
    },
    {
      id: 'junsik-min',
      name: 'Junsik Min',
      role: 'Undergraduate Student',
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'junshik1211@kaist.ac.kr',
      },
    },
    {
      id: 'donggyu-lee',
      name: 'Donggyu Lee',
      role: "Master's Student",
      affiliation: 'Graduate School of Data Science, KAIST',
      photo: null,
      links: {
        email: 'donggyu.lee@kaist.ac.kr',
      },
    },
    {
      id: 'jaewon-cho',
      name: 'Jaewon Cho',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'cho35750@kaist.ac.kr',
      },
    },
    {
      id: 'chaemin-jang',
      name: 'Chaemin Jang',
      role: "Master's Student",
      affiliation: 'School of Computing, KAIST',
      photo: null,
      links: {
        email: 'jchaemin@gmail.com',
      },
    },
  ],
};
