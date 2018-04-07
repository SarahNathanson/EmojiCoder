package sparkzilla.sol

import java.io.BufferedReader

import sparkzilla.src.parser.HTMLParser
import sparkzilla.src.HTMLTokenizer
import sparkzilla.src.parser.ParseException

/**
  * A text-based browser class
  */
class Browser() {

  /** Parses the input from the server into a list of HTMLElements.
    * @param inputFromServer- BufferedReader containing HTML from server
    * @returns hierarchical list of the HTMLElements. See the documentation
    * 	and view the sol code for the specific composition of each HTMLElement
    *   within the list.
    */
  private def getHTMLElementList(inputFromServer: BufferedReader): List[HTMLElement] = {
    val parser = new HTMLParser(new HTMLTokenizer(inputFromServer))
    return parser.parse().toHTML
  }

}
