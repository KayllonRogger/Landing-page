// Company registration data, shown on several pages. Keep in one place.
// CREA: the state (UF) and registration type are not confirmed yet, so only
// the number is published.
export const COMPANY = {
    tradeName: 'KR Engenharia',
    legalName: 'KR Consultoria e Soluções em Engenharia LTDA',
    cnpj: '68.797.626/0001-04',
    crea: '141854962-2',
    email: 'contato@krconsultoria.com.br',
    phoneDisplay: '+55 (31) 99566-6963',
    phoneHref: 'tel:+5531995666963',
    whatsappNumber: '5531995666963',
    address: {
        street: 'Rua Rio Grande do Norte, 1436, sala 813, Funcionários',
        cityPt: 'Belo Horizonte – MG, Brasil',
        cityEn: 'Belo Horizonte, MG, Brazil',
    },
} as const;

export function whatsappUrl(message: string) {
    return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
