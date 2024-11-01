export abstract class AbstractUrlService {
    abstract longToShort(url: string): string;
    abstract shortToLong(url: string): string | undefined;
  }