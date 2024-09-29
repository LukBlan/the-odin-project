function choiceExtractor(imageSrc: string): string {
  const regex: RegExp = new RegExp("\/(rock|paper|scissors)\.png")
  const match: RegExpMatchArray = imageSrc.match(regex)!
  return match[1]
}


export { choiceExtractor }