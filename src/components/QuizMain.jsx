import React, {Component} from 'react';
import './../scss/QuizMain.scss';
import Question from './question/Question';
import Answer from './answer/Answer';


export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Je suis le plus rusé de tous les animaux de champ que l’Eternel Dieu a créé, quel est mon nom ?',
            2: 'Je suis l’une des femmes de Jacob, mère de Dina, quel est mon nom ?',
            3: 'Je suis le premier Homme à épouser deux femmes, Quel est mon nom ? Et les noms de mes femmes ?',
            4: 'Dans la genèse après quelle circonstance l’homme commença-t-il à manger de la viande ?',
            5: 'Dès que Abraham eut appris que son frère avait été fait prisonnier, combien de ses serviteurs avait-t-il armés ? pour une bataille contre combien de rois ?',
            6: 'Pourriez-vous estimer la tranche d’Age de Sara femme d’Abraham quand le roi pharaon tomba sous son charme ?',
            7: 'Je suis une montagne et c’est sur moi que Dieu envoya Abraham sacrifier Isaac. Quel est mon nom ?',
            8: 'Hénoc fils de Jéred mourut âgé de 365 ans, vrai ou faux ?',
            9: 'Quels sont les noms des jumeaux de Tamar',
            10: 'Je suis l’une des femmes d’Abraham mère de Zimran, quel est mon nom ?',
        },
        answers: {
            1: {
                1: 'Le renard',
                2: `L'éléphant`,
                3: `L'Aigle`,
                4: `Le serpent`,
                5: `l'agneau`,
                6: `le perroquet`,
            },
            2: {
                1: 'Rebecca',
                2: `Rachel`,
                3: `Léa`,
                4: `Ruth`,
                5: `Zilpa`,
                6: `Bilha`,
            },
            3: {
                1: 'Jacob, mari de Léa et Rachel',
                2: `Abraham, Mari de Sarah et Agar`,
                3: `Lémec, mari d'Ada et Tsilla`,
                4: `Elkana, mari de Peninna et Anne`,
                5: `David, mari de Mical et Abigaï`,
                6: `Aucune bonne réponse`,
            },
            4: {
                1: `le déluge`,
                2: `La création de la femme`,
                3: `le septième jour`,
                4: `Visite de l'ange à Abraham`,
                5: `le péché de l'homme`,
                6: `l'alliance de Dieu avec Abraham`,
            },
            5: {
                1: `3 400 serviteurs contre 4 rois`,
                2: `4 000 serviteurs contre 2 rois C`,
                3: `3 400 serviteurs contre 5 rois`,
                4: `4 554 serviteurs contre 5 rois`,
                5: `318 serviteurs contre 4 rois`,
                6: `lui seul contre 5 rois`,
            },
            6: {
                1: 'Mois de 25 ans',
                2: `Entre 25 et 35 ans`,
                3: `Entre 46 et 60 ans`,
                4: `Plus de 64 ans`,
                5: `Plus de 90 ans`,
                6: `Entre 35 et 45 ans`,
            },
            7: {
                1: 'Mont Ararat',
                2: `Mont Morija`,
                3: `Mont Sinaï`,
                4: `Mont Horeb`,
                5: `Mont Carmel`,
                6: `Mont Ebal`,
            },
            8: {
                1: 'Vrai',
                2: `Faux, il mourut âgé de 950 ans`,
                3: `Faux, il mourut âgé de 960 ans`,
                4: `Faux, il n'était pas mort`,
                5: `Faux, il était Fils de Seth`,
                6: `Aucune bonne réponse`,
            },
            9: {
                1: 'Esaü et Jacob',
                2: `Machlon et Kiljon`,
                3: `Machlon et Eléazar`,
                4: `Kiljon et Lémec`,
                5: `Pérets et Zérach`,
                6: `Eléazar et Ithamar`,
            },
            10: {
                1: 'Rebecca',
                2: `Rachel`,
                3: `Léa`,
                4: `Ketura`,
                5: `Zilpa`,
                6: `Bilha`,
            },
        },
        correctAnswers: {
            1: '4',
            2: '3',
            3: '3',
            4: '1',
            5: '5',
            6: '4',
            7: '2',
            8: '4',
            9: '5',
            10: '4',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                <h1>Genese</h1>
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>Vous avez répondu avec succés !</h1>
                            <p>Votre score est : {score} of {Object.keys(quiestions).length}</p>
                            <p>Merci!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}