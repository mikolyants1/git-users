import { USER_INFO_CARDS } from "@/data/user-info.data";
import { IGitUser } from "@/types/entities.types";
import { TGitUserDataArgs } from "@/types/utils.types";

export abstract class GitUserInfoUtils {
    static buildData(user: IGitUser, args: Partial<TGitUserDataArgs>): JSX.Element[] {
       const keys = Object.keys(args) as Array<keyof IGitUser>;
       const render: Array<JSX.Element> = [];
       const keysSet = new Set<keyof IGitUser>(keys);

      for (const [key, value] of Object.entries(user)) {
        const gitUserKey = key as keyof IGitUser;
        if (keysSet.has(gitUserKey)) {
          const renderType = args[gitUserKey]!;
          const Elem = USER_INFO_CARDS[renderType].call(null, key, value);
          render.push(Elem);
        }
      }
      return render;
    }
}