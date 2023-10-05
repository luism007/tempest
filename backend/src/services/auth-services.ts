import * as express from "express";
import { Request, Response, NextFunction } from 'express';
export const signUpService = (req: Request, res: Response, next: NextFunction) => {
  res.send({message: "Signup!"}).status(200);
}