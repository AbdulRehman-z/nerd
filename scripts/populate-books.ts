import { books } from '../src/db/schemas/book-schema';
import { sampleBooks } from '../src/constants';
import { db } from '@/db';

export async function populateBooks() {
  console.log('Starting to populate books...');

  try {
    // Map the sampleBooks data to match the database schema
    const booksData = sampleBooks.map(book => ({
      title: book.title,
      author: book.author,
      genre: book.genre,
      rating: Math.round(book.rating * 10), // Convert decimal rating to integer (multiply by 10)
      totalCopies: book.total_copies,
      avaliableCopies: book.available_copies,
      description: book.description,
      coverColor: book.coverColor,
      cover: book.cover,
      video: book.video || '',
    }));

    // Insert the books into the database
    const result = await db.insert(books).values(booksData);

    console.log(`Successfully inserted ${booksData.length} books into the database!`);
    return result;
  } catch (error) {
    console.error('Error populating books:', error);
    throw error;
  }
}

// Execute the function
populateBooks()
  .then(() => {
    console.log('Book population completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed to populate books:', error);
    process.exit(1);
  });
