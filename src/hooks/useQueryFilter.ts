import { useGitQueryParams } from "@/store/git-query-params/useGitQueryParams";
import { debounce } from "@/utils/debounce.utils";
import { ChangeEvent, startTransition } from "react";

export const useQueryFilter = () => {
    const setLogin = useGitQueryParams(s => s.setLogin);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        startTransition(() => {
          debounce(() => setLogin(value), 500);
        })
    }

    return { onChange };
}