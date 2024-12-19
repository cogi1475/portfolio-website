import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Portfolio Website',
    description: '1차 포트폴리오 웹사이트 입니다.',
    imageUrl: '/images/pro.jpg',
    link: 'https://portfolio-page-lime-nine.vercel.app/',
  },
  {
    title: 'Portfolio vidio',
    description: '자기소개 영상입니다.',
    imageUrl: '/images/download.jpeg',
    link: 'https://www.youtube.com/watch?v=5_VQfDKDo-Q',
  },
  {
    title: '블로그',
    description: '공부한 내용들을 업로드할 블로그입니다.',
    imageUrl: '/images/img.jpeg',
    link: 'https://blog.naver.com/yebinj4',
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative p-16 md:p-24 text-center bg-black-100"
    >
      <div className="absolute inset-0 bg-black opacity-100 animate-gradientMove opacity-50"></div>

      {/* Heading with Gradient and Animation */}
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-white mb-10 z-10">
        My Projects
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
          >
            <div className="relative w-full h-56 mb-6">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
