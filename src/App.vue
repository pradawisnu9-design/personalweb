<template>
  <div id="app">
    <!-- Header Navigation -->
    <header class="header">
      <nav class="navbar">
        <div class="nav-brand">
          <a href="#home" class="brand-logo">
            <i class="fas fa-code"></i>
            <span>Prada</span>
          </a>
        </div>
        
        <!-- Navigation -->
        <div class="nav" :class="{ active: mobileMenuOpen }">
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="openAboutModal(); closeMobileMenu()">About</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="openResumeModal(); closeMobileMenu()">Resume</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="openPortfolioModal(); closeMobileMenu()">Portfolio</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="openContactModal(); closeMobileMenu()">Contact</a>
            </li>
          </ul>
        </div>
        
        <div class="hamburger" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <!-- Aurora Background -->
      <div class="aurora-container">
        <Aurora 
          :color-stops="['#7cff67', '#171D22', '#7cff67']"
          :amplitude="1.0"
          :blend="0.5"
          :speed="1.0"
          :intensity="auroraIntensity"
          class="w-full h-full"
        />
      </div>
      
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-name">{{ name }}</h1>
            <div class="hero-profession">
              <span class="profession-text">I'm a </span>
              <span class="typing-text">{{ currentProfession }}</span>
              <span class="cursor" :class="{ blink: showCursor }">|</span>
            </div>
          </div>
          <div class="hero-image">
          </div>
        </div>
      </div>
      
      <!-- Social Links -->
      <div class="social-links">
        <a v-for="social in socialLinks" 
           :key="social.name"
           :href="social.url" 
           target="_blank" 
           class="social-link"
           :title="social.name">
          <i :class="social.icon"></i>
        </a>
      </div>
      
      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-text">ENG INDO</div>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- About Modal -->
    <div class="about-modal" :class="{ active: aboutModalOpen }" @click="closeAboutModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeAboutModal">
          <i class="fas fa-times"></i>
        </button>
        
        <!-- About Me Section -->
        <section class="about-section">
          <div class="section-header">
            <p class="section-subtitle">Get to know me</p>
            <h2 class="section-title">About Me</h2>
          </div>
          
          <div class="about-content">
            <div class="about-image">
              <div class="profile-image">
                <img src="/src/assets/pp.jpeg" alt="Prada Wishnu" />
              </div>
            </div>
            
            <div class="about-info">
              <h3 class="about-question">Who am I?</h3>
              <p class="about-description">
                I'm <strong>Prada Wishnu</strong>, a Graphic Designer, Web Developer, and Data Scientist.
              </p>
              <p class="about-bio">
                A professional with interests in design, data analysis, and web development. 
                Proficient in graphic design tools, data programming, and modern web frameworks. 
                Creative, analytical, and adaptable in delivering digital solutions.
              </p>
              
              <div class="personal-info">
                <div class="info-item">
                  <span class="info-label">Name:</span>
                  <span class="info-value">Prada Wishnu S</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email:</span>
                  <span class="info-value">pradawisnu9@gmail.com</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Phone:</span>
                  <span class="info-value">+6285156815003</span>
                </div>
                <div class="info-item">
                  <span class="info-label">From:</span>
                  <span class="info-value">Sidoarjo, Indonesia</span>
                </div>
              </div>
              
              <div class="about-actions">
                <a href="https://drive.google.com/file/d/14IfRmswUH_GAHzd8VqLpybK0dB4ZKZ2s/view?usp=drivesdk" class="download-cv-btn" target="_blank">
                  <i class="fas fa-download"></i>
                  Download CV
                </a>
                <div class="social-links-about">
                  <a href="https://fb.com/prada.wisnu.7" target="_blank" class="social-link-about facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://linkedin.com/in/prada-wisnu" target="_blank" class="social-link-about linkedin">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com/prada_wisnu" target="_blank" class="social-link-about instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://behance.net/pradawisnu1f1d" target="_blank" class="social-link-about behance">
                    <i class="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Services Section -->
        <section class="services-section">
          <div class="section-header">
            <p class="section-subtitle">Services I offer to my clients</p>
            <h2 class="section-title">My Services</h2>
          </div>
          
          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-palette"></i>
              </div>
              <h3 class="service-title">Graphic Design</h3>
              <p class="service-description">Creative visual solutions for branding, marketing materials, and digital assets.</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-bullhorn"></i>
              </div>
              <h3 class="service-title">Advertisement Design</h3>
              <p class="service-description">Eye-catching advertisements for print and digital marketing campaigns.</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3 class="service-title">UI/UX Design</h3>
              <p class="service-description">User-centered design for web and mobile applications with optimal user experience.</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3 class="service-title">Web Development</h3>
              <p class="service-description">Modern, responsive websites built with latest technologies and frameworks.</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-desktop"></i>
              </div>
              <h3 class="service-title">Fully Responsive</h3>
              <p class="service-description">Websites that work perfectly on all devices and screen sizes.</p>
            </div>
            
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-tools"></i>
              </div>
              <h3 class="service-title">Website Maintenance</h3>
              <p class="service-description">Ongoing support, updates, and optimization for your website.</p>
            </div>
          </div>
        </section>
        
        <!-- Testimonials Section -->
        <section class="testimonials-section">
          <div class="section-header">
            <p class="section-subtitle">What my clients think about me</p>
            <h2 class="section-title">Testimonials</h2>
          </div>
          
          <div class="testimonials-grid">
            <div class="testimonial-item">
              <div class="testimonial-content">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <p class="testimonial-text">
                  Prada did an excellent creative job, addressing our request quickly, and also providing his own graphic insight, being open to feedback and changes or edits when they arose. He worked with us the entire way. Highly recommended.
                </p>
              </div>
              <div class="testimonial-author">
                 <div class="author-avatar">
                   <div class="avatar-placeholder">
                     <i class="fas fa-user"></i>
                   </div>
                 </div>
                 <div class="author-info">
                   <h4 class="author-name">Muhlas</h4>
                   <p class="author-role">CEO Cendeqia</p>
                 </div>
               </div>
            </div>
            
            <div class="testimonial-item">
              <div class="testimonial-content">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <p class="testimonial-text">
                  Outstanding work quality and professional approach. Prada delivered exactly what we needed and exceeded our expectations. Great communication throughout the project.
                </p>
              </div>
              <div class="testimonial-author">
                 <div class="author-avatar">
                   <div class="avatar-placeholder">
                     <i class="fas fa-user"></i>
                   </div>
                 </div>
                 <div class="author-info">
                   <h4 class="author-name">M. Fadhil</h4>
                   <p class="author-role">Entrepreneur</p>
                 </div>
               </div>
            </div>
          </div>
        </section>
        
        <!-- Pricing Section -->
        <section class="pricing-section">
          <div class="section-header">
            <p class="section-subtitle">Get started with my services</p>
            <h2 class="section-title">Choose a Plan</h2>
          </div>
          
          <div class="pricing-grid">
            <div class="pricing-item">
              <div class="pricing-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h3 class="pricing-title">Standard</h3>
              <div class="pricing-price">$19<span>/month</span></div>
              <ul class="pricing-features">
                <li>Website Development</li>
                <li>Responsive Design</li>
                <li>UI/UX Implementation</li>
                <li>Website Maintenance</li>
                <li>Website Optimization</li>
              </ul>
              <button class="pricing-btn">Get Standard</button>
            </div>
            
            <div class="pricing-item featured">
              <div class="pricing-badge">Popular</div>
              <div class="pricing-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3 class="pricing-title">Professional</h3>
              <div class="pricing-price">$29<span>/month</span></div>
              <ul class="pricing-features">
                <li>E-commerce Development</li>
                <li>Custom Web Application</li>
                <li>API Integration</li>
                <li>Database Management</li>
                <li>CMS Development</li>
              </ul>
              <button class="pricing-btn">Get Pro</button>
            </div>
            
            <div class="pricing-item">
              <div class="pricing-icon">
                <i class="fas fa-crown"></i>
              </div>
              <h3 class="pricing-title">Business</h3>
              <div class="pricing-price">$39<span>/month</span></div>
              <ul class="pricing-features">
                <li>Digital Branding & Identity</li>
                <li>SEO & Digital Marketing</li>
                <li>Business Consultation for Web Solutions</li>
                <li>Analytics & Reporting</li>
                <li>Training & Support</li>
              </ul>
              <button class="pricing-btn">Get Business</button>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Resume Modal -->
    <div class="resume-modal" :class="{ active: resumeModalOpen }" @click="closeResumeModal">
      <div class="resume-modal-content" @click.stop>
        <button class="close-btn" @click="closeResumeModal">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="resume-header">
          <p class="resume-subtitle">Check out my Resume</p>
          <h2 class="resume-title">Resume</h2>
        </div>
        
        <div class="resume-content">
          <!-- Left Column -->
          <div class="resume-left">
            <!-- Education Section -->
            <section class="resume-section">
              <h3 class="resume-section-title">Education</h3>
              <div class="resume-item">
                <div class="resume-item-header">
                  <h4 class="resume-item-title">Bachelor of Education in Biology</h4>
                  <span class="resume-item-period">State University of Surabaya | 2015 - 2020</span>
                </div>
              </div>
            </section>
            
            <!-- Certification Section -->
            <section class="resume-section">
              <h3 class="resume-section-title">Certification</h3>
              <div class="resume-item">
                <h4 class="resume-item-title">Learning of Data Science</h4>
                <span class="resume-item-period">Dicoding Indonesia | 2025 - 2028</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Learning of Structured Query Language (SQL)</h4>
                <span class="resume-item-period">Dicoding Indonesia | 2025 - 2028</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Learning Fundamentals of DevOps</h4>
                <span class="resume-item-period">Dicoding Indonesia | 2025 - 2028</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Programming Logic 101</h4>
                <span class="resume-item-period">Dicoding Indonesia | 2025 - 2028</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Learning the Basics of AI</h4>
                <span class="resume-item-period">Dicoding Indonesia | 2025 - 2028</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Excel expert level</h4>
                <span class="resume-item-period">Cursa | 2025</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Adobe Illustrator advanced</h4>
                <span class="resume-item-period">Cursa | 2025</span>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">CorelDRAW Graphics Suite</h4>
                <span class="resume-item-period">Cursa | 2025</span>
              </div>
            </section>
            
            <!-- Work History Section -->
            <section class="resume-section">
              <h3 class="resume-section-title">Work History</h3>
              <div class="resume-item">
                <div class="resume-item-header">
                  <h4 class="resume-item-title">Coordinator</h4>
                  <span class="resume-item-period">J&T Malang | 2022 - 2024</span>
                </div>
                <ul class="resume-item-description">
                  Assist supervisors in coordinating employees according to their jobdesks.<br>
                  Monitor every package that is sent to be delivered properly and on time.<br>
                  Responsible for following up on any problematic packages.<br>
                </ul>
              </div>
            </section>
          </div>
          
          <!-- Right Column -->
          <div class="resume-right">
            <!-- Project Experience Section -->
            <section class="resume-section">
              <h3 class="resume-section-title">Project Experience</h3>
              <div class="resume-item">
                <h4 class="resume-item-title">Company Profile - BUSMAT</h4>
                <span class="resume-item-period">(2025)</span>
                <p class="resume-item-description">School profile, news, agenda, announcements, activity gallery, branding & information for the community. Also, the New Student Admission System (Online Registration) for new student enrollment, selection, verification, and result announcements.</p>
                <a href="https://compro-busmat-main-ax1oxi.laravel.cloud/" target="_blank" class="resume-link">View Project</a>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Parent Monitoring System - BUSMAT</h4>
                <span class="resume-item-period">(2025)</span>
                <p class="resume-item-description">A web-based application built with Laravel that allows parents to monitor attendance, grades, payments, and their child's development.</p>
                <a href="https://compro-busmat-main-ax1oxi.laravel.cloud/" target="_blank" class="resume-link">View Project</a>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Student Permission Management System - BUSMAT</h4>
                <span class="resume-item-period">(2020)</span>
                <p class="resume-item-description">A web-based application built with Laravel for student counseling with teachers, reporting student issues, and follow-up actions.</p>
                <a href="https://compro-busmat-mainax1oxi.laravel.cloud/" target="_blank" class="resume-link">View Project</a>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Web Based POS (Point of Sale) System - AlphaPOS</h4>
                <span class="resume-item-period">(2023)</span>
                <p class="resume-item-description">Developed a web-based Point of Sale (POS) application designed to help small and medium-sized businesses manage their sales, inventory, and transactions efficiently through a simple and responsive interface.</p>
                <a href="https://alpha-creativee.online/" target="_blank" class="resume-link">View Project</a>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">CPNS Try Out Application - Cendeqia</h4>
                <span class="resume-item-period">(2021)</span>
                <p class="resume-item-description">The app simulates real test conditions using the CAT (Computer Assisted Test) system, providing a realistic and structured experience for users.</p>
                <a href="https://cendeqia.com/" target="_blank" class="resume-link">View Project</a>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Company Profile - Outlook Barbershop</h4>
                <span class="resume-item-period">(2020)</span>
                <p class="resume-item-description">Company profile, pricing, activity gallery, branding & information for the community.</p>
                <a href="https://www.outlookbarbershop.com/" target="_blank" class="resume-link">View Project</a>
              </div>
              <div class="resume-item">
                <h4 class="resume-item-title">Booking Apps - A Project Management System Outlook Barbershop</h4>
                <span class="resume-item-period">(2020)</span>
                <p class="resume-item-description">Booking and project management application tailored for barbershops to streamline appointment scheduling, manage barber work shifts, and improve communication between customers and barbershop owners.</p>
                <a href="https://booking.outlookbarbershop.com/" target="_blank" class="resume-link">View Project</a>
              </div>
            </section>
          </div>
        </div>
        
        <!-- Skills Section -->
        <section class="resume-skills-section">
          <div class="skills-header">
            <p class="skills-subtitle">My level of knowledge in some tools</p>
            <h3 class="skills-title">My Skills</h3>
          </div>
          
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">HTML/CSS</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Javascript</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">PHP & Laravel</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">SQL MySQL</span>
                <span class="skill-percentage">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Ms. Excel</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
            
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Adobe Illustrator & Corel Draw</span>
                <span class="skill-percentage">95%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Bonus Video Section -->
        <section class="bonus-video-section">
          <div class="video-content">
            <!-- Left Column - Text Content -->
            <div class="video-text">
              <h3 class="video-title">Bonus Video Project</h3>
              <p class="video-description">
                In 2020, I produced an 8-minute short film titled "Setengah Diriku yang Pergi" which means "Half of Me That Left." 
                The film was adapted from the poetry book "Tonight I Will Sleep in Your Eyes" by Joko Pinurbo. 
                The short film received 300 likes, 150 subscribers, and 35 positive comments. 
                For my first project in the film industry, this film was a truly memorable experience for me.
              </p>
            </div>
            
            <!-- Right Column - Video -->
            <div class="video-container">
              <div class="video-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/wWaM08xWxTo?start=2" 
                  title="Setengah Diriku yang Pergi - Short Film"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
                <div class="play-button-overlay">
                  <div class="play-button">
                    <i class="fas fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Portfolio Modal -->
    <div class="portfolio-modal" :class="{ active: portfolioModalOpen }" @click="closePortfolioModal">
      <div class="portfolio-modal-content" @click.stop>
        <button class="close-btn" @click="closePortfolioModal">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="portfolio-header">
          <p class="portfolio-subtitle">Showcasing some of my best work</p>
          <h2 class="portfolio-title">Portfolio</h2>
        </div>
        
        <!-- Filter Buttons -->
        <div class="portfolio-filters">
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'all' }"
            @click="setActiveFilter('all')"
          >
            All
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'design' }"
            @click="setActiveFilter('design')"
          >
            Design
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'website' }"
            @click="setActiveFilter('website')"
          >
            Website
          </button>
        </div>
        
        <!-- Portfolio Grid -->
        <div class="portfolio-grid">
          <div 
            v-for="item in filteredPortfolioItems" 
            :key="item.id"
            class="portfolio-item"
          >
            <div class="portfolio-image">
              <img :src="item.image" :alt="item.title" />
              <div class="portfolio-overlay">
                <a :href="item.link" target="_blank" class="portfolio-link">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-info">
              <h3 class="portfolio-item-title">{{ item.title }}</h3>
              <p class="portfolio-category">{{ item.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <div class="contact-modal" :class="{ active: contactModalOpen }" @click="closeContactModal">
      <div class="contact-modal-content" @click.stop>
        <button class="close-btn" @click="closeContactModal">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="contact-header">
          <p class="contact-subtitle">Feel free to contact me anytimes</p>
          <h2 class="contact-title">Get in Touch</h2>
        </div>
        
        <div class="contact-content">
          <!-- Left Column - Message Form -->
          <div class="contact-left">
            <h3 class="contact-section-title">Message Me</h3>
            <form class="contact-form" @submit.prevent="sendToWhatsApp">
              <div class="grid-container">
                <div class="form-group">
                  <input type="text" id="name" name="name" v-model="contactForm.name" placeholder="Name" class="form-input" required>
                </div>
                <div class="form-group">
                  <input type="email" id="email" name="email" v-model="contactForm.email" placeholder="Email" class="form-input" required>
                </div>
              </div>
              <div class="form-group">
                <input type="text" id="subject" name="subject" v-model="contactForm.subject" placeholder="Subject" class="form-input" required>
              </div>
              <div class="form-group">
                <textarea id="message" name="message" v-model="contactForm.message" placeholder="Message" class="form-textarea" rows="6" required></textarea>
              </div>
              <button type="submit" class="send-btn">
                <i class="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
          
          <!-- Right Column - Contact Info -->
          <div class="contact-right">
            <h3 class="contact-section-title">Contact Info</h3>
            <p class="contact-description">
              Always available for freelance work if the right project comes along, Feel free to contact me!
            </p>
            
            <table class="contact-info-table">
              <tr>
                <td class="contact-icon">
                  <i class="fas fa-user"></i>
                </td>
                <td class="contact-line"></td>
                <td class="contact-details">
                  <h4 class="contact-title">Name</h4>
                  <span class="contact-text">Prada Wishnu</span>
                </td>
              </tr>

              <tr>
                <td class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </td>
                <td class="contact-line"></td>
                <td class="contact-details">
                  <h4 class="contact-title">Location</h4>
                  <span class="contact-text">61234 Sidoarjo, Jawa Timur, Indonesia</span>
                </td>
              </tr>
              
              <tr>
                <td class="contact-icon">
                  <i class="fas fa-phone"></i>
                </td>
                <td class="contact-line"></td>
                <td class="contact-details">
                  <h4 class="contact-title">Call Me</h4>
                  <span class="contact-text">+6285156815003</span>
                </td>
              </tr>
              
              <tr>
                <td class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </td>
                <td class="contact-line"></td>
                <td class="contact-details">
                  <h4 class="contact-title">Email Me</h4>
                  <span class="contact-text">pradawisnu9@gmail.com</span>
                </td>
              </tr>
             </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Aurora from './components/Aurora.vue'

// Reactive data
const name = ref('Prada Wishnu S.')
const professions = ['Graphic Designer', 'Web Developer', 'Data Science']
const currentProfession = ref('')
const showCursor = ref(true)
const mobileMenuOpen = ref(false)
const aboutModalOpen = ref(false)
const resumeModalOpen = ref(false)
const portfolioModalOpen = ref(false)
const contactModalOpen = ref(false)
const auroraIntensity = ref(1.0)
const activeFilter = ref('all')

// Contact form data
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Social links data
const socialLinks = ref([
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/prada_wisnu/',
    icon: 'fab fa-instagram'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prada-wisnu/',
    icon: 'fab fa-linkedin-in'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/pradawisnu9-design',
    icon: 'fab fa-github'
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/pradawisnu1f1d',
    icon: 'fab fa-behance'
  }
])

// Typing effect variables
let typingInterval = null
let cursorInterval = null
let currentIndex = 0
let charIndex = 0
let isDeleting = false

// Functions
const typeWriter = () => {
  const current = professions[currentIndex]
  
  if (isDeleting) {
    currentProfession.value = current.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentProfession.value = current.substring(0, charIndex + 1)
    charIndex++
  }
  
  let typeSpeed = 100
  
  if (isDeleting) {
    typeSpeed /= 2
  }
  
  if (!isDeleting && charIndex === current.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    currentIndex = (currentIndex + 1) % professions.length
    typeSpeed = 500
  }
  
  typingInterval = setTimeout(typeWriter, typeSpeed)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  const scrolled = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = scrolled / maxScroll
  auroraIntensity.value = Math.max(0.3, 1.0 - scrollPercent * 0.7)
}

// Modal functions
const openAboutModal = () => {
  aboutModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeAboutModal = () => {
  aboutModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// Resume Modal functions
const openResumeModal = () => {
  resumeModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeResumeModal = () => {
  resumeModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// Portfolio Modal functions
const openPortfolioModal = () => {
  portfolioModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closePortfolioModal = () => {
  portfolioModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const setActiveFilter = (filter) => {
  activeFilter.value = filter
}

// Contact Modal functions
const openContactModal = () => {
  contactModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeContactModal = () => {
  contactModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// Send form to WhatsApp
const sendToWhatsApp = () => {
  const { name, email, subject, message } = contactForm.value
  
  // Validate form
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields')
    return
  }
  
  // Create WhatsApp message
  const whatsappMessage = `*${subject}*\n\nHi, my name is ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage)
  
  // WhatsApp URL with phone number
  const whatsappURL = `https://wa.me/6285156815003?text=${encodedMessage}`
  
  // Open WhatsApp
  window.open(whatsappURL, '_blank')
  
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  // Close modal
  closeContactModal()
}

// Portfolio data
const portfolioItems = ref([
  {
    id: 1,
    title: 'Design',
    category: 'marketing design',
    image: '/src/assets/POSTMARKETING4.png',
    link: 'https://www.instagram.com/p/DAdmEMISY4X/?utm_source=ig_web_copy_link&igsh=bDF3NzhobzRzOTh2'
  },
  {
    id: 2,
    title: 'Design',
    category: 'marketing design',
    image: '/src/assets/POSTMARKETING3.png',
    link: 'https://www.instagram.com/p/C_7vLULSsQo/?utm_source=ig_web_copy_link&igsh=MWw5c2xtNTNmbTNoZw=='
  },
  {
    id: 3,
    title: 'Design',
    category: 'marketing design',
    image: '/src/assets/POSTMARKETING2.png',
    link: 'https://www.instagram.com/p/C_sONEwymHI/?utm_source=ig_web_copy_link&igsh=Ynk3N2xsNjZlNHly'
  },
  {
    id: 4,
    title: 'Design',
    category: 'marketing design',
    image: '/src/assets/POSTMARKETING1.png',
    link: 'https://www.instagram.com/p/C_mrDG9yP6u/?utm_source=ig_web_copy_link&igsh=MXFsazFuc3g5MGx5ag=='
  },
  {
    id: 5,
    title: 'Marketing Design 4',
    category: 'design',
    image: '/src/assets/POSTMARKETING5.jpg',
    link: 'https://www.instagram.com/p/C_RbbEPSPib/?utm_source=ig_web_copy_link&igsh=NHRjYTBlaTFoZXls'
  },
  {
    id: 6,
    title: 'BUSMAT Website',
    category: 'website',
    image: '/src/assets/busmat.png',
    link: 'https://compro-busmat-main-ax1oxi.laravel.cloud/'
  },
  {
    id: 7,
    title: 'Alpha Creative',
    category: 'website',
    image: '/src/assets/alphapos.png',
    link: 'https://alpha-creativee.online/'
  },
  {
    id: 8,
    title: 'Outlook Barbershop',
    category: 'website',
    image: '/src/assets/outlook.png',
    link: 'https://www.outlookbarbershop.com/'
  },
  {
    id: 9,
    title: 'Cendeqia',
    category: 'website',
    image: '/src/assets/cendeqia.png',
    link: 'https://cendeqia.com/'
  }
])

// Computed property for filtered portfolio items
const filteredPortfolioItems = computed(() => {
  if (activeFilter.value === 'all') {
    return portfolioItems.value
  }
  return portfolioItems.value.filter(item => item.category === activeFilter.value)
})

// Lifecycle hooks
onMounted(() => {
  // Start typing effect
  typeWriter()
  
  // Start cursor blinking
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  if (typingInterval) clearTimeout(typingInterval)
  if (cursorInterval) clearInterval(cursorInterval)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Import external fonts and icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1e1e1e 75%, #0d0d0d 100%);
  background-attachment: fixed;
  color: #ffffff;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.01) 2px,
      rgba(255, 255, 255, 0.01) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.01) 2px,
      rgba(255, 255, 255, 0.01) 4px
    );
  pointer-events: none;
  z-index: -1;
}

#app {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

/* Gooey Header Styles */
.header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  max-width: 1200px;
  background: rgba(16, 16, 16, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  z-index: 1000;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #037d52;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.3s ease;
  z-index: 10;
}

.brand-logo:hover {
  color: #7cff67;
}

/* Navigation Styles */
.nav {
  position: relative;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  position: relative;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #7cff67;
  background: rgba(124, 255, 103, 0.1);
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 10;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 3px 0;
  transition: 0.3s;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
}

.aurora-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.hero-container {
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  text-align: center;
}

.hero-text {
  flex: 1;
  text-align: center;
}

.hero-name {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #037d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-profession {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.profession-text {
  color: #ffffff;
}

.typing-text {
  color: #037d52;
  font-weight: 600;
}

.cursor {
  color: #037d52;
  font-weight: 600;
}

.cursor.blink {
  opacity: 0;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

/* Social Links */
.social-links {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
}

.social-link {
  width: 50px;
  height: 50px;
  background: rgba(16, 16, 16, 0.8);
  border: 2px solid #037d52;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #037d52;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: #037d52;
  color: #ffffff;
  transform: translateX(-5px);
  box-shadow: 0 5px 15px rgba(3, 125, 82, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}

.scroll-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #ffffff;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.scroll-line {
  width: 2px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: #037d52;
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40px);
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .header {
    top: 0.5rem;
    width: calc(100% - 1rem);
    padding: 0.5rem 1rem;
  }
  
  .hamburger {
    display: flex;
  }
  
  .nav {
    position: fixed;
    left: -100%;
    top: 80px;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(16, 16, 16, 0.95);
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    z-index: 999;
    border-radius: 0;
  }
  
  .nav.active {
    left: 0;
  }
  
  .nav-menu {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 3rem;
    padding: 2rem 0;
  }
  
  .nav-link {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
  
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-name {
    font-size: 2.5rem;
  }
  
  .hero-profession {
    font-size: 1.2rem;
  }
  
  .image-placeholder {
    font-size: 5rem;
  }
  
  .social-links {
    right: 1rem;
    bottom: 1rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

/* About Modal Styles */
.about-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.about-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  border-radius: 20px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  transform: translateY(100px);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.about-modal.active .modal-content {
  transform: translateY(0);
}

/* Hide scrollbar for WebKit browsers */
.modal-content::-webkit-scrollbar {
  display: none;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-subtitle {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #037d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* About Section */
.about-section {
  padding: 3rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
}

.about-image .profile-image {
  width: 350px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  border: 3px solid #037d52;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(3, 125, 82, 0.3);
}

.about-image .profile-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(3, 125, 82, 0.4);
  border-color: #7cff67;
}

.about-image .profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.about-question {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #cccccc;
}

.about-bio {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #aaaaaa;
}

.personal-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  margin-bottom: 0.8rem;
}

.info-label {
  font-weight: 600;
  color: #ffffff;
  min-width: 80px;
  margin-right: 1rem;
}

.info-value {
  color: #cccccc;
}

.about-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.download-cv-btn {
  background: linear-gradient(135deg, #037d52 0%, #025d3e 100%);
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.download-cv-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(3, 125, 82, 0.3);
}

.social-links-about {
  display: flex;
  gap: 1rem;
}

.social-link-about {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link-about.facebook {
  background: linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%);
}

.social-link-about.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
}

.social-link-about.instagram {
  background: linear-gradient(135deg, #e4405f 0%, #c13584 100%);
}

.social-link-about.behance {
  background: linear-gradient(135deg, #1769ff 0%, #0d47a1 100%);
}

.social-link-about:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

/* Services Section */
.services-section {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(3, 125, 82, 0.2);
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #037d52 0%, #025d3e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #ffffff;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.service-description {
  color: #aaaaaa;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.testimonial-item {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(3, 125, 82, 0.2);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.quote-icon {
  color: #037d52;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  color: #cccccc;
  line-height: 1.7;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar .avatar-placeholder {
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: linear-gradient(135deg, #037d52 0%, #025d3e 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: #ffffff;
   font-size: 1.5rem;
 }

.author-name {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.author-role {
  color: #888;
  font-size: 0.9rem;
}

/* Pricing Section */
.pricing-section {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.pricing-item {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  border: 1px solid rgba(3, 125, 82, 0.2);
  transition: all 0.3s ease;
}

.pricing-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.pricing-item.featured {
  border-color: #037d52;
  box-shadow: 0 10px 30px rgba(3, 125, 82, 0.2);
}

.pricing-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: #ffffff;
  padding: 5px 20px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.pricing-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #ffffff;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.pricing-price {
  font-size: 3rem;
  font-weight: 700;
  color: #037d52;
  margin-bottom: 2rem;
}

.pricing-price span {
  font-size: 1rem;
  color: #888;
}

.pricing-features {
  list-style: none;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.5rem 0;
  color: #cccccc;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing-features li:last-child {
  border-bottom: none;
}

.pricing-btn {
  background: linear-gradient(135deg, #037d52 0%, #025d3e 100%);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(3, 125, 82, 0.3);
}

/* Resume Modal Styles */
.resume-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.resume-modal.active {
  opacity: 1;
  visibility: visible;
}

.resume-modal-content {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  border-radius: 20px;
  width: 95%;
  max-width: 1400px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform: translateY(100px) scale(0.9);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.resume-modal.active .resume-modal-content {
  transform: translateY(0) scale(1);
}

.resume-modal-content::-webkit-scrollbar {
  display: none;
}

.resume-header {
  text-align: center;
  padding: 3rem 3rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.resume-subtitle {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.resume-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #037d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.resume-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
}

.resume-section {
  margin-bottom: 3rem;
}

.resume-section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #037d52;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.resume-section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(45deg, #037d52, #7cff67);
  border-radius: 2px;
}

.resume-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border-left: 3px solid #037d52;
  transition: all 0.3s ease;
}

.resume-item:hover {
  background: rgba(3, 125, 82, 0.05);
  transform: translateX(5px);
}

.resume-item-header {
  margin-bottom: 1rem;
}

.resume-item-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.resume-item-period {
  color: #037d52;
  font-size: 0.9rem;
  font-weight: 500;
}

.resume-item-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.resume-item-description ul {
  list-style: none;
  padding: 0;
}

.resume-item-description li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.resume-item-description li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #037d52;
  font-size: 0.8rem;
}

.resume-link {
  display: inline-block;
  color: #037d52;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #037d52;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.resume-link:hover {
  background: #037d52;
  color: #ffffff;
  transform: translateY(-2px);
}

.resume-skills-section {
  padding: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.skills-header {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-subtitle {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.skills-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #037d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: #ffffff;
}

.skill-percentage {
  color: #037d52;
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(45deg, #037d52, #7cff67);
  border-radius: 4px;
  transition: width 1s ease-in-out;
  animation: skillAnimation 2s ease-in-out;
}

@keyframes skillAnimation {
  0% {
    width: 0;
  }
  100% {
    width: var(--skill-width);
  }
}

/* Bonus Video Section */
.bonus-video-section {
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(3, 125, 82, 0.2);
}

.video-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.video-text {
  padding-right: 2rem;
}

.video-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
}

.video-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(45deg, #037d52, #7cff67);
  border-radius: 2px;
}

.video-description {
  color: #cccccc;
  line-height: 1.8;
  font-size: 1rem;
  text-align: justify;
}

.video-container {
  position: relative;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(3, 125, 82, 0.3);
  transition: all 0.3s ease;
}

.video-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  border-color: #037d52;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.play-button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.video-wrapper:hover .play-button-overlay {
  opacity: 1;
}

.play-button {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #037d52, #7cff67);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem;
  box-shadow: 0 5px 20px rgba(3, 125, 82, 0.4);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.video-wrapper:hover .play-button {
  transform: scale(1);
}

/* Portfolio Modal Styles */
.portfolio-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.portfolio-modal.active {
  opacity: 1;
  visibility: visible;
}

.portfolio-modal-content {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  border-radius: 20px;
  width: 95%;
  max-width: 1400px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform: translateY(100px) scale(0.9);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.portfolio-modal.active .portfolio-modal-content {
  transform: translateY(0) scale(1);
}

.portfolio-modal-content::-webkit-scrollbar {
  display: none;
}

.portfolio-header {
  text-align: center;
  padding: 3rem 3rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-subtitle {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.portfolio-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #037d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.filter-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.filter-btn:hover {
  background: rgba(3, 125, 82, 0.2);
  border-color: #037d52;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(45deg, #037d52, #7cff67);
  border-color: #037d52;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(3, 125, 82, 0.3);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem;
}

.portfolio-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(3, 125, 82, 0.5);
}

.portfolio-image {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 125, 82, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-link {
  color: #ffffff;
  font-size: 1.5rem;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.portfolio-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.portfolio-info {
  padding: 1.5rem;
}

.portfolio-item-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.portfolio-category {
  color: #037d52;
  font-size: 0.9rem;
  text-transform: capitalize;
  font-weight: 500;
}

/* Contact Modal Styles */
.contact-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.contact-modal.active {
  opacity: 1;
  visibility: visible;
}

.contact-modal-content {
  background: linear-gradient(135deg, #101010 0%, #1a1a1a 100%);
  border-radius: 20px;
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform: translateY(100px) scale(0.9);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.contact-modal.active .contact-modal-content {
  transform: translateY(0) scale(1);
}

.contact-modal-content::-webkit-scrollbar {
  display: none;
}

.contact-header {
  text-align: center;
  padding: 3rem 3rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-subtitle {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #037d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 3rem;
}

.contact-section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
  position: relative;
}

.contact-section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(45deg, #037d52, #7cff67);
  border-radius: 2px;
}

/* Contact Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  position: relative;
}

.grid-container { 
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  resize: none;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #037d52;
  background: rgba(3, 125, 82, 0.1);
  box-shadow: 0 0 20px rgba(3, 125, 82, 0.2);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #888;
  transition: all 0.3s ease;
}

.form-input:focus::placeholder,
.form-textarea:focus::placeholder {
  opacity: 0.7;
}

.send-btn {
  background: linear-gradient(135deg, #037d52 0%, #025d3e 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.send-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(3, 125, 82, 0.4);
}

.send-btn:active {
  transform: translateY(0);
}

.send-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.send-btn:hover::before {
  left: 100%;
}

/* Contact Info Styles */
.contact-description {
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-info-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.5rem;
}

.contact-info-table tr {
  transition: all 0.3s ease;
}

.contact-info-table tr:hover {
  transform: translateX(5px);
}

.contact-info-table td {
  vertical-align: middle;
  padding: 0;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #037d52 0%, #025d3e 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  padding-right: 1rem;
}

.contact-line {
  width: 5px;
  height: 1px;
  background: linear-gradient(90deg, #037d52 0%, #7cff67 100%);
  margin: 0 1rem;
}

.contact-details {
  padding-left: 1rem;
}

.contact-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.3rem;
  margin: 0 0 0.3rem 0;
}

.contact-text {
  font-size: 0.95rem;
  color: #cccccc;
  margin: 0;
  padding: 1rem;
}

/* Responsive Design for Modal */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 95vh;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image .profile-image {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
  
  .about-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .social-links-about {
    justify-content: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-section,
  .services-section,
  .testimonials-section,
  .pricing-section {
    padding: 2rem 1.5rem;
  }
  
  /* Resume Modal Responsive */
  .resume-modal-content {
    width: 98%;
    max-height: 95vh;
  }
  
  .resume-header {
    padding: 2rem 1.5rem 1.5rem;
  }
  
  .resume-title {
    font-size: 2.5rem;
  }
  
  .resume-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
  
  .resume-section-title {
    font-size: 1.5rem;
  }
  
  .resume-item {
    padding: 1rem;
  }
  
  .resume-item-title {
    font-size: 1.1rem;
  }
  
  .resume-skills-section {
    padding: 2rem 1.5rem;
  }
  
  .skills-title {
    font-size: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  /* Bonus Video Section Responsive */
  .bonus-video-section {
    padding: 2rem 1.5rem;
  }
  
  .video-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .video-text {
    padding-right: 0;
    text-align: center;
  }
  
  .video-title {
    font-size: 1.8rem;
  }
  
  .video-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .video-description {
    text-align: left;
  }
  
  /* Portfolio Modal Responsive */
  .portfolio-modal-content {
    width: 98%;
    max-height: 95vh;
  }
  
  .portfolio-header {
    padding: 2rem 1.5rem 1.5rem;
  }
  
  .portfolio-title {
    font-size: 2.5rem;
  }
  
  .portfolio-filters {
    padding: 1.5rem;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1.5rem;
    font-size: 0.8rem;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }
  
  .portfolio-image {
    height: 180px;
  }
  
  .portfolio-info {
    padding: 1rem;
  }
  
  .portfolio-item-title {
    font-size: 1.1rem;
  }
  
  /* Contact Modal Responsive */
  .contact-modal-content {
    width: 98%;
    max-height: 95vh;
  }
  
  .contact-header {
    padding: 2rem 1.5rem 1.5rem;
  }
  
  .contact-title {
    font-size: 2.5rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
  
  .contact-section-title {
    font-size: 1.5rem;
  }
  
  .form-input,
  .form-textarea {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
  
  .send-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .contact-info-table {
    border-spacing: 0 1rem;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  
  .contact-line {
    width: 40px;
    margin: 0 0.5rem;
  }
  
  .contact-details {
    padding-left: 0.5rem;
  }
  
  .contact-title {
    font-size: 0.9rem;
  }
  
  .contact-text {
    font-size: 0.85rem;
  }
}
</style>