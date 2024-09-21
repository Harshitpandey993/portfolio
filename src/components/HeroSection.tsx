import { Button } from '@mantine/core';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Harshit</h1>
        <h2>I’m a Web Developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button>View My Projects</Button>
      </div>
      <img src="/images/profile.png" alt="Profile" className="hero-image" />
    </section>
  );
}
