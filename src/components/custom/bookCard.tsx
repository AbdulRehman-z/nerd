import { cn } from "@/lib/utils";
import Link from "next/link";
import BookCover from "./bookCover";
import Image from "next/image";
import { Button } from "../ui/button";

export default function BookCard({ id, title, genre, color, cover, isLoanedBook }: Book) {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link href={`/book/${id}`} className={cn(isLoanedBook && "w-full flex flex-col items-center")} >
        <BookCover coverColor={color} coverImage={cover} />
        <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40  max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image src="/icons/calendar.svg" alt="Calendar Icon" width={18} height={18} className="object-contain" />
              <p className="text-light-100">11 days left to return</p>
            </div>

            <Button className="book-btn" variant={"secondary"}>Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
}
