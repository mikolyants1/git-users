import { HttpInstance } from "@/utils/http-instance.utils";
import { AxiosInstance } from "axios";

export abstract class HttpClient {
    protected static readonly git: AxiosInstance = HttpInstance.getGitInstance();
}