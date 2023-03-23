import React, { useEffect } from 'react';
import Information from './Information';
import { scrollAnimation } from './ScrollAnimation';

function Contact() {
  useEffect(() => {
    scrollAnimation();
  });
  return (
    <section className='contact'>
      <section className='contactSectionOne'>
        <aside>
          <div className='containerAnimation'>
            <h2 className='animationTitle'>
              Comment se rendre à notre boutique de bijouterie-joaillerie ?
            </h2>
            <p className='animationText'>
              Notre Bijouterie-Joaillerie Cantaloube se situe en plein cœur du
              centre-ville de la ville de Meaux. Notre équipe de bijoutiers vous
              réserve un accueil chaleureux et vous conseille dans votre choix
              de bijoux et de montres.
            </p>
          </div>
        </aside>
      </section>
      <Information />
      <section className='contactForm'>
        <aside>
          <div className='contactFormCont containerAnimation'>
            <h2 className='animationTitle'>
              Formulaire de contact de notre bijouterie-joaillerie
            </h2>
            <form action=''>
              <div>
                <label htmlFor=''>Nom</label>
                <input type='text' />
              </div>
              <div>
                <label htmlFor=''>Email</label>
                <input type='text' />
              </div>
              <div>
                <label htmlFor=''>Téléphone</label>
                <input type='text' />
              </div>
              <div>
                <label htmlFor=''>Message</label>
                <textarea type='text' />
              </div>
              <div>
                <input name='submit' value='Envoyer' />
              </div>
            </form>
          </div>
        </aside>
      </section>
    </section>
  );
}

export default Contact;
