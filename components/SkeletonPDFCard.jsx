import { Skeleton } from "./ui/skeleton";



const SkeletonPDFCard = () => {
  return (

        <div className="w-[145px] h-[143px] flex items-center justify-center rounded-[8px]">
              <Skeleton className="p-[25px]"/>
              <Skeleton className="mt-[6px]"/>
              <Skeleton className="mt-[6px]"/>
              
        </div>
  )
}

export default SkeletonPDFCard