package sparkzilla.sol

import java.io.BufferedReader
import java.io.IOException
import java.io.BufferedWriter
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.Socket
import sparkzilla.src.parser.HTMLParser
import sparkzilla.src.HTMLTokenizer
import sparkzilla.src.parser.ParseException

/**
 * A text-based browser class
 */
@throws(classOf[IOException]) //IDK
class Browser() {

  private val Port = 8080
  private var socket: Socket = null
  private var socketRead: java.io.BufferedReader = null
  private var socketWrite: java.io.BufferedWriter = null
  private var systemRead: java.io.BufferedReader = null

  /**
   * Parses the input from the server into a list of HTMLElements.
   * @param inputFromServer- BufferedReader containing HTML from server
   * @returns hierarchical list of the HTMLElements. See the documentation
   * 	and view the sol code for the specific composition of each HTMLElement
   *   within the list.
   */
  private def getHTMLElementList(inputFromServer: BufferedReader): List[HTMLElement] = {
    val parser = new HTMLParser(new HTMLTokenizer(inputFromServer))
    return parser.parse().toHTML
  }

  @throws(classOf[IOException])
  def run() {
    systemRead = new BufferedReader(new InputStreamReader(System.in))
    System.out.println("---\nWelcome to Sparkzilla!")
    var action = -1
    try {
      while (action != 3) {
        System.out.println("---")
        System.out.print("Action (1) Back, (2) New URL, (3) Quit")
        //print additional actions
        System.out.println(": ")
        val action = systemRead.readLine().toInt //ADD CATCH LATER
        if (action == 1) { //back

        } else if (action == 2) { //new url

        } else if (action == 3) { //quit
          println("Goodbye!")
        } else if (action > 3 && action <= 3 /*+addActions.length*/ ) {
          //code for additional actions

        } else {
          println("Action number out of bounds.")
        }
      }
    } finally {
      systemRead.close()
    }

    /*
    try {
      connectToServer(host)
    } finally {
      disconnectFromSever()
    }*/
  }

  @throws(classOf[IOException])
  def connectToServer(host: String) {
    socket = new Socket(host, Port)
    try {
      //some stuff with sockets, streams, buffered readers/writers
      socketRead = new BufferedReader(new InputStreamReader(socket.getInputStream))
      socketWrite = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream))
    } finally {
      //close everything
      socket.close()
      socketRead.close()
      socketWrite.close()
    }
  }

  @throws(classOf[IOException])
  def disconnectFromServer() {
    try {
      socket.shutdownOutput()
      socket.shutdownInput()
    } finally {
      //close everything
      socket.close()
      socketRead.close()
      socketWrite.close()
    }
  }

}
