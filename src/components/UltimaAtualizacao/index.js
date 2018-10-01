import React  from 'react';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
 
class UltimaAtualizacao extends React.Component {
    
    componentWillMount() {
        Moment.globalMoment = moment;
        Moment.globalLocale = 'pt';
    }

    render() {
        const { secondsSinceLastUpdate } = this.props;

        const currentDate = new Date();
        return (
            <div>
                atualizado <Moment fromNow subtract={{ seconds: secondsSinceLastUpdate }} interval={0}>
                    {currentDate}
                </Moment>
            </div>
        );
    }
}

export default UltimaAtualizacao;