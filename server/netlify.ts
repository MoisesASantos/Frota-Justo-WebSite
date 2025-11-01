import serverless from '@vendia/serverless-express';
import { app } from './index.js';

export const handler = serverless({ app });
