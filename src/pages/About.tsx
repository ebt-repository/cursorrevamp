import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-8">
        <div className="max-w-2xl mx-auto space-y-16">
          <section>
            <h2 className="text-lg mb-8">About the project</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                BEAUTY IS THE BOT
              </p>
              <p>
                This project is the result of collaboration between Midjourney (Artificial Intelligence) and myself (human, artist).
              </p>
              <p>
                The discovery of image-generating AIs presented me with a powerful dilemma. Excitement at the tool's almost infinite possibilities collided with apprehension of an upheaval in the history of art, inducing a potential replacement of the artist by AI. Faced with this questioning of my own future, I chose Midjourney to capture the aesthetics of this existential issue.
              </p>
              <p>
                I suggested to the AI the figure of the cyborg as a basis for our dialogue. A hybrid icon of the organic and the synthetic, he embodies the antagonisms of the man/machine relationship.
              </p>
              <p>
                Using Midjourney's proprietary image blending technique, I adopted a curatorial approach, methodically selecting source images to feed the AI, without the need for text prompts. By controlling the input and output of images, I sought to deconstruct the preconceived aesthetic of Midjourney's algorithm, locked in its stereotypical dogma of illusory perfection.
              </p>
              <p>
                From then on, I was interested in its imperfections, its grey areas, the strangeness of the images produced. I pushed back the limits of AI censorship, moving away from the postulate of harmonious transhumanist fusion imagined by the artificial.
              </p>
              <p>
                However, despite my pessimism, I propose that this programmed symbiosis does not go as planned. The organic corrupts the metal. It sows confusion. I reverse the imagined relationship between man and machine. By hijacking Midjourney's aesthetic latitude, I draw an alternative vision where the amalgam is disrupted by the resistance of the organic. I imagine a narrative where the human imbues the machine with its imperfections and complexity.
              </p>
              <p>
                The images of this ephemeral partnership (April to August 2023) are unique and cannot be reproduced.
                Neither by me, nor by the AI.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-lg mb-8">Contact</h2>
            <div className="space-y-2">
              <p>
                <a href="mailto:contact@ebt.art" className="hover:opacity-70 transition-opacity">
                  contact@ebt.art
                </a>
              </p>
              <p>
                <a href="https://instagram.com/ebt.art" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://x.com/ebt_art" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  X
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;