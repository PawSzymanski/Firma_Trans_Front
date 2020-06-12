import React, { Component } from 'react';
import styles from './MainPage.module.scss'
import CardForm from "../../components/Card/CardForm";
import logo1 from '../../assets/AdobeStock_2.jpg'
import logo2 from '../../assets/AdobeStock_19.jpeg'
import logo3 from '../../assets/AdobeStock_22.jpeg'
import logo4 from '../../assets/AdobeStock_31.jpeg'
import Title from "../../components/Title/Title";

class MainPage extends Component {

    render() {
        return (
            <div className={styles.wrapper}>

                <Title secondary><i className="fas fa-route"/> TRANSsport...</Title>
             <div className={styles.cardWrapper}>
            <CardForm title={'Bezpieczeństwo'} src={logo1} description={'Bezpieczeństwo'}
                                children={'Nasza firma oferuje...'}/>
            <CardForm title={'Szybkość'} src={logo2} description={'Szybkość'}
                                  children={'Nasza firma oferuje...'}/>
            <CardForm title={'Niezawodność'} src={logo3} description={'Niezawodność'}
                                  children={'Nasza firma oferuje...'}/>
            <CardForm title={'Zadowolenie'} src={logo4} description={'Zadowolenie'}
                                  children={'Nasza firma oferuje...'}/>
            </div>
            </div>
        );
    }
}

export default MainPage;
