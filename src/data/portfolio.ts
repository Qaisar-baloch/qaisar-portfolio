// EDIT THIS FILE to update your portfolio content.
// Keep the existing object/array structure when changing text or links.

export const profile = {
  name: 'Qaisar Khan',
  headline: 'Engineering intelligence across physical and digital worlds.',
  location: 'Dunaújváros, Hungary',
  portrait: '/images/qaisar-portrait.jpeg',
  email: 'qaisarbaloch872@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Qaisar-baloch' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/qaisar-khan-320a22421' },
    { label: 'X', href: 'https://x.com/Qaisar01711' },
    { label: 'Instagram', href: 'https://www.instagram.com/qaisar__baloch1029' },
    { label: 'Discord', href: 'https://discord.gg/PAF9F3TD' },
  ],
}

export const featuredProjects = [
  {
    number: '01',
    name: 'ShopAI',
    category: 'Agentic AI · Business automation',
    description: 'A Streamlit business assistant prototype for small shops. It interprets natural-language orders, checks inventory, calculates prices, suggests alternatives and presents sales insights.',
    contribution: 'Workflow design, application testing and iterative improvements with AI-assisted development.',
    tags: ['Python', 'Streamlit', 'Groq', 'SQLite', 'Tool-calling agents'],
    links: [
      { label: 'Source code', href: 'https://github.com/Qaisar-baloch/shopAI', kind: 'source' },
      { label: 'Project documentation', href: 'https://drive.google.com/drive/folders/1bRZrGuRcDmBrluRyZ-CrRk2ZG6o4G-Ou?usp=drive_link' },
    ],
    status: 'GitHub project',
    theme: 'violet',
  },
  {
    number: '02',
    name: 'The Qualified Path',
    category: 'Education technology · Web platform',
    description: 'A scholarship preparation and guidance platform shaped by firsthand experience with the Stipendium Hungaricum application journey.',
    contribution: 'Original concept, content structure, user journey and design direction; AI-assisted implementation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify Functions'],
    links: [
      { label: 'Live website', href: 'https://the-qualified-path.netlify.app/' },
      { label: 'Source code', href: 'https://github.com/Qaisar-baloch/The-Qualified-Path', kind: 'source' },
    ],
    status: 'Live website',
    theme: 'blue',
  },
  {
    number: '03',
    name: 'Cloudly SaaS Analytics',
    category: 'Data analytics · Business intelligence',
    description: 'A four-page SaaS analytics dashboard covering executive overview, revenue, engagement and cohort retention. The underlying dataset is synthetic.',
    contribution: 'Created the synthetic dataset, data model, DAX measures, Power BI report and business-insight interpretation as a course project.',
    tags: ['Power BI', 'DAX', 'Python', 'Star schema', 'Data modelling'],
    links: [
      { label: 'Source code', href: 'https://github.com/Qaisar-baloch/Cloudly-Saas-Analytics-Dashboard', kind: 'source' },
    ],
    status: 'Course project',
    theme: 'green',
  },
  {
    number: '04',
    name: 'PneumoScan',
    category: 'Computer vision · Explainable AI',
    description: 'A chest X-ray classification application with image-quality checks and Grad-CAM visual explanations. It integrates an existing trained model; it is not a clinically validated diagnostic tool.',
    contribution: 'Built the application and integrated the existing model. Model training was not my contribution.',
    tags: ['Python', 'ResNet18', 'Computer vision', 'Grad-CAM', 'Flask'],
    links: [
      { label: 'Live demo', href: 'https://qaisar-baloch-pneumonia-detector-appstreamlit-app-i5ycry.streamlit.app/' },
      { label: 'Source code', href: 'https://github.com/Qaisar-baloch/Pneumonia-Detector', kind: 'source' },
    ],
    status: 'Research / portfolio project',
    theme: 'cyan',
  },
  {
    number: '05',
    name: 'Remote Sensing Communication CanSat',
    category: 'Embedded systems · Aerospace engineering',
    description: 'A can-sized satellite simulation model developed for the International CanSat Competition 2024 and as the final-year project at SUPARCO Institute of Technical Training.',
    contribution: 'Project lead. Led the project work and handled the electronics section, component stuffing and soldering, hardware testing, power-subsystem calculations, design and simulations, sensor-subsystem coding and interfacing, and technical documentation.',
    tags: ['ESP32', 'Sensor interfacing & coding', 'EPS design', 'Power calculations', 'PCB stuffing & soldering', 'Hardware testing', 'LoRa'],
    links: [
      { label: 'Technical documentation & media', href: 'https://drive.google.com/drive/folders/1vkQAq4ylp5WScTySMpFzcRtd9SzQPtEW?usp=drive_link' },
      { label: 'Source code', href: 'https://github.com/Qaisar-baloch/remote-sensing-communication-cansat', kind: 'source' },
    ],
    status: '2nd place · ICC 2024',
    theme: 'blue',
    award: '2nd Place · 10th International Iran CanSat Competition 2024',
  },
]

export const experience = {
  company: 'SUPARCO',
  role: 'Sub Engineer · Space Electronics Wing',
  location: 'Karachi, Pakistan',
  period: 'March 2025 – August 2026',
  summary: 'Engineering experience in satellite communications, spectrum monitoring, technical analysis and electronics support.',
  responsibilities: [
    'Monitored satellite frequency spectra and analysed signal interference.',
    'Ran satellite network simulations, data validation and frequency coordination assessments using ITU Radiocommunication software.',
    'Built Power BI dashboards and analysed satellite and frequency datasets using Excel and Access.',
    'Automated recurring calculations with Excel tools, including satellite radiation-pattern calculations.',
    'Diagnosed and repaired electronic equipment and supported engineering investigations alongside supervisors.',
  ],
  tools: ['SpaceCap', 'SpaceCom', 'EPFD', 'Power BI', 'Excel', 'Microsoft Access'],
}

export const learningProjects: { title: string; group: string; detail: string; demo?: string; repo?: string }[] = [
  { title: 'AI Resume Assistant', group: 'AI productivity', detail: 'LLM-assisted resume review, estimated ATS-readiness feedback and improvement suggestions.' },
  { title: 'AI Email Generator', group: 'AI productivity', detail: 'Tone- and purpose-aware email generation.', demo: 'https://ai-email-generator-5eg2njicewvgd6eganryk3.streamlit.app/', repo: 'https://github.com/Qaisar-baloch/AI-EMAIL-GENERATOR' },
  { title: 'AI Content Assistant', group: 'AI productivity', detail: 'Platform-oriented social content generation.', demo: 'https://qaisar-baloch-ai-content-assistant-app1-ycxsdn.streamlit.app/', repo: 'https://github.com/Qaisar-baloch/AI-content-Assistant' },
  { title: 'PDF RAG Chatbot', group: 'Retrieval systems', detail: 'Document question answering with embeddings and FAISS.', demo: 'https://rag-based-ai-app-hu46rmwwh8fprdkzxcncvu.streamlit.app/', repo: 'https://github.com/Qaisar-baloch/PDF-RAG-Chatbot' },
  { title: 'AI HR Policy Assistant', group: 'Retrieval systems', detail: 'A retrieval-augmented assistant for HR policy documents.', repo: 'https://github.com/Qaisar-baloch/AI-HR-POLICY-ASSISTANT' },
  { title: 'Advanced RAG Document Assistant', group: 'Retrieval systems', detail: 'Hybrid semantic and keyword retrieval for document-grounded responses.', repo: 'https://github.com/Qaisar-baloch/ADVANCED-RAG-BASED-AI-DOCUMENT-ASSISTANT' },
  { title: 'Pakistan Cyber Law RAG', group: 'Retrieval systems', detail: 'A source-oriented legal information retrieval prototype, not legal advice.', repo: 'https://github.com/Qaisar-baloch/PAKISTAN-CYBER-LAW-RAG-APPLICATION' },
  { title: 'AI Learning Roadmap Generator', group: 'Agentic workflows', detail: 'A multi-model pipeline that generates, critiques and improves learning plans.', demo: 'https://huggingface.co/spaces/qaisar50850/AI-LEARNING-ROADMAP-GENERATOR', repo: 'https://github.com/Qaisar-baloch/AI-LEARNING-ROADMAP-GENERATOR' },
  { title: 'AI Study Pack Generator', group: 'Agentic workflows', detail: 'A multi-stage workflow for study material, quizzes and flashcards.', demo: 'https://ai-study-pack-generator-using-ai-worklfow-thb453qxysnzz547lxw2.streamlit.app/', repo: 'https://github.com/Qaisar-baloch/AI-study-pack-generator-using-Ai-worklfow' },
  { title: 'RASAI AI', group: 'Agentic prototype', detail: 'An experimental AI assistant concept with a deployed prototype; feature scope may evolve.', demo: 'https://rasai-ai-ikwwym8y9hdyrbkbywuewk.streamlit.app/', repo: 'https://github.com/Qaisar-baloch/RASAI-AI' },
]

export const skills = {
  'AI & intelligent systems': ['Python', 'LLM APIs', 'Prompt engineering', 'RAG', 'Embeddings', 'FAISS', 'LangChain', 'LangGraph', 'Tool-calling agents', 'Hugging Face'],
  'Machine learning & vision': ['scikit-learn', 'CNN fundamentals', 'Transfer learning integration', 'Model evaluation', 'OpenCV'],
  'Data & analytics': ['NumPy', 'Pandas', 'EDA', 'Power BI', 'DAX', 'Excel', 'Microsoft Access', 'SQL / MySQL', 'ETL', 'Data modelling'],
  'Electronics & embedded': ['Arduino', 'ESP32', 'PIC', 'Embedded C/C++', 'Sensors', 'EPS', 'PCB design', 'Altium Designer', 'Proteus', 'Soldering & testing'],
  'RF & satellite systems': ['Spectrum monitoring', 'Interference analysis', 'Frequency coordination', 'SpaceCap', 'SpaceCom', 'EPFD'],
  'Development & tools': ['Git', 'GitHub', 'FastAPI fundamentals', 'Flask', 'Streamlit', 'React fundamentals', 'Docker fundamentals'],
}

export const technologySkills = {
  Electronics: ['Arduino', 'ESP32', 'PIC microcontrollers', 'Embedded C/C++', 'Sensors', 'EPS', 'PCB design', 'Altium Designer', 'Proteus', 'Soldering', 'Oscilloscope & lab instruments', 'SpaceCap', 'SpaceCom', 'EPFD'],
  Data: ['Python', 'NumPy', 'Pandas', 'EDA', 'Excel', 'Microsoft Access', 'Power BI', 'DAX', 'SQL / MySQL', 'ETL', 'Star schema', 'Data modelling'],
  AI: ['Python', 'LLM APIs', 'Prompt engineering', 'RAG', 'Embeddings', 'FAISS', 'LangChain', 'LangGraph', 'Tool calling', 'Multi-step agent workflows', 'Hugging Face'],
}

export const achievements = [
  {
    title: '2nd Place · International Iran CanSat Competition 2024',
    issuer: '10th International Iran CanSat Competition',
    detail: 'Team achievement for the Remote Sensing Communication CanSat project.',
    year: '2024',
  },
  {
    title: 'Best Project of the Year',
    issuer: 'SUPARCO Institute of Technical Training',
    detail: 'Awarded for the CanSat final-year project.',
    year: '2024',
  },
  {
    title: 'Generative & Agentic AI Top Performer',
    issuer: 'Pak Angels · Cohort 11',
    detail: 'Scored 91% in the Generative & Agentic AI training programme.',
    year: '2026',
  },
]

export const certifications = [
  { title: 'Artificial Intelligence Using Python', issuer: 'DigiSkills', date: '20 Jul 2026', focus: 'Python, machine learning, deep learning and AI application development' },
  { title: 'Data Analytics and Business Intelligence', issuer: 'DigiSkills', date: '20 Jul 2026', focus: 'Data analytics, data modelling, DAX and Power BI' },
  { title: 'Mathematical Foundations and Quantum Mechanics Essentials', issuer: 'Packt · Coursera', date: '02 Nov 2026', focus: 'Mathematical foundations and introductory quantum mechanics' },
  { title: 'Generative & Agentic AI Top Performer', issuer: 'Pak Angels · Cohort 11', date: '17 Oct 2026', focus: 'Top performer recognition · score: 91%' },
  { title: 'Introduction to Modern AI', issuer: 'Virtual University · Cisco Networking Academy', date: '02 Mar 2026', focus: 'Modern AI concepts' },
  { title: 'C++ Essentials 1', issuer: 'Cisco Networking Academy', date: '05 Jan 2026', focus: 'C++ programming fundamentals' },
  { title: 'Work Smarter with Microsoft Excel', issuer: 'Microsoft · Coursera', date: '18 Dec 2025', focus: 'Excel productivity and spreadsheet workflows' },
  { title: 'AI For Everyone', issuer: 'DeepLearning.AI · Coursera', date: '21 Jul 2025', focus: 'AI concepts, capabilities and practical context' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '06 Mar 2025', focus: 'Cybersecurity fundamentals' },
  { title: 'Python Coder', issuer: 'Kaggle', date: '06 Mar 2025', focus: 'Python programming badge' },
  { title: 'Communication and Soft Skills', issuer: 'DigiSkills', date: '25 Jul 2024', focus: 'Communication and professional soft skills' },
  { title: 'Freelancing', issuer: 'DigiSkills', date: '25 Jul 2024', focus: 'Freelancing fundamentals' },
  { title: 'Generative AI for Beginners', issuer: 'Great Learning Academy', date: 'Aug 2024', focus: 'Generative AI foundations' },
]

