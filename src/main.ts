import './styles.css'

type CssClassMap = { navElementTag: string, sectionCssClass: string }

const navElement = document.querySelector("nav")!;

const cssClassMaps: CssClassMap[] = [
  {navElementTag: "info-label", sectionCssClass: "main-section"},
  {navElementTag: "facts-label", sectionCssClass: "gallery"},
  {navElementTag: "quote-label", sectionCssClass: "quote"}
]

function addScrollToElement(section: HTMLElement) {
  return () => {
    const navSize: number = navElement.offsetHeight;
    window.scroll({top: section.offsetTop - navSize, behavior: "smooth"})
  }
}

cssClassMaps.forEach(cssMap => {
  const navElementCssClass: string = cssMap.navElementTag
  const sectionCssClass: string = cssMap.sectionCssClass
  const element: HTMLElement = document.querySelector(`.${navElementCssClass}`)!
  const section: HTMLElement = document.querySelector(`.${sectionCssClass}`)!
  element.addEventListener("click", addScrollToElement(section))
})



