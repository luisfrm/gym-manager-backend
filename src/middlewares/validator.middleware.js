export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.parse(req.body);
    next();
  } catch (error) {
    res
			.status(400)
			.json({ message: error.errors.map((error) => error.message) });
  }
}

export const validatePartialSchema = (schema) => async (req, res, next) => {
  try {
    await schema.parse(req.body, { partial: true });
    next();
  } catch (error) {
    res
      .status(400)
      .json({ message: error.errors.map((error) => error.message) });
  }
}