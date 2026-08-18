// Portfolio projects data structure
export const projects = [
  {
    id: 1,
    category: "Beauty & Skincare",
    categoryNumber: "01",
    title: "Luxury Skincare Commercial",
    services: ["AI Film", "Creative Direction", "Editing"],
    media: {
      type: "video",
      src: "/public/media/projects/beauty-skincare.mp4",
      poster: "/public/media/projects/beauty-skincare-poster.jpg",
    },
    orientation: "portrait",
    layout: "single-large",
  },
  {
    id: 2,
    category: "Health & Wellness",
    categoryNumber: "02",
    title: "Ovena Health",
    services: ["Content System", "AI Video", "Product Storytelling"],
    media: {
      type: "video",
      src: "/public/media/projects/health-wellness.mp4",
      poster: "/public/media/projects/health-wellness-poster.jpg",
    },
    orientation: "landscape",
    layout: "dual-offset",
    secondaryMedia: {
      type: "image",
      src: "/public/media/projects/health-secondary.jpg",
    },
  },
  {
    id: 3,
    category: "Product Visuals",
    categoryNumber: "03",
    title: "Product Stories",
    services: ["AI Product Film", "Motion", "Campaign Creative"],
    media: {
      type: "video",
      src: "/public/media/projects/product-stories.mp4",
      poster: "/public/media/projects/product-stories-poster.jpg",
    },
    orientation: "landscape",
    layout: "full-width",
  },
  {
    id: 4,
    category: "AI Films",
    categoryNumber: "04",
    title: "AI Storytelling Short",
    services: ["Concept", "AI Film", "Editing"],
    media: {
      type: "video",
      src: "/public/media/projects/storytelling-short.mp4",
      poster: "/public/media/projects/storytelling-poster.jpg",
    },
    orientation: "landscape",
    layout: "cinematic",
  },
  {
    id: 5,
    category: "Health Tech",
    categoryNumber: "05",
    title: "Speculative Health-Tech Brand Film",
    services: ["Creative Direction", "AI Production", "VSL"],
    media: {
      type: "video",
      src: "/public/media/projects/health-tech.mp4",
      poster: "/public/media/projects/health-tech-poster.jpg",
    },
    orientation: "landscape",
    layout: "asymmetric",
  },
  {
    id: 6,
    category: "AI UGC",
    categoryNumber: "06",
    title: "Social-First AI Creative",
    services: ["AI UGC", "Paid Social", "Short Form"],
    media: [
      {
        type: "video",
        src: "/public/media/projects/ugc-01.mp4",
        orientation: "portrait",
      },
      {
        type: "video",
        src: "/public/media/projects/ugc-02.mp4",
        orientation: "portrait",
      },
      {
        type: "video",
        src: "/public/media/projects/ugc-03.mp4",
        orientation: "portrait",
      },
    ],
    layout: "triptych",
  },
];

export const capabilities = [
  { title: "AI Films", number: "01" },
  { title: "Beauty & Skincare", number: "02" },
  { title: "Health & Wellness", number: "03" },
  { title: "AI UGC", number: "04" },
  { title: "Product Visuals", number: "05" },
  { title: "Paid Social", number: "06" },
  { title: "Creative Direction", number: "07" },
  { title: "Graphic Design", number: "08" },
];

export const toolkitItems = [
  "MIDJOURNEY",
  "KLING",
  "VEO",
  "RUNWAY",
  "AFTER EFFECTS",
  "PREMIERE PRO",
  "PHOTOSHOP",
  "ILLUSTRATOR",
  "ELEVENLABS",
  "HEYGEN",
  "CANVA",
  "CAPCUT",
  "STORYBOARDING",
  "PROMPT DESIGN",
  "COMPOSITING",
  "EDITING",
  "MOTION",
  "CREATIVE STRATEGY",
  "VISUAL STORYTELLING",
  "AI FILMMAKING",
  "PRODUCT VISUALS",
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Shay's ability to translate complex product stories into compelling visual narratives is exceptional. The work feels intentional, not generated.",
    client: "Sarah Chen",
    company: "Ovena Health",
    project: "Product Storytelling",
    image: "/public/media/testimonials/client-01.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Shay on our brand campaign was a game-changer. The creative strategy combined with AI production delivered results we didn't expect.",
    client: "Marcus Thompson",
    company: "Luxury Beauty Co.",
    project: "Campaign Creative",
    image: "/public/media/testimonials/client-02.jpg",
  },
  {
    id: 3,
    quote:
      "The attention to detail in every frame shows genuine creative thinking. Not just pushing buttons, but creating work with real intention.",
    client: "Elena Rodriguez",
    company: "Tech Innovation Labs",
    project: "Brand Film",
    image: "/public/media/testimonials/client-03.jpg",
  },
];

export const processStages = [
  {
    number: "01",
    title: "Think",
    heading: "Concept &\nCreative Strategy",
    description:
      "Understanding the audience, product, platform and objective before generating a single frame. This is where creative thinking shapes the direction.",
    media: {
      type: "video",
      src: "/public/media/process/concept.mp4",
    },
    layout: "text-left",
  },
  {
    number: "02",
    title: "Build",
    heading: "AI Production",
    description:
      "Building characters, environments, products and cinematic sequences through AI-assisted production workflows. Technology in service of creative vision.",
    media: {
      type: "video",
      src: "/public/media/process/production.mp4",
    },
    layout: "text-right",
  },
  {
    number: "03",
    title: "Shape",
    heading: "Edit &\nMotion",
    description:
      "Editing, compositing, typography, sound and motion turn individual shots into one coherent piece. This is where the work comes alive.",
    media: {
      type: "video",
      src: "/public/media/process/editing.mp4",
    },
    layout: "text-left",
  },
  {
    number: "04",
    title: "Deliver",
    heading: "Campaign-ready\ncontent.",
    description:
      "Final creative adapted into platform-specific formats, hooks, cutdowns and variations. Ready to perform from day one.",
    media: {
      type: "video",
      src: "/public/media/process/delivery.mp4",
    },
    layout: "text-right",
  },
];
