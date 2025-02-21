import catchAsyncErrors from "./catchAsyncErrors";
import { isAllowedIpMiddleware } from "./expressAdminMiddleware";
import createExpressFileLoggerRouter from "./expressFileLogger";
import createExpressLoggerRouter from "./expressLogger";
import expressQueryUtil from "./query";
import { readRealUrl } from "./url";
import { readUserAgentFromRequest } from "./userAgent";

const expressUtil = {
  readRealUrl,
  readUserAgentFromRequest,
};

export {
  catchAsyncErrors,
  isAllowedIpMiddleware,
  createExpressLoggerRouter,
  createExpressFileLoggerRouter,
  readRealUrl,
  expressQueryUtil,
  readUserAgentFromRequest,
  expressUtil,
};
