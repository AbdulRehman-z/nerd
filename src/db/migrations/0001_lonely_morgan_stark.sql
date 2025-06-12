CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"genre" varchar(255) NOT NULL,
	"rating" integer NOT NULL,
	"total_copies" integer NOT NULL,
	"avaliable_copies" integer NOT NULL,
	"description" text NOT NULL,
	"cover_color" varchar NOT NULL,
	"cover" varchar DEFAULT '' NOT NULL,
	"video" varchar DEFAULT '' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
