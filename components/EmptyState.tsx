"use client"
import {useRouter} from "next/navigation"
import Heading from "./Heading"
import Button from "./Button"

interface EmptyStateProps{
    title?:string,
    subtitle?:string
    showReset?:boolean
}
export const EmptyState:React.FC<EmptyStateProps> =({
    title="No exact Matches",
     subtitle="Try changing or removing some of your filters", 
     showReset
}) => {
 
    const router = useRouter()

  return (
    <div className="
    h-[50vh]
    flex flex-col justify-center items-center
    gap-2">
        <Heading
        title={title}
        subtitle={subtitle}
        center/>
        
        <div>
            {showReset && (
                <Button
                outline
                label="Remove all filters"
                onClick={()=>router.push("/")}
                />
            )}
        </div>

    </div>
  )
}
