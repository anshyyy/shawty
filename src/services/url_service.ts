import config from "../config/config";
import IUrlService from "../core/service/url_service";
import { UrlInterface } from "../interface/url_interface";
import prisma from "../prisma/db";

export default class UrlService {
    private urlService: UrlInterface;

    constructor() {
        this.urlService = IUrlService.getInstance();
    }

    async createUrl(url: string): Promise<string> {
        try {
            console.log("url", url);
            if (!url) {
                throw new Error("URL is required");
            }
            const alreadyExistUrl = await prisma.shortUrl.findUnique({where: {originalUrl: url}});
            if (alreadyExistUrl) {
                return `${config.tinyUrlDomain}${alreadyExistUrl.shortUrl}`;
            }
            const shortUrl = this.urlService.longToShort(url);
            const shortUrlWithDomain = await prisma.shortUrl.findUnique({ where: { shortUrl: shortUrl } });
            if (shortUrlWithDomain) {
                return `${config.tinyUrlDomain}${shortUrl}`;
            }
            await prisma.shortUrl.create({
                data: {
                    shortUrl: shortUrl,
                    originalUrl: url,
                }
            });
            return `${config.tinyUrlDomain}${shortUrl}`;
        } catch (error) {
            console.log("error", error);
            throw error;
        }
    }

    public async getUrl(url: string): Promise<string | undefined> {
        try {
            const shortUrl = await prisma.shortUrl.findUnique({ where: { shortUrl: url } });
            if(!shortUrl){  
                throw new Error("URL not found");
            }
          //  await prisma.shortUrl.update({where: {shortUrl: url}, data: {visitCount: shortUrl.visitCount + BigInt(1)}});
            return shortUrl?.originalUrl;
        } catch (error) {
            console.log("error", error);
            throw error;
        }
    }
    public async getVisitCount(url: string): Promise<number> {  
        const shortUrl = await prisma.shortUrl.findUnique({where: {shortUrl: url}});
        return Number(shortUrl?.visitCount) || 0;
    }
    public async incrementVisitCount(url: string): Promise<void> {
        await prisma.shortUrl.update({where: {shortUrl: url}, data: {visitCount: {increment: 1}}});
    }
}   
