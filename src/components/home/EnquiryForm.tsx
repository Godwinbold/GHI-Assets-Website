import { useState, } from "react"
import FormField from "./FormField"

const DESCRIPTION_MAX_LENGTH = 255

interface EnquiryFormData {
  firstName: string
  lastName: string
  email: string
  serviceInterest: string
  message: string
}

const EnquiryForm = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    firstName: "",
    lastName: "",
    email: "",
    serviceInterest: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const nextValue = name === "message" ? value.slice(0, DESCRIPTION_MAX_LENGTH) : value
    setFormData((prev) => ({ ...prev, [name]: nextValue }))
  }

  const handleSubmit = (e :any) => {
    e.preventDefault()
    console.log("Form data:", formData)
    // pass formData to your API/handler here
  }

  return (
    <div className="rounded-xl border border-black/20 bg-white p-8 md:px-15 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Send an Enquiry</h2>
      <p className="mt-1.5 mb-7 text-sm text-gray-500">
        We respond to all qualified aviation enquiries within one business day
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        {/* First + Last name row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="First Name"
            name="firstName"
            placeholder="Your name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Last Name"
            name="lastName"
            placeholder="Surname"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Your email address"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <FormField
          label="Service Interest"
          name="serviceInterest"
          placeholder="Example: Cargo services"
          required
          value={formData.serviceInterest}
          onChange={handleChange}
        />

        <FormField
          label="Message"
          name="message"
          placeholder="Please describe your aviation consultancy requirement..."
          required
          textarea         
          value={formData.message}
          onChange={handleChange}
          maxLength={DESCRIPTION_MAX_LENGTH}
        />

        <button
          type="submit"
          className="mt-1.5 h-[48px] w-full rounded-[4px] bg-brand text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand/80"
        >
          Submit Enquiry
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
