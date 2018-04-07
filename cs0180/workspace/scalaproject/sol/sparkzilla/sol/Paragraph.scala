package sparkzilla.sol

/**
  * A paragraph element of an HTML page
  *
  * @param elements - The HTML elements of the paragraph
  */
case class Paragraph(elements: List[HTMLElement]) extends HTMLElement
