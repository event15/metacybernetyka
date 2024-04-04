import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeMathjax from "rehype-mathjax/svg"
import { QuartzTransformerPlugin } from "../types"

interface Options {
  renderEngine: "katex" | "mathjax"
}

export const Latex: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  const engine = opts?.renderEngine ?? "mathjax"; // Domyślnie używamy MathJax dla wsparcia TikZ
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath]
    },
    htmlPlugins() {
      if (engine === "katex") {
        return [[rehypeKatex, { output: "html" }]]
      } else {
        return [rehypeMathjax]
      }
    },
    textTransform: (ctx, src) => {
      // Tylko dla MathJax, przekształć bloki tikz na bloki matematyczne MathJax
      if(engine === "mathjax") {
        const transformedContent = src.toString().replace(/```tikz\n([\s\S]*?)```/g, (_, tikzCode) => {
          // Zamieniamy kod tikz na format rozumiany przez MathJax
          // Opcjonalnie: Można dodać specjalne oznaczenia, jeśli MathJax wymaga dodatkowej konfiguracji dla TikZ
          return `<script type="text/tikz">${tikzCode}</script>`;
        });
        return transformedContent;
      }
      return src;
    },
    externalResources() {
      if (engine === "katex") {
        return {
          css: [
            "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css",
          ],
          js: [
            {
              src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/copy-tex.min.js",
              loadTime: "afterDOMReady",
              contentType: "external",
            },
          ],
        }
      } else {
        return {
          css: [
            "https://tikzjax.com/v1/fonts.css",
          ],
          js: [
            {
              src: "https://event15.github.io/metacybernetyka/tikzjax.js",
              loadTime: "afterDOMReady",
              contentType: "external",
            },
          ],
        }
      }
    },
  }
}
