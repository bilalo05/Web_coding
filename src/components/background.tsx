import React, { useEffect } from 'react';
import './background.css';
import gsap from 'gsap'; // Import GSAP if you haven't already

function Background() {
    useEffect(() => {
        // Your script code here
        document.querySelectorAll('.codedText').forEach((t) => {
            const arr1 = t.innerHTML.split('');
            const arr2: string[] = [];
            arr1.forEach((char, i) => (arr2[i] = randChar())); // Fill arr2 with random characters
            (t as HTMLElement).onpointerover = () => {
                const tl = gsap.timeline();
                let step = 0;
                tl.fromTo(
                    t,
                    {
                        innerHTML: arr2.join(''),
                        color: '#000',
                        background: 'transparent',
                    },
                    {
                        duration: arr1.length / 20, // Duration based on text length
                        ease: 'power4.in',
                        delay: 0.1,
                        color: '#fff',
                        background: 'transparent',
                        onUpdate: () => {
                            const p = Math.floor(tl.progress() * arr1.length); // Whole number from 0 - text length
                            if (step !== p) {
                                // Throttle the change of random characters
                                step = p;
                                arr1.forEach((char, i) => (arr2[i] = randChar()));
                                let pt1 = arr1.join('').substring(p, 0),
                                    pt2 = arr2.join('').substring(arr2.length - p, 0);
                                if (t.classList.contains('fromRight')) {
                                    pt1 = arr2.join('').substring(arr2.length - p, 0);
                                    pt2 = arr1.join('').substring(arr1.length - p);
                                }
                                t.innerHTML = pt1 + pt2; // Update text
                            }
                        },
                    }
                );
            };
        });
    }, []);

    function randChar() {
        let c = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`';
        c = c[Math.floor(Math.random() * c.length)];
        return Math.random() > 0.5 ? c : c.toUpperCase();
    }

    return (
        <>
            <main className="app">
                <div className="boxes">
                    <div className="intros">
                        <div className="codedtexts">
                        <div className="codedText">Hello world</div>
                        <div className="codedText2">Unlock the potential of professional, clean, and responsive web development with a curated collection <br/> of innovative ideas and code snippets for developers.</div>
                        </div>
                   {/*     <div className="codedText">Yahia Bilal</div>
                        <div className="codedText fromRight">Web Developer</div>*/}
                        <img className="codingimg" src="/assets/img.svg" alt="" />
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Background;
