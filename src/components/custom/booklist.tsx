import BookCard from "./bookCard";

type BookListProps = {
  title: string;
  books: Book[];
  containerClass?: string;
};

export default function BookList({ title, books, containerClass }: BookListProps) {
  return (
    <section className={containerClass}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
}
