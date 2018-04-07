package sparkzilla.sol

/**
  * A link element of an HTML page
  *
  * @param href - The URL of the link
  * @param text - The text to be rendered
  */
case class Link(href: String, text: PageText) extends HTMLElement
