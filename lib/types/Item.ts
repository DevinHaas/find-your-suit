export interface Item {
    title: string
    price : {value: number, currency: 'string'}
    itemLocation: {country: string}
    itemId: string
    condition: string
    seller: {username: string, feedbackPercentage: string, feedbackScore: number}
    categories: [{categoryId: string, categoryName: 'Gym Bags'}]
    itemWebUrl: string
}