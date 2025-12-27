
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          이 템플릿은{" "}
          <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            DesignJoy의
          </a>{" "}
          BUILD WARS 디자인에서 영감을 받았으며,{" "}
          <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Rezaul Arif
          </a>가 Lovable로 제작했습니다.
        </p>
      </div>
    </footer>;
};
export default Footer;
