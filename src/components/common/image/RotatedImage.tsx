import Image from "next/image";

export default function RotatedImages({
  url,
  onClick,
}: {
  url: string | null;
  onClick: () => void;
}) {
  return (
    <div
      className={`absolute w-56 h-60 right-0 rotate-12 ${
        url && "cursor-pointer"
      }`}
      onClick={url ? onClick : undefined}
    >
      {/* Background Image */}
      <div className="absolute top-[-2rem] right-[1rem] w-full h-full rounded-lg shadow-lg opacity-30">
        {url && (
          <Image
            src={url}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        )}
      </div>

      {/* Foreground Image */}
      <div className="absolute top-[-1rem] right-0 w-full h-full rounded-lg shadow-lg"></div>
    </div>
  );
}
