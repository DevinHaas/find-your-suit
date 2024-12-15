import {z} from "zod";


const nonNegativeMessage = {
    message: "Cannot be smaller than 0",
}

const suitMeasurementSchema = z.object({
    arm2armpit: z.preprocess(
        (a) => parseInt(a as string, 10),
        z.number().positive(nonNegativeMessage)
    ),
    chest: z.preprocess(
        (a) => parseInt(a as string, 10),
        z.number().positive(nonNegativeMessage)
    ),
})

// const pantsMeasurementSchema = z.object({
//     waist: z.preprocess(
//         (a) => parseInt(a as string, 10),
//         z.number().positive(nonNegativeMessage)
//     ),
//     inseam: z.preprocess(
//         (a) => parseInt(a as string, 10),
//         z.number().positive(nonNegativeMessage)
//     ),
// });

export const combinedSchema = z.object({
    suit: suitMeasurementSchema
});
