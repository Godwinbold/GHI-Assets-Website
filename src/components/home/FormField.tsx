// ✅ Simple — no forwardRef needed
interface FormFieldProps {
  label: string
  placeholder?: string
  required?: boolean
  textarea?: boolean
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  name?: string
  maxLength?: number
}

const FormField = ({ label, placeholder, required = false, textarea = false, type = "text", value, onChange, name, maxLength }: FormFieldProps) => {
  const baseClass = `
    w-full rounded-[4px] border border-[#E9EAEB] bg-[#FAFCFF]
    px-[14px] text-[13px] font-light text-gray-700 placeholder:text-gray-400
    placeholder:font-light focus:border-brand focus:outline-none transition-colors
  `

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[14px] font-bold text-gray-900">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>

      {textarea ? (
        <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength}
          className={`${baseClass} h-32.5 resize-none py-3.5`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength}
          className={`${baseClass} h-12.75`} />
      )}
    </div>
  )
}

export default FormField
