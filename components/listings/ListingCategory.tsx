import { IconType } from "react-icons"

interface ListingCategoryProps{
    icon:IconType,
    label:string,
    description:string
}
export default function ListingCategory({
icon:Icon,label,description
}:ListingCategoryProps) {
  return (
    <div
    className="flex flex-col gap-6">
    <div className="flex flex-row items-center gap-4">
    
    <Icon size={40} className="text-neutral-600"/>
    <div className="flex flex-col">
      <span>{label}</span>  
     <span className="font-bold">{description}</span>
    </div>

    </div>
    </div>
  )
}
