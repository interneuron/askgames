export function convertToUrl(raw: string): string {
  return raw
      .replace(/&([a-z]{1,2})(?:acute|lig|grave|ring|tilde|uml|cedil|caron);/gi, '$1')
      .replace(/[^a-zа-я0-9-]+/iug, '-')
      .replace(/-+/g, '-')
      .trim()
      .toLowerCase();
}
