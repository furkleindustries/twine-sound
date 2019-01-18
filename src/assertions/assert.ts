export function assert(condition: any, message?: string | null) {
  const msg = message || 'A run-time assertion failed.';
  if (!condition) {
    throw new Error(msg);
  }

  return true;
}
