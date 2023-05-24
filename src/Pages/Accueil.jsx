import React, { useEffect } from 'react';
import Information from './Information';
import { scrollAnimation } from './ScrollAnimation';
import { Link } from 'react-router-dom';
import Slider from './Slider';
function Homes() {
  useEffect(() => {
    scrollAnimation();
  });
  return (
    <div className='containerContent'>
      <Slider />
      <section className='sectionOne animationScroll'>
        <aside>
          <article className='containerAnimation'>
            <h3>Fabricant de bijoux élu Meilleur Ouvrier de France</h3>
            <h2 className='animationTitle'>
              Une collection de bijoux confectionnée par l'un des Meilleurs
              Ouvriers en France
            </h2>
            <p className='animationText'>
              La Joaillerie Cantaloube est implantée à Meaux dans le département
              de la Seine-et-Marne depuis 1845. Découvrez cet univers enchanteur
              à travers des créations sublimées par des pierres de couleurs,
              précieuses ou non, agrémentant bagues, alliances, boucles
              d’oreilles, bracelets, colliers et pendentifs. Notre bijouterie
              propose un large choix de bijoux pouvant être personnalisés selon
              vos désirs grâce à notre atelier sur place : gravure, pierres
              précieuses, métaux précieux…
            </p>
          </article>
        </aside>
      </section>
      <section className='sectionTwo animationScroll'>
        <aside>
          <div className='containerAnimation'>
            <p className='animationText'>Présents depuis 30 ans</p>
            <p className='animationText'>Créateur de bijoux</p>
            <p className='animationText'>Meilleur ouvrier de France</p>
            <p className='animationText'>À votre écoute</p>
          </div>
        </aside>
      </section>
      <section className='sectionThree animationScroll'>
        <aside>
          <div className='sectionThreeContainer'>
            <article className='containerAnimation'>
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
              <Link to={'/Bijouterie'}>
                <button>Bijouterie</button>
              </Link>
            </article>
            <div className='sectionThreePicture '></div>
          </div>
        </aside>
      </section>
      <section className='sectionFour animationScroll'>
        <aside>
          <div className='sectionFourContainer'>
            <div className='sectionFourPicture'></div>
            <article className='containerAnimation'>
              <h3>Retrouvez tous les modèles de montre</h3>
              <h2 className='animationTitle'>
                Horloger proposant une large gamme de montres pour hommes et
                femmes
              </h2>
              <p className='animationText'>
                Notre boutique Joaillerie Cantaloube dispose également d’un
                espace horlogerie dans lequel vous pourrez trouver une large
                collection de montres femmes et hommes. Nous proposons des
                montres de marques prestigieuses telles que Longines, Montblanc,
                Seiko, Oris, Frédérique Constant ou encore Tissot. Que vous
                recherchiez une montre fonctionnelle ou simplement esthétique,
                l’ensemble des montres exposées ont été sélectionnées avec soin
                afin de répondre à toutes vos attentes.
              </p>
              <Link to={'/Horlogerie'}>
                <button>Horlogerie</button>
              </Link>
            </article>
          </div>
        </aside>
      </section>
      <section className='contactHeadband animationScroll'>
        <article>
          <div className='containerAnimation'>
            <h2 className='animationTitle'>
              Notre joaillerie est joignable tous les jours en période de fêtes
            </h2>
            <p className='animationText'>
              Prenez contact avec notre joaillerie pour obtenir des conseils
              personnalisés
            </p>
            <Link to={'/Contact'}>
              <button>Contactez-nous</button>
            </Link>
          </div>
        </article>
      </section>
      <section className='galeryHome animationScroll'>
        <aside>
          <div className='galeryHomeCont'>
            <div className='galeryHomeImg'>
              <img src={require('../assets/thirdRing.webp')} alt='' />
              <img src={require('../assets/secondRing.webp')} alt='' />
              <img src={require('../assets/fourthRing.webp')} alt='' />
              <img src={require('../assets/sixthRing.webp')} alt='' />
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
    </div>
  );
}

export default Homes;
