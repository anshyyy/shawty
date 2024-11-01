import { Request, Response } from "express";
import UrlService from "../services/url_service";

const urlService = new UrlService();

export const createUrl = async (req: Request, res: Response) => {
  try {
    const shortUrl = await urlService.createUrl(req.body.url);
    res.status(200).json({ shortUrl ,success:true,message:"URL created successfully"});
  } catch (error) {
    res.status(500).json({ error: error,success:false,message:"Failed to create URL"});
  }
}

export const getUrl = async (req: Request, res: Response) => {
  try {
    const shortUrl = await urlService.getUrl(req.params.id);
    if(shortUrl){
       res.status(302).redirect(shortUrl);
       await urlService.incrementVisitCount(req.params.id);
    }else{
      res.status(404).json({ error: "URL not found",success:false,message:"URL not found"});
    }
  } catch (error) {
    res.status(500).json({ error: error,success:false,message:"Failed to retrieve URL"});
  }
}
