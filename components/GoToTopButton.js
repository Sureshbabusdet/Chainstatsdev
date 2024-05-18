import { useEffect, useState } from 'react';

const GoToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the button when the user scrolls down a certain distance
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`go-to-top-button ${showButton ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <span className='text'>Go to Top</span> <i className="ms-2 fas fa-arrow-right"></i>
        </button>
    );
};

export default GoToTopButton;
