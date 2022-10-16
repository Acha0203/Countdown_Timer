import React, { FC, memo } from 'react';

interface ButtonType {
  block?: boolean;
  children: React.ReactNode;
  className: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'dark';
  disabled?: boolean;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  submit?: boolean;
  onClick?: (event: any) => void;
}

const style = {
  rounded: `rounded-full`, // 角を丸くする
  block: `flex justify-center w-full`, // 最大幅まで伸ばす
  default: `text-white focus:outline-none font-medium`,
  sizes: {
    // サイズ
    sm: 'text-sm',
    md: '',
    lg: 'text-lg',
  },
  colors: {
    // 色
    blue: `px-4 py-2 bg-blue-600 focus:ring-2 focus:ring-offset-2 hover:bg-blue-700 focus:ring-blue-500 disabled:bg-slate-500`,
    green: `px-4 py-2 bg-green-600 focus:ring-2 focus:ring-offset-2 hover:bg-green-700 focus:ring-green-500 disabled:bg-slate-500`,
    red: `px-4 py-2 bg-red-600 focus:ring-2 focus:ring-offset-2 hover:bg-red-700 focus:ring-red-500 disabled:bg-slate-500`,
    dark: `px-4 py-2 bg-black focus:ring-2 focus:ring-offset-2 hover:bg-black-600 focus:ring-gray-500 disabled:bg-slate-500`,
    yellow: `px-4 py-2 bg-yellow-500 focus:ring-2 focus:ring-offset-2 hover:bg-yellow-600 focus:ring-yellow-500 disabled:bg-slate-500`,
    indigo: `px-4 py-2 bg-indigo-600 focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 focus:ring-indigo-600 disabled:bg-slate-500`,
  },
};

const PrimaryButton: FC<ButtonType> = memo(function PButton({
  block = false,
  children,
  className,
  color,
  disabled = false,
  rounded,
  size = 'md',
  submit,
  onClick,
}: ButtonType) {
  return (
    <>
      <button
        type={submit ?? false ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${block ?? false ? style.block : ''}
          ${color !== undefined ? style.colors[color] : style.colors.dark}
          ${style.default} ${rounded ?? false ? style.rounded : 'rounded'}
          ${style.sizes[size]} `}
      >
        {children}
      </button>
    </>
  );
});

export default PrimaryButton;
