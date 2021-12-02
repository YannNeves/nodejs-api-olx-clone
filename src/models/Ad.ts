import { Schema, model, connection } from 'mongoose';

type AdTypes = {
  idUser: string,
  state: string,
  category: string,
  images: {
    url: string,
    default: boolean
  },
  dateCreated: Date,
  title: string,
  price: number,
  priceNegotiable: boolean,
  description: string,
  views: number,
  status: string
}

const modelSchema = new Schema<AdTypes>({
  idUser: String,
  state: String,
  category: String,
  images: {
    url: String,
    default: Boolean
  },
  dateCreated: Date,
  title: String,
  price: Number,
  priceNegotiable: Boolean,
  description: String,
  views: Number,
  status: String
})

const modelName: string  = 'Ad';

export default ( connection && connection.models[modelName] ) ?
  connection.models[modelName]
  :
  model<AdTypes>(modelName, modelSchema)
;