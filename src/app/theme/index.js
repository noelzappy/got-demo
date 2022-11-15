const GUTTER = 16;

const themes = {
  dark: {
    primary: "#ffffff",
    bg: "#0a0908",
    accent: "#1b263b",
    accentHover: "#1b262c",
    gutter: GUTTER,
    primaryHover: "#d3d3d3",
    navBg: "#212529",
    danger: "#0d6efd",
    bgImage: `url("assets/bg.jpg")`,
    bgOverlay: "rgba(0, 0, 0, 0.8)",
  },
  light: {
    primary: "#4a4e69",
    bg: "#edede9",
    accent: "#ffffff",
    accentHover: "#f5f5f5",
    gutter: GUTTER,
    primaryHover: "#343a40",
    navBg: "#f8f9fa",
    danger: "#0d6efd",
    bgImage: `url("assets/bg.jpg")`,
    bgOverlay: "rgba(255, 255, 255, 0.4)",
  },
};

export default themes;
