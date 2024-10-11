const members = [
  {
    image: "/static/member/wz.JPG",
    name: "William Zhao",
    position: "President",
    description:
      "hi! I'm William, a 2nd year Computer Science major! I'm the CodeSprint 2024 Director. I really enjoy competitive programming and problem solving. As for non-CS related stuff, I love learning about 20th century European history, geeking out about airplanes, and reading about baseball analytics.",
    funFacts: {
      "ice cream": "Cookies and Cream",
      professor: "Smallberg",
      editor: "VS Code",
      language: "c++",
      course: "CS 35L",
      "TV show": "Better Call Saul!",
    },
  },
  {
    image: "/static/member/am.JPG",
    name: "Akash Madiraju",
    position: "Vice President",
    description:
      "Hi! I'm Akash, a 2nd year CS Major this year, and I'm from the Bay Area. I like competitive programming and math, and enjoy playing video games (Smash and Rocket League) and playing the piano and saxophone.",
    funFacts: {
      "ice cream": "Birthday Cake",
      professor: "Paul Balmer",
      editor: "Vim",
      language: "C++",
      course: "Math 115AH",
      "TV show": "Death Note",
    },
  },
  {
    image: "/static/member/jliu.JPG",
    name: "Jason Liu",
    position: "Vice President",
    description:
      "Hey, I'm Jason, a 2nd year Computer Science major. Aside from competitive programming, I like math and playing social deduction games. In short, I really enjoy solving problems. You might also catch me reading in dining halls (in which case please say hi!)",
    funFacts: {
      "ice cream": "Vanilla",
      professor: "Eggert",
      editor: "MacVim",
      language: "C++",
      course: "CS 35L",
      "TV show": "Sousou no Frieren",
    },
  },
  {
    image: "/static/member/rl.JPG",
    name: "Robert Lee",
    position: "Advisor, President Emeritus",
    description:
      "A 4th year Aero and Math of Comp looking forward to graduation. In my spare time, I read about astronomy and design orbits for CubeSats. You'll also catch me cooking, eating out to avoid cooking, or playing Overwatch.",
    funFacts: {
      "ice cream": "Vietnamese Rocky Road",
      professor: "Taira",
      editor: "Vim",
      language: "C++",
      course: "MAE 161C",
      "TV show": "Community",
    },
  },
  {
    image: "/static/member/sn.JPG",
    name: "Suhas Nagar",
    position: "Advisor, President Emeritus",
    description:
      "Hi! I'm Suhas, a 3rd year CS Major from the Bay Area. In my free time, you can usually find me playing video games (I'm a big fan of Hollow Knight + Outer Wilds), trying to write my own rap battles, or playing basketball at Wooden :)",
    funFacts: {
      "ice cream": "Pink Rose",
      professor: "Reinman",
      editor: "IntelliJ",
      language: "Java",
      course: "CS C122",
      "TV show": "The Owl House",
    },
  },
  {
    image: "/static/member/cc.JPG",
    name: "Carson Cox",
    position: "Officer",
    description:
      "Howdy! I'm Carson, a fourth year computer science major. You can probably find me at the climbing gym more often than not, and when I'm not there I'm probably watching anime in my apt or playing switch with my roommates. Don't be afraid to say hi if you see me!",
    funFacts: {
      "ice cream": "Vanilla",
      professor: "Eggert",
      editor: "Repl.it",
      language: "C++",
      course: "CS 131",
      "TV show": "One Piece",
    },
  },
  {
    image: "/static/member/is.JPG",
    name: "Illia Shkirko",
    position: "Officer",
    description:
      "Hi! I am a third year Computer Science major. I enjoy rock-climbing, traveling, skiing, and going to concerts.",
    funFacts: {
      "ice cream": "Chocolate",
      professor: "Nachenberg",
      editor: "VSCode",
      language: "C++",
      course: "CS 111",
      "TV show": "how to get away with murder",
    },
  },
  {
    image: "/static/member/jh.JPG",
    name: "Jason Huang",
    position: "Officer",
    description:
      "Hi! I'm a rising 3rd year interested in math and cs. I like playing tennis and learning new songs on the piano in my free time. Hoping to get good at running xor swimming :)",
    funFacts: {
      "ice cream": "Cotton candy",
      professor: "Gieseker",
      editor: "Sublime text",
      language: "C++",
      course: "math 275D",
      "TV show": "kimi no na wa",
    },
  },
  {
    image: "/static/member/ad.JPG",
    name: "Arvin Ding",
    position: "Officer",
    description:
      "Sup! I'm a third year CS major.  I like math, programming, sushi, anime (Frieren is fire), and shark tank. I want to create a startup at some point.",
    funFacts: {
      "ice cream": "mango",
      professor: "Igor Pak!",
      editor: "Eclipse",
      language: "Java",
      course: "CS 35L",
      "TV show": "Ping Pong The Animation!!!",
    },
  },
  {
    image: "/static/member/snal.JPG",
    name: "Sumith Nalabolu",
    position: "Officer",
    description:
      "hi im sumith, a 4th year interested in math and pl. i like solving problems, taking/writing contests, and teaching. in my free time i watch/play sports, speed(?)cube, and hopefully will travel a lot this year",
    funFacts: {
      "ice cream": "Cookies and Cream",
      professor: "Igor Pak",
      editor: "Vim",
      language: "OCaml",
      course: "Math 184 Combinatorics",
      "TV show": "Clannad",
    },
  },
  {
    image: "/static/member/sk.JPG",
    name: "Shubham Kumar",
    position: "Officer",
    description:
      "hi! i'm shubham, a second-year computer engineering major from the bay. i'm interested in math, competitive programming and ml. in my free time, you can find me losing chess games, playing guitar or biking.",
    funFacts: {
      "ice cream": "covefe",
      professor: "Paul Balmer",
      editor: "repl.it",
      language: "python",
      course: "CS 111",
      "TV show": "spongebob",
    },
  },
  {
    image: "/static/member/xx.JPG",
    name: "Charlotte Chen",
    position: "Officer",
    description:
      "Hiii, I'm Charlotte, a second-year math major! I'm interested in competitive programming, cryptography, and analysis. I also like music (esp Bach and Rachmaninoff), a cat called Jr. Kolmogorov (mine), and dota2.",
    funFacts: {
      "ice cream": "Cookies & Cream",
      professor: "Marek Biskup",
      editor: "vs code",
      language: "C++",
      course: "Math 131BH",
      "TV show": "Steins Gate",
    },
  },
  {
    image: "/static/member/pm.png",
    name: "Peony Mong",
    position: "Officer",
    description:
      "Hi, I'm Peony, a second-year Computer Science major who is also trying to major in applied math. I like to do logic puzzles, play video games, do wushu, and spend quality time with my friends.",
    funFacts: {
      "ice cream": "Cookie butter",
      professor: "KTD",
      editor: "VSCode",
      language: "C++/Java",
      course: "Math 61",
      "TV show": "Legend of Korra",
    },
  },
  {
    image: "/static/member/hh.JPG",
    name: "Henry Huang",
    position: "Officer",
    description:
      "Hi, my name is Henry Huang, and I'm a second year CS major at UCLA. I started competitive programming in high school, and it has been a hobby of mine ever since. In my free time, I like to code random things, play video games, and listen to music.",
    funFacts: {
      "ice cream": "Lime",
      professor: "Smallberg",
      editor: "CLion",
      language: "Python",
      course: "CS33",
      "TV show": "Don't watch",
    },
  },
  {
    image: "/static/member/hw.jpg",
    name: "Henry Wang",
    position: "Officer",
    description: "Second year CS major.",
    funFacts: {
      "ice cream": "strawberry",
      professor: "none",
      editor: "VS code",
      language: "c++",
      course: "cs35l",
      "TV show": "Bocchi the rock",
    },
  },
  {
    image: "/static/member/sk-fake.JPG",
    name: "Shreyas Kaasyap",
    position: "Officer",
    description:
      "Hi, my name is Shreyas, and I'm a second year EE major at UCLA. In my free time, I like to play basketball, play the guitar and piano, and go out with friends.",
    funFacts: {
      "ice cream": "cotton candy",
      professor: "jonathan kao",
      editor: "vs code",
      language: "c++",
      course: "ee 102",
      "TV show": "The office",
    },
  },
  {
    image: "/static/member/ra.jpg",
    name: "Rathul Anand",
    position: "Officer",
    description:
      "Whats up! I'm Rathul, a 1st year Ling+CS and Math major who likes puzzles, ML, and security. More often than not you can find me with a matcha latte, but in the meantime, I enjoy playing percussion with the Symphony, hooping, or spending time with my friends :)",
    funFacts: {
      "ice cream": "mango",
      professor: "eggert",
      editor: "vs code",
      language: "c++",
      course: "ece 117",
      "TV show": "loki",
    },
  },
  {
    image: "/static/member/ew.jpg",
    name: "Eric Wang",
    position: "Officer",
    description:
      "Hello! I'm Eric, a 1st CS major, and I'm interested in algorithmic puzzles and computer graphics. You'll probably find me in E6 trying out dumb things with programming languages. Outside of CS, I'm also part of Medleys A Cappella, a community service a cappella group!",
    funFacts: {
      "ice cream": "Cookies and Cream",
      professor: "KT Do",
      editor: "Neovim (but really VS Code)",
      language: "Python",
      course: "None of them so far",
      "TV show": "Kaguya-sama: Love is War",
    },
  },
  {
    image: "/static/member/ms.JPG",
    name: "Michael Song",
    position: "Officer",
    description:
      "Hi! I'm Michael, a 2nd year CS major, interested in competitive programming and machine learning. Outside of CS, I enjoy playing basketball (or any sport in general) and trying new things with friends. I'm also involved with other student organizations such as exploretech.la.",
    funFacts: {
      "ice cream": "Cookie Dough",
      professor: "KT Do",
      editor: "anything jetbrains",
      language: "C++ for comp prog, Python otherwise",
      course: "CS 188",
      "TV show": "Don't watch",
    },
  },
  {
    image: "/static/member/ss.jpg",
    name: "Surya Subbarao",
    position: "Officer",
    description:
      "Hello! I'm Surya, a 2nd year CS and Math major, and I'm interested in computer architecture and probability theory. I also love reading, jazz music, and learning languages. I enjoy collecting strange icebreaker questions.",
    funFacts: {
      "ice cream": "Mint",
      professor: "Marek Biskup",
      editor: "Vim",
      language: "C++",
      course: "CS 111",
      "TV show": "Don't watch",
    },
  },
  {
    image: "/static/member/hz.jpg",
    name: "Harry Zhou",
    position: "Officer",
    description:
      "Hey there! I'm Harry, a 1st year CSE major, and I love competitive programming, math, and ML. Outside of CS, I enjoy playing basketball (future Steph Curry in the making :D), chess, and hanging out with my friends!",
    funFacts: {
      "ice cream": "Sea salt",
      professor: "Jonathan Kao",
      editor: "Neovim (really, cough cough Eric)",
      language: "C++",
      course: "ECE 147",
      "TV show": "Friends (all time), Arcane (more recently)",
    },
  },
];

export { members };