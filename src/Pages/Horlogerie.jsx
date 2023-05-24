import React, { useEffect } from 'react';
import Information from './Information';
import { scrollAnimation } from './ScrollAnimation';
import { Link } from 'react-router-dom';
import Slider from './Slider';
function Horlogerie() {
  useEffect(() => {
    scrollAnimation();
  });
  return (
    <section className='watchmaking'>
      <Slider />
      <section className='watchmakingSectionOne'>
        <aside>
          <article>
            <div className='containerAnimation'>
              <h3>
                Retrouvez tous les modèles de montres que nous proposons dans
                notre horlogerie
              </h3>
              <h2 className='animationTitle'>
                Vente de montres de marques prestigieuses et de renom
              </h2>
              <p className='animationText'>
                Implantée dans la commune de Meaux, à proximité de
                Marne-la-Vallée, dans le département de la Seine-et-Marne, la
                Joaillerie-Horlogerie Cantaloube vous accueille dans son
                établissement. La Maison vous propose une large gamme de montres
                de grandes marques pour femmes et hommes. Que vous soyez à la
                recherche d’une montre à cadrans avec aiguilles, de montres
                mécaniques ou encore de montres bracelets, notre horlogerie
                dispose du modèle de montre que vous recherchez.
              </p>
            </div>
          </article>
        </aside>
      </section>
      <section className='watchmakingSectionTwo'>
        <aside>
          <article>
            <img src={require('../assets/firstWatch.webp')} alt='' />
            <div className='containerAnimation'>
              <h3>Vaste choix de modèles de montres femme et montres homme</h3>
              <h2 className='animationTitle'>
                Gammes de montres soigneusement sélectionnées par notre équipe
              </h2>
              <p className='animationText'>
                Toutes les montres présentes dans notre boutique ont été
                choisies avec soin par notre équipe de bijoutiers. Découvrez les
                différentes gammes de montres fonctionnant avec un système de
                mécanique de précision et équipées de différentes
                fonctionnalités. Que vous souhaitiez une montre tendance et
                design, ou une montre au style classique, vous trouverez des
                montres traditionnelles et des montres de luxe qui sauront
                combler vos attentes en termes de goût et de fonctionnalité.
              </p>
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
      <section className='watchmakingSectionThree'>
        <aside>
          <div className='watchmakingSectionThreeCont'>
            <article className='containerAnimation'>
              <h3>
                Retrouvez tous les modèles de montres que nous proposons dans
                notre horlogerie
              </h3>
              <h2 className='animationTitle'>
                Vente de montres de marques prestigieuses et de renom
              </h2>
              <p className='animationText'>
                mplantée dans la commune de Meaux, à proximité de
                Marne-la-Vallée, dans le département de la Seine-et-Marne, la
                Joaillerie-Horlogerie Cantaloube vous accueille dans son
                établissement. La Maison vous propose une large gamme de montres
                de grandes marques pour femmes et hommes. Que vous soyez à la
                recherche d’une montre à cadrans avec aiguilles, de montres
                mécaniques ou encore de montres bracelets, notre horlogerie
                dispose du modèle de montre que vous recherchez.
              </p>
            </article>
            <div className='watchmakingSectionThreePicture'></div>
          </div>
        </aside>
      </section>
      <section className='galeryHome'>
        <aside>
          <div className='galeryHomeCont'>
            <div className='galeryHomeImg'>
              <img src={require('../assets/thirdWatch.webp')} alt='' />
              <img src={require('../assets/fifthWatch.webp')} alt='' />
              <img src={require('../assets/fourthWatch.webp')} alt='' />
              <img src={require('../assets/secondWatch.webp')} alt='' />
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

export default Horlogerie;
