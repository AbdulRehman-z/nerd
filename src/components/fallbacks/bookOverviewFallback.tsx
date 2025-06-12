import { Skeleton } from "../ui/skeleton";

export default function BookOverviewFallback() {
  return (
    <div className="flex flex-col gap-y-8">
      <Skeleton className="w-20 h-15" />
      <div className="flex flex-col gap-y-5">
        <Skeleton className="h-3.5 w-20" />
        <Skeleton className="h-3.5 w-20" />
      </div>
      <div>
        <Skeleton className="w-30 h-20" />
      </div>
    </div>
  )
}
