export const BACKEND_URL = process.env.BACKEND_URL ?? "http://crm_o.test";

export function backendUrl(path: string): string {
  const base = BACKEND_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
