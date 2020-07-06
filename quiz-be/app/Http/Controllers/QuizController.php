<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        // return Quiz::all();
        $quizListMock = array(
            array('quizId' => '0', 'name' => 'Pasaules ģeogrāfija'),
            array('quizId' => '1', 'name' => 'Latvijas ģeogrāfija'),
            array('quizId' => '2', 'name' => 'Eiropas galvaspilsētas'),
        );
        $data = $quizListMock;
        $code = 200;

        return response()->json($data, $code,
            ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function show($id)
    {
        // return Quiz::find($id);

        $questionMock = array(
            '0' => array(
                0 => array(
                    'questionId' => 'q01',
                    'questionText' => 'Kura ir pasaulē augstākā virsotne?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Everests',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Monblāns',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Gaiziņš',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Kilimandžāro',
                        ),
                    ),
                ),
                1 => array(
                    'questionId' => 'q02',
                    'questionText' => 'Kāda ir zemeslodes forma?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Plakana',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Perfekta lode',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Elipsveidīga lode',
                        ),
                    ),
                ),
                2 => array(
                    'questionId' => 'q03',
                    'questionText' => 'Kurš ir pasaulē lielākais ezers?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Kaspijas jūra',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Viktorijas ezers',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Baikāls',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Hūrons',
                        ),
                    ),
                ),
                3 => array(
                    'questionId' => 'q04',
                    'questionText' => 'Kas ir pasaules lielākā sala?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Madagaskara',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Grenlande',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Lielbritānija',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Jaungvineja',
                        ),
                    ),
                ),
            ),
            '1' => array(
                0 => array(
                    'questionId' => 'q11',
                    'questionText' => 'Kura ir Latvijas garākā upe?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Daugava',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Gauja',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Lielupe',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Venta',
                        ),
                    ),
                ),
                1 => array(
                    'questionId' => 'q12',
                    'questionText' => 'Kurš ir Latvijas dziļākais ezers?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Ušurs',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Sventes ezers',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Drīdzis',
                        ),
                    ),
                ),
                2 => array(
                    'questionId' => 'q13',
                    'questionText' => 'Kurš ir Latvijas lielākais ezers?',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Rāznas ezers',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Burtnieks',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Engures ezers',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Lubāns',
                        ),
                    ),
                ),
            ),
            '2' => array(
                0 => array(
                    'questionId' => 'q21',
                    'questionText' => 'Latvijas galvaspilsēta ir ...',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Tallina',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Rīga',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Koperniks',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Daugavgrīva',
                        ),
                    ),
                ),
                1 => array(
                    'questionId' => 'q22',
                    'questionText' => 'Igaunijas galvaspilsēta ir ...',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Tallina',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Pērnava',
                        ),
                    ),
                ),
                2 => array(
                    'questionId' => 'q23',
                    'questionText' => 'Vācijas galvaspilsēta ir ...',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Minhene',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Parīze',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Roma',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Berlīne',
                        ),
                    ),
                ),
                3 => array(
                    'questionId' => 'q24',
                    'questionText' => 'Čehijas galvaspilsēta ir ...',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Prāga',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Brno',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Krakova',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Bratislava',
                        ),
                    ),
                ),
                4 => array(
                    'questionId' => 'q25',
                    'questionText' => 'Slovēnijas galvaspilsēta ir ...',
                    'options' => array(
                        0 => array(
                            'answerId' => '0',
                            'answerText' => 'Budapešta',
                        ),
                        1 => array(
                            'answerId' => '1',
                            'answerText' => 'Zagreba',
                        ),
                        2 => array(
                            'answerId' => '2',
                            'answerText' => 'Ļubļana',
                        ),
                        3 => array(
                            'answerId' => '3',
                            'answerText' => 'Sarajeva',
                        ),
                    ),
                ),
            ),
        );

        $data = $questionMock[$id];
        $code = 200;

        return response()->json($data, $code,
            ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'], JSON_UNESCAPED_UNICODE);

    }

    public function check(Request $request)
    {                
        $rightAnswerMock = array (
            'q01' => '0',
            'q02' => '2',
            'q03' => '0',
            'q04' => '1',
            'q11' => '1',
            'q12' => '2',
            'q13' => '3',
            'q21' => '1',
            'q22' => '0',
            'q23' => '3',
            'q24' => '0',
            'q25' => '2',
        );

        $questionId = $request->input('questionId');
        $answerId = $request->input('answerId');
        
        if ($rightAnswerMock[$questionId] == $answerId){
            $data = true;
        } else {
            $data = false;
        }
        $code = 200;
        return response()->json($data, $code,
            ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
