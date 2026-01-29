
        // Gestion du chargement
        document.addEventListener('DOMContentLoaded', function() {
            const loadingScreen = document.getElementById('loadingScreen');
            const navbar = document.getElementById('navbar');
            const hero = document.querySelector('.hero');
            const chatbotToggle = document.getElementById('chatbotToggle');
            const scrollTopBtn = document.getElementById('scrollTop');
            
            // Simuler un chargement (vous pouvez ajuster la durée)
            setTimeout(() => {
                // Masquer l'écran de chargement
                loadingScreen.classList.add('hidden');
                
                // Afficher la navigation
                navbar.classList.add('loaded');
                
                // Afficher la section hero avec animation
                hero.classList.add('loaded');
                
                // Afficher le bouton chatbot
                chatbotToggle.classList.add('loaded');
                
                // Initialiser les animations de défilement pour les sections
                const sections = document.querySelectorAll('section');
                const footer = document.querySelector('footer');
                
                const sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });
                
                sections.forEach(section => sectionObserver.observe(section));
                
                // Observer le footer
                const footerObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });
                
                footerObserver.observe(footer);
                
            }, 1500); // 1.5 secondes de simulation de chargement
            
            // Le reste du code JavaScript reste inchangé...
            
            // Typing animation
            const typingText = document.getElementById('typing');
            const texts = ["Angular & React Expert", "Laravel & Spring Boot Specialist", "DevOps & Deployment Pro", "BIAcode Cofounder", "Full-Stack Developer"];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingText.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, isDeleting ? 50 : 100);
                }
            }
            
            // Démarrer l'animation de frappe après le chargement
            setTimeout(type, 1800);

            // Navigation burger
            const burger = document.getElementById('burger');
            const navLinks = document.getElementById('navLinks');
            const body = document.body;

            function toggleMenu() {
                burger.classList.toggle('active');
                navLinks.classList.toggle('active');
                body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            }

            burger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleMenu();
            });

            // Fermer le menu en cliquant sur un lien
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    burger.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                });
            });

            // Fermer le menu en cliquant en dehors
            document.addEventListener('click', function(e) {
                if (navLinks.classList.contains('active') && 
                    !navLinks.contains(e.target) && 
                    !burger.contains(e.target)) {
                    burger.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }
            });

            // Scroll to top
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Animer les barres de compétences
            const skillBars = document.querySelectorAll('.skill-progress');
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progress = entry.target.getAttribute('data-progress');
                        entry.target.style.width = progress + '%';
                    }
                });
            }, { threshold: 0.5 });

            skillBars.forEach(bar => skillObserver.observe(bar));

            // Données des projets
            const projects = [
                {
                    id: 1,
                    title: "BIAcode – Agence Digitale",
                    role: "Cofondateur & Développeur Full-Stack",
                    description: "Agence digitale spécialisée dans les solutions web modernes, performantes et scalables.",
                    longDescription: `BIAcode est une agence digitale fondée par trois développeurs passionnés. Nous créons des sites web professionnels, des plateformes sur mesure et des solutions intégrant l'intelligence artificielle.

Ce que je fais chez BIAcode :
• Développement front-end (Angular, React)
• Intégration back-end (Laravel, Spring Boot)
• Architecture et conception technique
• Déploiement sur Hostinger & LWS
• Gestion serveur (Linux, performances)
• Collaboration Git/GitHub
• Relation client et accompagnement technique`,
                    tech: ["Angular", "React", "Laravel", "Spring Boot", "MySQL", "Hostinger", "LWS", "Linux"],
                    features: [
                        "Sites web professionnels",
                        "Plateformes sur mesure",
                        "Solutions IA intégrées",
                        "Déploiement et hébergement",
                        "Support et maintenance"
                    ],
                    github: "#",
                    demo: "#",
                    imageIcon: "fa-briefcase"
                },
                {
                    id: 2,
                    title: "Plateforme Universitaire UDB (udb.sn)",
                    role: "Développeur Full-Stack – Équipe de 4 (BIAcode)",
                    description: "Plateforme digitale complète pour l'Université Dakar Bourguiba avec espace étudiant et réseau alumni.",
                    longDescription: `J'ai fait partie de l'équipe principale qui a conçu, développé et déployé la plateforme digitale de l'Université Dakar Bourguiba.

Fonctionnalités principales :
• Site institutionnel dynamique
• Dashboard d'administration complet
• Gestion de contenu et actualités
• Espace étudiant
• Réseau alumni (profils, connexion, interactions)

Mes contributions :
• Développement du front-end Angular
• Intégration avec Laravel
• Création du Dashboard administrateur
• Développement du réseau Alumni
• Optimisation performances et sécurité
• Déploiement sur Hostinger / LWS
• Gestion du workflow Git et collaboration d'équipe`,
                    tech: ["Angular", "Laravel", "MySQL", "Linux", "Hostinger", "LWS", "Git"],
                    features: [
                        "Site institutionnel dynamique",
                        "Dashboard admin complet",
                        "Espace étudiant personnalisé",
                        "Réseau alumni interactif",
                        "Système de gestion de contenu"
                    ],
                    github: "#",
                    demo: "#",
                    imageIcon: "fa-university"
                },
                {
                    id: 3,
                    title: "Application de Gestion Commerciale",
                    role: "Développeur Full-Stack",
                    description: "Application de gestion commerciale complète avec inventaire, ventes et reporting.",
                    longDescription: `Application web complète de gestion commerciale développée avec Spring Boot en backend et Angular en frontend. Le système inclut la gestion des stocks, des ventes, des clients, des fournisseurs et des rapports financiers.

Fonctionnalités principales :
• Gestion des produits et catégories
• Suivi des stocks en temps réel
• Système de ventes et facturation
• Gestion des clients et fournisseurs
• Rapports et statistiques
• Tableau de bord administrateur

Technologies utilisées :
• Spring Boot avec Spring Security
• Angular 15 avec RxJS
• MySQL pour la base de données
• JWT pour l'authentification
• Chart.js pour les graphiques
• Docker pour le déploiement`,
                    tech: ["Spring Boot", "Angular", "MySQL", "JWT", "Docker", "Chart.js"],
                    features: [
                        "Gestion des stocks en temps réel",
                        "Système de ventes et facturation",
                        "Rapports financiers détaillés",
                        "Authentification sécurisée JWT",
                        "Interface responsive et moderne"
                    ],
                    github: "#",
                    demo: "#",
                    imageIcon: "fa-shopping-cart"
                }
            ];

            // Données des certifications
            const certifications = [
                {
                    id: 1,
                    title: "Large Language Models",
                    issuer: "FORCE-N Program",
                    date: "Avril 2025",
                    description: "Certificat en Large Language Models délivré par le programme FORCE-N.",
                    longDescription: `Cette certification atteste que Mamadou Bobo Diallo a satisfait aux exigences du certificat en Large Language Models. Le programme FORCE-N reconnaît les compétences acquises dans le domaine des modèles de langage de grande taille, incluant :

• Compréhension des architectures de LLM
• Fine-tuning et optimisation
• Applications pratiques des modèles de langage
• Éthique et responsabilité dans l'IA
• Déploiement de solutions basées sur LLM`,
                    imageUrl: "./images/forcen.png",
                    credentialId: "FORCE-N-LLM-2025",
                    credentialUrl: "#"
                },
                {
                    id: 2,
                    title: "Contribution à la refonte de plateforme numérique",
                    issuer: "Université Dakar Bourguiba",
                    date: "29 Septembre 2025",
                    description: "Certificat de reconnaissance pour contribution exemplaire à la refonte de la plateforme numérique de l'UDB.",
                    longDescription: `Ce certificat reconnaît la contribution exemplaire de Manadeur Batra Défatti à la refonte de la plateforme numérique de l'Université Dakar Bourguiba, réalisée dans le cadre de son stage académique du 26 juillet au 25 août 2025.

Compétences démontrées :
• Analyse des besoins utilisateurs
• Conception d'architecture technique
• Développement de fonctionnalités
• Tests et déploiement
• Documentation technique`,
                    imageUrl: "./images/udb.png",
                    credentialId: "UDB-CERT-2025-001",
                    credentialUrl: "#"
                },
//                 {
//                     id: 3,
//                     title: "Licence en Génie Logiciel",
//                     issuer: "Université Dakar Bourguiba",
//                     date: "Année académique 2024-2025",
//                     description: "Diplôme de Licence en Génie Logiciel avec mention Assez-Bien.",
//                     longDescription: `Diplôme de Licence en Génie Logiciel (GL) obtenu avec la mention Assez-Bien au titre de l'année académique 2024-2025.

// Domaines de compétence validés :
// • Conception et développement logiciel
// • Architecture des systèmes d'information
// • Gestion de projet informatique
// • Bases de données avancées
// • Sécurité informatique
// • Méthodes agiles de développement
// • Tests et validation logicielle`,
//                     imageUrl: "./images/atesstation.png",
//                     credentialId: "006/2025",
//                     credentialUrl: "#"
//                 }
            ];

            // Charger les projets après le chargement
            setTimeout(() => {
                const projectsGrid = document.getElementById('projectsGrid');
                projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.innerHTML = `
                        <div class="project-image">
                            <i class="fas ${project.imageIcon}"></i>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-role">
                                <i class="fas fa-user-tie"></i> ${project.role}
                            </p>
                            <p class="project-desc">${project.description}</p>
                            <div class="project-tech">
                                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                <a href="#" class="view-project" data-id="${project.id}">
                                    <i class="fas fa-eye"></i> Voir détails
                                </a>
                                <a href="${project.github}" target="_blank">
                                    <i class="fab fa-github"></i> Code
                                </a>
                            </div>
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                });

                // Charger les certifications
                const certificationsGrid = document.getElementById('certificationsGrid');
                certifications.forEach(cert => {
                    const certCard = document.createElement('div');
                    certCard.className = 'certification-card';
                    certCard.innerHTML = `
                        <div class="certification-image">
                            <img src="${cert.imageUrl}" alt="${cert.title}" loading="lazy">
                            <div class="certification-badge">
                                <i class="fas fa-certificate"></i> Certifié
                            </div>
                        </div>
                        <div class="certification-content">
                            <h3 class="certification-title">${cert.title}</h3>
                            <p class="certification-issuer">
                                <i class="fas fa-building"></i> ${cert.issuer}
                            </p>
                            <p class="certification-date">
                                <i class="fas fa-calendar-alt"></i> ${cert.date}
                            </p>
                            <p class="certification-desc">${cert.description}</p>
                            <a href="#" class="certification-btn view-certification" data-id="${cert.id}">
                                <i class="fas fa-external-link-alt"></i> Voir les détails
                            </a>
                        </div>
                    `;
                    certificationsGrid.appendChild(certCard);
                });
            }, 1000);

            // Le reste du code JavaScript (modals, chatbot, etc.) reste inchangé...
            // ... (insérer ici le reste du code JavaScript du fichier précédent)
            // Modal de projet
            const projectModal = document.getElementById('projectModal');
            const closeProjectModal = document.getElementById('closeProjectModal');
            const projectModalTitle = document.getElementById('projectModalTitle');
            const projectModalBody = document.getElementById('projectModalBody');

            document.addEventListener('click', function(e) {
                if (e.target.closest('.view-project')) {
                    e.preventDefault();
                    const projectId = parseInt(e.target.closest('.view-project').getAttribute('data-id'));
                    const project = projects.find(p => p.id === projectId);
                    
                    projectModalTitle.textContent = project.title;
                    projectModalBody.innerHTML = `
                        <div style="margin-bottom: 2rem;">
                            <h3 style="color: var(--blue); margin-bottom: 0.5rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-user-tie"></i> ${project.role}
                            </h3>
                            <p style="color: var(--gray); line-height: 1.8; font-size: 1rem; white-space: pre-line;">${project.longDescription}</p>
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <h3 style="color: var(--wine); margin-bottom: 1rem; font-size: 1.3rem;">Fonctionnalités principales</h3>
                            <ul style="color: var(--gray); padding-left: 1.5rem; font-size: 1rem;">
                                ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <h3 style="color: var(--wine); margin-bottom: 1rem; font-size: 1.3rem;">Technologies utilisées</h3>
                            <div class="project-tech" style="margin-top: 1rem;">
                                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem;">
                            <a href="${project.github}" target="_blank" class="btn btn-primary" style="flex: 1; min-width: 200px;">
                                <i class="fab fa-github"></i> Voir le code source
                            </a>
                            ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="btn btn-secondary" style="flex: 1; min-width: 200px;">
                                <i class="fas fa-external-link-alt"></i> Voir la démo
                            </a>` : ''}
                        </div>
                    `;
                    
                    projectModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });

            closeProjectModal.addEventListener('click', () => {
                projectModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });

            projectModal.addEventListener('click', (e) => {
                if (e.target === projectModal) {
                    projectModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });

            // Modal de certification
            const certificationModal = document.getElementById('certificationModal');
            const closeCertificationModal = document.getElementById('closeCertificationModal');
            const certificationModalTitle = document.getElementById('certificationModalTitle');
            const certificationModalImage = document.getElementById('certificationModalImage');
            const certificationModalDetails = document.getElementById('certificationModalDetails');

            document.addEventListener('click', function(e) {
                if (e.target.closest('.view-certification')) {
                    e.preventDefault();
                    const certId = parseInt(e.target.closest('.view-certification').getAttribute('data-id'));
                    const certification = certifications.find(c => c.id === certId);
                    
                    certificationModalTitle.textContent = certification.title;
                    
                    // Afficher l'image en HAUT
                    certificationModalImage.innerHTML = `
                        <img src="${certification.imageUrl}" alt="${certification.title}">
                    `;
                    
                    // Afficher les détails en BAS
                    certificationModalDetails.innerHTML = `
                        <div class="certification-info-grid">
                            <div class="certification-info-item">
                                <label><i class="fas fa-building"></i> Émetteur :</label>
                                <p>${certification.issuer}</p>
                            </div>
                            
                            <div class="certification-info-item">
                                <label><i class="fas fa-calendar-alt"></i> Date d'obtention :</label>
                                <p>${certification.date}</p>
                            </div>
                            
                            <div class="certification-info-item">
                                <label><i class="fas fa-id-card"></i> Référence :</label>
                                <p>${certification.credentialId}</p>
                            </div>
                        </div>
                        
                        <div class="certification-long-desc">
                            <h4>Description complète</h4>
                            <p>${certification.longDescription}</p>
                        </div>
                        
                        <div class="modal-buttons">
                            ${certification.credentialUrl !== '#' ? `
                                <a href="${certification.credentialUrl}" target="_blank" class="certification-verify-btn">
                                    <i class="fas fa-external-link-alt"></i> Vérifier la certification
                                </a>
                            ` : ''}
                            
                            <button class="btn btn-secondary" id="closeCertModalBtn" style="min-width: 150px;">
                                <i class="fas fa-times"></i> Fermer
                            </button>
                        </div>
                    `;
                    
                    certificationModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    // Ajouter l'écouteur pour le bouton de fermeture
                    document.getElementById('closeCertModalBtn').addEventListener('click', () => {
                        certificationModal.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    });
                }
            });

            closeCertificationModal.addEventListener('click', () => {
                certificationModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });

            certificationModal.addEventListener('click', (e) => {
                if (e.target === certificationModal) {
                    certificationModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });

            // Formulaire de contact
            const contactForm = document.getElementById('contactForm');
            const successModal = document.getElementById('successModal');
            const closeSuccessModal = document.getElementById('closeSuccessModal');

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simuler l'envoi du formulaire
                setTimeout(() => {
                    successModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    contactForm.reset();
                }, 500);
            });

            closeSuccessModal.addEventListener('click', () => {
                successModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });

            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    successModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });

            // Chatbot
            const chatbotContainer = document.getElementById('chatbotContainer');
            const chatbotClose = document.getElementById('chatbotClose');
            const chatbotMessages = document.getElementById('chatbotMessages');
            const chatbotInput = document.getElementById('chatbotInput');
            const chatbotSend = document.getElementById('chatbotSend');

            chatbotToggle.addEventListener('click', () => {
                chatbotContainer.classList.toggle('active');
            });

            chatbotClose.addEventListener('click', () => {
                chatbotContainer.classList.remove('active');
            });

            function addMessage(text, isUser = false) {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
                messageDiv.textContent = text;
                chatbotMessages.appendChild(messageDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }

            // Données du chatbot
            const chatbotResponses = {
                "bonjour": "Bonjour ! Je suis l'assistant de Mamadou Bobo Diallo. Comment puis-je vous aider aujourd'hui ? 😊",
                "salut": "Salut ! En quoi puis-je vous assister concernant le développement web ou les services de BIAcode ?",
                "biacode": "BIAcode est une agence digitale cofondée par Mamadou Bobo Diallo, spécialisée dans les solutions web modernes, performantes et scalables. Nous créons des sites web, des plateformes sur mesure et des solutions intégrant l'IA.",
                "compétences": "Mamadou Bobo Diallo maîtrise Angular, React, Laravel, Spring Boot, MySQL, PostgreSQL, et les déploiements sur Hostinger et LWS. Consultez la section compétences pour plus de détails !",
                "projets": "Découvrez les projets récents incluant la plateforme UDB, les solutions BIAcode et d'autres applications de gestion. Tous les détails sont dans la section projets !",
                "contact": "Vous pouvez contacter Mamadou Bobo Diallo par email (bobodiallo.dev@gmail.com) ou via le formulaire de contact sur ce site.",
                "stage": "Actuellement cofondateur de BIAcode, Mamadou est ouvert aux collaborations, projets freelance et partenariats dans le développement web.",
                "merci": "De rien ! N'hésitez pas si vous avez d'autres questions sur les services ou compétences. 😊",
                "au revoir": "Au revoir ! Bonne journée et à bientôt ! 👋"
            };

            function getChatbotResponse(input) {
                const lowerInput = input.toLowerCase();
                for (const [key, response] of Object.entries(chatbotResponses)) {
                    if (lowerInput.includes(key)) {
                        return response;
                    }
                }
                return "Je ne suis pas sûr de comprendre. Vous pouvez me poser des questions sur BIAcode, les compétences, projets ou contact de Mamadou Bobo Diallo !";
            }

            chatbotSend.addEventListener('click', () => {
                const message = chatbotInput.value.trim();
                if (message) {
                    addMessage(message, true);
                    chatbotInput.value = '';
                    
                    setTimeout(() => {
                        const response = getChatbotResponse(message);
                        addMessage(response);
                    }, 500);
                }
            });

            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    chatbotSend.click();
                }
            });

            // Smooth scroll pour les ancres
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') return;
                    
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Fermer le menu mobile quand on scroll
            window.addEventListener('scroll', () => {
                if (navLinks.classList.contains('active')) {
                    burger.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }
            });
        });
