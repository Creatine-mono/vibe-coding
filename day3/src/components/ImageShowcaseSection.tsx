
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            오늘 미래를 경험하세요
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            우리의 최첨단 휴머노이드 로봇은 일상 환경에서 기술과 상호작용하는 방식을 
            혁신하도록 설계되었습니다.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Advanced humanoid robot with orange and white design" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">차세대 로보틱스</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              정밀 공학과 정교한 AI로 제작된 우리의 로봇은 가정에서 병원까지 다양한 환경에 
              완벽하게 통합되어 지원을 제공하고 인간의 경험을 풍요롭게 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
