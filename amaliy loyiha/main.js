document.addEventListener('DOMContentLoaded', function() {
    
    const socialIcons = {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        youtube: 'https://www.youtube.com',
        instagram: 'https://www.instagram.com'
    };

   
    Object.keys(socialIcons).forEach(function(icon) {
        const iconElement = document.getElementById(icon);
        if (iconElement) {
            iconElement.addEventListener('click', function(event) {
                event.preventDefault(); 
                alert(icon.charAt(0).toUpperCase() + icon.slice(1) + ' icon clicked!'); 
                window.open(socialIcons[icon], '_blank'); 
            });
        }
    });

   
    const footerLinks = {
        'nation': 'https://example.com/nation',
        'world': 'https://example.com/world',
        'politics': 'https://example.com/politics',
        'eclipse': 'https://example.com/eclipse',
        'art-design': 'https://example.com/art-design',
        'movies': 'https://example.com/movies',
        'people': 'https://example.com/people',
        'video-arts': 'https://example.com/video-arts',
        'theater': 'https://example.com/theater',
        'destinations': 'https://example.com/destinations',
        'business-travel': 'https://example.com/business-travel',
        'olympics': 'https://example.com/olympics',
        'motor-sports': 'https://example.com/motor-sports',
        'volleyball': 'https://example.com/volleyball',
        'mma': 'https://example.com/mma',
        'cycling': 'https://example.com/cycling',
        'tech': 'https://example.com/tech',
        'tech-columnists': 'https://example.com/tech-columnists',
        'tech-reviews': 'https://example.com/tech-reviews',
        'talking-tech': 'https://example.com/talking-tech',
        'markets': 'https://example.com/markets',
        'business': 'https://example.com/business',
        'personal-finance': 'https://example.com/personal-finance',
        'retirement': 'https://example.com/retirement',
        'careers': 'https://example.com/careers'
    };

   
    Object.keys(footerLinks).forEach(function(linkId) {
        const linkElement = document.getElementById(linkId);
        if (linkElement) {
            linkElement.addEventListener('click', function(event) {
                event.preventDefault(); 
                alert(linkElement.textContent + ' link clicked!'); 
                window.open(footerLinks[linkId], '_blank'); 
            });
        }
    });
});