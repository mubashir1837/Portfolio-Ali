// components/Hero.jsx
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare, FaYoutube, FaSkype, FaAward, FaCertificate, FaFolderOpen } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='home' className=" bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 flex flex-col items-center justify-center min-h-screen p-4 relative">
      {/* Social Links */}
      <div className="absolute left-4 top-[10%] lg:top-[60%] md:left-6 lg:left-8 transform md:-translate-y-1/2">
        <ul className="space-y-4 bg-slate-200 p-2 rounded-full">
          <li>
            <a href="https://whatsapp.com/channel/0029Vag7XYc6LwHkv1yfVo3A" className="text-green-600">
              <FaWhatsapp size={30} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mubashirali3/" className="text-[#0a66c2] hover:text-[#4b8ed1]">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/mubashir1837" className="text-gray-900">
              <FaGithub size={30}  />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/mubashir_aliyaar_37" className="text-pink-500 hover:text-pink-600">
              <FaInstagram size={30}  />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61556478748590" className="text-blue-700 hover:text-blue-800">
              <FaFacebookSquare size={30}  />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCgSNgyfmU8nRiJv2bLhRvLQ" className="text-red-600 hover:text-red-700">
              <FaYoutube size={30}  />
            </a>
          </li>
          
        </ul>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-5xl font-bold mb-1 text-white">Hello I'm</h1>
        <h2 className="text-4xl font-bold text-green-500">Ali Raza</h2>
      </div>

      {/* Profile and Info Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 p-4">
          <Image
            src="/ali.png" // Ensure this image is in the public/img folder
            alt="profile"
            width={200}
            height={200}
            href='https://linkedin.com/in/mubashirali3/'
            className="rounded-lg mx-auto shadow-lg m-2 hover:shadow-lg transition-transform transform hover:-translate-y-2 shadow-[#7d1bbf]"
          />
        </div>

        {/* Stats Section */}
        <div className="w-full md:w-2/3 p-4 text-white">
          <div className="flex flex-wrap justify-around mb-8 space-y-4 sm:space-y-0">
            <div
              className="text-center p-4 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-green-600"
              style={{ width: '150px', height: '150px' }}
            >
              <FaAward className=" w-full text-4xl text-center text-green-600  mb-2" />
              <div className="text-lg font-bold">Experience</div>
              <div className="text-lg">3+ Years</div>
              <div className="text-sm">Working</div>
            </div>

            <div
              className="text-center p-4 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-green-600"
              style={{ width: '150px', height: '150px' }}
            >
              <FaCertificate className=" w-full text-4xl text-center text-green-600  mb-2" />
              <div className="text-lg font-bold">Certificates</div>
              <div className="text-lg">7+</div>
            </div>

            <div
              className="text-center p-4 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-green-600"
              style={{ width: '150px', height: '150px' }}
            >
              <FaFolderOpen className=" w-full text-4xl text-center text-green-600  mb-2" />
              <div className="text-lg font-bold">Projects</div>
              <div className="text-lg">100+ projects</div>
              <div className="text-sm">completed</div>
            </div>
          </div>

          {/* About and Freelance Information */}
          <div className="text-center text-md space-y-4">
            <p>I'm a full-stack web application developer from Skardu, Pakistan.</p>
            <h1 className="font-extrabold text-2xl">Available for Freelance Projects.</h1>
            <p>
              Explore new horizons with me! I'm excited to embrace full-stack opportunities (remote or onsite) that spotlight my
              frontend development expertise. If my skills resonate with you and you have a project that needs coding magic, let's
              connect and bring it to life!
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
