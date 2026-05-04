export const galleryItems = [
  {
    id: 1,
    slug: "inauguration-glimpses-trivandrum",
    image: "/images/gallery/inaguration/01.webp",
    title: "Inauguration Glimpses : Sreerudra Ayurveda Trivandrum",
    album: Array.from({ length: 73 }, (_, i) => `/images/gallery/inaguration/${String(i + 1).padStart(2, '0')}.webp`),
    videos: [
    ]
  },
  {
    id: 2,
    slug: "programs",
    image: "/images/cause2.png",
    title: "Programs",
    album: [
      "/images/cause2.png",
      "/images/cause3.png",
      "/images/cause4.png",
      "/images/cause5.png",
    ],
    videos: [
      { id: 1, url: "https://www.youtube.com/embed/7X8II6J-6mU", title: "Health Awareness Talk" }
    ]
  },
  {
    id: 3,
    slug: "celebrations-and-achievements",
    image: "/images/cause3.png",
    title: "Celebrations and Achievements",
    album: [
      "/images/cause3.png",
      "/images/cause4.png",
      "/images/cause5.png",
      "/images/cause6.png",
    ],
    videos: [
      { id: 1, url: "https://www.youtube.com/embed/7X8II6J-6mU", title: "Award Ceremony" }
    ]
  },
  {
    id: 4,
    slug: "sreerudra-ayurveda-alappuzha",
    image: "/images/cause4.png",
    title: "Sreerudra Ayurveda Alappuzha",
    album: [
      "/images/cause4.png",
      "/images/cause5.png",
      "/images/cause6.png",
      "/images/cause1.png",
    ],
    videos: [
      { id: 1, url: "https://www.youtube.com/embed/7X8II6J-6mU", title: "Alappuzha Tour" }
    ]
  },
  {
    id: 5,
    slug: "new-beginning",
    image: "/images/cause5.png",
    title: "New Beginning",
    album: [
      "/images/cause5.png",
      "/images/cause6.png",
      "/images/cause1.png",
      "/images/cause2.png",
    ],
    videos: [
      { id: 1, url: "https://www.youtube.com/embed/7X8II6J-6mU", title: "Our Vision" }
    ]
  }
];
