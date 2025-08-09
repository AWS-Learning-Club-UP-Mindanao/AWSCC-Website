class AnimatedCounter {
    constructor(element, targetValue, duration = 1800) {
        this.element = element;
        this.targetValue = parseInt(targetValue);
        this.duration = duration;
        this.hasAnimated = false;
        this.element.textContent = '0+';
    }
    
    animate() {
        if (this.hasAnimated) return;
        this.hasAnimated = true;

        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(3, -3 * progress);
            const currentValue = Math.floor(easeOutExpo * this.targetValue);
            
            this.element.textContent = currentValue + '+';
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                this.element.textContent = this.targetValue + '+';
            }
        };
        
        requestAnimationFrame(updateNumber);
    }
}

class StatsController {
    constructor() {
        this.counters = [];
        this.observer = null;
        this.hasTriggered = false;
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        const statElements = document.querySelectorAll('.stat-number span');
        
        statElements.forEach((element, index) => {
            const targetValue = element.textContent.replace(/[^0-9]/g, '');
            if (targetValue) {
                const counter = new AnimatedCounter(element, targetValue);
                this.counters.push(counter);
            }
        });
        
        this.createObserver();
    }
    
    createObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasTriggered) {
                    this.triggerAnimations();
                }
            });
        }, options);
        
        const targetElement = document.querySelector('.club-highlights');
        if (targetElement) {
            this.observer.observe(targetElement);
        }
    }
    
    shouldTrigger() {
        return true;
    }
    
    triggerAnimations() {
        if (this.hasTriggered) return;
        this.hasTriggered = true;
        
        this.counters.forEach((counter, index) => {
            setTimeout(() => {
                counter.animate();
            }, index * 150);
        });
        
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

new StatsController();

export { AnimatedCounter, StatsController };
