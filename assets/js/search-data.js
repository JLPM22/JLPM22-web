// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-avatargo-about-animating-vr-avatars-was-accepted-at-eurographics-2022",
          title: 'Our paper AvatarGo about animating VR avatars was accepted at Eurographics 2022.',
          description: "",
          section: "News",},{id: "news-i-am-starting-an-internship-at-cyens-centre-of-excellence-under-the-supervision-of-dr-andreas-aristidou",
          title: 'I am starting an internship at CYENS Centre of Excellence under the supervision...',
          description: "",
          section: "News",},{id: "news-our-paper-motion-matching-for-vr-was-accepted-at-the-21st-annual-acm-siggraph-eurographics-symposium-on-computer-animation-sca-2022",
          title: 'Our paper Motion Matching for VR was accepted at the 21st annual ACM...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-a-ph-d-scholarship-fpu-2021-code-fpu21-01927-from-the-spanish-administration",
          title: 'I was awarded a Ph.D. scholarship FPU 2021 (code FPU21/01927) from the Spanish...',
          description: "",
          section: "News",},{id: "news-our-paper-animation-fidelity-in-self-avatars-was-accepted-at-the-30th-ieee-conference-on-virtual-reality-and-3d-user-interfaces-ieee-vr-2023",
          title: 'Our paper Animation Fidelity in Self-Avatars was accepted at the 30th IEEE Conference...',
          description: "",
          section: "News",},{id: "news-our-paper-fitted-avatars-was-accepted-at-the-springer-virtual-reality-journal",
          title: 'Our paper Fitted avatars was accepted at the Springer Virtual Reality journal.',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-in-siggraph-asia-2023-our-paper-sparseposer-accepted-at-the-acm-transactions-on-graphics-journal",
          title: 'I will be presenting in SIGGRAPH Asia 2023 our paper SparsePoser accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-exploring-the-role-of-expected-collision-feedback-in-vr-was-accepted-at-the-31st-ieee-conference-on-virtual-reality-and-3d-user-interfaces-ieee-vr-2024",
          title: 'Our paper Exploring the role of expected collision feedback in VR was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-stretch-your-reach-was-accepted-at-the-chi-24-conference-on-human-factors-in-computing-systems",
          title: 'Our paper Stretch Your Reach was accepted at the CHI ‘24 conference on...',
          description: "",
          section: "News",},{id: "news-i-ve-joined-the-core-r-amp-amp-d-team-at-hyper-online-a-ycombinator-and-amazon-backed-startup-as-an-external-contractor-to-continue-developing-virtual-avatars-for-vtubers",
          title: 'I’ve joined the core R&amp;amp;amp;D team at Hyper Online, a YCombinator and Amazon-backed...',
          description: "",
          section: "News",},{id: "news-i-am-starting-an-internship-at-max-planck-institute-for-informatics-under-the-supervision-of-prof-dr-christian-theobalt",
          title: 'I am starting an internship at Max Planck Institute for Informatics under the...',
          description: "",
          section: "News",},{id: "projects-avatargo",
          title: 'AvatarGo',
          description: "AvatarGo is a Unity package for incorporating self-avatars in any Virtual Reality application with a low-cost set-up consisting of a SteamVR-based HMD, 2 Controllers and 3 HTC VIVE Trackers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/avatargo/";
            },},{id: "projects-crowd-simulation",
          title: 'Crowd Simulation',
          description: "Crowd simulation project. Implementation of common algorithms such as A* and Bidirectional A*. Grid and triangular navigation meshes. Density cells. Steering behaviors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crowds/";
            },},{id: "projects-35k-downloads-itch-io-small-games",
          title: '+35k downloads. itch.io small games',
          description: "Small games I made for my YouTube channel and published for free on itch.io with +35k downloads and +30k browser plays",
          section: "Projects",handler: () => {
              window.location.href = "/projects/itchio/";
            },},{id: "projects-motion-matching",
          title: 'Motion Matching',
          description: "Motion Matching implementation for the Unity game engine. It includes a spring-based character controller, BVH-accelerated search, inertialization blending, automatic and customizable feature extraction/selection, foot lock, among other features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/motionmatching/";
            },},{id: "projects-particle-hair-and-cloth-simulation",
          title: 'Particle, Hair and Cloth Simulation',
          description: "GPU Particle Simulation with simple collisions. CPU Hair and Cloth Simulation based on Spring simulations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/particles/";
            },},{id: "projects-pymotion",
          title: 'PyMotion',
          description: "Python library for manipulating and processing motion data in NumPy or PyTorch. It is designed to facilitate the development of neural networks for character animation. Some features are quaternion operations and conversions to other rotation representations, dual quaternions, BVH importer and exporter, skeletal operations such as forward kinematics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pymotion/";
            },},{id: "projects-cuda-sphere-marching",
          title: 'CUDA Sphere Marching',
          description: "Simple Sphere Marching implementation on CUDA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sphere_marching/";
            },},{id: "projects-vr-navigation-and-segmentation",
          title: 'VR Navigation and Segmentation',
          description: "Undergraduate Thesis. Research and development of different navigation techniques in collaboration with Sagrada Familia, and segmentation of collaborators with low-resolution images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tfg/";
            },},{id: "projects-procedural-trees",
          title: 'Procedural Trees',
          description: "Procedural tree generation based on L-Systems. Blender Phyton script.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tree_procedural/";
            },},{id: "projects-vr-physics-interaction",
          title: 'VR Physics Interaction',
          description: "Spring-based VR physics interactions for realistic object manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vrphysics/";
            },},{id: "projects-100k-subscribers-gamedev-youtube-channel-spanish",
          title: '+100k subscribers GameDev YouTube channel (Spanish)',
          description: "YouTube GameDev channel with more than 100 thousand subscribers. I created the channel to make gamedev concepts easier to the general public. Typically, I develop specific games for the channel, but I also upload my research and personal projects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yt/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%73%65.%6C%75%69%73.%70%6F%6E%74%6F%6E@%75%70%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JLPM22", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jlponton", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6576-4528", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Jose-Luis-Ponton/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yNa9qSIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
