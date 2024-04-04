import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax/svg";
import { QuartzTransformerPlugin } from "../types";

interface Options {
  renderEngine: "katex" | "mathjax";
}

export const Latex: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  const engine = opts?.renderEngine ?? "mathjax"; // Domyślnie używamy MathJax dla wsparcia TikZ
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath];
    },
    htmlPlugins() {
      if (engine === "katex") {
        return [[rehypeKatex, { output: "html" }]];
      } else {
        return [rehypeMathjax];
      }
    },
    textTransform: (ctx, src) => {
      if (engine === "mathjax") {
        const transformedContent = src.toString().replace(/```tikz\n([\s\S]*?)```/g, (_, tikzCode) => {
          let dataTikzLibraries = '';
          // Sprawdź, czy kod zawiera \usepackage{tikz-cd}
          if (tikzCode.includes("\\usepackage{tikz-cd}")) {
            dataTikzLibraries = ' data-tikz-libraries="cd"';
            // Usuń \usepackage{tikz-cd} z kodu
            tikzCode = tikzCode.replace("\\usepackage{tikz-cd}\n", "");
          }
          return `<script type="text/tikz"${dataTikzLibraries} data-show-console="true">${tikzCode}</script>`;
        });
        return transformedContent;
      }
      return src;
    },
    externalResources() {
      if (engine === "katex") {
        return {
          css: ["https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css"],
          js: [{
            src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/copy-tex.min.js",
            loadTime: "afterDOMReady",
            contentType: "external",
          }],
        };
      } else {
        return {
          css: ["https://event15.github.io/metacybernetyka/assets/styles.css"],
          js: [{
            src: "https://event15.github.io/metacybernetyka/assets/tikzjax.js",
            loadTime: "beforeDOMReady",
            contentType: "external",
          }],
        };
      }
    },
  };
};