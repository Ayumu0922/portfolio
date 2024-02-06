import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containersx: "768px",
    },
    extend: {
      // md: "667px"

      // 対応デバイス: 中型スマートフォン。
      // 説明: このブレークポイントは、一般的なスマートフォンの画面サイズに合わせています。iPhone 6/7/8などのような、中型サイズのスマートフォンに最適です。
      // mdl: "768px" (iPad Mini)

      // 対応デバイス: 小型タブレット。
      // 説明: このブレークポイントは、iPad Miniのような小型タブレットの標準的な画面幅に適しています。タブレットの縦向き表示に最適なサイズです。
      // lg: "960px"

      // 対応デバイス: 大型タブレット、小型ラップトップ。
      // 説明: このブレークポイントは、大型タブレットや小型ラップトップの画面に適しています。タブレットの横向き表示や、小型ラップトップでの表示に適しています。
      // lgl: "1024px" (iPad Pro)

      // 対応デバイス: 大型タブレット（iPad Pro）。
      // 説明: このブレークポイントは、iPad Proのような大型タブレットの画面幅に最適化されています。より大きな画面スペースを持つタブレットでの表示に適しています。
      // xl: "1280px"

      // 対応デバイス: ラップトップ、デスクトップ。
      // 説明: このブレークポイントは、1280ピクセル以上の画面幅を持つラップトップやデスクトップに適しています。より広い画面を持つデバイスでの表示に最適です。

      screens: {
        // xs: "320px",
        // sm: "375px",
        // sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
