import axios, { AxiosInstance } from 'axios';

export abstract class HttpInstance {
    private static gitInstance: AxiosInstance | null = null;

    static getGitInstance() {
        if (!this.gitInstance) {
          this.gitInstance = axios.create({
            baseURL: 'https://api.github.com/',
          });
        }
        return this.gitInstance;
    }
}