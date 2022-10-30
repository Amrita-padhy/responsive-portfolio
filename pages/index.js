import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-white px-8 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">PORTFOLIO</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer">
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                className=" bg-teal-500 text-white px-4 py-2 rounded-lg ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Amrita Padhy
          </h2>
          <h3 className="text-2xl py-2 font-normal text-gray-900 md:text-3xl">
            Front-End Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
            The major web developer duties include designing and building
            websites. Add your essential web developer job responsibilities to
            our web developer job description sample to create a custom listing
            for your business.
          </p>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full  flex items-center justify-center overflow-hidden w-80 h-80">
            <Image
              src="/tim.webp"
              width={290}
              height="200"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      {/* section 2 */}

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <div className=" flex justify-center">
              <Image src="/design.png" width={100} height={100} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <div className=" flex justify-center">
              <Image src="/code.png" width={100} height={100} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <div className=" flex justify-center">
              <Image src="/consulting.png" width={100} height={100} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1  relative">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={500}
              layout="responsive"
              src="/web6.png"
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={500}
              layout="responsive"
              src="/web2.png"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={500}
              layout="responsive"
              src="/web3.png"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={500}
              layout="responsive"
              src="/web4.png"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={500}
              layout="responsive"
              src="/web5.png"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={800}
              height={500}
              layout="responsive"
              src="/web6.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
