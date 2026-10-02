// Public, general-knowledge information about selected Lilly medicines.
// High-level and informational only — not prescribing information.

const medicines = [
  {
    slug: "humalog",
    name: "Humalog",
    genericName: "insulin lispro",
    category: "Diabetes & Obesity",
    drugClass: "Rapid-acting insulin analog",
    approvalYear: 1996,
    about:
      "Humalog is a rapid-acting insulin analog used to help control blood sugar in people with diabetes. " +
      "It is typically taken at mealtimes and begins working faster than regular human insulin.",
    usedFor: ["Type 1 diabetes", "Type 2 diabetes"],
    form: "Injectable (vial, pen, or cartridge)"
  },
  {
    slug: "humulin",
    name: "Humulin",
    genericName: "human insulin",
    category: "Diabetes & Obesity",
    drugClass: "Biosynthetic human insulin",
    approvalYear: 1982,
    about:
      "Humulin was the first biosynthetic human insulin produced using recombinant DNA technology, offering " +
      "an alternative to animal-derived insulin for managing diabetes.",
    usedFor: ["Type 1 diabetes", "Type 2 diabetes"],
    form: "Injectable (vial, pen, or cartridge)"
  },
  {
    slug: "trulicity",
    name: "Trulicity",
    genericName: "dulaglutide",
    category: "Diabetes & Obesity",
    drugClass: "GLP-1 receptor agonist",
    approvalYear: 2014,
    about:
      "Trulicity is a once-weekly injectable medicine used alongside diet and exercise to improve blood sugar " +
      "control in adults with type 2 diabetes, and to reduce cardiovascular risk in some patients.",
    usedFor: ["Type 2 diabetes", "Cardiovascular risk reduction"],
    form: "Injectable (pre-filled pen)"
  },
  {
    slug: "mounjaro",
    name: "Mounjaro",
    genericName: "tirzepatide",
    category: "Diabetes & Obesity",
    drugClass: "GIP/GLP-1 dual receptor agonist",
    approvalYear: 2022,
    about:
      "Mounjaro is a once-weekly injectable medicine for type 2 diabetes that activates both GIP and GLP-1 " +
      "receptors, a novel dual-action mechanism that helps regulate blood sugar and supports weight loss.",
    usedFor: ["Type 2 diabetes"],
    form: "Injectable (pre-filled pen)"
  },
  {
    slug: "zepbound",
    name: "Zepbound",
    genericName: "tirzepatide",
    category: "Diabetes & Obesity",
    drugClass: "GIP/GLP-1 dual receptor agonist",
    approvalYear: 2023,
    about:
      "Zepbound uses the same active ingredient as Mounjaro and is approved specifically for chronic weight " +
      "management in adults with obesity or who are overweight with a related health condition.",
    usedFor: ["Chronic weight management"],
    form: "Injectable (pre-filled pen)"
  },
  {
    slug: "jardiance",
    name: "Jardiance",
    genericName: "empagliflozin",
    category: "Cardiometabolic Health",
    drugClass: "SGLT2 inhibitor",
    approvalYear: 2014,
    about:
      "Jardiance, co-developed with Boehringer Ingelheim, is an oral medicine that lowers blood sugar by " +
      "causing the kidneys to remove excess glucose through urine. It is also used to reduce the risk of " +
      "cardiovascular death in adults with heart failure.",
    usedFor: ["Type 2 diabetes", "Heart failure", "Chronic kidney disease"],
    form: "Oral tablet"
  },
  {
    slug: "prozac",
    name: "Prozac",
    genericName: "fluoxetine",
    category: "Neuroscience",
    drugClass: "Selective serotonin reuptake inhibitor (SSRI)",
    approvalYear: 1987,
    about:
      "Prozac was one of the first SSRIs and became one of the most widely prescribed antidepressants in " +
      "history, reshaping the treatment of depression and related conditions.",
    usedFor: ["Major depressive disorder", "Obsessive-compulsive disorder", "Panic disorder"],
    form: "Oral capsule/tablet"
  },
  {
    slug: "cialis",
    name: "Cialis",
    genericName: "tadalafil",
    category: "Cardiometabolic Health",
    drugClass: "PDE5 inhibitor",
    approvalYear: 2003,
    about:
      "Cialis is used to treat erectile dysfunction and symptoms of benign prostatic hyperplasia " +
      "(enlarged prostate) by relaxing blood vessels to improve blood flow.",
    usedFor: ["Erectile dysfunction", "Benign prostatic hyperplasia"],
    form: "Oral tablet"
  },
  {
    slug: "verzenios",
    name: "Verzenios",
    genericName: "abemaciclib",
    category: "Oncology",
    drugClass: "CDK4/6 inhibitor",
    approvalYear: 2017,
    about:
      "Verzenios targets proteins (CDK4 and CDK6) that drive cancer cell growth and is used in the treatment " +
      "of certain types of HR-positive, HER2-negative breast cancer.",
    usedFor: ["HR-positive, HER2-negative breast cancer"],
    form: "Oral tablet"
  },
  {
    slug: "taltz",
    name: "Taltz",
    genericName: "ixekizumab",
    category: "Immunology",
    drugClass: "IL-17A inhibitor",
    approvalYear: 2016,
    about:
      "Taltz is a biologic that blocks interleukin-17A, an inflammatory protein involved in autoimmune " +
      "conditions, and is used to treat plaque psoriasis and related inflammatory arthritis.",
    usedFor: ["Plaque psoriasis", "Psoriatic arthritis", "Ankylosing spondylitis"],
    form: "Injectable (pre-filled pen or syringe)"
  },
  {
    slug: "olumiant",
    name: "Olumiant",
    genericName: "baricitinib",
    category: "Immunology",
    drugClass: "JAK inhibitor",
    approvalYear: 2018,
    about:
      "Olumiant is an oral JAK (Janus kinase) inhibitor used to reduce inflammation in moderate-to-severe " +
      "rheumatoid arthritis and certain other inflammatory conditions.",
    usedFor: ["Rheumatoid arthritis", "Alopecia areata"],
    form: "Oral tablet"
  },
  {
    slug: "emgality",
    name: "Emgality",
    genericName: "galcanezumab",
    category: "Neuroscience",
    drugClass: "CGRP inhibitor",
    approvalYear: 2018,
    about:
      "Emgality is a monthly injectable medicine that blocks calcitonin gene-related peptide (CGRP), a " +
      "molecule involved in migraine attacks, and is used for migraine prevention.",
    usedFor: ["Migraine prevention", "Episodic cluster headache"],
    form: "Injectable (pre-filled pen or syringe)"
  },
  {
    slug: "kisunla",
    name: "Kisunla",
    genericName: "donanemab",
    category: "Neuroscience",
    drugClass: "Amyloid-beta directed antibody",
    approvalYear: 2024,
    about:
      "Kisunla is an infused medicine that targets and helps clear amyloid plaques in the brain, intended " +
      "for adults with early symptomatic Alzheimer's disease.",
    usedFor: ["Early symptomatic Alzheimer's disease"],
    form: "Intravenous infusion"
  },
  {
    slug: "retevmo",
    name: "Retevmo",
    genericName: "selpercatinib",
    category: "Oncology",
    drugClass: "RET kinase inhibitor",
    approvalYear: 2020,
    about:
      "Retevmo is a targeted therapy for cancers driven by alterations in the RET gene, including certain " +
      "lung and thyroid cancers, part of Lilly's precision oncology portfolio.",
    usedFor: ["RET-altered lung cancer", "RET-altered thyroid cancer"],
    form: "Oral capsule"
  },
  {
    slug: "cyramza",
    name: "Cyramza",
    genericName: "ramucirumab",
    category: "Oncology",
    drugClass: "VEGFR2 antagonist",
    approvalYear: 2014,
    about:
      "Cyramza works by blocking VEGFR2, a receptor involved in forming new blood vessels that tumors rely " +
      "on, and is used across several solid tumor types.",
    usedFor: ["Gastric cancer", "Lung cancer", "Liver cancer", "Colorectal cancer"],
    form: "Intravenous infusion"
  }
];

module.exports = medicines;
