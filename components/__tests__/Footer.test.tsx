import "@testing-library/jest-dom"
import {fireEvent, getByText, render, screen} from "@testing-library/react"
import {Provider} from "react-redux"
import {store} from "../../redux/store"
import {Box} from "@chakra-ui/react"
import Footer from "../Footer"

describe("Footer", () => {
  it("renders Footer component correctly without breaking", () => {
    render(<Footer />)
    const footerElement = screen.getByTestId("_footer")
    expect(footerElement).toHaveClass("footer mt={5}")
    expect(footerElement).toHaveStyle("background-color: blue.100")
    expect(footerElement).toHaveStyle("font-size: 1.1em")
    expect(footerElement).toHaveStyle('font-family: "Rajdhani", sans-serif')
    expect(footerElement).toHaveTextContent(
      `© ${new Date().getFullYear()} SeamlessPOS.`
    )
  })
})
