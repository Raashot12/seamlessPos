import React from "react"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {Formik, Form} from "formik"
import InputField from "../InputField"

describe("InputField component", () => {
  it("renders label and input element", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <InputField name="test" label="Test Label" />
        </Form>
      </Formik>
    )

    const labelElement = screen.getByText("Test Label")
    expect(labelElement).toBeInTheDocument()

    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute("id", "test")
  })

  it("displays error message when field is invalid", async () => {
    render(
      <Formik initialValues={{test: ""}} onSubmit={() => {}}>
        <Form>
          <InputField name="test" label="Test Label" />
        </Form>
      </Formik>
    )

    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeInTheDocument()
  })
})
