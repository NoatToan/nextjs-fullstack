import { ImgNotFoundSvgSrc } from '@/assets';
import { Image } from '@heroui/react';

export default function EmptyContent({ emptyText }: { emptyText?: boolean | undefined }) {
  return (
    <div
      className="flex flex-col flex-1 gap-5 items-center justify-center"
      data-component="EmptyContent">
      <Image
        aria-label="Empty"
        src={ImgNotFoundSvgSrc.src}
        className="h-[5rem] w-[5rem] object-contain"
      />
      {!emptyText && <p className="select-none text-xl">No Matching Search Results</p>}
      {emptyText && <p className="select-none text-xl">No Results</p>}
    </div>
  );
}
