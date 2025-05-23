import BookList from "@/components/custom/booklist";
import BookOverview from "@/components/custom/bookoverview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList title="latest books" books={sampleBooks} containerClass="mt-28" />
    </>
  )
}
