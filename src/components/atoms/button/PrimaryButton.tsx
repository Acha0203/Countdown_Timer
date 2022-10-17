import React, { FC, memo } from 'react';

interface ButtonType {
  block?: boolean;
  children: React.ReactNode;
  className: string;
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
    sm: 'text-sm',
    md: '',
    lg: 'text-lg',
  },
};

const PrimaryButton: FC<ButtonType> = memo(function PButton({
  block = false,
  children,
  className,
  disabled = false,
  rounded,
  size = 'md',
  submit,
  onClick,
}: ButtonType) {
  return (
    <div className="flex justify-center items-center mx-3">
      <button
        type={submit ?? false ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}
        className={`${className} px-4 py-2 ${block ?? false ? style.block : ''}
          ${style.default} ${rounded ?? false ? style.rounded : 'rounded'}
          ${style.sizes[size]} `}
      >
        {children}
      </button>
    </div>
  );
});

export default PrimaryButton;
