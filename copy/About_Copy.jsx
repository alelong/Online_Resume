import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//FR
export const Hello_msg_FR = "Enchantée ! Je suis Agathe, Brestoise de 28 ans et consultante en informatique.";
export const Title_4_FR = "Petite histoire de ce site";
export const Title_5_FR = "Où me trouver hors de la toile";
export const Title_6_FR = "L'employée que je suis";
export const Paragraph_4_FR = () => (
	<p>
		En 2018, j'ai découvert React.js 
		dans le cadre d'une mission de conseil à New York. 
		Voulant me familiariser avec ce framework et coachée par 
		un ami développeur (hi Daryl!), 
		je me suis remise à coder après 4 ans sans ouvrir un terminal. 
		Pour s'entrainer, rien de tel que de développer un site depuis zéro, m'a-t'il soufflé. 
		Ce projet de CV en ligne est né. Mais après quelques mois d'efforts et face à une montée en charge au bureau,  
		j'ai préféré mettre ce site de côté. Je ne voulais pas passer mes soirées face à un écran, 
		en plus de mes journées.<br/><br/>
		Puis avril 2020 est arrivé. Placée en activité partielle lors de la crise Covid,
		j'ai décidé de ressusciter ce projet dans mon temps libre et finalement, publier ce site.
		Vous savez tout ! N'hésitez pas à parcourir les différentes sections et à me faire vos retours 
		ou suggestions par <a href="mailto:agathelelong@orange.fr" target="_top">email</a> ou via&nbsp;
		<a href="https://www.linkedin.com/in/agathelelong/">LinkedIn</a>.
	</p>
);

export const Paragraph_5_FR = "\
Jamais loin de la mer ! Depuis début 2020, je vis à Brest en Bretagne, où je suis née. \
Avant cela, j'ai passé quelques années de l'autre côté de l'Atlantique à New York.";
export const Paragraph_6_FR = () => (
	<p>
		Je travaille chez Capgemini à Brest en tant que consultante en Transformation Digitale : 
		j'accompagne des entreprises dans leurs projets informatiques en 
		faisant le lien entre les équipes techniques et métier. Comme je n'ai 
		jamais su choisir entre ces 2 mondes, j'ai décidé de travailler 
		entre les deux, tout simplement. Pour plus de détails, faites un tour dans&nbsp;
		<Link to="/fr/travail">Travail</Link>.
	</p>
	);
export const EmailIcon_alt_FR = "Email";
export const LinkedInLogo_alt_FR = "Mon profil LinkedIn";
export const InstagramLogo_alt_FR ="Mon compte Instagram";

//EN
export const Hello_msg_EN = "Hi! I'm Agathe, a 28 year-old French IT consultant based in Brest, Brittany.";
export const Title_4_EN = "This is my home-made resume";
export const Title_5_EN = "Where to find me IRL";
export const Title_6_EN = "What I do for a living";
export const Paragraph_4_EN = () => (
		<p>
			In 2018, I came across React.js 
			during an IT consulting project in NYC 
			and I grew an interest about this framework. 
			After 4 years without ever opening a terminal, 
			it only took a few months of coding from scratch, 
			a great React.js dev coach and friend (hi Daryl!) 
			and today, my online resume is live! 
			Feel free to browse around the sections and send your feedback via email or LinkedIn.
		</p>
);
export const Paragraph_5_EN = "\
I have been living in Brest, Brittany since early 2020. This is also where I was born. \
Before that, I spent a few years in New York City.";
export const Paragraph_6_EN = () => (
	<p>
		I work as a Digital Transformation Consultant at Capgemini in Brest, France: 
		in other words I am supporting companies in their digital 
		projects by working hand-in-hand with technical and business teams. 
		Chosing one team over the other had always been a dilemma to me, 
		so I decided to work with both!
	</p>
);
export const EmailIcon_alt_EN = "Email me";
export const LinkedInLogo_alt_EN = "My LinkedIn profile";
export const InstagramLogo_alt_EN ="My Instagram account";

/*export const aboutCopy_FR = [
{'Hello_msg':"Bienvenue sur mon patchwork en ligne",
"Un site, pour quoi faire?",
"ID",
"Casquette pro",
"Pour apprendre React.js en m'amusant. \
J'ai découvert React.js en 2018 et j'ai trouvé ce langage intéressant, \
j'ai donc décidé de faire mes armes en codant ce site depuis zéro. \
J'ai mis l'accent sur le design en utilisant le layout grid et de multiples animations.",
"Je vis à la pointe bretonne à Brest.",
"Consultante en Transformation Digitale chez Capgemini",
"Email",
"Mon profil LinkedIn",
"Mon compte Instagram"
];*/