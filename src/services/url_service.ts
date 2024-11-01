import prisma from "../prisma/db";
import { ShortUrl } from "@prisma/client";

class UrlService {
  private ltos: Map<string, number>;
  private stol: Map<number, string>;
  private static COUNTER: number = 100000000000;
  private elements: string;

  constructor() {
    this.ltos = new Map<string, number>();
    this.stol = new Map<number, string>();
    this.elements = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  public longToShort(url: string): string {
    const shortUrl = this.base10ToBase62(UrlService.COUNTER);
    this.ltos.set(url, UrlService.COUNTER);
    this.stol.set(UrlService.COUNTER, url);
    UrlService.COUNTER++;
    return `http://tiny.url/${shortUrl}`;
  }

  public shortToLong(url: string): string | undefined {
    const shortCode = url.substring("http://tiny.url/".length);
    const n = this.base62ToBase10(shortCode);
    return this.stol.get(n);
  }

  private base62ToBase10(s: string): number {
    let n = 0;
    for (let i = 0; i < s.length; i++) {
      n = n * 62 + this.convert(s.charAt(i));
    }
    return n;
  }

  private convert(c: string): number {
    if (c >= '0' && c <= '9') {
      return c.charCodeAt(0) - '0'.charCodeAt(0);
    }
    if (c >= 'a' && c <= 'z') {
      return c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
    }
    if (c >= 'A' && c <= 'Z') {
      return c.charCodeAt(0) - 'A'.charCodeAt(0) + 36;
    }
    return -1;
  }

  private base10ToBase62(n: number): string {
    const sb: string[] = [];
    while (n !== 0) {
      sb.unshift(this.elements.charAt(n % 62));
      n = Math.floor(n / 62);
    }
    while (sb.length !== 7) {
      sb.unshift('0');
    }
    return sb.join('');
  }
}   