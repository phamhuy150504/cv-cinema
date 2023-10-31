import axios from 'axios'
import { localService } from './localService';

const BASE_URL =  "https://movienew.cybersoft.edu.vn";

export const TokenCybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY";

export const configHeader = () => ({
    TokenCybersoft: TokenCybersoft,
    ["Authorization "]: "Bearer " + localService.get()?.accessToken,
})

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeader()
})