package sparkzilla.sol

/**
  * A text input element of an HTML page
  *
  * @param name - Name of the text input for communicating with the server
  * @param value - Value of the text input as given by the user
  */
case class TextInput(val name: String, private var value: Option[String]) extends HTMLElement
