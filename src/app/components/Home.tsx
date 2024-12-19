import Image from 'next/image' // Next.js optimized Image component

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black opacity-100"
    >
      <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 shadow-lg transition-transform transform hover:scale-105 animate-fade-in">
        <Image
          src="/images/pic.jpeg"
          alt="saba"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
        안녕하세요 저는 정예빈입니다.
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mx-auto text-white leading-relaxed">
        학번 : 92313635
        <br />
        전공 : 정보보호학과
        <br />
        취미 : 독서, 웹서핑, 전자기기 정보 정리
        <br />
        좋아하는 것 : 책, 전자기기, 친구들과의 시간
        <br />
        싫어하는 것 : 시끄러운 소음
      </p>
    </section>
  )
}

export default Home
