import { type SchemaTypeDefinition } from 'sanity'
import car from './car'
import comment from './comment'
import review from './review'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,comment,review],
}
