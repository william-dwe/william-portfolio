export type Project = {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  architecture: string;
  tags: string[];
  repoUrl: string;
  imageUrl?: string;
};

export type BlogPost = {
  title: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
};

export type Role = {
  period: string;
  org: string;
  orgUrl?: string;
  title: string;
  points: string[];
  link?: { label: string; url: string };
};

export type Stat = {
  value: string;
  label: string;
};

export const profile = {
  name: "William Wibowo",
  email: "hello@williamwibowo.com",
  linkedin: "https://www.linkedin.com/in/wwibowo/",
  github: "https://github.com/william-dwe",
  role: "Data & Platform Engineer",
  current: "Data Engineer @ Traveloka",
} as const;

export const bio: string[] = [
  "William is a data & platform engineer who designs, builds, and maintains end-to-end data ecosystems across data engineering, warehousing, business intelligence, governance, and full-stack development. At Traveloka he focuses on data warehouse engineering — optimizing pipelines and ingestion to improve data delivery timeliness by 40% — and has led internal training on data modeling, data warehousing, and software engineering practices. Before that he honed QA automation skills at Shopee.",
  "His background includes BI and data analysis internships at OVO and Paragon Technology and Innovation: a large-scale data migration to GCP with automated job scheduling, and a data-preparation overhaul during an ERP migration. Beyond work he mentors capstone teams as a Cloud Computing Tech Advisor for Bangkit Academy and has led student organizations, running national-scale events and workshops.",
];

export const skills: string[] = [
  "Go",
  "Python",
  "SQL",
  "BigQuery",
  "Apache Airflow",
  "GCP",
  "PostgreSQL",
  "Redis",
  "React",
  "TypeScript",
  "Tableau",
  "Docker",
];

export const stats: Stat[] = [
  { value: "2+", label: "Years of Experience" },
  { value: "1000TB+", label: "Annual Processed Data" },
  { value: "10+", label: "Data Source Aggregated" },
  { value: "2+", label: "Certification & Awards" },
];

export const projects: Project[] = [
  {
    num: "01",
    slug: "blanche",
    title: "Blanche - Online Clothing E-commerce Platform",
    tagline:
      "Full stack e-commerce website written in React Typescript + Gin Golang. Enabled caching mechanism through Redis.",
    architecture:
      "React TypeScript storefront over a Gin (Go) REST API backed by PostgreSQL. A Redis read-through cache serves repeat catalog queries, and authentication uses JWT with role-based access.",
    tags: ["web-development", "frontend", "React", "backend", "Go", "database", "Redis"],
    repoUrl: "https://github.com/william-dwe/blanche",
  },
  {
    num: "02",
    slug: "sushee",
    title: "Sushee - Online Restaurant App",
    tagline: "An Online Restaurant built using Golang, PostgreSQL, and React.",
    architecture:
      "Three-tier ordering app: React SPA → Go REST API → PostgreSQL, run locally with Docker Compose. Orders flow through an explicit state machine from placement to kitchen fulfillment.",
    tags: ["web-development", "frontend", "React", "backend", "Go", "database"],
    repoUrl: "https://github.com/william-dwe/sushee",
    imageUrl: "/images/projects/sushee/sushee-1.png",
  },
  {
    num: "03",
    slug: "ewallet",
    title: "E-Wallet Backend Service",
    tagline: "An E-Wallet API built using Golang and PostgreSQL.",
    architecture:
      "Transactional ledger service in Go on PostgreSQL: double-entry balance records, idempotency keys on transfer endpoints, and row-level locking so concurrent transfers cannot lose updates.",
    tags: ["software-development", "backend", "Go", "database"],
    repoUrl: "https://github.com/william-dwe/ewallet",
    imageUrl: "/images/projects/ewallet/erd.png",
  },
  {
    num: "04",
    slug: "mastrendy",
    title: "MasTrendy - Daily Update Discord Bot",
    tagline: "A Discord bot that publishes a curated daily trends digest.",
    architecture:
      "Scheduled Python pipeline fetches daily trend sources, normalizes and deduplicates them, persists the results, formats a digest, and pushes it to Discord channels via webhook on a cron schedule.",
    tags: ["software-development", "bot", "data-engineering", "python"],
    repoUrl: "https://github.com/william-dwe/MasTrendy",
    imageUrl: "/images/projects/mastrendy/mastrendy.png",
  },
  {
    num: "05",
    slug: "hotel",
    title: "Hotel Booking Cancellation Prediction Model",
    tagline:
      "Predictive model categorizes bookings as likely or unlikely to be canceled, achieving an accuracy of 83.56%.",
    architecture:
      "Feature-engineered classification pipeline (scikit-learn) predicting hotel booking cancellations at 83.56% accuracy; the trained artifact is persisted and reused for batch scoring.",
    tags: ["data-science", "data-analytics", "machine-learning"],
    repoUrl: "https://github.com/william-dwe/Hotel-Booking-Cancelation-Prediction-Model",
    imageUrl: "/images/projects/hotel/hotel.jpeg",
  },
];

export const blogs: BlogPost[] = [
  {
    title: "Tired of stacking UNION ALL, have you tried BigQuery GROUPING SETS?",
    description:
      "This article explores BigQuery's GROUPING SETS clause as a more concise and readable alternative to complex UNION ALL queries for generating aggregations at multiple levels of granularity.",
    date: "January 2025",
    url: "https://williamwibowo.medium.com/tired-of-stacking-union-all-have-you-tried-bigquery-grouping-sets-8019a8971b32",
    tags: ["bigquery", "sql", "data-engineer", "data-analysis"],
  },
  {
    title:
      "BigQuery “NOT IN” vs “NOT EXISTS” vs “EXCEPT DISTINCT” understand the differences in 3 minutes!",
    description:
      "This article compares three BigQuery operators—NOT IN, NOT EXISTS, and EXCEPT DISTINCT—for excluding data from query results, using a real-world debugging scenario involving bot traffic exclusion.",
    date: "January 2025",
    url: "https://williamwibowo.medium.com/bigquery-not-in-vs-not-exists-vs-except-distinct-understand-the-differences-in-3-minutes-e66d2159f744",
    tags: ["bigquery", "sql", "data-engineer"],
  },
];

export const experience: Role[] = [
  {
    period: "October 2023 – Present",
    org: "Traveloka",
    orgUrl: "https://www.traveloka.com/",
    title: "Data Engineer - Data Warehouse Engineer",
    points: [
      "Developed a custom script for Google Ads and Google Hotel API ingestion, reducing memory overhead by 75%",
      "Maintained data quality and governance through custom alerts, data remodeling, and BigQuery slot optimization, improving Traveloka’s data delivery timeliness from 60% to 100% in 4 months",
      "Conducted an internal training program on Big Data and Data Warehousing with over 25 participants",
      "Developed, managed, and maintained thousands of data pipelines & ingestions for Flight, Train, Bus, Pricing, Marketing, and User Platforms",
    ],
  },
  {
    period: "April 2023 – October 2023",
    org: "Shopee Ltd",
    orgUrl: "https://www.shopee.com/",
    title: "Software Quality Assurance Automation Engineer - Marketplace",
    points: [
      "Developed automation scripts and managed over 200 test cases for user marketplace logistics (MPL), marketplace orders, and user order lists in Shopee's iOS App using the XCUITest framework in Objective C",
      "Created more than 10 test cases for user identification features in Shopee's Android App using the UiAutomator and Espresso frameworks in Java",
      "Led final live regression testing for Marketplace Logistics (MPL), New Payment Channel Integration (MPP), User Cart, and Seller Wallet features, ensuring app reliability by executing over 250 regression test cases weekly",
    ],
  },
  {
    period: "September 2022 – July 2023",
    org: "Sea Ltd",
    orgUrl: "https://www.sea.com/",
    title: "Junior Software Engineer - Digitalent",
    points: [
      "Participated in the Digitalent program, a full-stack web development training course covering various technologies used by Shopee Pte Ltd",
      "Led a team of 5 developers to create a simple e-commerce app in 2 months, utilizing Golang+Gin for the backend and Typescript+React for the frontend. Implemented OAuth, Redis Caching, CI/CD Pipeline, and Cloud Deployment",
      "Developed simple e-wallet and restaurant booking apps using the same technology stack",
      "Organized a DigiTalk event on SeaTalk chatbot development, attended by over 100 participants",
    ],
  },
];

export const education: Role[] = [
  {
    period: "",
    org: "Institut Teknologi Bandung (ITB)",
    title: "Industrial Engineering Major - Bachelor of Applied Science (BASc)",
    points: [],
    link: {
      label: "Thesis",
      url: "https://digilib.itb.ac.id/gdl/view/67569/?rows=767&per_page=265",
    },
  },
  {
    period: "",
    org: "Google Cloud",
    title: "Professional Data Engineer (PDE)",
    points: [],
    link: {
      label: "Credential",
      url: "https://google.accredible.com/1bf02699-ac26-4122-9730-99656c0c8d72",
    },
  },
];

export const internships: Role[] = [
  {
    period: "December 2021 – September 2022",
    org: "PT Visionet Internasional (OVO)",
    orgUrl: "https://www.ovo.id/",
    title: "Business Intelligence Intern - Core Platform",
    points: [
      "Worked on end-to-end data migration process from the on-premise server into the new Google Cloud Platform (GCP)",
      "Developed Cross-Platform Task Dependency feature on Airflow using REST API to streamline job scheduling BAU",
      "Created Python-based Email Blast feature on Airflow",
      "Conducted User Requirement Analysis, Data Modelling, ETL processes (BigQuery, Hive, Impala), developed dashboards (Tableau, Google Data Studio), and managed job scheduling (Airflow)",
    ],
  },
  {
    period: "June 2019 – July 2019",
    org: "PT Paragon Technology and Innovation",
    orgUrl: "https://www.paragon-innovation.com/",
    title: "Master Data Management Intern",
    points: [
      "Assisted the MDM team in migrating over 50,000 B2B and B2C customer records from various databases to a new ERP system by designing & implementing data preparation procedures",
      "Developed a VBA-based consumer data preparation tool that cut data preparation time by up to 75%",
      "Collaborated with the MDM Team to standardize more than 15,000 product production routing data spread across 4 different factories",
    ],
  },
  {
    period: "June 2019 – July 2019",
    org: "PT Cipta Wijaya Mandiri",
    title: "Human Resource Business Partner Intern",
    points: [
      "Worked out the 360-degree annual employee KPI (Key Performance Indicator) calculation project",
      "Conducted on-hand counseling on filling KPI surveys for over 1200 company employees",
    ],
  },
];

export const voluntary: Role[] = [
  {
    period: "May 2024 – July 2024",
    org: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    title: "Bangkit Cloud Computing Tech Advisor",
    points: [
      "Guiding two student groups (14 individuals) in understanding Bangkit's curriculum and their Capstone Projects",
      "Providing feedback, evaluations, technical support, and advice on the development of products or business ideas during their Capstone Project",
    ],
  },
  {
    period: "February 2021 – April 2022",
    org: "MTI Data Analytics Club",
    title: "Vice President",
    points: [
      "Arranged a workshop about data mining attended by more than 40 ITB undergraduates",
      "Organized a national-scale data analytics mini competition, participated by more than 40 students from all over Indonesia",
    ],
  },
];
