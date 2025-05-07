import { Fragment } from "react";
import InstagramIcon from "../assets/Instagram_Icon.svg";
import XIcon from "../assets/X_Icon.svg";
import LinkedInIcon from "../assets/LinkedIn_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";

export default function ConnectViaCard() {
    return(
        <>
        <section className="flex flex-col gap-2">
            <div className="bg-[#D9D9D9] flex w-[145px] gap-2 rounded-md"><img src={InstagramIcon} className="w-7 m-1"/>
            <p className="text-black content-center pr-3">Instagram</p>
            </div>

            <div className="bg-[#D9D9D9] flex w-[145px] gap-2 rounded-md"><img src={XIcon} className="w-7 m-1"/>
            <p className="text-black content-center pr-3">Twitter</p>
            </div>

            <div className="bg-[#D9D9D9] flex w-[145px] gap-2 rounded-md"><img src={LinkedInIcon} className="w-7 m-1"/>
            <p className="text-black content-center pr-3">LinkedIn</p>
            </div>

            <div className="bg-[#D9D9D9] flex w-[145px] gap-2 rounded-md"><img src={GithubIcon} className="w-7 m-1"/>
            <p className="text-black content-center pr-3">Github</p>
            </div>
        </section>
        </>
    );
}