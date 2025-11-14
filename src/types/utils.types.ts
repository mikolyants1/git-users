import { EGitUserInfoRender } from "@/enums/git-user-info.enum";
import { IGitUser } from "./entities.types";

export type TGitUserInfoRender = 'default';

export type TGitUserDataArgs = {
  [k in keyof IGitUser]: EGitUserInfoRender
}