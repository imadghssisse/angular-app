// modal for interface search users in Github
import { User } from "./user.model";

export interface Search {
    total_count: number,
    items: User[]
}