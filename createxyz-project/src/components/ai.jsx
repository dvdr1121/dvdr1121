"use client";
import React from "react";

function ai({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white font-crimson-text">
        {title}
      </h1>
      <p className="mt-2 text-lg text-gray-300 font-crimson-text">{subtitle}</p>
    </div>
  );
}

function aiStory() {
  return (
    <div>
      <ai title="育児相談AI" subtitle="産まれる前の機能や育児相談ができる" />
      <ai title="育児Chat機能" subtitle="親どうしでチャットができます" />
      <ai title="育児商品紹介" subtitle="育児におすすめな商品を紹介します" />
    </div>
  );
}

export default ai;