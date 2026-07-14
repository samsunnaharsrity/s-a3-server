import { Request, Response } from "express";

export const contact = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    console.log(body);

    res.status(200).json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};