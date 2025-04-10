/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
  let resultString = "";

  // filter empty items
  items = items.filter((x) => x !== "");

  // early return when array is empty
  if (!items.length) {
    return resultString;
  }

  // early return when array has only 1 item
  if (items.length === 1) {
    return items.toString();
  }

  // apply options
  if (options) {
    if (options.sorted) {
      items.sort();
    }
    if (options.unique) {
      items = [...new Set(items)];
    }

    //only length option has to return early because of different logic for resultString
    if (typeof options.length === "number") {
      const remaining = items.length - options.length;
      if (remaining > 0 && options.length > 0) {
        items = items.slice(0, options.length);
        resultString = `${items.join(", ")} and ${remaining} other${remaining > 1 ? "s" : ""}`;
        return resultString;
      }
    }
  }
  const last = items.at(-1);
  items = items.slice(0, items.length - 1);
  resultString = `${items.join(", ")} and ${last}`;

  return resultString;
}
