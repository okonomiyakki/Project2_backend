import dotenv from 'dotenv';
import { EnvConfig } from '../types/envType';

dotenv.config();

const env: EnvConfig = {
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,

  HOST: process.env.HOST,
  PORT: process.env.PORT,

  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,

  JWT_SECRET_KEY_LENGTH: process.env.JWT_SECRET_KEY_LENGTH,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,

  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,

  UPLOAD_IMAGE_FILE_ROOT: process.env.IMAGE_ROOT,

  KAKAO_LOGIN_API_CLIENT_ID: process.env.KAKAO_LOGIN_API_CLIENT_ID,
  KAKAO_LOGIN_API_REDIRECT_URI: process.env.KAKAO_LOGIN_API_REDIRECT_URI,
};

export default env;
