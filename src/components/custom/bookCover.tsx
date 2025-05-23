import { cn } from "@/lib/utils";
import Image from "next/image";
import { relative } from "node:path/win32";
import BookCoverSvg from "./bookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra-small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
}

type BookCoverProps = {
  className?: string;
  variant: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

export default function BookCover({ className, variant = "regular", coverColor = "#012B48", coverImage = "https://placehold.co/400x600.png" }: BookCoverProps) {
  return (
    <div className={cn("relative transition-all duration-300", variantStyles[variant], className)}>
      <BookCoverSvg coverColor={coverColor} />
      <div className="absolute z-10" style={{ left: "12%", width: "87%", height: "88%" }}>
        <Image src={coverImage} alt="Book cover" fill
          className="rounded-sm object-fill" />
      </div>
    </div>
  )
}
