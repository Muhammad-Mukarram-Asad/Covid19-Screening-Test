var answers = [];
    function Record_Answers(Q,A,NQ)
    {
        answers[Q] = A;
        if(NQ>0)
        {
            jQuery('.question .row').removeClass('active');
            jQuery('.q' + NQ).addClass("active");
        }
        else
        {
            q1 = answers[1];
            q2 = answers[2];
            q3 = answers[3];
            q4 = answers[4];
            q5 = answers[5];
            q6 = answers[6];
            q7 = answers[7];
            q8 = answers[8];
            q9 = answers[9];
            q10 = answers[10];

            if( (q1,q2,q4,q6,q8,q9 == 1) && (q3,q5,q7,q10 == 1|2))
               {
                //    alert("result-1");
                   jQuery(".question .row").removeClass('active');
                   jQuery('.row.result-1').addClass('active');
               }
            //    q2, q1, a4 = yes and q3, q6, q5, q7, q10 = yes/no and q8, q9 = yes/no then result 2 
            else if( (q1, q2, q4 == 1) && (q3,q5,q6,q7,q8,q9,q10) == 1|2)
            {
                // alert(".result-2");
                jQuery(".question .row").removeClass('active');
                   jQuery('.row.result-2').addClass('active');
            }
            else
            {
                // alert("result-3");
                jQuery(".question .row").removeClass('active');
                jQuery('.row.result-3').addClass('active');
            }
        }
    }
