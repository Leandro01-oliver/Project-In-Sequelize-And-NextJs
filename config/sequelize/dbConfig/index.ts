
const configDb = {
    "development": {
        "username": process.env.SEQUELIZE_USER_NAME_DEVELOP,
        "password": process.env.SEQUELIZE_PASSWORD_DEVELOP,
        "database": process.env.SEQUELIZE_DB_DEVELOP,
        "host": process.env.SEQUELIZE_HOST_DEVELOP,
        "dialect": process.env.SEQUELIZE_DIALECT_DEVELOP
      },
      "test": {
        "username": process.env.SEQUELIZE_USER_NAME_TEST,
        "password": process.env.SEQUELIZE_PASSWORD_TEST,
        "database": process.env.SEQUELIZE_DB_TEST,
        "host": process.env.SEQUELIZE_HOST_TEST,
        "dialect": process.env.SEQUELIZE_DIALECT_TEST
      },
      "production": {
        "username": process.env.SEQUELIZE_USER_NAME_PRODUCTION,
        "password": process.env.SEQUELIZE_PASSWORD_PRODUCTION,
        "database": process.env.SEQUELIZE_DB_PRODUCTION,
        "host": process.env.SEQUELIZE_HOST_PRODUCTION,
        "dialect": process.env.SEQUELIZE_DIALECT_PRODUCTION
      }
}

export { configDb }