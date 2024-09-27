import './styles.css'

const navSize = document.querySelector("nav")!.offsetHeight;
const info: HTMLElement = document.querySelector(".info-label")!;
const fact: HTMLElement = document.querySelector(".fact-label")!;
const quote: HTMLElement = document.querySelector(".quote-label")!;

const mainSection: HTMLElement = document.querySelector(".main-section")!;
const gallerySection: HTMLElement = document.querySelector(".gallery")!;
const quoteSection: HTMLElement = document.querySelector(".quote")!;

const labels: HTMLElement[] = [info, fact, quote]
const elements: HTMLElement[] = [mainSection, gallerySection, quoteSection]

labels.forEach(
  (element, index) => element.addEventListener("click", () => {
    const htmlElement: HTMLElement = elements[index]
    scrollToTopElement(htmlElement)
  })
)

function scrollToTopElement(element: HTMLElement) {
  window.scroll({top: element.offsetTop - navSize, behavior: "smooth"})
}

