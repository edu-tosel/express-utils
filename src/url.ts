import { Request } from "express";
import { isString } from "./util";

/**
 * @description Express 요청에서 헤더를 분석하여 실제 URL을 반환합니다.
 * @param req Express 요청 객체입니다.
 * @throws `X-Forwarded-Host`와 `X-Forwarded-Proto`가 문자열이 아닌 경우 `TypeError`가 발생합니다.
 * @example
 * ```TypeScript
 * import express from "express";
 * import { readRealUrl } from "@edu-tosel/express-util";
 *
 * const app = express();
 * app.get("/", (req, res) => {
 *  const realUrl = readRealUrl(req);
 *  res.send(realUrl);
 * });
 * ```
 */
export function readRealUrl(
  req: Request,
  defaultUrl: string = "http://localhost:3000"
): string {
  if (!req) return defaultUrl;
  const xForwardedHost = req.headers["x-forwarded-host"];
  const xForwardedProto = req.headers["x-forwarded-proto"];
  if (!xForwardedHost || !xForwardedProto) return defaultUrl;
  if (isString(xForwardedHost) && isString(xForwardedProto))
    return `${xForwardedProto.split(",")[0]}://${xForwardedHost}`;
  throw new TypeError(
    "`X-Forwarded-Host` and `X-Forwarded-Proto` must be string"
  );
}
