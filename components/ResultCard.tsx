import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Item} from "@/lib/types/Item";


type ResultCardProps = {
    item: Item
}

export default function ResultCard({item} : ResultCardProps){


    return (
        <Card className={"flex flex-row justify-between hover:scale-[1.01] hover:cursor-pointer m-4"}>
            <div className={"w-1/2"}>
                <CardHeader>
                    <div className={"flex flex-row justify-between"}>
                        <CardTitle>{item.title}</CardTitle>
                        <Badge variant="outline">{item.price.value}</Badge>
                    </div>
                    <CardDescription>An amazing suit from the taylor of London</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>A beautiful Suit </p>
                </CardContent>
            </div>
            <div className="w-1/2 bg-gray-100">
                <AspectRatio ratio={16 / 9}>
                    <Image  alt="Image" src={"/suit1.jpeg"} fill={true}  className="rounded-md object-contain"/>
                </AspectRatio>
            </div>
        </Card>

    )
}