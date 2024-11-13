import Link from "next/link"
import Image from "next/image";



function Header(){
    return(
        <div className="flex justify-around bg-black text-white py-5">
            <div className="mr-44">
                {/* left side */}
                <Image src={"/Frame 9.png"} width={150} height={150}  alt="mobilephon"></Image>
            </div>

            <div>
                {/* right side */}
                <ul className="flex gap-20 pt-4 ">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                    <Link href={"/"}>About</Link>
                        
                    </li>
                    <li>
                    <Link href={"/"}>Service</Link>

                    </li>
                    <li>
                    <Link href={"/"}>Contact</Link>

                    </li>


                </ul>
            </div>
        </div>
    )
}
export default Header