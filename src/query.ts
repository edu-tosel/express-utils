import { baseTypeChecker } from "@edu-tosel/type-checker";
import { type Result } from "@edu-tosel/utils";

const isQuery = (query: unknown) =>
  query === undefined ||
  baseTypeChecker.isStrings(query) ||
  baseTypeChecker.isString(query);
const createNumbersFromQuery = (
  query?: string | string[]
): Result<
  number[] | undefined,
  {
    message: "Invalid query";
  }
> => {
  if (!query)
    return {
      status: true,
      value: undefined,
    };

  const array = Array.isArray(query) ? query : [query];
  const numbers = array.map(Number);
  if (numbers.some((number) => Number.isNaN(number)))
    return {
      status: false,
      error: {
        message: "Invalid query",
      },
    };
  return {
    status: true,
    value: numbers,
  };
};
const createNumbers = (
  query: unknown
): Result<
  number[] | undefined,
  { message: "argument is not a query" | "Invalid query" }
> => {
  if (!isQuery(query))
    return {
      status: false,
      error: {
        message: "argument is not a query",
      },
    };
  return createNumbersFromQuery(query);
};

const expressQueryUtil = { isQuery, createNumbersFromQuery, createNumbers };

export default expressQueryUtil;
