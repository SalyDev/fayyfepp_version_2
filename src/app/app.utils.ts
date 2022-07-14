export const MOYENS_PAIEMENT = {
  mobile   :  [
    {
      id: 'OM',
      name: 'Orange Money',
      logo: 'assets/images/mobile-money/OM2X.png',
      frais: 0.8
    },
    {
      id: 'WAVE',
      name: 'Wave',
      logo: 'assets/images/mobile-money/wave.png',
      frais: 1
    },
    {
      id: 'FREE',
      name: 'Free Money',
      logo: 'assets/images/mobile-money/free-moneys.png',
      frais: 2
    },
    {
      id: 'YUP',
      name: 'YUP',
      logo: 'assets/images/mobile-money/logo_yup_fond_blanc.png',
      frais:''
    },
    {
      id: 'WIZALL',
      name: 'Wizall',
      logo: 'assets/images/mobile-money/wizall.png',
      frais:''
    },
    {
      id: 'PROXIM0',
      name: 'Proximo',
      logo: 'assets/images/mobile-money/proximo3.png',
      frais:''
    },
    {
      id: 'EMONEY',
      name: 'E-money',
      logo: 'assets/images/mobile-money/e-moneys.png',
      frais:''
    },
    {
      id: 'MTN',
      name: 'MTN',
      logo: 'assets/images/mobile-money/mtn.png',

    }
  ],
  banque    : [
    {
      id: 'ECOBANK',
      name: 'Ecobank',
      logo: 'assets/images/mobile-money/Ecobank_Logo_EN.png'
    },
    {
      id: 'SGBS',
      name: 'Sgbs',
      logo: 'assets/images/mobile-money/Sgbs.png'
    },
    {
      id: 'UBA',
      name: 'Uba',
      logo: 'assets/images/mobile-money/uba-logo.png'
    },
    {
      id: 'ORABANK',
      name: 'Orabank',
      logo: 'assets/images/mobile-money/orabank.png'
    },
    {
      id: ' BANK',
      name: 'Bank1',
      logo: 'assets/images/mobile-money/vb.png'
    },
    {
      id: 'NSIA',
      name: 'Nsia',
      logo: 'assets/images/mobile-money/Nsia-logo.png'
    },
    {
      id: 'BANK2',
      name: 'Bank2',
      logo: 'assets/images/mobile-money/ora bank@2x.png'
    },
    {
      id: 'CBAO',
      name: 'Cbao',
      logo: 'assets/images/mobile-money/jr.png'
    }
  ],
  carte    : [
    {
      id: 'MASTERCARD',
      name: 'Mastercard',
      logo: 'assets/images/mobile-money/masterCard_Logo.png'
    },
    {
      id: 'VISA',
      name: 'Visa',
      logo: 'assets/images/mobile-money/visa.png'
    },
    {
      id: 'GIM',
      name: 'Gim-UEMOA',
      logo: 'assets/images/mobile-money/gim.png'

    },
    {
      id: 'PAYPAL',
      name: 'Wave',
      logo: 'assets/images/mobile-money/Paypal.png'
    }
  ]
};

export class AppUtils {

  public static getMoyenParCode(code): any {
   const all = MOYENS_PAIEMENT.mobile.concat(MOYENS_PAIEMENT.banque).concat(MOYENS_PAIEMENT.carte);
   return all.find((m) => m.id === code );
  }
}
