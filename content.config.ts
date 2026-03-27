import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    // warren tech development log pages
    wtdevlog: defineCollection({
      type: 'page',
      source: 'games/wtdevlog/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
  }
})