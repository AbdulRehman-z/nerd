import Image from "next/image";
import { Button } from "../ui/button";
import { AlertCircleIcon, BookCopyIcon, Star } from "lucide-react";
import BookCover from "./bookCover";
import { Suspense } from "react";
import BookOverviewFallback from "../fallbacks/bookOverviewFallback";
import { getBook } from "@/actions/books/get-book";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

// data: Awaited<ReturnType<typeof getCreditsUsageStatsAction>>
export default async function BookOverview() {

  const bookResponse = await getBook();

  if (!bookResponse.success) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon className="h-4 w-4" />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>
          {bookResponse.error || "Sorry, couldn't get the book details. Please try reloading the page."}
        </AlertDescription>
      </Alert>
    );
  }

  if (!bookResponse.data) {
    return (
      <Alert>
        <BookCopyIcon className="h-4 w-4" />
        <AlertTitle>No Book Found</AlertTitle>
        <AlertDescription>
          No book is currently available to display.
        </AlertDescription>
      </Alert>
    );
  }

  const book = bookResponse.data;

  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-3xl font-bold">{book.title}</h1>

        <div className="book-info space-y-2">
          <p>
            By <span className="font-semibold text-light-200">{book.author}</span>
          </p>

          {book.genre && (
            <p>
              Category: <span className="font-semibold text-light-200">{book.genre}</span>
            </p>
          )}

          {book.rating && (
            <div className="flex flex-row items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <p className="font-medium">{book.rating.toFixed(1)}</p>
            </div>
          )}
        </div>

        {(book.totalCopies || book.avaliableCopies) && (
          <div className="book-copies space-y-1">
            {book.totalCopies && (
              <p>
                Total Books: <span className="font-semibold text-light-200">{book.totalCopies}</span>
              </p>
            )}
            {book.avaliableCopies !== undefined && (
              <p>
                Available Books: <span className="font-semibold text-light-200">{book.avaliableCopies}</span>
              </p>
            )}
          </div>
        )}

        {book.description && (
          <p className="book-description text-gray-600 leading-relaxed">
            {book.description}
          </p>
        )}

        <Button
          className="book-overview_btn w-fit"
          disabled={book.avaliableCopies === 0}
          size="lg"
        >
          <BookCopyIcon className="w-5 h-5 mr-2" />
          <span className="font-bebas-neue text-xl text-dark-100">
            {book.avaliableCopies === 0 ? "OUT OF STOCK" : "BORROW NOW"}
          </span>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={book.coverColor || "#3B82F6"}
            coverImage={book.cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={book.coverColor || "#3B82F6"}
              coverImage={book.cover}
            />
          </div>
        </div>
      </div>
    </section>);
}
