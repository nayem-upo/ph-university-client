import { jwtDecode } from "jwt-decode"

export type TUserData = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
    token: string;
}
export const verifyToken = (token: string): TUserData => {
    return jwtDecode(token);
}