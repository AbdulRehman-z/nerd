export default function BookSummary({ author, available_copies, cover, description, genre, id, rating, summary, title, total_copies, color, isLoanedBook }: Book) {

  return (
    <section className="flex justify-between  mt-28 flex-col-reverse gap-12 sm:gap-24 xl:flex-row ">
      {/* left side */}
      <div className=" flex flex-col gap-y-6 flex-1">
        <h2 className="text-3xl text-light-100 font-semibold">Summary</h2>
        <p className="text-xl text-light-100">
          {summary}
        </p>
      </div>
      {/* right side */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-3xl text-light-100 font-semibold">More similar books</h2>
        <ul className="flex flex-col gap-y-4">
          <li className="text-light-100">Book 1</li>
          <li className="text-light-100">Book 2</li>
          <li className="text-light-100">Book 3</li>
        </ul>
      </div>
    </section>
  )
}
