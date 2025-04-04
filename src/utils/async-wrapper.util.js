import sequelize from "#config/db.js";

const asyncWrapper = (handler, useTransaction = false) => {
  return async (req, res, next) => {
    let transaction;
    try {
      if (useTransaction) transaction = await sequelize.transaction();

      await handler(req, res, next, transaction);
      if (transaction) await transaction.commit();

      if (!res.headersSent) {
        next();
      }
    } catch (error) {
      if (transaction) await transaction.rollback();
      next(error);
    }
  };
};

export default asyncWrapper;
