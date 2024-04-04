import { QuartzTransformerPlugin } from "../types";
import { visit } from "unist-util-visit";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

export const TikZSupport: QuartzTransformerPlugin = () => {
  return {
    name: "TikZSupport",
    textTransform: (ctx, src) => {
        const transformedContent = src.toString().replace(/```tikz\n([\s\S]*?)```/g, (_, tikzCode) => {
          let libraries = '';
          if (tikzCode.includes("\\usepackage{tikz-cd}")) {
            libraries = ' data-tikz-libraries="cd"';
            tikzCode = tikzCode.replace("\\usepackage{tikz-cd}\n", "");
            tikzCode = tikzCode.replace("\\usepackage{tikzpicture}\n", "");
          }
          return `<script type="text/tikz"${libraries} data-show-console="true">${tikzCode}</script>`;
        });

        return transformedContent;
      },
    markdownPlugins() {
      return [
        () => {
          return (tree) => {
            visit(tree, 'code', (node) => {
              if (node.lang === 'tikz') {
                const hast = toHast(node);
                const html = toHtml(hast, {allowDangerousHtml: true, allowDangerousCharacters: true});
                node.type = 'html';
                node.value = html;
              }
            });
          };
        },
      ];
    },
    htmlPlugins() {
      // Można dodać pluginy HTML, jeśli potrzebujesz dodatkowej obróbki
      return [];
    },
    externalResources() {
      // Definiuje zewnętrzne zasoby potrzebne dla TikZ
      return {
        css: ["https://metacybernetyka.online/assets/styles.css"],
        js: [{
            src: "https://metacybernetyka.online/assets/tikzjax.js",
            loadTime: "afterDOMReady",
            moduleType: "module",
            contentType: "external",
        }],
      };
    },
  };
};
