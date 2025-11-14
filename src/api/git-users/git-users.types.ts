import { IGitUser } from "@/types/entities.types";

export interface IGitUsersQueryArgs {
    login: string;
}

export interface IGetGitUsersRes {
    total_count: number;
    incomplete_results: boolean;
    items: IGitUser[];
}