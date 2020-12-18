import { config } from 'dotenv';
config();

type connection = {
    host: string,
    port: number,
}

const connectionConfig: connection = {
    host: process.env.HOST as string,
    port: Number(process.env.PORT),
}

export { connectionConfig };