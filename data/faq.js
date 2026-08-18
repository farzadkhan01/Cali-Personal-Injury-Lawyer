export const faqCategories = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What should I do right after an accident?",
        answer:
          "Prioritize safety and medical attention first. When possible, document the scene, gather contact and insurance information, and avoid making detailed statements to insurance companies before speaking with someone who can advise you on your specific situation.",
      },
      {
        question: "Do I have a case?",
        answer:
          "Every situation is different, and whether a case exists depends on the specific facts involved. The best way to know is to walk through what happened together, which is exactly what an initial conversation is for.",
      },
      {
        question: "What information should I gather after an accident?",
        answer:
          "Photos of the scene, contact and insurance information for everyone involved, and any available witness details are generally useful. Medical records related to your treatment are also worth keeping organized.",
      },
    ],
  },
  {
    category: "The Legal Process",
    items: [
      {
        question: "How long does a personal injury case take?",
        answer:
          "Timelines vary widely depending on the complexity of the case, the severity of injuries, and whether a resolution is reached through negotiation or litigation. A clearer estimate can be given once more details are known.",
      },
      {
        question: "Will my case go to trial?",
        answer:
          "Most personal injury cases are resolved without a trial, though every case is different. The right path depends on the facts, the parties involved, and what outcome makes the most sense for you.",
      },
      {
        question: "What if I was partly at fault?",
        answer:
          "Shared fault does not automatically rule out a claim. How partial fault affects a case depends on the specific facts and applicable rules, which is worth discussing directly.",
      },
      {
        question: "What is the difference between a settlement and a trial?",
        answer:
          "A settlement is an agreement reached without a trial, while a trial involves a judge or jury deciding the outcome. Most personal injury cases are resolved through settlement, though the right path depends on the specific case.",
      },
    ],
  },
  {
    category: "Costs & Working Together",
    items: [
      {
        question: "What does it cost to talk to someone?",
        answer:
          "Reaching out to discuss what happened is the first step. Fee structures and costs should be clearly explained and confirmed directly before any work begins.",
      },
      {
        question: "What should I bring to an initial conversation?",
        answer:
          "Any documentation you already have, such as photos, a police report, or medical records, can be helpful, but nothing is required to start a conversation.",
      },
    ],
  },
];

export const faqs = faqCategories.flatMap((group) => group.items);
