export function getQuery(obj: Record<string, any>): string {
  const queryParams = Object.entries(obj)
    .map(([key, value]) => {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value);
      return `${encodedKey}=${encodedValue}`;
    })
    .join("&");

  return queryParams;
}
