import React from 'react';
import flowers from '../img/flowers.jpg';

const About = () => {
        return (
            <div className="container bg-whitesmoke mx-auto">
                <div className="font-krona mx-96 mb-5">
                    <h1 className="uppercase text-2xl pt-5">hera beauty motto</h1>
                    <p className="text-md">Est. 2020</p>
                    <img src={flowers} alt="flowers" className="rounded-2xl mt-10" />
                </div>
                <div className="mx-10 mb-10">
                    <p>
                        Every one of us is getting older, which is a natural process. Time is constantly moving on,
                        second by second. Nothing can stop it, but what we can do is use our time properly; that is in
                        our hands. Whether we believe in a spiritual tradition or not, we need to use our time
                        meaningfully. If over days, weeks, months and years, we have used our time in a meaningful way
                        when our last day comes, we'll be happy, we'll have no regrets
                    </p>

                    <p>
                        Warm-heartedness reinforces our self-confidence giving us not a blind confidence, but a sense of
                        confidence based on reason. When you have that you can act transparently, with nothing to hide!
                        Likewise, if you are honest, the community will trust you. Trust brings friendship, as a result
                        of which you can always feel happy. Whether you look to the right or the left, you will always
                        be able to smile.
                    </p>

                    <p>
                        More fundamental than religion is our basic human spirituality. We have a basic human
                        disposition towards love, kindness and affection, irrespective of whether we have a religious
                        framework or not. When we nurture this most basic human resource when we set about cultivating
                        those basic inner values which we all appreciate in others, then we start to live spiritually.
                    </p>

                    <p>
                        It is time to develop a big 'US', rather than the old 'us and them' that lets us to exploit and
                        bully others on a personal level, and on an international level to wage war. The East must see
                        the West as part of 'US' and the North must come to feel that the South is part of 'US'. We
                        should include the entire world in our concern, wishing all humanity well. If we can do that
                        there will be no room for hatred, thinking of others as enemies. And we will achieve this
                        through education, not through prayer.
                    </p>

                    <p className="pb-10">
                        I don't know whether the universe, with its countless galaxies, stars and planets, has a deeper
                        meaning or not, but at the very least, it is clear that we humans who live on this earth face
                        the task of making a happy life for ourselves. Therefore, it is important to discover what will
                        bring about the greatest degree of happiness.
                    </p>
                </div>
            </div>
        );
    }

    export default About;
