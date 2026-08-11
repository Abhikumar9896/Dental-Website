const IMG = '/images/home'

export default function GallerySection() {
  return (
    <div className="absolute left-[153px] top-[5514px] h-[818px] w-[1072px]">
      <div className="flex w-[668px] flex-col" style={{ gap: 12 }}>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-semibold leading-none text-[#28231F]">
          Gallery
        </h2>
        <p className="font-[family-name:var(--font-poppins)] text-xl font-normal leading-[1.2] tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
          A look inside the clinic : real spaces, real equipment, real care.
        </p>
      </div>

      <div className="absolute left-0 top-[146px] flex h-[608px] w-[1072px]" style={{ gap: 12 }}>
        <div className="box-border h-[608px] w-[429px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
          <img src={`${IMG}/gallery-1-1b2b07.png`} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div className="flex w-[631px] shrink-0 flex-col" style={{ gap: 12 }}>
          <div className="box-border h-[314px] w-[631px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
            <img
              src={`${IMG}/gallery-2-1cd89a.png`}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex h-[273px] w-[631px] shrink-0" style={{ gap: 12 }}>
            <div className="box-border h-[273px] w-[309px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
              <img
                src={`${IMG}/gallery-3-717ab4.png`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="box-border h-[273px] w-[310px] shrink-0 overflow-hidden rounded-[24px] border-2 border-[#F8AB64]">
              <img
                src={`${IMG}/gallery-4-57e024.png`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute right-0 top-[794px] font-[family-name:var(--font-poppins)] text-base font-semibold uppercase tracking-[0.03em] text-[#F8AB64]"
      >
        SHOW MORE
      </button>
    </div>
  )
}
