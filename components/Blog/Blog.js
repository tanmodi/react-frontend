import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div
      style={{
        background: `linear-gradient(
            180.2deg,
            #00CDCB 0.18%,
            #00ACB2 0.19%,
            #0F1337 0.2%,
             #1D0D3D 74%,
            #24A1FC 121.32%
          )`,
      }}
      className="px-2 md:px-8 md:mt-20 mt-16"
    >
      <div className="text-center">
        <div className="pt-8">Blog</div>
        <br />
        <span className="my-12 md:text-6xl text-4xl">Thoughts and words</span>
      </div>
      <div className="flex md:flex-row flex-col items-center mt-16 md:mx-16">
        <div>
          <Image
            alt="temp"
            height={300}
            width={400}
            className="rounded-lg"
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
        </div>
        <div className="flex flex-col md:ml-16 md:w-full shs2:w-[400px]">
          <div className="my-4">
            <span className="text-gray-400">
              <span className="font-semibold text-white">Category</span> August
              15, 2022
            </span>
          </div>
          <div className="text-4xl pb-8">
            Pitch termsheet backing validation focus release.
          </div>
          <div>
            <span>Chandler Bing</span>
          </div>
        </div>
      </div>

      <div>
        <hr className="my-16 md:mx-16 h-4 text-black" />
      </div>

      <div className="font-semibold text-4xl my-12 md:text-start text-center md:ml-24">
        Latest News
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:space-x-24 md:mr-24">
          <Link href="/individualblog">
            <div className="cursor-pointer flex flex-col mb-12 md:ml-24">
              <div>
                <Image
                  alt="temp"
                  height={250}
                  width={320}
                  className="rounded-lg"
                  src={
                    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                />
              </div>
              <div className="md:w-full lg:w-11/12 w-[300px]">
                <span className="text-gray-400">
                  <span className="font-semibold text-white">Category</span>{" "}
                  August 15, 2022
                </span>
                <br />
                <div className="mt-4 mb-8">
                  Pitch termsheet backing validation focus release.
                </div>
                <div>Chandler Bing</div>
              </div>
            </div>
          </Link>

          <Link href="/individualblog">
            <div className="cursor-pointer flex flex-col mb-12 md:ml-24">
              <div>
                <Image
                  alt="temp"
                  height={250}
                  width={320}
                  className="rounded-lg"
                  src={
                    "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                />
              </div>
              <div className="md:w-full lg:w-11/12 w-[300px]">
                <span className="text-gray-400">
                  <span className="font-semibold text-white">Category</span>{" "}
                  August 15, 2022
                </span>
                <br />
                <div className="mt-4 mb-8">
                  Pitch termsheet backing validation focus release.
                </div>
                <div>Chandler Bing</div>
              </div>
            </div>
          </Link>
          <Link href="/individualblog">
            <div className="cursor-pointer flex flex-col mb-12 md:ml-24">
              <div>
                <Image
                  alt="temp"
                  height={250}
                  width={320}
                  className="rounded-lg"
                  src={
                    "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                />
              </div>
              <div className="md:w-full lg:w-11/12 w-[300px]">
                <span className="text-gray-400">
                  <span className="font-semibold text-white">Category</span>{" "}
                  August 15, 2022
                </span>
                <br />
                <div className="mt-4 mb-8">
                  Pitch termsheet backing validation focus release.
                </div>
                <div>Chandler Bing</div>
              </div>
            </div>
          </Link>
          <Link href="/individualblog">
            <div className="cursor-pointer flex flex-col mb-12 md:ml-24">
              <div>
                <Image
                  alt="temp"
                  height={250}
                  width={320}
                  className="rounded-lg"
                  src={
                    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                />
              </div>
              <div className="md:w-full lg:w-11/12 w-[300px]">
                <span className="text-gray-400">
                  <span className="font-semibold text-white">Category</span>{" "}
                  August 15, 2022
                </span>
                <br />
                <div className="mt-4 mb-8">
                  Pitch termsheet backing validation focus release.
                </div>
                <div>Chandler Bing</div>
              </div>
            </div>
          </Link>
          <Link href="/individualblog">
            <div className="cursor-pointer flex flex-col mb-12 md:ml-24">
              <div>
                <Image
                  alt="temp"
                  height={250}
                  width={320}
                  className="rounded-lg"
                  src={
                    "https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                />
              </div>
              <div className="md:w-full lg:w-11/12 w-[300px]">
                <span className="text-gray-400">
                  <span className="font-semibold text-white">Category</span>{" "}
                  August 15, 2022
                </span>
                <br />
                <div className="mt-4 mb-8">
                  Pitch termsheet backing validation focus release.
                </div>
                <div>Chandler Bing</div>
              </div>
            </div>
          </Link>
          <Link href="/individualblog">
            <div className="cursor-pointer flex flex-col mb-12 md:ml-24">
              <div>
                <Image
                  alt="temp"
                  height={250}
                  width={320}
                  className="rounded-lg"
                  src={
                    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                />
              </div>
              <div className="md:w-full lg:w-11/12 w-[300px]">
                <span className="text-gray-400">
                  <span className="font-semibold text-white">Category</span>{" "}
                  August 15, 2022
                </span>
                <br />
                <div className="mt-4 mb-8">
                  Pitch termsheet backing validation focus release.
                </div>
                <div>Chandler Bing</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
