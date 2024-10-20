'use client';
import React from 'react';
import { myProjects } from '../constants';
import { useState } from 'react';
import { Center, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';
import { Canvas } from '@react-three/fiber';

function Project() {
  const [selectedProjectIndex, setSeletedProjectIndex] =
    useState(0);
  const projectCount = myProjects.length;

  const curentProject = myProjects[selectedProjectIndex];
  const handelNavigation = direcion => {
    setSeletedProjectIndex(prevIndex => {
      if (direcion === 'previous') {
        return prevIndex === 0
          ? projectCount - 1
          : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1
          ? 0
          : prevIndex + 1;
      }
    });
  };

  
  return (
    <section className="c-space my-20 lg:container m-auto">
      <p className="head-text">My Work </p>
      <div
        className="grid lg:grid-cols-2 grid-cols-1 mt-12
      gap-5 w-full "
      >
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 ">
            <img
              src={curentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl "
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl "
            style={curentProject.logoStyle}
          >
            <img
              src={curentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animationText">
              {curentProject.title}
            </p>
            <p className="animationText">
              {curentProject.desc}
            </p>
            <p className="animationText">
              {curentProject.subdesc}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3 ">
              {curentProject.tags.map((tag, index) => (
                <div className="tech-logo" key={index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={curentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p> Check Live Site </p>
              <img
                src="/assets/arrow-up.png"
                className="w-3 h-3 "
                alt="arrow"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7 ">
            <button
              className="arrow-btn"
              onClick={() => handelNavigation('previous')}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4 "
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handelNavigation('next')}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4 "
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={1.5}
                  position={[0, -3, 0]}
                  rotation={[-0.1, -0.1, 0]}
                >
                  <DemoComputer
                    texture={curentProject.texture}
                  />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Project;
