import { useForm, ValidationError } from "@formspree/react"
import FormField from "./FormField"

const DESCRIPTION_MAX_LENGTH = 255

const EnquiryForm = () => {
  const [state, handleSubmit] = useForm("xwvgpjlo")

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-black/20 bg-white p-8 md:px-15 shadow-sm flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Enquiry Sent!</h2>
        <p className="text-sm text-gray-500">
          Thank you for reaching out. We'll respond to your enquiry within one
          business day.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-black/20 bg-white p-8 md:px-15 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Send an Enquiry</h2>
      <p className="mt-1.5 mb-7 text-sm text-gray-500">
        We respond to all qualified aviation enquiries within one business day
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        {/* Form-level error */}
        <ValidationError
          errors={state.errors}
          className="text-sm text-red-500"
        />

        {/* First + Last name row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <FormField
              label="First Name"
              name="firstName"
              placeholder="Your name"
              required
            />
            <ValidationError
              field="firstName"
              errors={state.errors}
              className="text-xs text-red-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <FormField
              label="Last Name"
              name="lastName"
              placeholder="Surname"
              required
            />
            <ValidationError
              field="lastName"
              errors={state.errors}
              className="text-xs text-red-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="Your email address"
            required
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            label="Service Interest"
            name="serviceInterest"
            placeholder="Example: Cargo services"
            required
          />
          <ValidationError
            field="serviceInterest"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            label="Message"
            name="message"
            placeholder="Please describe your aviation consultancy requirement..."
            required
            textarea
            maxLength={DESCRIPTION_MAX_LENGTH}
          />
          <ValidationError
            field="message"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-1.5 h-[48px] w-full rounded-[4px] bg-brand text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand/80 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Submit Enquiry"}
        </button>

        <p className="text-center text-[12px] font-light text-gray-400">
          Your information is handled in accordance with our{" "}
          <a href="/privacy" className="underline hover:text-gray-600">
            Privacy Policy
          </a>{" "}
          and is never shared with third parties.
        </p>
      </form>
    </div>
  )
}

export default EnquiryForm
