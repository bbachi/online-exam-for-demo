import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginContainer from '../containers/LoginContainer';
import Welcome from '../components/instructions/instruction1';
import Connection from '../components/instructions/instruction2';
import SwitchDepartments from '../components/instructions/instruction3';
import QuestionTransition from '../components/instructions/instruction4';
import DrawQuestion from '../components/instructions/instruction6';
import HighlightQuestion from '../components/instructions/instruction7';
import CloseTimer from '../components/instructions/instruction8';
import QuestionView from '../components/exam/question-view';
import EndOfExamIntimation from '../components/exam/end-of-exam-intimation-page';
import EndOfExamInfo from '../components/exam/end-of-exam-info';
import Congratulations from '../components/exam/congratulations';
import Survey from '../components/exam/survey';
import EndOfExam from '../components/exam/end-of-exam';
import TotalQuestions from '../components/instructions/instruction5';
import DashboardContainer from '../containers/DashBoardContainer';
import ExamContainer from '../containers/ExamContainer';

const screens = {
    Register: {
        screen: LoginContainer
    },
    Welcome: {
        screen: Welcome
    },
    Connection: {
        screen: Connection
    },
    SwitchDepartments: {
        screen: SwitchDepartments
    },
    QuestionTransition: {
        screen: QuestionTransition
    },
    TotalQuestions: {
        screen: TotalQuestions
    },
    DrawQuestion: {
        screen: DrawQuestion
    },
    HighlightQuestion: {
        screen: HighlightQuestion
    },
    CloseTimer: {
        screen: CloseTimer
    },
    Dashboard: {
        screen: DashboardContainer 
    },
    QuestionView: {
        screen: ExamContainer
    },
    EndOfExamIntimation: {
        screen: EndOfExamIntimation
    },
    EndOfExamInfo: {
        screen: EndOfExamInfo
    },
    Congratulations: {
        screen: Congratulations
    },
    Survey: {
        screen: Survey
    },
    EndOfExam: {
        screen: EndOfExam
    }
}

const ExamRouteStack = createStackNavigator(screens);

export default createAppContainer(ExamRouteStack);
