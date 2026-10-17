export type ConuntryCode = "MX" | "US" | "CA" | "BR" | "AR" | "CL" | "CO" | "PE" | "VE" | "EC" | "UY" | "PY" | "BO" | "CR" | "PA" | "DO" | "GT" | "HN" | "SV" | "NI" | "JM" | "TT" | "BB" | "BS";
export type Currency = "MXN" | "USD" | "CAD" | "BRL" | "ARS" | "CLP" | "COP" | "PEN" | "VEF" | "ECU" | "UYU" | "PYG" | "BOB" | "CRC" | "PAB" | "DOP" | "GTQ" | "HNL" | "SVC" | "NIO" | "JMD" | "TTD" | "BBD" | "BSD";
export type Role = "customer";

export interface User {
    usernamce: string;
    password: string;
    role?: Role;
    description?: string;
}

export interface Market {
    code: ConuntryCode;
    currency: Currency;
    fullName: string;
    country: string;
    phone: string;
    address: string;
    colonia?: string;
    district?: string;
    zipCode: string;
    taxRate: number;
}