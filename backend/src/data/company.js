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
    "Cardiometabolic Health"
  ],
  disclaimer:
    "This website is an independent, informational project and is not affiliated with, endorsed by, or " +
    "operated by Eli Lilly and Company. Content is for general educational purposes only, is not medical " +
    "advice, and should not be used to make treatment decisions. Always consult a qualified healthcare " +
    "professional and official prescribing information before making decisions about any medicine."
};

module.exports = company;
