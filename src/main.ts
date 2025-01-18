import './styles.css'

type ScrollElementMap = Readonly<{ originTag: string, destinationTag: string }>
const navElement: HTMLElement = document.querySelector("nav")!;

const scrollElementMap: readonly ScrollElementMap[] = [
  {originTag: "info-label", destinationTag: "main-section"},
  {originTag: "facts-label", destinationTag: "gallery"},
  {originTag: "quote-label", destinationTag: "quote"}
]

function addScrollToElement(section: HTMLElement) {
  return () => {
    const navSize: number = navElement.offsetHeight;
    window.scroll({top: section.offsetTop - navSize, behavior: "smooth"})
  }
}

scrollElementMap.forEach(scrollElementsMap => {
  const navElementName: string = scrollElementsMap.originTag
  const sectionName: string = scrollElementsMap.destinationTag
  const element: HTMLElement = document.querySelector(`.${navElementName}`)!
  const section: HTMLElement = document.querySelector(`.${sectionName}`)!
  element.addEventListener("click", addScrollToElement(section))
})



