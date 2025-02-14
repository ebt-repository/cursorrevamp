import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen p-4 flex justify-center">
      <div className="max-w-2xl w-full pt-16 md:pt-20">
        <article className="space-y-3 md:space-y-6 text-xs md:text-sm leading-relaxed md:leading-relaxed">
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
            The images of this ephemeral partnership (April to August 2023) are unique and cannot be reproduced. Neither by me, nor by the AI.
          </p>

          <div className="mt-8 md:mt-12 space-y-2">
            <h2 className="font-normal">Contact</h2>
            <a 
              href="mailto:torz@free.fr"
              className="block hover:opacity-75"
            >
              torz@free.fr
            </a>
            <a 
              href="https://www.instagram.com/edgarbecourttorz/"
              className="block hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;