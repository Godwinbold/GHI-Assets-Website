
import { Link } from "react-router-dom"
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { ChevronRight } from "lucide-react"


export function OurServices({data}:{
    data: {
        image: string,
        description: string,
        link: string,
        actionWord:string
    }
}) {
  return (
    <Card className="relative w-full max-w-sm pt-0 rounded-lg!">
  
      <img
        src={data.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardDescription>
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="bg-transparent border-none">
        <Link to={data.link} className="w-full font-semibold text-sm flex items-center justify-between text-brand uppercase">
          {data.actionWord} <ChevronRight />
        </Link>
      </CardFooter>
    </Card>
  )
}
