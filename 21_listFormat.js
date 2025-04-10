/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
    let resultString = "";
  
    if (!items.length) {
      return resultString;
    }
  
    if (items.length === 1) {
      return items.toString();
    }
  
    if (options) {
      if (options.sorted) {
        items = items.sorted();
      }
      if (options.unique) {
        items = [...new Set(items)];
      }
      if (typeof options.length === "number") {
        const remaining = items.length - options.length;
        items = items.slice(0, options.length);
        resultString = `${items.join(", ")} and ${remaining} other${remaining > 1 ? "s" : ""}`;
      }
      return resultString;
    }
  
    const last = items.at(-1);
    items = items.slice(0, items.length - 1);
    resultString = `${items.join(", ")} and ${last}`;
  
    return resultString;
  }
  
  console.log(
    listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
      length: 3,
      unique: true,
    }),
  ); // 'Bob, Ben, Tim and 2 others'
  