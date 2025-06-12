import { getBooks } from "@/actions/books/get-books";
import BookList from "@/components/custom/booklist";
import BookOverview from "@/components/custom/bookoverview";

export default async function Home() {
  // after(async () => {
  //   await populateBooks()
  // })
  const books = await getBooks()
  if (!books.data) return <div>No books found</div>
  if (books.error) return <div>Error fetching books</div>

  return (
    <>
      {books.success && (
        <>
          <BookOverview />
          <BookList title="Latest books" books={books.data} containerClass="mt-28" />
        </>
      )}
    </>
  )
}
