export const homeDoctors = [
  {
    id: 'ds',
    name: 'Dr. Deepika Singhal',
    role: 'Endodontist & Cosmetic Dentist',
    description:
      'Expert Endodontist providing advanced microscopic root canal therapy, aesthetic dentistry and restorative treatments with precision, comfort, and exceptional patient care.',
    imgSrc: '/images/home/e0a9924195fe49bd12e71ddc6eb19b13ace633e8.webp',
    colorScheme: 'blue',
    imagePosition: 'left',

    imgObjectPosition: 'object-[center_18%] lg:object-center',
    imgClassName: 'lg:!top-[-40px] lg:!h-[calc(100%+40px)]',
    bulletPoints: [
      'B.D.S., M.D.S. (Endodontist)',
      '18+ Years of Clinical Experience',
      'Former: ESIC Dental College & Hospital, Rohini',
      'Microscopic & Single Sitting RCT Expert',
    ],
  },
  {
    id: 'aj',
    name: 'Dr. Abhinav Jain',
    role: 'Orthodontist & Implantologist',
    description:
      'Experienced Orthodontist and Implantologist dedicated to transforming smiles through advanced orthodontics, dental implants, and patient-focused treatment planning.',
    imgSrc: '/images/home/75524db1b2dcef952c107879077fccb06763426e.webp',
    colorScheme: 'pink',
    imagePosition: 'right',

    imgObjectPosition: 'object-[center_28%] lg:object-[center_30%]',
    bulletPoints: [
      'B.D.S., M.D.S.',
      '18+ Years of Clinical Experience',
      'Former: Consultant Apollo Clinic & Hedgewar Hospital',
      'Member, European Orthodontic Society (London)',
      'Certified Implantologist & Aligner Practitioner',
    ],
  },
] as const
