import {mongoose ,Schema}  from "mongoose";

const vacancySchema = new Schema({
    categoryId: { type: Schema.Types.ObjectId, ref: 'VacancyCategory' },
    position: String,
    region: String,
    age: String,
    education: String,
    experience: String,
    requirements: String,
    description: String,
    company: String,
    contact: String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
 export const vacancyModel = mongoose.model("Vacancy", vacancySchema);
