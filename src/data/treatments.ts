export const treatmentCategories = [
  'All',
  'Single Sitting RCT',
  'Implants',
  'Full Mouth',
  'Braces',
  'Dentures',
  'Crown & Bridge',
  'Veneers',
  'Cosmetic Fillings',
  'Child Dentistry',
] as const

export type TreatmentCategory = (typeof treatmentCategories)[number]

export const treatments: { title: string; category: TreatmentCategory; content: string }[] = [
  {
    title: 'RE-RCT',
    category: 'Single Sitting RCT',
    content:
      "A failed root canal doesn't mean you have to lose your tooth. Our advanced Re-Root Canal Treatment (Re-RCT) meticulously removes old filling material, clears out new infections, and thoroughly seals the tooth. This specialized procedure gives your natural tooth a second chance, restoring your long-term oral health and comfort with expert precision.",
  },
  {
    title: 'MICROSCOPIC-RCT',
    category: 'Single Sitting RCT',
    content:
      'Microscopic Root Canal Treatment utilizes state-of-the-art dental microscopes to magnify the intricate structures inside your tooth. This advanced technology allows our endodontists to locate hidden canals and precisely remove infections that the naked eye might miss. The result is a highly thorough cleaning that maximizes the chances of saving your natural tooth permanently.',
  },
  {
    title: 'SINGLE TOOTH IMPLANTS',
    category: 'Implants',
    content:
      'A single tooth implant is the most natural-looking and feeling replacement for a missing tooth. A biocompatible titanium post is gently placed into your jawbone to act as an artificial root. Once integrated, a custom-crafted ceramic crown is securely attached, flawlessly restoring your chewing ability and completing your smile without affecting adjacent teeth.',
  },
  {
    title: 'FULL MOUTH IMPLANTS',
    category: 'Implants',
    content:
      'Full mouth implants offer a life-changing solution for patients missing all or most of their teeth. By strategically placing several titanium implants into the jawbone, we can securely anchor a full arch of beautiful, permanent replacement teeth. This comprehensive treatment restores full chewing strength, prevents bone loss, and gives you back your confident smile.',
  },
  {
    title: 'RE-CONSTRUCTION',
    category: 'Full Mouth',
    content:
      'Full mouth reconstruction is a personalized, comprehensive approach designed to rebuild severely damaged, worn, or decayed teeth. By combining various restorative treatments like crowns, bridges, and implants, we address both function and aesthetics. This complete makeover restores the structural integrity of your bite and delivers a beautiful, healthy smile.',
  },
  {
    title: 'METAL',
    category: 'Crown & Bridge',
    content:
      'Metal dental restorations, including crowns and inlays, are crafted from highly durable alloys like gold or base metals. While not tooth-colored, they offer unparalleled strength and longevity, making them an excellent choice for restoring back teeth (molars) that endure the heaviest chewing forces. They are highly resistant to wear and rarely chip or break.',
  },
  {
    title: 'CERAMIC (ESTHETICS)',
    category: 'Crown & Bridge',
    content:
      "Ceramic aesthetic restorations are the gold standard for restoring a tooth's natural beauty and strength. Made from premium, tooth-colored porcelain, these crowns and fillings seamlessly blend with your natural enamel. They are custom-shaped and color-matched to repair decay, fractures, or discoloration while giving you a flawless, natural-looking smile.",
  },
  {
    title: 'SELF LIGATING',
    category: 'Braces',
    content:
      'Self-ligating braces are a modern orthodontic solution that use specialized brackets with built-in clips to hold the archwire in place, eliminating the need for traditional elastic ties. This innovative design reduces friction and pressure on the teeth, often leading to faster treatment times, fewer clinical visits, and a more comfortable alignment process.',
  },
  {
    title: 'TEETH ALIGNERS',
    category: 'Braces',
    content:
      'Clear aligners are a popular, virtually invisible alternative to traditional metal braces. Using a series of custom-made, removable plastic trays, they gently and gradually shift your teeth into perfect alignment. Because they are removable, you can easily brush, floss, and enjoy all your favorite foods throughout your orthodontic treatment.',
  },
  {
    title: 'INVISALIGN',
    category: 'Braces',
    content:
      "Invisalign is the world's most advanced clear aligner system. Using proprietary SmartTrack material and 3D computer imaging, Invisalign creates a precise, highly predictable roadmap for your smile transformation. The aligners are comfortable, discreet, and specifically tailored to efficiently correct crowding, spacing, and bite issues without the hassle of metal wires.",
  },
  {
    title: 'FLEXIBLE DENTURES',
    category: 'Dentures',
    content:
      'Flexible dentures are a comfortable, lightweight alternative to traditional rigid acrylic dentures. Made from a special biocompatible thermoplastic material, they gently flex to adapt to the unique contours of your mouth. They require no metal clasps, making them virtually invisible while providing a secure fit and excellent everyday comfort.',
  },
  {
    title: 'FIXED PARTIAL DENTURES',
    category: 'Dentures',
    content:
      'Also known as dental bridges, fixed partial dentures are a reliable way to replace one or more consecutively missing teeth. They work by anchoring custom-made artificial teeth to the healthy natural teeth on either side of the gap. Once bonded in place, they permanently restore your ability to chew and speak with confidence.',
  },
  {
    title: 'IMPLANT SUPPORTED DENTURES',
    category: 'Dentures',
    content:
      'Implant-supported dentures combine the affordability of traditional dentures with the unmatched stability of dental implants. Instead of resting on your gums, these dentures securely snap onto strategically placed titanium implants in your jaw. This eliminates slipping and clicking, allowing you to eat your favorite foods and speak without worry.',
  },
  {
    title: 'ZIRCONIA',
    category: 'Crown & Bridge',
    content:
      'Zirconia is a cutting-edge, ultra-durable ceramic material used for crafting high-quality crowns and bridges. It is incredibly strong and highly resistant to chipping or fracturing, making it ideal for both front and back teeth. Beyond its strength, zirconia can be customized to match the exact shade and translucency of your natural teeth.',
  },
  {
    title: '3M',
    category: 'Crown & Bridge',
    content:
      "3M dental materials represent the pinnacle of trusted, high-performance restorative dentistry. We utilize 3M's advanced composite resins, cements, and bonding agents to ensure that your fillings and restorations are durable, long-lasting, and aesthetically pleasing. These world-class materials provide reliable results tailored to your unique clinical needs.",
  },
  {
    title: 'MONOLITH',
    category: 'Crown & Bridge',
    content:
      'Monolithic restorations are milled from a single, solid block of high-strength ceramic, such as zirconia, without any layered porcelain. Because they are one continuous piece of material, they offer exceptional structural integrity and are virtually impossible to chip. They provide a perfect balance of immense strength and pleasing aesthetics for demanding restorations.',
  },
  {
    title: 'LAVA',
    category: 'Crown & Bridge',
    content:
      'LAVA restorations by 3M utilize advanced zirconia framework technology to deliver crowns and bridges of extraordinary strength and beauty. The precision-milled substructure provides a flawless fit, while the layered aesthetic ceramics mimic the light-reflecting properties of natural enamel. This ensures a stunning, lifelike restoration that blends perfectly into your smile.',
  },
  {
    title: '3M LAVA',
    category: 'Crown & Bridge',
    content:
      'The 3M LAVA ceramic system is renowned globally for producing restorations that excel in both durability and aesthetics. By combining a high-strength zirconia core with specialized veneering ceramics, 3M LAVA crowns and bridges offer a precise, comfortable fit. They are designed to withstand heavy chewing forces while maintaining a beautiful, natural translucency.',
  },
  {
    title: 'BRUXER',
    category: 'Crown & Bridge',
    content:
      'BruxZir restorations are made from solid zirconia specifically engineered for patients who heavily grind or clench their teeth (bruxism). Because they contain no porcelain overlay, they are highly resistant to chipping and cracking under extreme pressure. They offer maximum durability while still providing a tooth-colored appearance for your back teeth.',
  },
  {
    title: 'EMAX',
    category: 'Crown & Bridge',
    content:
      'E.max (Lithium Disilicate) is a premium all-ceramic material famous for its breathtaking aesthetics and impressive strength. It offers natural translucency that perfectly mimics real tooth enamel, making it the material of choice for highly visible front tooth restorations. E.max is ideal for creating stunning veneers, crowns, and inlays that look entirely natural.',
  },
  {
    title: 'CERAMIC VENEERS',
    category: 'Veneers',
    content:
      'Ceramic veneers are ultra-thin, custom-crafted porcelain shells that are permanently bonded to the front surface of your teeth. They are the ultimate solution for a complete smile makeover, capable of instantly correcting severe discoloration, chips, gaps, or misshapen teeth. Veneers are stain-resistant and provide a flawless, Hollywood-perfect smile.',
  },
  {
    title: 'COMPOSITE VEENERS',
    category: 'Veneers',
    content:
      'Composite veneers offer a conservative, cost-effective way to enhance your smile in just a single visit. Using a high-quality, tooth-colored composite resin, our dentists expertly sculpt and shape the material directly onto your teeth. This procedure can quickly fix minor chips, close small gaps, and improve tooth shape with minimal enamel removal.',
  },
  {
    title: 'COMPOSITES',
    category: 'Cosmetic Fillings',
    content:
      "Composite restorations, or tooth-colored fillings, use an advanced resin material to repair cavities, cracks, or worn teeth. The composite is carefully color-matched to your surrounding enamel and bonded directly to the tooth structure. This not only restores the tooth's original strength but also provides a completely seamless, invisible repair.",
  },
  {
    title: 'GIC',
    category: 'Cosmetic Fillings',
    content:
      'Glass Ionomer Cement (GIC) is a specialized tooth-colored restorative material that chemically bonds to the tooth structure. A unique benefit of GIC is its ability to slowly release fluoride over time, helping to protect the surrounding enamel from further decay. It is frequently used for fillings near the gumline and in pediatric dentistry.',
  },
  {
    title: 'INLAYS',
    category: 'Cosmetic Fillings',
    content:
      'Dental inlays are custom-made restorations used to repair moderate decay or damage that sits within the cusps (the bumpy top edges) of a tooth. Made from durable ceramic or composite, they are fabricated in a lab for a precise fit. Inlays preserve more of your natural tooth structure than a traditional crown while offering superior strength over a standard filling.',
  },
  {
    title: 'ONLAYS',
    category: 'Crown & Bridge',
    content:
      "Dental onlays, often called partial crowns, are used when tooth decay or damage is too extensive for a filling but not severe enough to require a full crown. An onlay covers and rebuilds one or more of the tooth's cusps. Custom-milled from durable ceramics, they restore chewing function and aesthetics while conserving healthy tooth structure.",
  },
  {
    title: 'ZOOM TEETH WHITENING',
    category: 'Cosmetic Fillings',
    content:
      'Philips Zoom Teeth Whitening is a highly effective, professional in-office treatment that can brighten your smile by up to eight shades in just one visit. It uses a specialized LED light-activated gel to safely break down deep stains and discoloration caused by coffee, tea, or aging. The result is a dramatically whiter, brilliant smile in under an hour.',
  },
  {
    title: 'SURGICAL REMOVAL OF CYST AND WISDOM TEETH',
    category: 'Full Mouth',
    content:
      'Our expert surgical procedures safely and comfortably remove problematic wisdom teeth or oral cysts. Whether a tooth is impacted, causing pain, or threatening the alignment of your other teeth, our skilled surgeons use advanced techniques and anesthesia to ensure a smooth, pain-free extraction and promote rapid, healthy healing.',
  },
  {
    title: 'GUMS SURGERIES',
    category: 'Full Mouth',
    content:
      'Advanced gum (periodontal) surgeries are designed to treat severe gum disease, restore receded gumlines, or reshape gum tissue for aesthetic purposes. By gently removing deep bacteria, smoothing tooth roots, or grafting healthy tissue, we halt the progression of periodontal disease. These procedures protect your bone and ensure a healthy, stable foundation for your teeth.',
  },
  {
    title: 'BIOPSY OF ORAL LESION',
    category: 'Full Mouth',
    content:
      'An oral biopsy is a simple, highly diagnostic procedure where a tiny sample of abnormal tissue (a lesion) is gently removed from the mouth. The sample is then sent to a specialized laboratory for microscopic examination. This crucial step helps us accurately diagnose oral conditions early, ensuring you receive the correct, effective treatment promptly.',
  },
  {
    title: 'FILLINGS',
    category: 'Cosmetic Fillings',
    content:
      'Dental fillings are a fundamental treatment to stop decay and restore a cavity-damaged tooth back to its normal function and shape. We remove the decayed portion, thoroughly clean the area, and fill the space with a durable, tooth-colored composite material. This seals the tooth, prevents further decay, and perfectly matches the natural color of your smile.',
  },
  {
    title: 'ZIRCONIA CROWNS',
    category: 'Crown & Bridge',
    content:
      'Zirconia crowns are state-of-the-art dental caps that completely encase a damaged or weakened tooth. Known for their exceptional strength and biocompatibility, these crowns can withstand massive chewing forces without cracking. They are meticulously designed to blend seamlessly with your natural teeth, providing a permanent restoration that is both beautiful and indestructible.',
  },
  {
    title: 'PULPOTOMY',
    category: 'Child Dentistry',
    content:
      "A pulpotomy is a gentle, restorative procedure primarily performed on a child's primary (baby) tooth when decay has reached the upper part of the nerve pulp. We carefully remove the infected pulp from the crown of the tooth while leaving the healthy root nerves intact. This relieves pain and preserves the baby tooth until it naturally falls out.",
  },
  {
    title: 'PULPECTOMY',
    category: 'Child Dentistry',
    content:
      "A pulpectomy is essentially a root canal treatment for a child's primary tooth. When infection extends down into the tooth's roots, the entire nerve tissue must be carefully removed. The canals are then cleaned, sterilized, and filled with an absorbable material. This crucial procedure eliminates severe toothache and saves the tooth to guide the adult teeth in.",
  },
  {
    title: 'SPACE MAINTENER',
    category: 'Child Dentistry',
    content:
      'A space maintainer is a small, custom-made dental appliance used when a child loses a baby tooth prematurely. It simply holds the empty space open, preventing adjacent teeth from shifting or tilting into the gap. This ensures that the underlying permanent tooth has enough room to erupt properly, often preventing the need for extensive orthodontic work later.',
  },
  {
    title: 'ORTHO APPLIANCES',
    category: 'Child Dentistry',
    content:
      'Orthodontic appliances encompass a variety of custom-fitted devices, such as retainers, expanders, and habit-breaking appliances. They are expertly designed to guide jaw growth, correct bite discrepancies, or maintain the alignment of teeth after braces. These crucial tools support healthy oral development and ensure a functional, perfectly aligned smile for life.',
  },
]
