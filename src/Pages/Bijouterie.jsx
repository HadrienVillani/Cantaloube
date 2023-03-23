import React, { useEffect } from 'react';
import Information from './Information';
import { scrollAnimation } from './ScrollAnimation';
import { Link } from 'react-router-dom';
function Bijouterie() {
  useEffect(() => {
    scrollAnimation();
  });

  return (
    <section className='jewelry'>
      <section className='jewelrySectionOne animationScroll'>
        <aside>
          <article>
            <div className='containerAnimation'>
              <h3>Vente de bijoux pour hommes et femmes</h3>
              <h2 className='animationTitle'>
                Des collections de bijoux uniques et pour tous les goûts
              </h2>
              <p className='animationText'>
                Que vous souhaitiez offrir un bijou pour un proche ou pour
                vous-même, faire son choix peut être parfois délicat. Venez nous
                rencontrer : une équipe de professionnels sera à votre écoute
                pour vous accompagner et célébrer les moments importants de
                votre vie. Grâce à notre expérience en tant que bijoutier depuis
                de nombreuses années, nous sommes à même de vous guider dans
                votre choix de bijoux : bague, bracelet, collier, boucles
                d’oreilles, instrument d’écriture, pendentif, petite
                maroquinerie…
              </p>
            </div>
          </article>
        </aside>
      </section>
      <section className='jewelrySectionTwo'>
        <aside>
          <article>
            <img src={require('../assets/bagueFour.webp')} alt='' />
            <div className='jewelrySectionTwoText '>
              <div className='containerAnimation'>
                <h3>Fabricant de bijoux élu Meilleur Ouvrier de France</h3>
                <h2 className='animationTitle'>
                  Une collection de bijoux confectionnée par l'un des Meilleurs
                  Ouvriers en France
                </h2>
                <p className='animationText'>
                  La Joaillerie Cantaloube est implantée à Meaux dans le
                  département de la Seine-et-Marne depuis 1845. Découvrez cet
                  univers enchanteur à travers des créations sublimées par des
                  pierres de couleurs, précieuses ou non, agrémentant bagues,
                  alliances, boucles d’oreilles, bracelets, colliers et
                  pendentifs. Notre bijouterie propose un large choix de bijoux
                  pouvant être personnalisés selon vos désirs grâce à notre
                  atelier sur place : gravure, pierres précieuses, métaux
                  précieux…
                </p>
              </div>
            </div>
          </article>
        </aside>
      </section>

      <section className='contactHeadband'>
        <article>
          <div className='containerAnimation'>
            <h2 className='animationTitle'>
              Venez rencontrer notre équipe pour obtenir des informations
              complémentaires
            </h2>
            <p className='animationText'>
              Bénéficiez également de conseils personnalisés
            </p>
            <Link to={'/Contact'}>
              <button>Contactez-nous</button>
            </Link>
          </div>
        </article>
      </section>
      <section className='jewelrySectionThree'>
        <aside>
          <article className='containerAnimation'>
            <h3>Découvrez tous les modèles de bijoux de ce bijoutier</h3>
            <h2 className='animationTitle'>
              Une boutique proposant un service de création de bijoux
            </h2>
            <p className='animationText'>
              Notre bijouterie a sélectionné avec soin une collection de bijoux.
              Bijoutier reconnu dans notre région, nous proposons des bijoux
              sertis ou non de pierres fines et pierres précieuses.
            </p>
            <ul>
              <li>Diamant</li>
              <li>Saphir</li>
              <li>Émeraude</li>
              <li>Rubis</li>
              <li>Topaze</li>
              <li>Citrine</li>
              <li>Améthyste </li>
              <li>Quartz</li>
            </ul>
            <p className='animationText'>
              Outre notre espace bijouterie, nous proposons également une
              kyrielle de montres de marques pour hommes, femmes et enfants dans
              notre espace horlogerie. Pour tout renseignement complémentaire et
              conseil personnalisé, contactez la Bijouterie Joaillerie
              Cantaloube.
            </p>
          </article>
        </aside>
      </section>

      <section className='jewelrySectionFour'>
        <aside>
          <article>
            <div className='containerAnimation'>
              <h3>
                Deux bijouteries pour expertiser et prendre soin de vos bijoux
              </h3>
              <h2 className='animationTitle'>
                Atelier sur place d’expertise et réparation de bijoux
              </h2>
              <p className='animationText'>
                Notre bijouterie se tient à votre disposition pour toute demande
                d’expertise de bijoux anciens. Disposant d’un atelier propre à
                notre établissement, nous examinons avec soin et rigueur tous
                les types de bijoux. Confiez également en toute sérénité à notre
                bijouterie vos bijoux nécessitant une réparation ou une
                métamorphose, qu'elle soit minime ou conséquente. Notre
                savoir-faire de bijoutier nous permet d’effectuer des
                réparations nécessitant soin et dextérité.
              </p>
              <Link to={'/Contact'}>
                <button>Contactez-nous</button>
              </Link>
            </div>
            <img src={require('../assets/bagueSix.webp')} alt='' />
          </article>
        </aside>
      </section>
      <section className='galeryHome'>
        <aside>
          <div className='galeryHomeCont'>
            <div className='galeryHomeImg'>
              <img src={require('../assets/bagueThree.webp')} alt='' />
              <img src={require('../assets/bagueTwo.webp')} alt='' />
              <img src={require('../assets/bagueFour.webp')} alt='' />
              <img src={require('../assets/bagueSix.webp')} alt='' />
            </div>
            <article className='containerAnimation'>
              <h3>Bijouterie à l’écoute de vos souhaits</h3>
              <h2 className='animationTitle'>
                Conception et vente de bijoux sur mesure d’exception
              </h2>
              <p className='animationText'>
                Notre Joaillerie Atelier Cantaloube réalise la fabrication de
                bijoux tels que des bagues, bracelets, colliers, pendentifs,
                boucles d’oreilles, alliances… Nous tenons compte de vos
                attentes et vos goûts afin de façonner votre bijou selon vos
                désirs. Les bijoux sur mesure que nous créons au sein de notre
                atelier joaillier peuvent être sertis de différentes pierres :
                saphirs, diamants, rubis, émeraudes… Partagez avec notre équipe
                de joailliers vos envies et souhaits pour la fabrication de
                bijoux créés sur mesure.
              </p>
              <Link to={'/Galery'}>
                <button>Voir les photos</button>
              </Link>
            </article>
          </div>
        </aside>
      </section>
      <Information />
    </section>
  );
}

export default Bijouterie;
