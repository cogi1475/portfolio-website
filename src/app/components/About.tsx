import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      // bg-gradient-to-br 설정 수정
      className="relative p-12 md:p-20 bg-black opacity-100 text-center overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
        About Me
      </h2>

      <p
        className="text-lg md:text-xl max-w-2xl mx-auto text-white leading-relaxed
"
      >
        제 좋아하는 것은 책, 전자기기, 친구들과의 시간입니다. 또한 싫어하는 것은
        시끄러운 소음입니다. 마지막으로 취미는 독서, 웹서핑, 전자기기 정보
        정리가 있습니다.
      </p>

      {/* Button Link to Projects */}
      <Link href="#projects" passHref>
        <button className="mt-8 px-6 py-3 bg-white text-black-100 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
          View My Projects
        </button>
      </Link>
    </section>
  )
}

export default About
