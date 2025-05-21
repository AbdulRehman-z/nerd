import Image from "next/image";
import { Button } from "../ui/button";

export default function BookOverview() {
  return (
    <section className="flex justify-between items-center mt-20">
      {/* left side */}
      <div className="w-2/4">
        <h1 className="text-6xl font-bold">Origin</h1>
        <div className="flex items-center gap-x-4 mt-4">
          <span>Author: <strong>John Doe</strong></span>
          <span>Category: <strong>Thriller/Suspense</strong></span>
          <div className="flex items-center gap-x-1"><Image src={"/icons/star.svg"} width={20} height={20} alt="rating" /><span><strong>4.5</strong>/5</span></div>
        </div>

        <div className="mt-3 flex items-center gap-x-4" >
          <span>Total books: <strong>100</strong></span>
          <span>Avaliable books: <strong>90</strong></span>
        </div>

        <div className="mt-6 flex flex-col items-start">
          <p className="text-base font-normal">
            Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons.
          </p>
          <Button className="uppercase gap-x-2 mt-7 py-7 text-xl font-normal" size={"lg"}>
            <Image src={"/icons/book-2.svg"} alt="book-2" width={20} height={20} />
            Borrow Book Request
          </Button>
        </div>
      </div>

      {/* right side */}
      <div>
        <h1>Book Details</h1>
        <p>This is a book details.</p>
      </div>

    </section>
  );
}
