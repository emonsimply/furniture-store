import React from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <h2 className="text-lg md:text-lg font-semibold text-gray-800 uppercase">
        {title}
      </h2>
      <hr className="mb-6 mt-2" />

      {subtitle && (
        <p className="mt-2 text-sm text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
