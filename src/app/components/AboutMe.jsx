import React from 'react'
import Image from 'next/image';
import { FaFile, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
    return (

        <section id='aboutme' className="min-h-screen flex items-center justify-center px-4 py-20  bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#19e345] to-[#fff]">
                        About Me
                    </h1>
                    <p className="mb-6 text-gray-300">
                        I am Mubashir Ali, proudly representing the breathtaking region of Gilgit Baltistan, Pakistan, and currently based in the vibrant city of Islamabad. My academic journey began at Uswa Public School Yultar Skardu, where I successfully completed my matriculation, building a solid foundation for my educational pursuits.
                    </p>
                    <p className="mb-6 text-gray-300">
                        Driven by a deep interest in the medical sciences, I pursued my Intermediate Pre-medical at Uswa Cadet College Islamabad, where I deepened my understanding of the complexities of the field. I further enhanced my knowledge by completing Bioinformatics and Artificial Intelligence courses from Peking University and IBM via Coursera.
                    </p>
                    <p className="mb-6 text-gray-300">
                        These endeavors have equipped me with a unique blend of skills at the intersection of biology and cutting-edge technology. Additionally, I completed a freelancing training program with Digiskills, which has given me the tools and insights needed to navigate the evolving digital workspace.
                    </p>
                    <p className="mb-6 text-gray-300">
                        As a result, I am a well-rounded individual with a strong educational background, ready to contribute to the dynamic fields of Bioinformatics, Artificial Intelligence, and freelancing.
                    </p>
                </div>
                <div className="lg:w-1/2 flex flex-col items-center">
                    <Image src="/my.jpg" alt="Mubashir Ali" className="rounded-lg mb-6 border-yellow-400 " 
                    width={200}
                    height={200}/>
                    <div className="flex flex-col space-y-2">
                        <a href="https://github.com/mubashir1837/Curriculum-Vitae/blob/main/Curriculum%20Vitae.pdf" target="_blank" className="flex items-center space-x-2 text-white hover:text-purple-400">
                            <FaFile />
                            <span>Download CV</span>
                        </a>
                        <a href="https://www.facebook.com/MubashirAliyaar3/" target="_blank" className="flex items-center space-x-2 text-white hover:text-blue-400">
                            <FaLinkedin />
                            <span>Follow on Facebook</span>
                        </a>
                        <a href="https://instagram.com/mubashir_aliyaar_37" target="_blank" className="flex items-center space-x-2 text-white hover:text-pink-400">
                            <FaInstagram />
                            <span>Follow on Instagram</span>
                        </a>
                        <a href="https://github.com/mubashir1837" target="_blank" className="flex items-center space-x-2 text-white hover:text-gray-400">
                            <FaGithub />
                            <span>Follow on GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/mubashirali3/" target="_blank" className="flex items-center space-x-2 text-white hover:text-blue-700">
                            <FaLinkedin />
                            <span>Follow on LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
