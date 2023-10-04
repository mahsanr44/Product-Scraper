'use server'

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl:string) {
   if(!productUrl) return;
   
   try {
    const scrapeProduct= await scrapeAmazonProduct(productUrl);
    if(!scrapeProduct) return;
    
    
   } catch (error:any) {
    throw new Error(`Failed to Create/Update Product: ${error.message}`)
   }
} 