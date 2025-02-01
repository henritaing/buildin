import React, { useState } from 'react';
import './Faq.css';


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    
    const questions = [
      {
        question: "What's the format of the hackathons?",
        answer: "It's about two days, two nights, where participants work in teams either on a theme, either on a problem suggested by an organizaion. The goal is to have fun and learn!"
      },
      {
        question: "Is there a selection to participate in the event?",
        answer: "As long you are motivated, you're on!"
      },
      {
        question: "Can I participate if I'm a beginner?",
        answer: "Obviously, you're welcome, but be prepared to pull all-nighters ;)!"
      },
      {
        question: "When and where will they take place?",
        answer: "They take place generally end of June in a village accessible by train or bus."
      },
      {
        question: "Is the event free?",
        answer: "A participation fee will be asked. Nevertheless, we try to make sure it's the lowest possible."
      },
      {
        question: "How does it work after I register?",
        answer: "If you're chosen, you'll be contacted by a member of the association. All details will be recap'ed in a mail."
      },
      {
        question: "Do you have any sponsors or partners?",
        answer: "Not yet, but if you have any ideas, it's very much welcome! You can contact us directly at the following email address: association@buildin.com"
      },
      {
        question: "Who can I contact if I have other questions or issues?",
        answer: "Please send a mail directly to the following address: association@buildin.com"
      }
    ];
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
    };


return (
    
    <div className="faq-container">
    <h1 className="Titre_question"> Common questions </h1>
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
