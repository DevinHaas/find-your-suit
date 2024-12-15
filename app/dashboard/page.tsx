import {Gem, LifeBuoy, Share, SquareUser,} from "lucide-react"

import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import SearchForm from "@/components/SearchForm";
import SearchResultComponent from "@/components/SearchResultComponent";

export default function Dashboard() {
    return (
        <div className="grid h-screen w-full pl-[53px]">
            <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-2">
                    <Button variant="outline" size="icon" aria-label="Home">
                        <Gem className="size-5 fill-foreground"/>
                    </Button>
                </div>
                <nav className="mt-auto grid gap-1 p-2">
                    <TooltipProvider><Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="mt-auto rounded-lg"
                                aria-label="Help"
                            >
                                <LifeBuoy className="size-5"/>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Help
                        </TooltipContent>
                    </Tooltip></TooltipProvider>
                    <TooltipProvider><Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="mt-auto rounded-lg"
                                aria-label="Account"
                            >
                                <SquareUser className="size-5"/>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Account
                        </TooltipContent>
                    </Tooltip></TooltipProvider>
                </nav>
            </aside>
            <div className="flex flex-col">
                <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
                    <h1 className="text-xl font-semibold">Find your suits</h1>
                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto gap-1.5 text-sm"
                    >
                        <Share className="size-3.5"/>
                        Share
                    </Button>
                </header>
                <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="relative hidden flex-col items-start gap-8 md:flex"
                    >
                        <SearchForm></SearchForm>
                    </div>
                    <div
                        className="relative flex h-full min-h-[50vh] max-h-[90vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                        <Badge variant="outline" className="absolute right-3 top-3">
                            Suits
                        </Badge>
                        <SearchResultComponent></SearchResultComponent>
                    </div>
                </main>
            </div>
        </div>
    )
}
