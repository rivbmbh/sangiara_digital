export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  hours: string;
}

export const contactInfo: ContactInfo = {
  phone: "+62 821-9441-7430",
  phoneRaw: "6282194417430",
  email: "sangiaradigital@gmail.com",
  hours: "1x24 Jam (Senin - Minggu)",
};

export const getDefaultWaLink = (): string => {
  const message = `Halo SANGIARA DIGITAL, saya berminat konsultasi pembuatan website. Bisakah kita berdiskusi?`;
  return `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(message)}`;
};
