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

                <Title secondary><i className="fas fa-route"/> Lorem ipsum dolor sit...</Title>
             <div className={styles.cardWrapper}>
            <CardForm title={'Lorem ipsum'} src={logo1} description={'Description'}
                                children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, ' +
                                'lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper' +
                                ' justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id' +
                                ' orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet ' +
                                'lectus quis est congue mollis. Phasellus congue lacus eget neque.'}/>
            <CardForm title={'Lorem ipsum'} src={logo2} description={'Description'}
                                  children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, ' +
                                  'lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper' +
                                  ' justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id' +
                                  ' orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet ' +
                                  'lectus quis est congue mollis. Phasellus congue lacus eget neque.'}/>
            <CardForm title={'Lorem ipsum'} src={logo3} description={'Description'}
                                  children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, ' +
                                  'lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper' +
                                  ' justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id' +
                                  ' orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet ' +
                                  'lectus quis est congue mollis. Phasellus congue lacus eget neque.'}/>
            <CardForm title={'Lorem ipsum'} src={logo4} description={'Description'}
                                  children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, ' +
                                  'lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper' +
                                  ' justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id' +
                                  ' orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet ' +
                                  'lectus quis est congue mollis. Phasellus congue lacus eget neque.'}/>
            </div>
            </div>
        );
    }
}

export default MainPage;
