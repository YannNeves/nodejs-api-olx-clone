import { Schema, model, connection } from 'mongoose';

type CategoryTypes = {
  name: string,
  slug: string
}

const modelSchema = new Schema<CategoryTypes>({
  name: String,
  slug: String
})

const modelName: string  = 'Category';

export default ( connection && connection.models[modelName] ) ?
  connection.models[modelName]
  :
  model<CategoryTypes>(modelName, modelSchema)
;