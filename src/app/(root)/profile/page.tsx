import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/utils";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  // Get additional user details from the database if needed
  const user = session.user.email
    ? await db.query.users.findFirst({
      where: eq(users.email, session.user.email),
    })
    : null;

  return (
    <div className="root-container min-h-screen w-full rounded-2xl p-8 md:p-12">
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-8">
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-primary">
              <AvatarFallback className="bg-dark-600 text-primary text-4xl">
                {getInitials(session.user.name || "User")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">{session.user.name}</h1>
            <p className="mt-1 text-light-100">{session.user.email}</p>

            <div className="mt-4 p-4 bg-dark-300 rounded-lg">
              <h3 className="text-xl font-semibold text-primary">Account Information</h3>
              <div className="mt-4 grid grid-cols-1 gap-3">
                <div className="flex flex-col">
                  <p className="text-sm text-light-500">Member Since</p>
                  <p className="text-base text-light-100">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-light-500">Last Login</p>
                  <p className="text-base text-light-100">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="mt-8 md:mt-0" action={async () => {
          "use server";
          await signOut();
        }}>
          <Button
            type="submit"
            className="bg-dark-300 hover:bg-dark-600 text-light-100 min-h-14 w-full md:w-auto border border-light-100/10"
          >
            <Image src="/icons/logout.svg" alt="Logout" width={20} height={20} className="mr-2" />
            Logout
          </Button>
        </form>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-300 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Reading Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-200 rounded-lg p-4 text-center">
              <p className="text-4xl font-semibold text-primary">12</p>
              <p className="text-sm text-light-100 mt-1">Books Read</p>
            </div>
            <div className="bg-dark-200 rounded-lg p-4 text-center">
              <p className="text-4xl font-semibold text-primary">3</p>
              <p className="text-sm text-light-100 mt-1">Currently Reading</p>
            </div>
            <div className="bg-dark-200 rounded-lg p-4 text-center">
              <p className="text-4xl font-semibold text-primary">4.2</p>
              <p className="text-sm text-light-100 mt-1">Avg. Rating</p>
            </div>
            <div className="bg-dark-200 rounded-lg p-4 text-center">
              <p className="text-4xl font-semibold text-primary">26</p>
              <p className="text-sm text-light-100 mt-1">To Read</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-300 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Favorite Genres</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-light-100">Science Fiction</p>
                <p className="text-primary">45%</p>
              </div>
              <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-light-100">Fantasy</p>
                <p className="text-primary">30%</p>
              </div>
              <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "30%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-light-100">Mystery</p>
                <p className="text-primary">15%</p>
              </div>
              <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "15%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-light-100">Non-Fiction</p>
                <p className="text-primary">10%</p>
              </div>
              <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-primary mb-4">Recently Borrowed Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-dark-300 rounded-lg p-4 flex items-center gap-4">
              <div className="book-cover_small bg-dark-600 flex items-center justify-center">
                <span className="text-primary text-xs">Book Cover</span>
              </div>
              <div>
                <h4 className="text-white font-semibold">Book Title {index + 1}</h4>
                <p className="text-light-100 text-sm">Author Name</p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-xs text-light-100">Due in 7 days</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-dark-300 rounded-lg p-6">
        <div>
          <h3 className="text-xl font-semibold text-primary">Account Settings</h3>
          <p className="text-light-100 mt-1">Update your profile information and preferences</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-dark-100 min-h-14 w-full md:w-auto">
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
