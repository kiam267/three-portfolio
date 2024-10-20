'use client';

import React from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';

function About() {
  const [hasCopied, setHasCopied] = useState();
  const handelCopy = () => {
    navigator.clipboard.writeText('kiamhasan267@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section
      className="c-space my-20 lg:container mx-auto"
      id="about"
    >
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {' '}
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[267px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm kiam</p>
              <p className="grid-subtext">
                With 12 years of expreience, I have honed my
                skills in frontend and backend developement,
                with a focus on animated 3D websites.{' '}
              </p>
            </div>
          </div>
        </div>{' '}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full mx-auto sm:w-[267px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I spacialize in Javascript/TypeScript with a
                focus on React and NextJs ecosystems
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 23,
                    lng: 89,
                    text: 'I am here ',
                    color: 'white',
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I'm always looking for new opportunities and
                challenges to grow my skills.
              </p>
              <a href="#contact" className="w-fit ">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                My passion for conding
              </p>
              <p className="grid-subtext">
                I love solving problems and building things
                through code. Coding isn't jsut my
                profession - it is my passion.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container ">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">
                Contact me{' '}
              </p>
              <div
                className="copy-container "
                onClick={handelCopy}
              >
                <img
                  src={
                    hasCopied
                      ? '/assets/tick.svg'
                      : '/assets/copy.svg'
                  }
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white ">
                  kiamhasan267@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
