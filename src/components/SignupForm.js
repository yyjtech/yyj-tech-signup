import cn from "classnames"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"

import Button from "@/components/Button"
import useContent from "@/hooks/useContent"
import { sanitizeHtml } from "@/utils/sanitizeHtml"

const SignupForm = ({ className }) => {
  const [hasFormError, setHasFormError] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const { homepage } = useContent()
  const { signupForm } = homepage
  const image = getImage(signupForm?.media)

  return (
    <div
      className={cn(
        "flex flex-col w-[100%] items-center justify-center bg-white rounded-xl text-black py-10 px-20",
        "md:max-w-[50%] md:w-full",
        className
      )}
    >
      <h2 className="mb-10 text-3xl font-semibold leading-10 font-heading">
        {signupForm.title}
      </h2>

      <span className="mb-2"><strong>{signupForm.cocDescription}</strong></span>
      <ul className={"text-black coc-warning"}>
      {
        signupForm.cocValues.map(node => (
          <li key={node} className={"mb-2"}>
            {node}
          </li>
        ))
      }
      </ul>

      <form>
        <div className="flex mx-5 items-top sm:mx-0">
          <input
            id="terms"
            type="checkbox"
            className="mr-2.5 rounded h-5 w-5 relative top-1 sm:static focus:ring-secondary focus:border-secondary text-secondary mb-16"
            onChange={() => {
              setIsChecked(!isChecked)
              setHasFormError(false)
            }}
          />

          <label htmlFor="terms">
            <span
              data-button-label
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(signupForm.terms),
              }}
            />
          </label>
        </div>
        <div className="mx-5 sm:mx-0">
          <Button
            className={cn({ "bg-slate-500": hasFormError })}
            onClick={e => {
              // NOTE: Not setting disabled prop to display error message on click
              e.preventDefault()

              // NOTE: Ensure no form errors
              if (hasFormError) return false

              // NOTE: Ensure checked, redirect otherwise display error
              isChecked
                ? window.location.replace(signupForm.redirectUrl)
                : setHasFormError(!hasFormError)
            }}
          >
            {signupForm.buttonLabel}
          </Button>
        </div>

        {hasFormError && (
          <p className="mt-2.5 text-red-400 text-center">
            You must agree to the Code of Conduct
          </p>
        )}
      </form>
    </div>
  )
}

export default SignupForm
