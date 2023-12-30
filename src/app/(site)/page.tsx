import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Banner from '../../../public/appBanner.png';

function HomePage() {
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="🌟 Your workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-[18px] rounded-[5px] bg-gradient-to-r from-primary to-primary-foreground sm:w-[300px] z-50">
          <Button
            variant="secondary"
            className="w-full p-6 text-xl bg-background"
          >
            Get Noteful for Free
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
          <Image src={Banner} alt="Application Banner" />
          <div className="bottom-0 top-[50%] bg-gradient-to-t from-background left-0 right-0 absolute z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
