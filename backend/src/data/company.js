// Public, general-knowledge information about Eli Lilly and Company.
// Informational use only.

const company = {
  legalName: "Eli Lilly and Company",
  shortName: "Lilly",
  founded: 1876,
  founder: "Colonel Eli Lilly",
  headquarters: "Indianapolis, Indiana, United States",
  industry: "Pharmaceuticals & Biotechnology",
  stockTicker: "LLY (NYSE)",
  tagline: "Life is our life's work.",
  summary:
    "Eli Lilly and Company is an American pharmaceutical company headquartered in Indianapolis, Indiana. " +
    "Founded in 1876 by chemist and Union Army veteran Colonel Eli Lilly, it is one of the oldest and largest " +
    "pharmaceutical companies in the world, with a long history of innovation in diabetes care, oncology, " +
    "immunology, and neuroscience.",
  history: [
    {
      year: 1876,
      event:
        "Colonel Eli Lilly opens a small laboratory in Indianapolis dedicated to producing high-quality medicines " +
        "at a time when drug quality was largely unregulated."
    },
    {
      year: 1923,
      event:
        "Lilly becomes the first company to mass-produce insulin (branded as Iletin), working with researchers " +
        "Frederick Banting and Charles Best, transforming diabetes from a fatal diagnosis into a manageable condition."
    },
    {
      year: 1955,
      event:
        "Lilly helps mass-produce the first polio vaccine developed by Jonas Salk, supporting a nationwide immunization effort."
    },
    {
      year: 1982,
      event:
        "Humulin, the first biosynthetic human insulin made using recombinant DNA technology, is introduced — a milestone for the biotech industry."
    },
    {
      year: 1986,
      event: "Prozac (fluoxetine) is introduced, becoming one of the most widely prescribed antidepressants in history."
    },
    {
      year: 1996,
      event: "Humalog, a rapid-acting mealtime insulin analog, is launched."
    },
    {
      year: 2003,
      event: "Cialis (tadalafil) is approved, becoming a leading treatment for erectile dysfunction."
    },
    {
      year: 2022,
      event:
        "Mounjaro (tirzepatide) is approved for type 2 diabetes, introducing a novel dual GIP/GLP-1 receptor agonist."
    },
    {
      year: 2023,
      event: "Zepbound (tirzepatide) is approved for chronic weight management."
    },
    {
      year: 2024,
      event: "Kisunla (donanemab) is approved for early symptomatic Alzheimer's disease."
    }
  ],
  therapeuticAreas: [
    "Diabetes & Obesity",
    "Oncology",
    "Immunology",
    "Neuroscience",
    "Cardiometabolic Health",
    "Bone Health"
  ],
  byTheNumbers: [
    { label: "Employees worldwide", value: "Roughly 43,000", note: "Across research, manufacturing, and commercial operations" },
    { label: "Countries reached", value: "120+", note: "Medicines distributed across global markets" },
    { label: "R&D investment", value: "Among the industry's highest", note: "As a share of annual revenue, consistently reinvested into research" },
    { label: "Manufacturing sites", value: "Multiple, global", note: "Across the United States, Europe, and Asia" }
  ],
  locations: [
    { city: "Indianapolis, Indiana, USA", type: "Global headquarters" },
    { city: "Research Triangle Park, North Carolina, USA", type: "R&D & manufacturing" },
    { city: "Kinsale, Ireland", type: "Manufacturing" },
    { city: "Branchburg, New Jersey, USA", type: "Biotechnology manufacturing" },
    { city: "Concord, North Carolina, USA", type: "Manufacturing" },
    { city: "Shanghai, China", type: "Research & regional operations" }
  ],
  faqs: [
    {
      question: "Is this website operated by Eli Lilly and Company?",
      answer:
        "No. This is an independent, informational project built to showcase Lilly's public history and " +
        "medicine portfolio. It is not affiliated with, endorsed by, or operated by Eli Lilly and Company."
    },
    {
      question: "Can I use this site to decide whether to take a medicine?",
      answer:
        "No. Nothing on this site is medical advice. Always speak with a qualified healthcare professional " +
        "and consult official prescribing information before making any decisions about a medicine."
    },
    {
      question: "Why does Lilly cover so many different therapeutic areas?",
      answer:
        "Large pharmaceutical companies typically diversify research across multiple disease areas to spread " +
        "risk, since most experimental drugs never reach approval, and to apply shared science (like immunology " +
        "or metabolic research) across related conditions."
    },
    {
      question: "What does \"recombinant DNA technology\" mean, as mentioned for Humulin?",
      answer:
        "It means inserting a gene (in this case, the human insulin gene) into another organism, typically " +
        "bacteria or yeast, so that organism manufactures the protein. Humulin (1982) was one of the first " +
        "commercial medicines produced this way, rather than extracted from animal tissue."
    },
    {
      question: "How are the medicines on this site chosen?",
      answer:
        "They're a curated selection spanning Lilly's major therapeutic areas and different eras of the " +
        "company's history, illustrating the breadth of its portfolio rather than an exhaustive product list."
    }
  ],
  disclaimer:
    "This website is an independent, informational project and is not affiliated with, endorsed by, or " +
    "operated by Eli Lilly and Company. Content is for general educational purposes only, is not medical " +
    "advice, and should not be used to make treatment decisions. Always consult a qualified healthcare " +
    "professional and official prescribing information before making decisions about any medicine."
};

module.exports = company;
