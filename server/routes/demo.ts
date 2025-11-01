import { RequestHandler } from "express";
import { DemoResponse } from "@shared/api";


export const handleDemo: RequestHandler = (req, res) => {
  res.json({ 
    message: "Demo endpoint",
    timestamp: new Date().toISOString()
  });
};
