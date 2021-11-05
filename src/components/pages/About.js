import React, { Component } from 'react';

function AboutPage() {
    return (
        <div className="bg-gray-50 y-32 px-10 min-h-screen dark:bg-gray-800 text-gray-300">
            <h3 className="py-4 text-3xl text-center md:text-5xl font-extrabold dark:text-gray-300">Hey there, I'm Matt Evans</h3>
            <div className="max-w-5xl mx-auto">
                <div className="p-5">
                    <img className="h-1/2 w-full object-cover rounded-xl" src="/assets/images/about-profile.jpeg" /></div>
                <p className="p-3 text-2xl leading-10 max-w-7xl mx-auto">I’m a full-stack web and mobile application developer living in Kirkland, Washington, with my beautiful wife and our two dogs Charlie and Eleven.</p>
                <p className="p-3 text-2xl leading-10 max-w-7xl mx-auto">Growing up, I always wanted to be. Radio DJ and I pushed myself to make my dream come true. I started volunteering at a local community radio station. I volunteer to learn everything about the radio station. After near three years of volunteering and filling for host and announcers, I got my first paid radio job for KRKO Radio. I learned the ropes of the commercial radio station and later took over an engineering role at KUOW. When something broke, I fixed it.  But I knew that I wanted to talk on the radio full time.</p>
                <p className="p-3 text-2xl leading-10 max-w-7xl mx-auto">It had been my dream to work for 92.5 KLSY (now known as Movin 92.5). ￼I applied for a job as a Board Operator and got my foot in the door. I later took over late nights and weekend. I produced several shows including Lights Out, the Make-A-Wish Radiothon, and Murdock, Hunter and Alice. After several years at the radio station they station took a different directions and went through a restructuring and new format.</p>
                <p className="pt-3 pb-20 text-2xl leading-10 max-w-7xl mx-auto">I continue my radio Journey after a short stunt in Las Vegas I decided that I didn’t want to leave Seattle. I moved back to Seattle and worked for CBS Radio, but after the radio business took a financial blow, I￼ decided that it wouldn’t be the career path I wanted anymore. I still love the radio industry today. After leaving the radio industry, I choose a new career path in the field of Loss Prevention. I worked for 10+ years In various roles. While working in the Loss Prevention field, I took online classes and boot camps to code.</p>
            </div>
        </div>
    )
}

export default AboutPage;