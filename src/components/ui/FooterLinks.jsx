import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FooterLinks({ content }) {

    return (
        <ul className="space-y-3 md:text-[15px] text-[13px] font-[600] mt-5">
            {content?.map((link) => (
                <li key={link.label}>
                    <NavLink
                        to={link.href}
                        className="flex items-center gap-2 hover:text-accent transition-colors text-[20px] font-[500]"
                    >
                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.5L9.16667 9.16667L1.5 16.8333" stroke="#0F99CC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{link.label}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};