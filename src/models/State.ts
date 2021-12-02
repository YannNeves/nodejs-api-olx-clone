import { Schema, model, connection } from 'mongoose';

type StateTypes = {
  name: string
}

const modelSchema = new Schema<StateTypes>({
  name: String
})

const modelName: string  = 'State';

export default ( connection && connection.models[modelName] ) ?
  connection.models[modelName]
  :
  model<StateTypes>(modelName, modelSchema)
;