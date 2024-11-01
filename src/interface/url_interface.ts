export abstract class UrlInterface {
    abstract longToShort(url: string): string;
    abstract shortToLong(url: string): string | undefined;
  }