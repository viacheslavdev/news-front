import React, { useEffect, useRef, useState } from 'react'
import '../styles/css/style.css'
import HeaderBar from '../components/HeaderBar'
import BurgerMenu from '../components/BurgerMenu'

function HomePage() {
    const [burgerMenu, setBurgerMenu] = useState(false)


    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    


    const sliderRef = useRef(null)

    const onMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - sliderRef.current.offsetLeft || e.touches[0].pageX - sliderRef.current.offsetLeft) /* start position for mouse or touch*/
        setScrollLeft(sliderRef.current.scrollLeft) /* start position for horisontal scroll */
    }

    const onMouseEnd = () => {
        setIsDragging(false)
    }

    const onMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - sliderRef.current.offsetLeft ||  e.touches[0].pageX - sliderRef.current.offsetLeft /* moved position for mouse or touch*/
        const walk = x - startX 
        sliderRef.current.scrollLeft = scrollLeft - walk
    }


    const burgerToggle = () => {
        setBurgerMenu((state) => !state)
        burgerMenu ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'clip'
    }

    function debounce(fn, delay) {
        // Таймер, который будет контролировать, когда мы можем вызвать функцию fn
        let timerId;
    
        // Возвращаем новую функцию
        return function (...args) {
            // Если мы уже нажали кнопку (и таймер запущен), останавливаем таймер
            if (timerId) {
                clearTimeout(timerId);
            }
    
            // Запускаем новый таймер
            timerId = setTimeout(() => {
                // Когда время таймера истекает, вызываем нашу функцию fn
                fn(...args);
                
                // Обнуляем таймер
                timerId = null;
            }, delay);
        }
    }


    return (
        <div className='main'>
            {burgerMenu && <BurgerMenu/>}
            <div className='header'>
                <HeaderBar 
                    burgerMenu={burgerMenu}
                    burgerToggle={burgerToggle}
                    position={burgerMenu ? 'relative' : 'relative'}
                    toggle={burgerMenu ? 'toggle' : ''}
                   />
                            <div className='header-labels'>
                                <div className='first-header-wrapper'>
                                    <div className="subheader">2022 in review</div>
                                    <div className='first-label'>The Year in Biology</div>
                                </div>
                                <div className='second-label'>Researchers explored the zone between life and death, charted the mind’s system for arranging ideas and memories and learned how life’s complexity emerged.</div>
                            </div>
            </div>

            <div className="content">
                <div className="underheader-wrapper">
                    <img src="/static/images/underheader.png" alt="underheader" />
                </div>


                <div className="article-main">
                <div className="article-elements-wrapper">
                    <div className="article-elements">
                        <img src="/static/images/Senior-Natalie.svg" alt="author-photo" className="author-photo" />
                        <div className="author-name">NATALIE WOLCHOVER</div>
                        <div className="author-position">Senior Editor</div>
                        <div className="article-date">December 22, 2022</div>
                        <div className="underline">
                            <hr />
                        </div>
                        <div className="author-links-wrapper">
                            <div className="author-links">
                                <div className="author-link">
                                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                                        <img src="/static/icons/facebook-black.svg" alt="facebook" className="author-facebook" />
                                    </a>
                                </div>
                                <div className="author-link">
                                    <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                                        <img src="/static/icons/twitter-black.svg" alt="twitter" className="author-twitter" />
                                    </a>
                                </div>
                                <div className="author-link">
                                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                                        <img src="/static/icons/instagram-black.svg" alt="instagram" className="author-instagram" />
                                    </a>
                                </div>
                                <div className="author-link">
                                    <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
                                        <img src="/static/icons/youtube-black.svg" alt="" className="author-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-text-wrapper">
                    <div className="article-text">
                        <div className="article-content article-content-1">
                            Attention is a puzzling phenomenon. When we shift our mental focus from one part of our field of view to another, or listen to the vocalists in a song instead of the musicians, our perceived experiences may change a lot even though the sensory stimuli streaming into our brains are unchanged. Neuroscientists talk about the “spotlight” of attention because it can seem as if we are pointing more mental resources at one sliver of our perceptions to concentrate on it. Yet this is true only in a relative sense. As experiments this year helped to establish, the brain focuses attention on part of its sensory field&nbsp;
                            <a href='https://www.quantamagazine.org/to-pay-attention-the-brain-uses-filters-not-a-spotlight-20190924/' target="_blank" rel="noreferrer">by filtering out the signals for the other parts</a>.</div>
                    </div>
                    <div className="article-text">
                        <div className="article-content article-content-2" >
                            This discovery aligns with many other findings that expose perception as an active process, with feedback between higher cognitive centers and lower sensory-processing centers. Not only does the brain constantly&nbsp;
                                <a href='https://www.quantamagazine.org/your-brain-chooses-what-to-let-you-see-20190930/' target='_blank' rel="noreferrer">screen out some stimuli</a> deemed less relevant to us, it speeds up our perceptions by anticipating
                                <a href='https://www.quantamagazine.org/brains-speed-up-perception-by-guessing-whats-next-20190502/' target='_blank' rel="noreferrer">what sensory stimuli are most likely</a> to arrive next, based on what we’ve already experienced. Our perceptions also seem to be shaped by experience: Comparative studies of people with different cultural backgrounds suggest that some features of sound (like the&nbsp;
                                <a href='https://www.quantamagazine.org/perceptions-of-musical-octaves-are-learned-not-wired-in-the-brain-20191030/' target='_blank' rel="noreferrer">perceived organization of musical tones into octaves</a>) may be something we learn. The constant barrage of incoming sensations might seem to pose a catastrophic data management challenge for our brain, but this year, scientists showed that when the brain encodes information, it uses a&nbsp;
                                <a href='https://www.quantamagazine.org/a-power-law-keeps-the-brains-perceptions-balanced-20191022/' target='_blank' rel="noreferrer">power law to productively balance</a> the amount of detail it retains.</div>
                    </div>
                    <div className="article-text">
                        <div className="article-content article-content-3">
                            The past year in the biological sciences has held no shortage of surprises, most of which revealed the messy intricacies and exceptions that complicate our efforts to understand the living world. In addition to turning up several kinds of proof that the distinctions between life and death can get blurry, biologists learned more about how evolution successfully merged two or more cells into one, and about the mathematical tricks that organisms use in the course of their embryonic development.</div>
                    </div>
                </div>
                </div>

                <div className="scull-wrapper">
                <div className="scull-header mobile">Using DNA to Reconstruct the Past</div>
                    <div className="scull-block">
                        <div className="scull-image-wrapper">
                            <img src="/static/images/scull.png" alt="scull" className="scull"/>
                        </div>
                        <div className="scull-article-wrapper">
                            <div className="scull-image-author">Samuel Velasco/Quanta Magazine</div>
                            <div className="scull-header desktop">Using DNA to Reconstruct the Past</div>
                            <div className="scull-article">The Tevatron collider in Illinois smashed its last protons a decade ago, but its handlers have continued to analyze its detections of W bosons — particles that mediate the weak force. They announced in April that, by painstakingly tracking down and eliminating sources of error in the data, they’d measured the mass of the W boson more precisely than ever before and found the particle&nbsp;
                            <a href='https://www.quantamagazine.org/fermilab-says-particle-is-heavy-enough-to-break-the-standard-model-20220407/'>significantly heavier</a> than predicted by the Standard Model of particle physics.</div>
                            <div className="scull-article">A true discrepancy with the Standard Model would be a monumental discovery, pointing to new particles or effects beyond the theory’s purview. But hold the applause. Other experiments weighing the W — most notably the ATLAS experiment at Europe’s Large Hadron Collider — measured a mass much closer to the Standard Model prediction. The new Tevatron measurement purports to be more precise, but one or both groups might have missed some subtle source of error.</div>
                            <div className="scull-article">The ATLAS experiment aims to resolve the matter. As Guillaume Unal, a member of ATLAS, said, “The W boson has to be the same on both sides of the Atlantic.”</div>
                        </div>
                    </div>
                </div>

                <div className="face-wrapper">
                <div className="face-direction">
                    <div className="face-block">
                        <div className="face-header mobile">New Clues to the Origins of Biological Complexity</div>
                        <div className="face-image-wrapper">
                            <img src="/static/images/face.png" alt="face" className="face"/>
                            <div className="face-image-author">Emily Buder/Quanta Magazine; Kristina Armitage and Rui Braz for Quanta Magazine</div>
                        </div>
                        <div className="face-acticle-direction">
                            <div className="face-article-wrapper">
                                <div className="face-header desktop">New Clues to the Origins of Biological Complexity</div>
                                <div className="face-article">Some of the most important but deeply mysterious milestones in evolutionary history mark where the complexity of living things leaped drastically. Around 2.7 billion years ago, complex eukaryotic cells appeared, as prokaryotic host cells and the symbiotic partners living inside them took their relationship to a more committed level. As the endosymbionts became organelles like mitochondria, their genes had to be absorbed into the host’s own genome — a change that has been hard to model as a gradual evolutionary process. But this year, scientists gained new insights into the solution by looking at&nbsp;
                                    <a href='https://www.quantamagazine.org/cell-bacteria-mergers-offer-clues-to-how-organelles-evolved-20191003/'>a strange three-way symbiosis </a>in which all of the cellular partners were interdependent. Researchers also gave more attention to compartmentalized functional structures within bacteria to learn whether they are&nbsp;
                                    <a href='https://www.quantamagazine.org/bacterial-organelles-revise-ideas-about-which-came-first-20190612/'>forerunners of true organelles </a>or completely separate evolutionary innovations.</div>
                                <div className="face-article">Organisms also grew more complicated when they became multicellular. New work on jellyfish, one of the oldest groups of animals, found proof that structural complexity could soar even&nbsp;
                                    <a href='https://www.quantamagazine.org/jellyfish-genome-hints-that-complexity-isnt-genetically-complex-20190108/'>without comparable increases in genetic complexity</a>. And in a curious discovery, scientists found evidence that the evolution of specialized cell types in multicellular organisms could have been built on an overlooked knack for&nbsp;
                                    <a href='https://www.quantamagazine.org/scientists-debate-the-origin-of-cell-types-in-the-first-animals-20190717/'>temporary specialization in single-celled life</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="scull-wrapper">
                            <div className="scull-header mobile">Using DNA to Reconstruct the Past</div>
                    <div className="scull-block">
                        <div className="scull-image-wrapper">
                            <img src="/static/images/dna.png" alt="scull" className="scull"/>
                        </div>
                        <div className="scull-article-wrapper">
                            <div className="scull-image-author">Samuel Velasco/Quanta Magazine</div>
                            <div className="scull-header desktop">Using DNA to Reconstruct the Past</div>
                            <div className="scull-article">Some of the most important but deeply mysterious milestones in evolutionary history mark where the complexity of living things leaped drastically. Around 2.7 billion years ago, complex eukaryotic cells appeared, as prokaryotic host cells and the symbiotic partners living inside them took their relationship to a more committed level. As the endosymbionts became organelles like mitochondria, their genes had to be absorbed into the host’s own genome — a change that has been hard to model as a gradual evolutionary process. But this year, scientists gained new insights into the solution by looking at&nbsp;
                                <a href='https://www.quantamagazine.org/cell-bacteria-mergers-offer-clues-to-how-organelles-evolved-20191003/'>a strange three-way symbiosis</a> in which all of the cellular partners were interdependent. Researchers also gave more attention to compartmentalized functional structures within bacteria to learn whether they are&nbsp;
                                <a href='https://www.quantamagazine.org/bacterial-organelles-revise-ideas-about-which-came-first-20190612/'>forerunners of true organelles</a> or completely separate evolutionary innovations.</div>
                            <div className="scull-article">Organisms also grew more complicated when they became multicellular. New work on jellyfish, one of the oldest groups of animals, found proof that structural complexity could soar even&nbsp;
                                <a href='https://www.quantamagazine.org/jellyfish-genome-hints-that-complexity-isnt-genetically-complex-20190108/'>without comparable increases in genetic complexity</a>. And in a curious discovery, scientists found evidence that the evolution of specialized cell types in multicellular organisms could have been built on an overlooked knack for&nbsp;
                                <a href='https://www.quantamagazine.org/scientists-debate-the-origin-of-cell-types-in-the-first-animals-20190717/'>temporary specialization in single-celled life</a>.</div>
                        </div>

                    </div>

                </div>

                <div className="horizontal-slider-wripper">
                    <div className="horizontal-slider">
                        <div className="slider-header">Also in Biology</div>
                        <div className="slider-elements"
                            ref={sliderRef}
                            onMouseDown={onMouseDown}
                            onMouseUp={onMouseEnd}
                            onMouseLeave={onMouseEnd}
                            onMouseMove={onMouseMove}
                            onTouchStart={onMouseDown}
                            onTouchEnd={onMouseEnd}
                            onTouchMove={onMouseMove}
                            >
                            <div className="slider-element">
                                <img src='/static/images/brain.png' />
                                <div className="slider-element-subheader">When Does the Brain Operate at Peak Performance?</div>
                                {/* hardcoded likes and posting time */}
                                <div className="slider-element-info">
                                    <img src="/static/icons/likes.png" alt="likes" className="likes-logo" />
                                    <div className="likes-minutes">56  /  11 minutes</div>
                                </div>
                                <div className="author-info">
                                    <img src="/static/icons/Liz Kruesi.png" alt="author-icon" className="author-icon" />
                                    <div className="author-desc">
                                        <div className="author-forename">liz kruesi</div>
                                        <div className="author-func">Contributing Writer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <img src='/static/images/mother.png' />
                                <div className="slider-element-subheader">Mobile Genes From the Mother Shape the Baby’s Microbiome</div>
                                {/* hardcoded likes and posting time */}
                                <div className="slider-element-info">
                                    <img src="/static/icons/likes.png" alt="likes" className="likes" />
                                    <div className="likes-minutes">105  /  23 minutes</div>
                                </div>
                                <div className="author-info">
                                    <img src="/static/icons/Gabriel Popkin.png" alt="author-icon" className="author-icon" />
                                    <div className="author-desc">
                                        <div className="author-forename">gabriel popkin</div>
                                        <div className="author-func">Contributing Writer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-element">
                                <img src='/static/images/family.png' />
                                <div className="slider-element-subheader">‘Fullertubes’ Join the Family of Carbon Crystals</div>
                                {/* hardcoded likes and posting time */}
                                <div className="slider-element-info">
                                    <img src="/static/icons/likes.png" alt="likes" className="likes" />
                                    <div className="likes-minutes">74  /  16 minutes</div>
                                </div>
                                <div className="author-info">
                                    <img src="/static/icons/Thomas Lewton.png" alt="author-icon" className="author-icon" />
                                    <div className="author-desc">
                                        <div className="author-forename">Thomas lewton</div>
                                        <div className="author-func">Contributing Writer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-wrapper">
                    <div className="footer">
                        <div className="footer-header-wrapper">
                            <div className="footer-header">The Quanta Newsletter</div>
                            <div className="footer-subheader">Get highlights of the most important news delivered to your email inbox</div>
                            <div className="subscribe-wrapper">
                                <div className="input-wrapper">
                                    <input type="text" placeholder='Email address'/>
                                </div>
                                <div className="button-wrapper">
                                    <button >Subscribe</button>
                                </div>
                            </div>
                        </div>

                        <div className="footer-links-wrapper">
                                <img src="/static/icons/Qm.svg" alt="qm" className="qm-logo" />
                            <div className="footer-categories">
                                <div className="footer-category-wrapper">
                                    <div className="footer-category">
                                        <div className="footer-category-element category">Articles</div>
                                        <div className="footer-category-element"><a href='#'>Physics</a></div>
                                        <div className="footer-category-element"><a href='#'>Mathematics</a></div>
                                        <div className="footer-category-element"><a href='#'>Biology</a></div>
                                        <div className="footer-category-element"><a href='#'>Computer Science</a></div>
                                    </div>
                                    <div className="footer-category">
                                        <div className="footer-category-element category">Feed</div>
                                        <div className="footer-category-element"><a href='#'>Topics</a></div>
                                        <div className="footer-category-element"><a href='#'>Archive</a></div>
                                        <div className="footer-category-element"><a href='#'>Podcast</a></div>
                                        <div className="footer-category-element"><a href='#'>Videos</a></div>
                                    </div>
                                    <div className="footer-category">
                                        <div className="footer-category-element category">Further</div>
                                        <div className="footer-category-element"><a href='#'>Blog</a></div>
                                        <div className="footer-category-element"><a href='#'>Q&A</a></div>
                                        <div className="footer-category-element"><a href='#'>Columns</a></div>
                                        <div className="footer-category-element"><a href='#'>Puzzles</a></div>
                                    </div>
                                    <div className="footer-category">
                                        <div className="footer-category-element category">Company</div>
                                        <div className="footer-category-element"><a href='#'>About</a></div>
                                        <div className="footer-category-element"><a href='#'>Contact</a></div>
                                        <div className="footer-category-element"><a href='#'>Multimedia</a></div>
                                    </div>
                                    </div>
                            </div>
                            <div className="footer-social-links">
                                    <div className="company-links">
                                        <div className="company-link">
                                            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                                                <img src="/static/icons/facebook-white.svg" alt="facebook" className="company-facebook" />
                                            </a>
                                        </div>
                                        <div className="company-link">
                                            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                                                <img src="/static/icons/instagram-white.svg" alt="instagram" className="company-instagram" />
                                            </a>
                                        </div>
                                        <div className="company-link">
                                            <a href='https://www.youtube.com/' target='_blank' rel="noreferrer">
                                                <img src="/static/icons/youtube-white.svg" alt="" className="company-youtube" />
                                            </a>
                                        </div>
                                        <div className="company-link">
                                            <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                                                <img src="/static/icons/twitter-white.svg" alt="twitter" className="company-twitter" />
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="footer-rights">
                            <div className="rights-wrapper">
                                <div className="right reserved">All Rights Reserved © 2023</div>
                                <div className="right">Simons Foundation</div>
                                <div className="ruls">
                                    <div className="privacy-policy">Privacy Policy</div>
                                    <div className="terms-coditions">Terms & Conditions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomePage