import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const socials = [
    { icon: faTwitter, link: "https://twitter.com" },
    { icon: faFacebook, link: "https://facebook.com" },
    { icon: faInstagram, link: "https://instagram.com" },
    { icon: faGithub, link: "https://github.com" }
];

export default function Footer() {
    return (
        <footer>
            <ul className="socials">
                {socials.map((social, index) => (
                    <li key={index}>
                        <a href={social.link}>
                            <FontAwesomeIcon icon={social.icon} size="xl"
                            style={{ color: "#918E9B" }}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
