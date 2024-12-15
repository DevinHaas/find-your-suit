'use client';

import useSearchService from "@/services/SearchService";
import { SearchResultSkeleton } from "@/components/Skeletons/SearchResultSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import ResultCard from "@/components/ResultCard";
import { useSearchStore } from "@/zustand/SearchStore";

export default function SearchResultComponent() {
    const { isSearching } = useSearchService().makeSearch();
    const { items } = useSearchStore();


    return (
        <div className="m-2 pt-5">
            {isSearching && <SearchResultSkeleton />}
            {!isSearching && items.length > 0 ? (
                <ScrollArea className="h-[85vh]">
                    {items.map((item) => (
                        <ResultCard key={item.itemId} item={item} />
                    ))}
                </ScrollArea>
            ) : (
                !isSearching && items && <p>No items available.</p>
            )}
        </div>
    );
}
