import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../ui/Reveal'

const IMG = '/images/home'

export default function GallerySection() {
  return (
    <div className="relative left-0 top-0 h-auto w-full px-5 py-10 lg:absolute lg:left-[153px] lg:top-[4884px] lg:h-[818px] lg:w-[1072px] lg:px-0 lg:py-0 h-gal">
      <Stagger className="flex w-full lg:w-[668px] flex-col gap-[12px]" gap={0.12}>
        <StaggerItem>
          <h2 className="font-fraunces text-[28px] lg:text-[36px] font-semibold leading-none text-[#28231F]">
            Gallery
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="font-poppins text-[15px] lg:text-xl font-normal leading-[1.4] tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
            Take a closer look at our clinic, treatment environment, facilities and dental care
            experience.
          </p>
        </StaggerItem>
      </Stagger>

      <Stagger
        className="relative mt-6 flex h-auto w-full flex-col gap-3 lg:absolute lg:left-0 lg:top-[146px] lg:mt-0 lg:h-[608px] lg:w-[1072px] lg:flex-row lg:gap-[12px] h-gal-grid"
        gap={0.15}
      >
        <StaggerItem className="box-border h-[300px] sm:h-[340px] lg:h-[608px] w-full lg:w-[429px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300 h-gal-big">
          <img
            src={`${IMG}/gallery-1-1b2b07.webp`}
            alt=""
            className="h-full w-full object-cover object-[center_15%] lg:object-center"
            loading="lazy"
          />
        </StaggerItem>

        <StaggerItem className="flex w-full lg:w-[631px] shrink-0 flex-col gap-3 h-gal-col">
          <div className="flex w-full lg:w-[631px] shrink-0 flex-col gap-3 h-gal-t">
            <StaggerItem className="box-border h-[200px] lg:h-[314px] w-full lg:w-[631px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300">
              <img
                src={`${IMG}/gallery-2-1cd89a.webp`}
                alt=""
                className="h-full w-full object-cover object-[center_20%] lg:object-center"
                loading="lazy"
              />
            </StaggerItem>

            <div className="flex h-auto lg:h-[273px] w-full lg:w-[631px] shrink-0 gap-3 h-gal-brow">
              <StaggerItem className="box-border h-[160px] lg:h-[273px] flex-1 lg:w-[309px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300 h-gal-b1">
                <img
                  src={`${IMG}/gallery-3-717ab4.webp`}
                  alt=""
                  className="h-full w-full object-cover object-[center_25%] lg:object-center"
                  loading="lazy"
                />
              </StaggerItem>
              <StaggerItem className="box-border h-[160px] lg:h-[273px] flex-1 lg:w-[310px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300 h-gal-b2">
                <img
                  src={`${IMG}/hero-clinic.webp`}
                  alt="Dental Clinic Interior"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </StaggerItem>
            </div>
          </div>
        </StaggerItem>
      </Stagger>

      <Link
        to="/gallery"
        className="relative mt-6 block text-right lg:absolute lg:right-0 lg:top-[794px] lg:mt-0 font-poppins text-base font-semibold uppercase tracking-[0.03em] text-[#165ba7] hover:text-[#10437b] transition-colors h-gal-more"
      >
        SHOW MORE
      </Link>
    </div>
  )
}
