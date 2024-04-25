import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Footer() {
    return (
      <script
        src="https://giscus.app/client.js"
        data-repo="event15/metacybernetyka"
        data-repo-id="R_kgDOLpRr9g"
        data-category="Comments"
        data-category-id="DIC_kwDOLpRr9s4Ce8Q9"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme" // preferred_color_scheme, light, light_protanopia
        data-lang="pl"
        data-loading="lazy"
        crossorigin="anonymous"
        async
      ></script>
    )
  }

  return Footer
}) satisfies QuartzComponentConstructor