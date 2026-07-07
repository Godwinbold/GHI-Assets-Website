import Wrapper from './Wrapper'
import ContainerHeader from './ContainerHeader'
import TextTitle from './TextTitle'
import EnquiryForm from './EnquiryForm'

const GetInTouch = () => {
  return (
    <Wrapper className='py-4 grid grid-cols-1 md:grid-cols-2 items-start  gap-10'>
        <div className=''>   <ContainerHeader
      title='GET IN TOUCH'
      subtext="Let's Discuss Your"
      additionalText=" Objectives"
      colorText='Avaition'
      helperText={`Whether you're an airline seeking strategic support, a ground handler exploring partnerships, or an investor evaluating aviation opportunities—our team is ready to engage`}
  hideLine={false}
      />
      <div className='mt-15.75 flex flex-col gap-5'>
         <TextTitle title='Lagos, Nigeria - Head Office' description='45 Oduduwa Way, Ikeja GRA, Lagos.'/>
         <TextTitle title='Email' description='info@ghiassets.com'/>
         <TextTitle title='Phone' description='+234 803 491 1715'/>
      </div>
     
      </div>

    

<EnquiryForm/>
    </Wrapper>
  )
}

export default GetInTouch
