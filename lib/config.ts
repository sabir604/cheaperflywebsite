export const SITE = {
  name: "CheaperFly",
  tagline: "Where Low Prices Meet High Altitudes",
  phone: "+44 20 3435 8353",
  phoneTel: "+442034358353",
  email: "info@cheaperfly.co.uk",
  address: "27 Old Gloucester Street, London WC1N 3AX, United Kingdom",
  whatsapp: "442034358353",
} as const;

export function asset(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
