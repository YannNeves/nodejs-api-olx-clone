import { Schema, model, connection } from 'mongoose';

type UserTypes = {
  name: string,
  email: string,
  state: string,
  passwordHash: string,
  token: string
}

const modelSchema = new Schema<UserTypes>({
  name: String,
  email: String,
  state: String,
  passwordHash: String,
  token: String
})

const modelName: string  = 'User';

export default ( connection && connection.models[modelName] ) ?
  connection.models[modelName]
  :
  model<UserTypes>(modelName, modelSchema)
;