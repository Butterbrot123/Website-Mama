import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import foto from '@/public/images/telefon.jpg';
const AboutSection = () => {
  return (
    <div className="bg-dark-red padding   p-10 lg:p-16">
      <div
        id="about-us"
        className="flex justify-between items-center overflow-x-hidden max-lg:flex-col gap-10 w-full"
        style={{ margin: 0 }}
      >
        <div className="flex flex-1 flex-col  text-black ">
          <h2 className=" text-4xl capitalize  font-bold lg:max-w-lg">
            Wie Sie uns
            <span className="text-coral-red"> Erreichen</span>
          </h2>
          <p className="mb-4 lg:max-w-lg text-gray-500 info-text sm:text-xl">
            Für weitere Informationen oder Fragen erreichen Sie uns über:
          </p>

          {/* Email */}
          <div className="flex items-center mt-4 text-xl ">
            <FaEnvelope className="mr-2" />
            <span>inessayers@googlemail.com</span>
          </div>

          {/* Telefonnumre */}
          <div className="flex items-center mt-4 text-xl">
            <FaPhoneAlt className="mr-2" />
            <span>+49 172 8215973</span>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center transition-transform transform-gpu duration-700 hover:scale-90">
          <Image
            src={foto}
            alt="About"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
