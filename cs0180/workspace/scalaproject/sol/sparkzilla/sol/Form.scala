package sparkzilla.sol

/**
  * A form element of an HTMLPage
  *
  * @param url - The URL to send the form data
  * @param elements - The HTML elements contained in the form
  */
case class Form(val url: String, private var elements: List[HTMLElement]) extends HTMLElement
