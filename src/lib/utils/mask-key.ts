export function maskKey(key: string): string {
  if (!key || key.length <= 4) return "•••";
  const last4 = key.slice(-4);
  return `•••...${last4}`;
}
