export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },
  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/borrow-records",
    text: "Borrow Records",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy / Fiction",
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    coverColor: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. Nora Seed is at a crossroads in her life, feeling as though she has let everyone down, including herself. After deciding to end her life, she finds herself in a mysterious library filled with endless books. Each book represents a different life she could have lived had she made different choices. The library exists in the limbo between life and death, and Nora has the opportunity to try various lives to see if any would have been more fulfilling than her own. The midnight librarian, Mrs. Elm, guides her through this process, explaining that Nora can stay in any life where she feels true happiness. As Nora explores different possibilities—becoming an Olympic swimmer, a glaciologist in the Arctic, a rock star, a philosophy professor, and many others—she begins to understand important truths about regret, possibility, and what makes a life worth living.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help / Productivity",
    rating: 4.9,
    total_copies: 99,
    available_copies: 50,
    description:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    coverColor: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day. James Clear presents a comprehensive framework for understanding how habits work and a practical guide for implementing them effectively in our daily lives. The book is built around the concept that tiny changes can yield remarkable results over time through the power of compound growth. Clear introduces the four-step pattern that underlies every habit—cue, craving, response, and reward—and explains how to leverage these components to build better habits. Rather than focusing on massive, overnight transformations, Clear advocates for the power of marginal gains and introduces his philosophy of atomic habits—regular practices or routines that are small and easy to do but compound into significant outcomes. The book delves into the science of habit formation, explaining concepts like habit stacking, implementation intentions, and environment design as practical strategies for behavior change. Clear emphasizes the importance of identity-based habits, suggesting that the most effective way to change behavior is to focus on who we wish to become rather than what we want to achieve. Through engaging storytelling and evidence-based research, Clear illustrates how professional athletes, successful business leaders, and high-achieving artists leverage the power of small habits to produce extraordinary results. The book provides specific tactics for overcoming a lack of motivation and willpower, designing an environment to make success easier, getting back on track when you fall off course, and applying these ideas to achieve measurable results. Throughout, Clear emphasizes that habits are the compound interest of self-improvement, and that getting 1% better every day is the key to remarkable long-term transformation in any area of life.",
  },
  {
    id: 3,
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    genre: "Computer Science / JavaScript",
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    coverColor: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures. Kyle Simpson's second book in the 'You Don't Know JS' series dives deep into how JavaScript manages variable accessibility through its scoping mechanisms, a critical concept that underpins much of the language's behavior. The book begins by exploring the fundamental concept of scope in programming languages, explaining how JavaScript's lexical scope system works during the compilation phase rather than at runtime. Simpson meticulously breaks down the process of how variables are declared, assigned, and accessed within different scope contexts, clarifying common misconceptions about hoisting and the temporal dead zone. A significant portion of the book is dedicated to understanding closures—one of JavaScript's most powerful yet frequently misunderstood features. Simpson explains how closures occur when a function retains access to its lexical scope even when executed outside that scope, providing concrete examples of how this mechanism enables sophisticated programming patterns like modules, currying, and partial application. The book also covers advanced topics like block scoping with let and const, the module pattern, and how the JavaScript engine optimizes scope access through compilation techniques. Simpson doesn't shy away from examining edge cases and potential pitfalls, offering pragmatic advice on leveraging scope and closures effectively while avoiding common bugs. Throughout the text, Simpson challenges readers to deepen their understanding beyond surface-level knowledge, emphasizing that truly mastering these concepts leads to more robust, maintainable code. With clear examples, practical exercises, and thoughtful explanations, this book serves as both a comprehensive reference and an invaluable learning resource for developers seeking to truly understand JavaScript's inner workings.",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophy / Adventure",
    rating: 4.5,
    total_copies: 78,
    available_copies: 50,
    description:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    coverColor: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure. The story begins with Santiago, who has a recurring dream about finding a treasure at the Egyptian pyramids. Encouraged by a mysterious old king named Melchizedek, who appears to him in the Spanish town of Tarifa, Santiago sells his flock of sheep and begins his quest across the Sahara Desert. The king introduces Santiago to the concept of a 'Personal Legend'—the path that one is destined to follow in life—and gives him two stones, Urim and Thummim, to help guide his journey. Santiago's adventure takes him first to Tangier in northern Africa, where he is robbed and forced to work for a crystal merchant. Despite this setback, Santiago learns valuable lessons about the business world and helps the merchant's shop prosper through innovation and hard work. After earning enough money, Santiago joins a caravan crossing the desert toward Egypt. During this journey, he meets an Englishman studying alchemy and begins to learn about the universal language of the world and the Soul of the World—concepts suggesting that everything in the universe is interconnected. The caravan eventually reaches an oasis where Santiago meets and falls in love with Fatima, a beautiful desert woman. There, he also encounters a 200-year-old alchemist who becomes his spiritual guide. The alchemist teaches Santiago to listen to his heart, follow omens, and understand that when you truly want something, the universe conspires to help you achieve it. Together they continue toward the pyramids, facing numerous trials that test Santiago's courage and faith. Throughout his journey, Santiago learns that the real treasure is not material wealth but the wisdom gained through pursuing one's Personal Legend and listening to one's heart. The story concludes with Santiago finally reaching the pyramids, where a surprising revelation leads him back to where his journey began, discovering that the treasure he sought was always closer than he thought. The Alchemist serves as an allegorical novel about following one's dreams, recognizing opportunity, and understanding that the journey itself—with its lessons, experiences, and connections—is often more valuable than the destination.",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help / Productivity",
    rating: 4.7,
    total_copies: 23,
    available_copies: 23,
    description:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    coverColor: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity. Cal Newport's 'Deep Work' presents a compelling argument for the increasing value of concentrated, distraction-free thinking in our modern economy. The book is divided into two major parts: the first establishes the case for deep work's importance, while the second provides practical strategies for integrating deep work into our lives. Newport begins by defining deep work as professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit, creating new value and improving skills. He contrasts this with shallow work—non-cognitively demanding, logistical tasks often performed while distracted. Through numerous examples from fields ranging from academia to business, Newport demonstrates how deep work has become both increasingly valuable and increasingly rare in today's workplace. The author identifies several trends undermining our capacity for deep work, including open-plan offices, constant connectivity through digital tools, and metrics that reward visible busyness rather than meaningful output. Newport argues that those who cultivate the ability to perform deep work will thrive professionally in the knowledge economy. The second part of the book offers a practical training program for developing deep work habits. Newport presents four rules: work deeply by establishing rituals and routines that minimize the friction of transitioning to deep work; embrace boredom to strengthen attention muscles weakened by constant stimulation; quit social media selectively based on its actual value to your professional and personal goals; and drain the shallows by minimizing or eliminating low-value tasks. Throughout the book, Newport provides strategies like scheduling deep work blocks, implementing a 'shutdown complete' ritual at day's end, practicing productive meditation, and structuring workdays around a carefully crafted set of priorities. He also addresses common objections and offers modifications for different career contexts. The central thesis remains consistent: in an increasingly distracted world, the ability to focus deeply is becoming both more valuable and more rare, creating a significant opportunity for those willing to cultivate this skill.",
    isLoanedBook: false
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 56,
    available_copies: 56,
    description:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    coverColor: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code. Robert C. Martin's influential work presents a comprehensive philosophy for creating software that is readable, understandable, and maintainable—what he terms 'clean code.' The book begins by establishing why clean code matters: poorly written code slows down development, creates technical debt, and ultimately costs organizations significant time and money. Martin argues that writing clean code is not just a technical skill but a professional responsibility and matter of craftsmanship. The book is structured as a practical guide, starting with fundamental principles like meaningful naming conventions, where Martin advocates for intention-revealing names that clearly communicate a variable or function's purpose. He then progresses through increasingly complex aspects of code organization, including functions (which should be small, do one thing, and operate at a single level of abstraction), comments (which should be used sparingly and only when the code itself cannot be made self-explanatory), formatting (which should be consistent and emphasize readability), error handling (which should be precise and preserve context), and proper object and data structure design. Martin draws significant attention to the importance of testing, presenting the practice of Test-Driven Development (TDD) as essential to creating clean code. He outlines principles for writing clean tests that are readable, fast, independent, and thorough. In later chapters, Martin explores systems architecture, showing how clean code principles scale from individual functions to entire codebases. He examines class organization, emergence of design, concurrency challenges, and progressive refinement of code. Throughout the book, Martin illustrates his principles with numerous code examples (primarily in Java, though the concepts apply broadly), often beginning with problematic code and progressively refactoring it to demonstrate improvement techniques. The book concludes with a comprehensive case study where the author applies the book's principles to transform a complex piece of code. 'Clean Code' represents not just a technical manual but a philosophy of software development that emphasizes professionalism, craftsmanship, and the creation of code that can be understood and maintained by others.",
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    genre: "Computer Science / Programming",
    rating: 4.8,
    total_copies: 25,
    available_copies: 3,
    description:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    coverColor: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A timeless guide for developers to hone their skills and improve their programming practices. 'The Pragmatic Programmer,' authored by Andrew Hunt and David Thomas, stands as a seminal work in software development literature that transcends specific technologies to focus on the mindset and approach that makes for effective programming. First published in 1999 and updated in 2019, the book presents programming as a craft that requires continuous learning, adaptation, and a practical approach to problem-solving. The authors organize their wisdom into short, digestible sections covering a wide range of topics relevant to modern software development. They begin with the concept of the 'pragmatic philosophy'—taking responsibility for one's work, avoiding broken windows (small problems that lead to deterioration), embracing change, and continuously learning. The book emphasizes practical techniques like prototyping, domain languages, decoupling, and tracer bullets (evolutionary prototypes that grow into the final system). A significant portion focuses on common programming pitfalls and how to avoid them: the dangers of duplication, orthogonality (keeping things independent), dead code, and premature optimization. Hunt and Thomas place substantial emphasis on automation, encouraging developers to learn command-line tools, master their editors, always use source control, and automate repetitive tasks whenever possible. They advocate for relentless testing, including unit testing, property-based testing, and testing the impossible edge cases. The book also covers practical project management approaches, communication strategies, and team dynamics. Throughout, the authors use memorable aphorisms like 'Don't Repeat Yourself' (DRY), 'Crash Early,' and 'You Can't Write Perfect Software' to encapsulate key principles. What distinguishes 'The Pragmatic Programmer' is its focus not just on writing code but on the broader practice of software development as a profession. The authors emphasize critical thinking, continuous improvement, and taking pride in one's work. They encourage developers to be catalysts for change, to critically analyze what they hear and read, and to constantly refine their skills through deliberate practice. By focusing on timeless principles rather than specific technologies, the book has remained relevant across decades of technological change, continuing to guide new generations of software developers in the art of pragmatic, effective programming.",
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance / Self-Help",
    rating: 4.8,
    total_copies: 10,
    available_copies: 5,
    description:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    coverColor: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making. In 'The Psychology of Money,' Housel presents a collection of 19 short stories that examine how people think about money and the psychological forces that influence our financial decisions. Rather than focusing on mathematical formulas or technical strategies, Housel argues that financial success is more about behavior than intelligence or specific knowledge. The book begins by establishing that everyone has their own unique relationship with money, shaped by their personal experiences, upbringing, generation, and values. Housel illustrates this through contrasting stories like that of Ronald Read, a janitor who amassed an $8 million fortune through modest living and consistent investing, and Richard Fuscone, a Harvard-educated executive who went bankrupt despite his advantages. Through these narratives, Housel explores concepts like the role of luck and risk in outcomes, the difference between being wealthy and being rich, and why reasonable financial goals often lead to better outcomes than ambitious ones. Key themes include the importance of saving as a hedge against life's inevitable uncertainties, the concept of 'room for error' in financial planning, the freedom that comes from controlling your time, and the compounding value of patience in investing. Housel emphasizes that wealth is what you don't see—the money not spent—and that financial independence comes from having a high savings rate rather than a high income. The book challenges conventional measures of success, suggesting that enough money to maintain independence and control over your time represents true wealth. Throughout the work, Housel weaves historical examples with personal anecdotes to illustrate how our psychology affects financial decisions. He discusses cognitive biases like overconfidence, the tendency to narrative-build from limited information, and our difficulty comprehending exponential growth. He examines how personal history shapes risk tolerance, why pessimism in financial matters sounds smarter than optimism, and why long-term thinking is both essential and extraordinarily difficult. What makes 'The Psychology of Money' distinctive is its accessible approach to complex financial concepts, focusing on human behavior and decision-making rather than technical analysis or specific investment recommendations. The book offers a framework for developing a healthier relationship with money based on humility, patience, and a clear understanding of one's own goals and values.",
  },
];

export const sorts = [
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "available",
    label: "Available",
  },
  {
    value: "highestRated",
    label: "Highest Rated",
  },
];

export const userRoles = [
  {
    value: "user",
    label: "User",
    bgColor: "bg-[#FDF2FA]",
    textColor: "text-[#C11574]",
  },
  {
    value: "admin",
    label: "Admin",
    bgColor: "bg-[#ECFDF3]",
    textColor: "text-[#027A48]",
  },
];

export const borrowStatuses = [
  {
    value: "overdue",
    label: "Overdue",
    bgColor: "bg-[#FFF1F3]",
    textColor: "text-[#C01048]",
  },
  {
    value: "borrowed",
    label: "Borrowed",
    bgColor: "bg-[#F9F5FF]",
    textColor: "text-[#6941C6]",
  },
  {
    value: "returned",
    label: "Returned",
    bgColor: "bg-[#F0F9FF]",
    textColor: "text-[#026AA2]",
  },
];
