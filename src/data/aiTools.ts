export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string;
  features: string[];
  freeTier: string;
}

export const aiTools: AITool[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "Advanced conversational AI by OpenAI for answering questions, writing, coding, and creative tasks.",
    category: "Conversational AI",
    link: "https://chat.openai.com",
    features: ["Text generation", "Code assistance", "Creative writing", "Question answering"],
    freeTier: "Free tier with GPT-3.5, paid plans for GPT-4"
  },
  {
    id: "2",
    name: "Claude",
    description: "Anthropic's AI assistant with strong reasoning and writing capabilities.",
    category: "Conversational AI",
    link: "https://claude.ai",
    features: ["Long context understanding", "Code generation", "Analysis", "Writing assistance"],
    freeTier: "Free tier available"
  },
  {
    id: "3",
    name: "Gemini",
    description: "Google's multimodal AI model with powerful reasoning and creative capabilities.",
    category: "Conversational AI",
    link: "https://gemini.google.com",
    features: ["Multimodal input", "Code generation", "Image understanding", "Creative tasks"],
    freeTier: "Free tier available"
  },
  {
    id: "4",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides accurate answers with sources.",
    category: "Research",
    link: "https://perplexity.ai",
    features: ["Real-time search", "Source citations", "Follow-up questions", "Research assistance"],
    freeTier: "Free tier with limited searches"
  },
  {
    id: "5",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps write code faster with intelligent suggestions.",
    category: "Coding",
    link: "https://github.com/features/copilot",
    features: ["Code completion", "Function generation", "Test writing", "Multiple languages"],
    freeTier: "Free for students and open source maintainers"
  },
  {
    id: "6",
    name: "Cursor",
    description: "AI-powered code editor built for pair programming with AI.",
    category: "Coding",
    link: "https://cursor.sh",
    features: ["Code generation", "Code explanation", "Refactoring", "Bug fixing"],
    freeTier: "Free tier available"
  },
  {
    id: "7",
    name: "v0 by Vercel",
    description: "Generate UI components and full pages from text descriptions.",
    category: "Design & Development",
    link: "https://v0.dev",
    features: ["UI generation", "React components", "Tailwind CSS", "Responsive design"],
    freeTier: "Free tier with limited generations"
  },
  {
    id: "8",
    name: "Lovable",
    description: "Build full-stack web applications with AI assistance.",
    category: "Design & Development",
    link: "https://lovable.dev",
    features: ["Full-stack development", "Real-time preview", "Backend integration", "Deployment"],
    freeTier: "Free tier available"
  },
  {
    id: "9",
    name: "Canva AI",
    description: "AI-powered design tools for creating graphics, presentations, and more.",
    category: "Design",
    link: "https://canva.com",
    features: ["Magic Design", "Background remover", "Text to image", "Design templates"],
    freeTier: "Free tier with AI features"
  },
  {
    id: "10",
    name: "Figma AI",
    description: "AI features in Figma for design automation and assistance.",
    category: "Design",
    link: "https://figma.com",
    features: ["Auto layout", "Component suggestions", "Design systems", "Prototyping"],
    freeTier: "Free tier available"
  },
  {
    id: "11",
    name: "Grammarly",
    description: "AI writing assistant for grammar, spelling, and style improvements.",
    category: "Writing",
    link: "https://grammarly.com",
    features: ["Grammar checking", "Style suggestions", "Plagiarism detection", "Tone adjustment"],
    freeTier: "Free tier with basic features"
  },
  {
    id: "12",
    name: "Notion AI",
    description: "AI assistant integrated into Notion for writing, brainstorming, and organizing.",
    category: "Productivity",
    link: "https://notion.so",
    features: ["Content generation", "Summarization", "Translation", "Brainstorming"],
    freeTier: "Free tier with limited AI usage"
  },
  {
    id: "13",
    name: "Otter.ai",
    description: "AI meeting assistant that transcribes and summarizes conversations in real-time.",
    category: "Productivity",
    link: "https://otter.ai",
    features: ["Real-time transcription", "Meeting summaries", "Action items", "Speaker identification"],
    freeTier: "Free tier with 300 minutes/month"
  },
  {
    id: "14",
    name: "HuggingFace",
    description: "Platform for discovering and using thousands of AI models.",
    category: "Machine Learning",
    link: "https://huggingface.co",
    features: ["Model repository", "Datasets", "Spaces", "API access"],
    freeTier: "Free tier available"
  },
  {
    id: "15",
    name: "Runway ML",
    description: "AI-powered creative tools for video editing, image generation, and more.",
    category: "Creative",
    link: "https://runwayml.com",
    features: ["Video editing", "Image generation", "AI models", "Creative tools"],
    freeTier: "Free tier with limited credits"
  },
  {
    id: "16",
    name: "Leonardo AI",
    description: "AI art generator for creating stunning images and concept art.",
    category: "Image Generation",
    link: "https://leonardo.ai",
    features: ["Image generation", "Style control", "Variations", "High resolution"],
    freeTier: "Free tier with daily tokens"
  },
  {
    id: "17",
    name: "Ideogram",
    description: "Text-to-image AI with excellent typography rendering.",
    category: "Image Generation",
    link: "https://ideogram.ai",
    features: ["Text in images", "Style options", "High quality", "Creative control"],
    freeTier: "Free tier available"
  },
  {
    id: "18",
    name: "ElevenLabs",
    description: "AI voice generation and text-to-speech with natural-sounding voices.",
    category: "Audio",
    link: "https://elevenlabs.io",
    features: ["Voice cloning", "Text to speech", "Multiple languages", "Voice library"],
    freeTier: "Free tier with monthly characters"
  },
  {
    id: "19",
    name: "Suno AI",
    description: "Create original music and songs from text descriptions.",
    category: "Audio",
    link: "https://suno.ai",
    features: ["Music generation", "Custom lyrics", "Multiple genres", "High quality audio"],
    freeTier: "Free tier with limited generations"
  },
  {
    id: "20",
    name: "Scholarcy",
    description: "AI-powered research tool that summarizes academic papers.",
    category: "Research",
    link: "https://scholarcy.com",
    features: ["Paper summaries", "Key findings extraction", "Reference management", "Flashcards"],
    freeTier: "Free tier available"
  },
  {
    id: "21",
    name: "Consensus",
    description: "AI search engine for scientific research papers.",
    category: "Research",
    link: "https://consensus.app",
    features: ["Research summaries", "Citation analysis", "Evidence extraction", "Scientific accuracy"],
    freeTier: "Free tier with limited searches"
  },
  {
    id: "22",
    name: "Quillbot",
    description: "AI paraphrasing and summarization tool for writing.",
    category: "Writing",
    link: "https://quillbot.com",
    features: ["Paraphrasing", "Summarization", "Grammar check", "Citation generator"],
    freeTier: "Free tier with limitations"
  },
  {
    id: "23",
    name: "Soundraw",
    description: "AI music generator for creating royalty-free background music.",
    category: "Audio",
    link: "https://soundraw.io",
    features: ["Music generation", "Customization", "Royalty-free", "Multiple genres"],
    freeTier: "Free tier available"
  },
  {
    id: "24",
    name: "Descript",
    description: "AI-powered audio and video editor with transcription.",
    category: "Video/Audio Editing",
    link: "https://descript.com",
    features: ["Transcription", "Voice cloning", "Video editing", "Podcast tools"],
    freeTier: "Free tier with limited hours"
  }
];

export const aiToolCategories = [
  "All",
  "Conversational AI",
  "Coding",
  "Design & Development",
  "Design",
  "Writing",
  "Productivity",
  "Machine Learning",
  "Creative",
  "Image Generation",
  "Audio",
  "Video/Audio Editing",
  "Research"
];
