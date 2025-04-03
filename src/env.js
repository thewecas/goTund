export const Server = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};

export const DB = {
  dialect: process.env.DB_DIALECT || "postgres",
  name: process.env.DB_NAME || "gotund_blog",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "root",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 5432,
};

export const AppConst = {
  hashRounds: 12,
  tokenSecret: "IERJDhqhh7N8xIL6oBIUizVc55HD1Z3joHHPN8SfuFo",
};
