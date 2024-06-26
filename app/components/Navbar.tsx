'use client'
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon, CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';

const Navbar = () => {
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    <HamburgerMenuIcon />
                        Learn <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <li style={{ gridRow: 'span 3' }}>
                                <NavigationMenu.Link asChild>
                                    <a className="Callout" href="/">
                                        <svg
                                            aria-hidden
                                            width="38"
                                            height="38"
                                            viewBox="0 0 25 25"
                                            fill="white"
                                        >
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                        </svg>
                                        <div className="CalloutHeading">Radix Primitives</div>
                                        <p className="CalloutText">
                                            Unstyled, accessible components for React.
                                        </p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            {/* Add more list items here */}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                {/* Add more menu items here */}
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="/">
                        Home
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="/people">
                        People
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="/prayer">
                        Prayer Requests
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="/contact">
                        Contact Us
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
        <NavigationMenu.Link className="NavigationMenuLink" href="/about">
          About Us
        </NavigationMenu.Link>
      </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui" target='_blank'>
                        Github
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>

    )
}

export default Navbar
