import { type Request } from "express";
import { UAParser, type IResult } from "ua-parser-js";

/**
 * Reads the User-Agent string from the request headers and parses it.
 * @link https://docs.uaparser.dev/api/main/get-result.html
 * @param req - The HTTP request object.
 * @returns The parsed User-Agent information.
 * @throws {TypeError} If the request object is not provided.
 * @throws {TypeError} If the User-Agent header is not a string.
 */
export const readUserAgentFromRequest = (req: Request): IResult => {
  if (!req) throw new TypeError("Request is not provided");
  const userAgent = req.headers["user-agent"];
  if (typeof userAgent !== "string")
    throw new TypeError("User-Agent is not a string");
  const parser = new UAParser(userAgent);
  return parser.getResult();
};
