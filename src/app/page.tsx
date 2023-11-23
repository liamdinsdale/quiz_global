"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [routes, setRoutes] = useState<{ id: number, name: string, path: string }[]>([
    { id: 0, name: "Fundamentals of IT", path: "fit" },
    { id: 1, name: "Global Information", path: "global" },
  ]);

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col gap-5">
      {
        currentIndex === 0 ? (
          <button className="hover:scale-125 transition-transform duration-300 bg-black p-2 w-52 h-12 rounded" onClick={() => setCurrentIndex(1)}>Start Quiz</button>
        ) : currentIndex === 1 ? (
          <>
            <h1 className="text-lg">Select the Quiz topic:</h1>
            <div className="flex justify-center items-center flex-row gap-5">
              {
                routes.map((route) => {
                  return (
                    <button className="hover:scale-110 transition-transform duration-300 p-2 w-52 h-12 rounded bg-black" key={route.id} onClick={() => router.push(route.path)}>{route.name}</button>
                  );
                })
              }
            </div>
          </>
        ) :
          <></>
      }
    </main>
  )
}
