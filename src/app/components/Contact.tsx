import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
// Correctly imported

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-16 text-center bg-black opacity-100 bg-[length:200%_200%] animate-gradient text-white"
    >
      {/* Updated Heading with Lighter Gradient and Animation */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-white mb-8">
        Get in Touch
      </h2>

      <div className="space-y-6 text-lg">
        {}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaEnvelope className="text-3xl" />
          <a
            href=""
            className="hover:text-blue-900 transition-colors duration-300"
          >
            yebinj4@naver.com
          </a>
        </div>

        {/* Vercel Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <SiVercel className="text-3xl" />
          <a
            href="https://vercel.com/cogi1475s-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors duration-300"
          >
            Vercel Profile
          </a>
        </div>

        {/* GitHub Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaGithub className="text-3xl" />
          <a
            href="https://github.com/cogi1475?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors duration-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
