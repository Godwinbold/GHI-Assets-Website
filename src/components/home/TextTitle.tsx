
const TextTitle = ({ title, description }: { title: string; description: string }) => {
  return (
    <div>
      <h1 className='text-brand text-sm font-semibold uppercase'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
  )
}

export default TextTitle
