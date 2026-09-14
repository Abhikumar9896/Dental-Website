export const homeDoctors = [
  {
    id: 'ds',
    name: 'Dr. Deepika Singhal',
    role: 'Endodontist & Cosmetic Dentist',
    description:
      'Expert Endodontist providing advanced microscopic root canal therapy, aesthetic dentistry and restorative treatments with precision, comfort and exceptional patient care.',
    imgSrc: '/images/treatment-images/dr-deepika-singhal-new.webp',
    colorScheme: 'blue',
    imagePosition: 'left',

    imgObjectPosition: 'object-center lg:object-center',
    imgClassName: '',
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
      'Experienced Orthodontist and Implantologist dedicated to transforming smiles through advanced orthodontics, dental implants and patient-focused treatment planning.',
    imgSrc: '/images/treatment-images/dr-abhinav-jain-new.webp',
    colorScheme: 'pink',
    imagePosition: 'right',

    imgObjectPosition: 'object-center lg:object-center',
    bulletPoints: [
      'B.D.S., M.D.S.',
      '18+ Years of Clinical Experience',
      'Former: Consultant Apollo Clinic & Hedgewar Hospital',
      'Member, European Orthodontic Society (London)',
      'Certified Implantologist & Aligner Practitioner',
    ],
  },
] as const
