import {UseFormReturn} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {combinedSchema} from "@/lib/formSchemas/CombinedSearchSchema";
import {z} from "zod";
import {Input} from "@/components/ui/input";


type CombinedFormValues = z.infer<typeof combinedSchema>;

interface SuitMeasurementsFormProps {
    form: UseFormReturn<CombinedFormValues>;
}


export const SuitMeasurementsForm = ({form}: SuitMeasurementsFormProps) => (
    <fieldset className={"rounded-lg border p-4"}>
        <legend className="-ml-1 px-1 text-sm font-medium">
            Suit Measurements
        </legend>


        <FormField
            control={form.control}
            name={"suit.arm2armpit"}
            render={({field}) => (
                <FormItem>
                    <FormLabel>Armpit to Armpit</FormLabel>
                    <FormControl>
                        <Input type={"number"} placeholder={form.control._defaultValues.suit?.arm2armpit?.toString()} {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="suit.chest"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Chest</FormLabel>
                    <FormControl>
                        <Input type={"number"} placeholder={form.control._defaultValues.suit?.chest?.toString()} {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />

    </fieldset>
)
