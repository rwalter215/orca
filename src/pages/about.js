import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RyanPic from "./RW1.jpg";
import CarlaPic from "./CC2.jpg";
import "../style/basepage.less";

const About = () => {
    const title = "About Us";
    const description = "Come learn about us";
    return (
        <Layout>
            <SEO lang="en" title={title} description={description} />
            <div className="container">
                <article className="post">
                    <div className="head text-primary">
                        <h1>{title}</h1>
                    </div>
                    <div className="content row flex">
                        <div className="center">
                            <div className="img">
                                <img src={RyanPic} />
                            </div>
                        </div>

                        <div className="col s12 m11 l10">
                            <h3>Your Software Solution</h3>
                            <p>
                                Hi, I’m Ryan. Front-end Developer for Adobe, I
                                strive to create an easily maintainable clean
                                code. Add well tested and accessible, and you
                                get the Dev bingo. I specialize in React and
                                Node Applications.
                            </p>
                            <ul>
                                <li>
                                    Voted most likely to say “Best practices” in
                                    an everyday convo.
                                </li>
                                <li>
                                    Rocking the “Austin tech” camouflage, ie.
                                    Bald, beard, and witty tatts.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content row flex">
                        <div className="center">
                            <div className="img">
                                <img src={CarlaPic} />
                            </div>
                        </div>

                        <div className="col s12 m11 l10">
                            <h3>Your Copywriting Solution</h3>
                            <p>
                                Bonjour, I’m Carla, the Frenchy with the smart
                                words. But I’ll be the first to agree;
                                sometimes, you need more than just the right
                                words. You need the right story and an effective
                                strategy. Transitioning from lifestyle
                                journalism, I’m committed to providing sharp
                                digital and print copywriting as well as
                                cadenced content that fits your company’s voice.
                            </p>
                            <ul>
                                <li>
                                    Born and raised in Paris and still weirdly
                                    winning popularity contests.
                                </li>
                                <li>
                                    Published non-fiction author and branding
                                    obsessed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    );
};

export default About;
