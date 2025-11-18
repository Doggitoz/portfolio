import React from "react";
import Image from "next/image";
import { portfolioItems } from "../resources/data/portfolio-items";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Portfolio</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "300px",
            }}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={300}
              height={200}
              style={{ borderRadius: "8px" }}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a
              href={item.subpage}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
