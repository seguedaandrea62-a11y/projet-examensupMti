// ========== JQUERY DOCUMENT READY ==========
$(document).ready(function() {
    
    // ========== INITIALIZE AOS ANIMATIONS ==========
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100
    });

    // ========== NAVBAR SCROLL EFFECT ==========
    let lastScroll = 0;
    
    $(window).scroll(function() {
        let currentScroll = $(this).scrollTop();
        
        // Add/remove shadow and background on scroll
        if (currentScroll > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
        
        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            // Scrolling down
            $('header').css('transform', 'translateY(-100%)');
        } else {
            // Scrolling up
            $('header').css('transform', 'translateY(0)');
        }
        
        lastScroll = currentScroll;
    });

    // ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        
        if(target.length) {
            e.preventDefault();
            
            // Close mobile menu if open
            $('.navbar-collapse').collapse('hide');
            
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });

    // ========== ACTIVE NAVIGATION HIGHLIGHT ==========
    const sections = $('section');
    const navLinks = $('.navbar-nav .nav-link');
    
    $(window).on('scroll', function() {
        let current = '';
        
        sections.each(function() {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).outerHeight();
            
            if ($(window).scrollTop() >= (sectionTop - 150)) {
                current = $(this).attr('id');
            }
        });
        
        navLinks.each(function() {
            $(this).removeClass('active');
            if ($(this).attr('href') === '#' + current) {
                $(this).addClass('active');
            }
        });
    });

    // ========== STATISTICS COUNTER ANIMATION ==========
    let counterAnimated = false;
    
    function animateCounters() {
        $('.counter').each(function() {
            const $this = $(this);
            const countTo = $this.attr('data-target');
            
            $({ countNum: 0 }).animate(
                { countNum: countTo },
                {
                    duration: 2500,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                }
            );
        });
    }
    
    // Trigger counter animation when stats section is visible
    $(window).on('scroll', function() {
        const statsSection = $('#statistiques');
        const statsSectionTop = statsSection.offset().top;
        const statsSectionBottom = statsSectionTop + statsSection.outerHeight();
        const scrollPosition = $(window).scrollTop() + $(window).height();
        
        if (!counterAnimated && scrollPosition > statsSectionTop + 200) {
            animateCounters();
            counterAnimated = true;
        }
    });

    // ========== CAROUSEL AUTO PLAY WITH PAUSE ON HOVER ==========
    $('#heroCarousel').on('mouseenter', function() {
        $(this).carousel('pause');
    }).on('mouseleave', function() {
        $(this).carousel('cycle');
    });

    // Carousel slide change animation
    $('#heroCarousel').on('slide.bs.carousel', function(e) {
        const $animatingElements = $(e.relatedTarget).find('.animate__animated');
        
        $animatingElements.each(function() {
            const $this = $(this);
            const animationClass = $this.attr('class').match(/animate__\w+/g).join(' ');
            
            $this.removeClass(animationClass).addClass('animate__animated');
            
            setTimeout(function() {
                $this.addClass(animationClass);
            }, 100);
        });
    });

    // ========== TESTIMONIALS CAROUSEL ==========
    $('#testimonialsCarousel').on('mouseenter', function() {
        $(this).carousel('pause');
    }).on('mouseleave', function() {
        $(this).carousel('cycle');
    });

    // ========== SCROLL TO TOP BUTTON ==========
    const scrollToTopBtn = $('#scrollToTop');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollToTopBtn.addClass('show').fadeIn();
        } else {
            scrollToTopBtn.removeClass('show').fadeOut();
        }
    });
    
    scrollToTopBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
    });

    // ========== FORMATION CARDS HOVER EFFECT ==========
    $('.formation-card').hover(
        function() {
            $(this).find('.formation-icon').addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).find('.formation-icon').removeClass('animate__animated animate__pulse');
        }
    );

    // ========== STAT CARDS HOVER EFFECT ==========
    $('.stat-card').hover(
        function() {
            $(this).find('.stat-icon').addClass('animate__animated animate__rubberBand');
        },
        function() {
            $(this).find('.stat-icon').removeClass('animate__animated animate__rubberBand');
        }
    );

    // ========== PARALLAX EFFECT FOR HERO BACKGROUND ==========
    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();
        $('.hero-bg').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
    });

    // ========== FORMATIONS TAB CHANGE ANIMATION ==========
    $('#formationsTabs button[data-bs-toggle="pill"]').on('shown.bs.tab', function(e) {
        const targetPane = $($(this).data('bs-target'));
        targetPane.find('.formation-card').each(function(index) {
            $(this).css({
                'opacity': '0',
                'transform': 'translateY(30px)'
            });
            
            setTimeout(() => {
                $(this).animate({
                    'opacity': '1'
                }, 600);
                
                $(this).css({
                    'transform': 'translateY(0)',
                    'transition': 'transform 0.6s ease-out'
                });
            }, index * 100);
        });
    });

    // ========== FLOATING ANIMATION FOR HERO CARDS ==========
    function floatingAnimation() {
        $('.floating-card').each(function() {
            $(this).animate({
                transform: 'translateY(-20px)'
            }, 3000, 'swing', function() {
                $(this).animate({
                    transform: 'translateY(0px)'
                }, 3000, 'swing', floatingAnimation);
            });
        });
    }
    
    // Start floating animation
    floatingAnimation();

    // ========== MOBILE MENU CLOSE ON LINK CLICK ==========
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // ========== LAZY LOADING EFFECT FOR IMAGES ==========
    const lazyImages = $('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.each(function() {
        imageObserver.observe(this);
    });

    // ========== TESTIMONIAL CARDS STAGGER ANIMATION ==========
    function staggerTestimonials() {
        $('.testimonial-card').each(function(index) {
            $(this).css({
                'animation-delay': (index * 0.2) + 's'
            });
        });
    }
    
    staggerTestimonials();

    // ========== PARTNER CARDS WAVE ANIMATION ON SCROLL ==========
    function animatePartnersOnScroll() {
        const partnersSection = $('#partenaires');
        const partnersSectionTop = partnersSection.offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height();
        
        if (scrollPosition > partnersSectionTop + 200) {
            $('.partner-card, .certification-card').each(function(index) {
                const $this = $(this);
                setTimeout(function() {
                    $this.addClass('animate__animated animate__fadeInUp');
                }, index * 100);
            });
            
            // Remove scroll event after animation
            $(window).off('scroll', animatePartnersOnScroll);
        }
    }
    
    $(window).on('scroll', animatePartnersOnScroll);

    // ========== FORMATION FEATURE LIST ANIMATION ==========
    $('.formation-card').hover(
        function() {
            $(this).find('.formation-features li').each(function(index) {
                $(this).css({
                    'animation': 'fadeInRight 0.5s ease-out forwards',
                    'animation-delay': (index * 0.1) + 's'
                });
            });
        },
        function() {
            $(this).find('.formation-features li').css({
                'animation': 'none'
            });
        }
    );

    // ========== CUSTOM CURSOR EFFECT (Desktop Only) ==========
    if ($(window).width() > 991) {
        const cursor = $('<div class="custom-cursor"></div>');
        $('body').append(cursor);
        
        $(document).mousemove(function(e) {
            cursor.css({
                'left': e.pageX + 'px',
                'top': e.pageY + 'px'
            });
        });
        
        $('a, button, .formation-card, .stat-card, .testimonial-card').hover(
            function() {
                cursor.addClass('cursor-hover');
            },
            function() {
                cursor.removeClass('cursor-hover');
            }
        );
    }

    // ========== PRELOADER FADE OUT ==========
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

    // ========== TYPING EFFECT FOR HERO TITLE (Optional Enhancement) ==========
    function typingEffect(element, text, speed = 100) {
        let i = 0;
        element.html('');
        
        function type() {
            if (i < text.length) {
                element.html(element.html() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // ========== ENTRANCE ANIMATIONS ON PAGE LOAD ==========
    setTimeout(function() {
        $('.navbar-brand').addClass('animate__animated animate__fadeInDown');
        $('.navbar-nav').addClass('animate__animated animate__fadeInDown');
    }, 500);

    // ========== SECTION REVEAL ON SCROLL ==========
    function revealOnScroll() {
        const sections = $('.stats-section, .formations-section, .testimonials-section, .partners-section');
        
        sections.each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const scrollPosition = $(window).scrollTop() + $(window).height();
            
            if (scrollPosition > sectionTop + 100) {
                $(this).addClass('section-revealed');
            }
        });
    }
    
    $(window).on('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // ========== DYNAMIC YEAR IN FOOTER ==========
    const currentYear = new Date().getFullYear();
    $('.footer-copyright').html($('.footer-copyright').html().replace('2026', currentYear));

    // ========== NAVBAR BRAND LOGO ANIMATION ON HOVER ==========
    $('.navbar-brand').hover(
        function() {
            $(this).find('.brand-text').addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).find('.brand-text').removeClass('animate__animated animate__pulse');
        }
    );

    // ========== FORMATION TABS RIPPLE EFFECT ==========
    $('.formations-tabs .nav-link').on('click', function(e) {
        const ripple = $('<span class="ripple"></span>');
        $(this).append(ripple);
        
        const x = e.pageX - $(this).offset().left;
        const y = e.pageY - $(this).offset().top;
        
        ripple.css({
            left: x + 'px',
            top: y + 'px'
        });
        
        setTimeout(function() {
            ripple.remove();
        }, 600);
    });

    // ========== SCROLL PROGRESS INDICATOR ==========
    const scrollProgress = $('<div class="scroll-progress"></div>');
    $('body').prepend(scrollProgress);
    
    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        const docHeight = $(document).height() - $(window).height();
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.css('width', scrollPercent + '%');
    });

    // ========== EASTER EGG: KONAMI CODE ==========
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    $(document).keydown(function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateEasterEgg() {
        $('body').addClass('rainbow-mode');
        
        setTimeout(function() {
            $('body').removeClass('rainbow-mode');
        }, 5000);
        
        // Show special message
        const message = $('<div class="easter-egg-message animate__animated animate__bounceIn">🎉 Vous avez trouvé le secret de SUPMTI! 🎉</div>');
        $('body').append(message);
        
        setTimeout(function() {
            message.addClass('animate__bounceOut');
            setTimeout(function() {
                message.remove();
            }, 1000);
        }, 3000);
    }

    // ========== PERFORMANCE: DEBOUNCE SCROLL EVENTS ==========
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedScroll = debounce(function() {
        revealOnScroll();
    }, 100);
    
    $(window).on('scroll', debouncedScroll);

    // ========== CONSOLE WELCOME MESSAGE ==========
    console.log('%c Bienvenue sur le nouveau site de SUPMTI Meknès! 🎓', 'color: #d4af37; font-size: 20px; font-weight: bold;');
    console.log('%cDéveloppé avec  par Prof. Mouncif Hamza', 'color: #1e4976; font-size: 14px;');
    console.log('%cTechnologies: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Animate.css, AOS', 'color: #6c757d; font-size: 12px;');

}); // End of Document Ready



// ========== SERVICE WORKER FOR OFFLINE SUPPORT (Progressive Enhancement) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Optional: Register service worker for offline support
        // navigator.serviceWorker.register('/sw.js');
    });
}



// ========== ADD CUSTOM CSS FOR ADDITIONAL EFFECTS ==========
const customStyles = `
    <style>
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #d4af37;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease, border-color 0.2s ease;
            transform: translate(-50%, -50%);
        }
        
        .custom-cursor.cursor-hover {
            transform: translate(-50%, -50%) scale(1.5);
            border-color: #f4d03f;
        }
        
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #d4af37 0%, #f4d03f 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .section-revealed {
            animation: sectionReveal 1s ease-out;
        }
        
        @keyframes sectionReveal {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .rainbow-mode {
            animation: rainbowBackground 2s linear infinite;
        }
        
        @keyframes rainbowBackground {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
        
        .easter-egg-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
            color: #0a2540;
            padding: 2rem 3rem;
            border-radius: 20px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0a2540 0%, #1e4976 100%);
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .navbar.scrolled {
            box-shadow: 0 5px 30px rgba(10, 37, 64, 0.3);
        }
        
        header {
            transition: transform 0.3s ease-in-out;
        }
    </style>
`;

// Inject custom styles
$('head').append(customStyles);
