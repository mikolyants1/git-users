import { GitUserInfoDefaultCard } from "@/components/ui/cards/GitUserInfoDefaultCard/GitUserInfoDefaultCard";
import { EGitUserInfoRender } from "@/enums/git-user-info.enum";

export const USER_INFO_CARDS = {
  [EGitUserInfoRender.DEFAULT]: (key:string, value: string) => {
    return <GitUserInfoDefaultCard key={key} name={key} value={value} />;
  }
} as const;
