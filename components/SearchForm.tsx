'use client'

import {Button} from "@/components/ui/button";
import useSearchService from "@/services/SearchService";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {combinedSchema} from "@/lib/formSchemas/CombinedSearchSchema";
import {SuitMeasurementsForm} from "@/components/measurements/SuitMeasurementsForm";
import {Form} from "@/components/ui/form";



export default function SearchForm () {


    const { isSearching} = useSearchService().makeSearch();


    const form = useForm<z.infer<typeof combinedSchema>>({
        resolver: zodResolver(combinedSchema),
        defaultValues: {
            suit: {
                arm2armpit: 20,
                chest: 40
            }
        },
    });


    function onSubmit(values: z.infer<typeof combinedSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}  >
            <div className="grid w-full items-start gap-6">
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 p-4">
                    <div className="grid gap-3">
                        <SuitMeasurementsForm form={form}></SuitMeasurementsForm>
                    </div>
                    <div className="grid gap-3">

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">

                        </div>
                        <div className="grid gap-3">
                        </div>
                    </div>
                </form>
            </div>
            <Button type={"submit"} onClick={() => form.handleSubmit(onSubmit)()}>
                Search
                {isSearching && (
                    <LoadingSpinner/>
                )}
            </Button>
        </Form>
    )
}