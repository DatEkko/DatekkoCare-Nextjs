import Image from "next/image";
import bodyImage from "./../assets/bodyBg.png";

export default function Home() {
  return (
    <div className="homepage">
      <Image src={bodyImage} alt="" width={400} height={500} />
    </div>
  );
}
