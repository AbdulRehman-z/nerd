import BookOverview from "@/components/custom/bookoverview";
import BookSummary from "@/components/custom/bookSummary";
import { sampleBooks } from "@/constants";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const bookId = parseInt(id);

  return (
    <>
      <BookOverview {...sampleBooks[bookId]} />
      <BookSummary {...sampleBooks[bookId]} />
    </>
  );
}
