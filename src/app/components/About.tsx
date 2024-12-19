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
        제가 아직까지 많이 부족해서 스스로 진행한 프로젝트는 없지만 해당 활동을
        통해 배운 것들을 통해 배운 것들을 활용해 다양한 기능들을 구현해보는 것을
        위주로 공부를 해나가고자 합니다.
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
