'use client';
import {type ButtonHTMLAttributes } from "react";
import "./button.css";

// 1. Define an interface that extends standard button attributes
interface AnimatedBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function AnimatedBtn1({ text, ...props }: AnimatedBtnProps) {
  return (
    <div className="flex items-center justify-center">
      <button 
        className="bubbleeffectbtn" 
        // 2. Spread the 'props' object onto the button
        {...props} 
      >
        <span className="text-sm font-medium">{text}</span>
      </button>
    </div>
  );
}