import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../ui/Reveal'

const IMG = '/images/home'

export default function GallerySection() {
  return (
    <div className="absolute left-[153px] top-[4884px] h-[818px] w-[1072px]">
      <Stagger className="flex w-[668px] flex-col gap-[12px]" gap={0.12}>
        <StaggerItem>
          <h2 className="font-fraunces text-[36px] font-semibold leading-none text-[#28231F]">
            Gallery
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="font-poppins text-xl font-normal leading-[1.2] tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
            A look inside the clinic: real spaces, real equipment, real care.
          </p>
        </StaggerItem>
      </Stagger>

      <Stagger
        className="absolute left-0 top-[146px] flex h-[608px] w-[1072px] gap-[12px]"
        gap={0.15}
      >
        <StaggerItem className="box-border h-[608px] w-[429px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300">
          <img
            src={`${IMG}/gallery-1-1b2b07.webp`}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </StaggerItem>

        <StaggerItem className="flex w-[631px] shrink-0 flex-col">
          <div className="flex w-[631px] shrink-0 flex-col" style={{ gap: 12 }}>
            <StaggerItem className="box-border h-[314px] w-[631px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300">
              <img
                src={`${IMG}/gallery-2-1cd89a.webp`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </StaggerItem>

            <div className="flex h-[273px] w-[631px] shrink-0" style={{ gap: 12 }}>
              <StaggerItem className="box-border h-[273px] w-[309px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300">
                <img
                  src={`${IMG}/gallery-3-717ab4.webp`}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </StaggerItem>
              <StaggerItem className="box-border h-[273px] w-[310px] shrink-0 overflow-hidden rounded-md border-2 border-gray-300">
                <img
                  src={`${IMG}/gallery-4-57e024.webp`}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </StaggerItem>
            </div>
          </div>
        </StaggerItem>
      </Stagger>

      <Link
        to="/gallery"
        className="absolute right-0 top-[794px] font-poppins text-base font-semibold uppercase tracking-[0.03em] text-[#165ba7] hover:text-[#10437b] transition-colors"
      >
        SHOW MORE
      </Link>
    </div>
  )
}
