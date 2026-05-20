import React from 'react';
import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import { Testimonials } from '../../components/Testimonials';
import { InstagramFeed } from '../../components/InstagramFeed';
import { ContactForm } from '../../components/ContactForm';

export const Home: React.FC = () => {
    return (
        <>
            <div id="home">
                <Hero />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="reviews">
                <Testimonials />
            </div>
            <div id="feed">
                <InstagramFeed />
            </div>
            <div id="contact">
                <ContactForm />
            </div>
        </>
    );
};
