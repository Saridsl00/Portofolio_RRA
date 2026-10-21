export type Category = "All" | "Mobile App" | "Website" | "Poster & Graphic" | "Other Projects";

export type Project = {
  id: number;
  title: string;
  category: Category;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  file?: string; // Path atau impor PDF
};

// Daftar pilihan filter untuk tab
export const categories: Category[] = [
  "All",
  "Mobile App",
  "Website",
  "Poster & Graphic",
  "Other Projects",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Dating Mobile App Design",
    category: "Mobile App",
    description:
      "Desain antarmuka aplikasi kencan modern dengan fitur pencarian match dan obrolan interaktif.",
    image: "/projects/project1.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    demo: "https://www.figma.com/",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App Design",
    category: "Mobile App",
    description:
      "Desain aplikasi belanja online lengkap dari halaman checkout hingga pelacak pesanan.",
    image: "/projects/project2.png",
    tags: ["Figma", "Mobile Design"],
    demo: "https://www.figma.com/",
  },
  {
    id: 3,
    title: "Poster MARKHYUCK WKWKW",
    category: "Poster & Graphic",
    description:
      "Desain poster promosi event dengan konsep visual bold dan typography menarik.",
    image: "/projects/markhyuck.jpg",
    tags: ["Photoshop", "Illustrator"],
    demo: "https://example.com/",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Web Development",
    issuer: "Nama Penyelenggara",
    year: "2026",
    file: "/certificates/web-dev.pdf", // Simpan file PDF di folder public/certificates/
  },
  {
    title: "UI / UX Design",
    issuer: "Nama Penyelenggara",
    year: "2026",
    file: "/certificates/uiux-design.pdf",
  },
  {
    title: "Frontend Development",
    issuer: "Nama Penyelenggara",
    year: "2026",
    file: "/certificates/frontend.pdf",
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];