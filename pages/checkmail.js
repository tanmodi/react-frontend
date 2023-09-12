import Link from "next/link";

export default function Checkmail() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
          Check your inbox
        </h2>
        <p className="mb-2 text-lg text-zinc-500">
          We are glad, that you&apos;re with us ? We&apos;ve sent you a
          verification link to the email address{" "}
          <span className="font-medium text-indigo-500">
            mail@yourdomain.com
          </span>
          .
        </p>
        <Link href="https://www.gmail.com">
          <button className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">
            Open the App →
          </button>
        </Link>
      </div>
    </div>
  );
}
