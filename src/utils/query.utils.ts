export abstract class QueryUtils {
  static mergeOptions(key: string, options: object) {
    return [key, ...Object.values(options)];
  }
}
