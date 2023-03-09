import { Pizza } from "./pizza";

export type User = {
    email: string;
    password: string;
    pizza?: Array<Pizza>;
}
