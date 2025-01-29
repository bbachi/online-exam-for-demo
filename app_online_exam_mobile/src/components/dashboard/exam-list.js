import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DashboardScreen from '../../screens/DashboardScreen';
import { SvgXml  } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

const homeBtn = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.1005 0.650834C10.2235 -0.216944 11.7765 -0.216945 12.8995 0.650834L20.135 6.24172C21.3099 7.14958 22 8.56516 22 10.0673V18.7988C22 20.5668 20.5929 22 18.8571 22H15.7143C13.9785 22 12.5714 20.5668 12.5714 18.7988V13.1967H9.42857V18.7988C9.42857 20.5668 8.02147 22 6.28571 22H3.14286C1.4071 22 0 20.5668 0 18.7988V10.0673C0 8.56516 0.69012 7.14958 1.86504 6.24172L9.1005 0.650834ZM18.2355 8.79209L11 3.20121L3.76454 8.79209C3.3729 9.09471 3.14286 9.56657 3.14286 10.0673V18.7988H6.28571V13.1967C6.28571 11.4287 7.69282 9.99547 9.42857 9.99547H12.5714C14.3072 9.99547 15.7143 11.4287 15.7143 13.1967V18.7988L18.8571 18.7988V10.0673C18.8571 9.56657 18.6271 9.09471 18.2355 8.79209Z" fill="white"/></svg>`;

const myExams = `<svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.42119 0.928558H1.80706C0.807531 0.928558 0 1.85879 0 3.01019V5.09182H7.22825V3.01019C7.22825 1.85879 6.42072 0.928558 5.42119 0.928558Z" fill="white"/>
<path d="M0 27.9898C0 29.1412 0.807531 30.0714 1.80706 30.0714H5.42119C6.42072 30.0714 7.22825 29.1412 7.22825 27.9898V25.9081H0V27.9898Z" fill="white"/>
<path d="M7.22825 7.17346H0V23.8265H7.22825V7.17346Z" fill="white"/>
<path d="M14.4565 0.928558H10.8424C9.84286 0.928558 9.03533 1.85879 9.03533 3.01019V5.09182H16.2636V3.01019C16.2636 1.85879 15.456 0.928558 14.4565 0.928558Z" fill="white"/>
<path d="M9.03533 27.9898C9.03533 29.1412 9.84286 30.0714 10.8424 30.0714H14.4565C15.456 30.0714 16.2636 29.1412 16.2636 27.9898V25.9081H9.03533V27.9898Z" fill="white"/>
<path d="M16.2636 7.17346H9.03533V23.8265H16.2636V7.17346Z" fill="white"/>
<path d="M20.2774 1.13677L18.5268 1.66368C17.5612 1.95641 16.9795 3.0883 17.2337 4.20067L17.6911 6.21725L22.9372 4.64302L22.4798 2.62643C22.2257 1.51406 21.2431 0.844036 20.2774 1.13677Z" fill="white"/>
<path d="M23.3935 6.65549L18.1469 8.22795L21.7871 24.3448L27.0337 22.7723L23.3935 6.65549Z" fill="white"/>
<path d="M22.6942 28.3737C22.9483 29.4861 23.9309 30.1561 24.8966 29.8634L26.6472 29.3365C27.6128 29.0437 28.1945 27.9118 27.9404 26.7995L27.4829 24.7829L22.2368 26.3571L22.6942 28.3737Z" fill="white"/>
</svg>`;

const myReports = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133794 0.538337C0.133794 0.396402 0.248854 0.281342 0.390789 0.281342H13.7204C13.8623 0.281342 13.9774 0.396402 13.9774 0.538337C13.9774 0.680272 13.8623 0.795332 13.7204 0.795332H0.390789C0.248854 0.795332 0.133794 0.680272 0.133794 0.538337Z" fill="#F2C94C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133789 4.96298C0.133789 4.82104 0.24885 4.70598 0.390784 4.70598H13.7204C13.8623 4.70598 13.9774 4.82104 13.9774 4.96298C13.9774 5.10491 13.8623 5.21997 13.7204 5.21997H0.390784C0.24885 5.21997 0.133789 5.10491 0.133789 4.96298Z" fill="#F2C94C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133789 6.32654C0.133789 6.1846 0.24885 6.06954 0.390784 6.06954H13.7204C13.8623 6.06954 13.9774 6.1846 13.9774 6.32654C13.9774 6.46847 13.8623 6.58353 13.7204 6.58353H0.390784C0.24885 6.58353 0.133789 6.46847 0.133789 6.32654Z" fill="#F2C94C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133789 7.69013C0.133789 7.5482 0.24885 7.43314 0.390784 7.43314H13.7204C13.8623 7.43314 13.9774 7.5482 13.9774 7.69013C13.9774 7.83207 13.8623 7.94713 13.7204 7.94713H0.390784C0.24885 7.94713 0.133789 7.83207 0.133789 7.69013Z" fill="#F2C94C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133789 9.02587C0.133789 8.88393 0.24885 8.76887 0.390784 8.76887H8.37741C8.51934 8.76887 8.6344 8.88393 8.6344 9.02587C8.6344 9.1678 8.51934 9.28286 8.37741 9.28286H0.390784C0.24885 9.28286 0.133789 9.1678 0.133789 9.02587Z" fill="#F2C94C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133789 1.87103C0.133789 1.7291 0.24885 1.61404 0.390784 1.61404H7.66703C7.80896 1.61404 7.92402 1.7291 7.92402 1.87103C7.92402 2.01297 7.80896 2.12803 7.66703 2.12803H0.390784C0.24885 2.12803 0.133789 2.01297 0.133789 1.87103Z" fill="#F2C94C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.133789 14.0875C0.133789 13.9456 0.24885 13.8305 0.390784 13.8305H4.10505C4.24698 13.8305 4.36204 13.9456 4.36204 14.0875C4.36204 14.2294 4.24698 14.3445 4.10505 14.3445H0.390784C0.24885 14.3445 0.133789 14.2294 0.133789 14.0875Z" fill="#F2C94C"/>
</svg>
`;

const backArrowSvg = `<svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.53714 20.0827L0.292152 10.9458C-0.097384 10.5612 -0.097384 9.93981 0.292152 9.5542L9.53714 0.417333C10.0995 -0.139111 11.0144 -0.139111 11.5777 0.417333C12.14 0.973776 12.14 1.87687 11.5777 2.43332L3.66913 10.2505L11.5777 18.0657C12.14 18.6231 12.14 19.5262 11.5777 20.0827C11.0144 20.6391 10.0995 20.6391 9.53714 20.0827Z" fill="#F2994A"/>
</svg>`;

export class HomeSvg extends React.Component {
    render() {
        return (
            <View>
                <SvgXml style={{marginLeft:30}} xml={homeBtn} />
            </View>
        );
    }
}

export class MyExamSvg extends React.Component {
    render() {
        return (
            <View>
                <SvgXml style={{marginLeft:30}} xml={myExams} />
            </View>
        );
    }
}

export class MyReportsSvg extends React.Component {
    render() {
        return (
            <View>
                 <SvgXml style={{marginLeft:30}} xml={myReports} />
            </View>
        );
    }
}


export default function ExamList(props) {
    return (
        <View style={styles.examListWrapper}>
                <Text style={{marginBottom: 20, backgroundColor: '#F9F9F9', paddingBottom: 10, paddingTop: 10}}> 
                    <SvgXml xml={backArrowSvg} /><TouchableOpacity onPress={() => props.onSelectLanguage('Home')}>
                        <Text style={styles.myHomeBtnView}>  Home Page</Text>
                        </TouchableOpacity>
                    <Text style={styles.myReports}>My Reports</Text>
                </Text>
                <View style={styles.headerWrapper}>
                    <Text style={{alignItems: 'center', alignSelf: 'stretch',  textAlign: 'center',}}>Please choose the exam you want to view</Text>
                    <TouchableOpacity style={styles.submitbutton} onPress={() => props.onSelectLanguage('ReportView')}>
                        <Text style={styles.buttontext}>TYT LIMIT - 1   29/03/2021</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitbutton} onPress={() => props.onSelectLanguage('ReportView')}>
                        <Text style={styles.buttontext}>TYT LIMIT - 2   29/03/2021</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitbutton} onPress={() => props.onSelectLanguage('ReportView')}>
                        <Text style={styles.buttontext}>TYT LIMIT - 3   29/03/2021</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    examListWrapper: {
        flex: 1,
    },
    footerWrapper: {
        backgroundColor: '#FFC71B',
        width: '100%',
        alignItems: 'center',
        marginBottom: 2,
        fontSize:12,
        justifyContent: 'center',
        paddingTop:10,
        paddingBottom: 10,
    },
    myHomeBtn: {
        fontSize:14,
        color: '#ffffff',
        paddingRight: 15,
    },
    headerWrapper: {
        height: '80%'
    },
    submitbutton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderWidth: 0,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        height: 48,
        marginTop: 22,
        width: '90%',
        marginLeft: 15
    },
    buttontext: {
        color: '#474646',
        fontWeight: 'bold',
    },
    myHomeBtnView: {
        fontSize: 20,
        color: '#F2994A',
        paddingRight: 50,
    },
    myReports: {
        fontSize: 20,
        fontWeight: '600',
    }
});
