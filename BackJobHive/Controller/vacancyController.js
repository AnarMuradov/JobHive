import { vacancyModel } from "../Model/vacancyModel.js";

export const vacancyAllData = async (req, res) => {
  try {
    const vacancies = await vacancyModel.find();
    res.status(200).json(vacancies);
  } catch (error) {
    res.send(error.message);
  } 
};

export const vacancyAllWithCategoryData = async (req, res) => {
  try {
    const vacancies = await vacancyModel.find().populate("categoryId");
    res.status(200).json(vacancies);
  } catch (error) {
    res.send(error.message);
  }
};

export const vacancyDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacancies = await vacancyModel.findById(id);
    res.status(200).json(vacancies);
  } catch (error) {
    res.send(error.message);
  }
};

export const vacancyByCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacancies = await vacancyModel.find({categoryId:id});
    res.status(200).json(vacancies);
  } catch (error) {
    res.send(error.message);  
  }
};

export const createVacancyData = async (req, res) => {
  try {
    const {
      categoryId, 
      position,
      region,
      age,
      education,
      experience,
      requirements,
      description,
      company,
      contact,
      phone,
      email,
      salary
    } = req.body;
    const newVacancies = new vacancyModel({
      categoryId,
      position,
      region,
      age,
      education,
      experience,
      requirements,
      description,
      company,
      contact,
      phone,
      email,
      salary
    });
    await newVacancies.save();
    res.status(200).json(newVacancies);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateVacancyDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      categoryId,
      position,
      region,
      age,
      education,
      experience,
      requirements,
      description,
      company,
      contact,
      phone,
      email,
      salary
    } = req.body;
    const vacancies = await vacancyModel.findByIdAndUpdate(id, {
      categoryId,
      position,
      region,
      age,
      education,
      experience,
      requirements,
      description,
      company,
      contact,
      phone,
      email,
      salary
    });
    res.status(200).json(vacancies);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteVacancyDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const vacancies = await vacancyModel.findByIdAndDelete(id);
    res.status(200).json("Data is deleted");
  } catch (error) {
    res.send(error.message);
  }
};
