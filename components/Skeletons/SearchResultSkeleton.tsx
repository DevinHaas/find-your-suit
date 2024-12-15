import {Skeleton} from "@/components/ui/skeleton"

export function SearchResultSkeleton() {
    return (
        <div className={"flex flex-row justify-evenly mx-16 mt-14 h-full"}>
            <Skeleton className={"h-40 w-full"}></Skeleton>
            <Skeleton className={"h-40 w-full"}></Skeleton>
            <Skeleton className={"h-40 w-full"}></Skeleton>
        </div>
    )
}
