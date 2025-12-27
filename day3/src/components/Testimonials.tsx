
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "아틀라스는 우리 생산 라인을 변화시켰고, 반복적인 작업을 처리하는 동안 우리 팀은 혁신에 집중할 수 있었습니다. 3개월 내에 생산량이 30% 증가했습니다.",
  author: "사라 첸",
  role: "운영 부사장, Axion Manufacturing",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "물류 센터에 아틀라스를 도입한 후 작업장 부상이 40% 감소했고 주문 정확도가 향상되었습니다. 학습 능력이 정말 놀랍습니다.",
  author: "마이클 로드리게스",
  role: "물류 이사, GlobalShip",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "아틀라스는 우리가 사용했던 어떤 시스템보다 빠르게 실험실 프로토콜에 적응했습니다. 결코 지치지 않고 완벽한 정밀도를 유지하는 또 다른 연구원이 있는 것과 같습니다.",
  author: "아마라 파텔 박사",
  role: "수석 과학자, BioAdvance Research",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "중견 기업으로서 우리는 첨단 로봇 공학이 우리에게 접근 가능할 것이라고 생각하지 못했습니다. 아틀라스는 다재다능함과 배포 용이성으로 그 방정식을 완전히 바꿨습니다.",
  author: "제이슨 리",
  role: "CEO, Innovative Solutions Inc.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>사용후기</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">고객들의 이야기</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
