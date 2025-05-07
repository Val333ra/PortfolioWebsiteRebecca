import { Fragment } from "react";

export default function HeroName () {
    return(
        <section className="">
            <h1 className="text-4xl text-center">Rebecca Büscher</h1>
            <p className="text-[#000000cc] dark:text-[#ffffff75] font-bold text-center">aspiring software engineer</p>
            <form method="get" action="#Project-Section">
            <button className="absolute left-1/2 -translate-x-1/2 dark:bg-[#ffffff75] dark:text-black bg-[#000000cc] text-white px-[30px] py-[6px] rounded-lg mt-2 text-lg">Projects</button>
            </form>
        </section>
    );
}