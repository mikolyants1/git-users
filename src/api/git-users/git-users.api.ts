import { IGitUser } from "@/types/entities.types";
import { HttpClient } from "../http.api";
import { IGetGitUsersRes, IGitUsersQueryArgs } from "./git-users.types";

export class GitUsersApi extends HttpClient {
    static async getGitUsers({ login }: IGitUsersQueryArgs): Promise<IGetGitUsersRes> {
        return this.git.get<IGetGitUsersRes>(`/search/users?q=${login}`).then(({ data }) => data);
    }

    static async getGitUser(id: string): Promise<IGitUser> {
        return this.git.get<IGitUser>(`/user/${id}`).then(({ data }) => data);
    }
}