

export const headers = {
    'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_EBAY_API_TOKEN}`,
    'Content-Type': 'application/json',
    "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
    "X-EBAY-C-ENDUSERCTX": 'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'
};