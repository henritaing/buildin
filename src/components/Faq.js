import React, { useState } from 'react';
import './Faq.css';

<h1> Questions classiques que l'on peut entendre </h1>
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    
    const questions = [
      {
        question: "En quoi consiste exactement l'événement ?",
        answer: "L'événement consiste en deux jours, deux nuits où les participants travailleront par équipe soit sur un thème, soit sur une problématique proposée par une association ou une entreprise, soit sur un projet personnel. Le but est de s'amuser, apprendre et proposer une première solution utilisable à la fin du week-end et de la présenter devant un jury."
      },
      {
        question: "Y a t-il une sélection pour participer à l'événement ?",
        answer: "Les profils sont choisis pour avoir des équipes motivées et équilibrées."
      },
      {
        question: "Est-ce que ça veut dire que je ne peux pas participer en tant que junior ?",
        answer: "Absolument pas, tout le monde est encouragé à participer !"
      },
      {
        question: "Quand et où se fera l'événement ?",
        answer: "L'événement se déroule généralement fin juin dans un village accessible par transports communs."
      },
      {
        question: "Est-ce que l'événement est payant ?",
        answer: "Une cotisation sera demandée aux participants. L'association fait néanmoins en sorte que celle-ci soit la plus basse possible."
      },
      {
        question: "Comment se déroule l'événement ?",
        answer: "Si vous êtes choisi, vous serez contacté par un membre de l'équipe organisatrice. Tous les détails quant à la logistique seront récapitulés dans un mail."
      },
      ,
      {
        question: "Avez-vous des sponsors ou des partenaires ?",
        answer: "Non, mais si vous voulez nous rejoindre, ce serait avec plaisir ;). Vous pouvez nous contacter directement à l'adresse suivante : association@buildin.com"
      },
      {
        question: "Qui puis-je contacter si j'ai d'autres questions ou si j'ai un souci ?",
        answer: "Vous pouvez envoyer un mail directement à l'adresse suivante : association@buildin.com"
      }
    ];
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
    };


return (
    
    <div className="faq-container">
    <h1 className="Titre_question"> Questions classiques que l'on peut entendre </h1>
      {questions.map((faq, index) => (
        <div key={index} className="faq-item">
          <div 
            className="faq-question" 
            onClick={() => handleClick(index)}
          >
            <span>{faq.question}</span>
            <span>{activeIndex === index ? '▼' : '▶'}</span> {/* Arrow indicator */}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
