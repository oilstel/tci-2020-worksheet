
document.getElementById('submit').addEventListener('click', () => {
    createPDF()
})

function createPDF() {
    console.log('printing')
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      today = mm + '/' + dd + '/' + yyyy;

    //   var e = document.getElementById("sound");
      var color = document.getElementsByName('color')[0].value
      var animal = document.getElementsByName('animal')[0].value.toUpperCase()
      var emotion1 = document.getElementsByName('emotion-in-2020-1')[0].value
      var emotion2 = document.getElementsByName('emotion-in-2020-2')[0].value
      var emotion3 = document.getElementsByName('emotion-in-2020-3')[0].value
      var emotion4 = document.getElementsByName('emotion-in-2020-4')[0].value
      var question1 = document.getElementsByName('question-1')[0].value
      var question2 = document.getElementsByName('question-2')[0].value
      var question3 = document.getElementsByName('question-3')[0].value
      var question4 = document.getElementsByName('question-4')[0].value
      console.log(animal)
    //   var sound = e.options[e.selectedIndex].value;

    //   var med1 = $("#meditation-1").val();
    //   var med2 = $("#meditation-2").val();
    //   var med3 = $("#meditation-3").val();
    //   var med4 = $("#meditation-4").val();

      var firstPage = (`* WORKSHEET: EMOTIONAL PLANNING FOR 2020 *                                                    ${today}

--------------------------------------------------------------------------------------------------------


+ ------------ +
|    ENERGY    |
+ ------------ +
 
* * */ \\* * * * * * * * * * * * * * * * * 2  * * * * * * * * * * * *   * * * * * * 2  * * * * * * * * *
* * /   \\* * * * * * * * * *  2  * * * * * * * * * 0   * * * * * * * * * * * *   2 * * * * * * *   * 
* */  _  \\* * * * * 2 * * * * * * * *  0 * * * * * * *    2  * * *   * * *   0 * * * * * * * *  * 
* /  | |  \\* * * * * *  * *  * * * *  *  ** * *  * * * * * * * *  * * * * * * *   * * *   * * * * *    
*/    –    \\* * *    0  * * * *  * * * * 2 * * * * * * * *   * * * * * *   * * * * * 0  * * * * *   *   
 ===========   *   *        *        *   * *       *           *     * *        *  *          *     *
* |       |    *           *    *        *      *          *             *         *       * *    *
  |       |  *         *            *                *          *              *         *         *
----\\/----\\/--\\/-\\@/--   -- -    - -- - - -- ----  -- - - -------- - - -- - -- - -- -- - - - -- - ----
-\\/---\\/----\\@/---\\/--  - - - -- - ----- -- -- -- -- - - -- ---- ----- ----- -- -- - -- -- - -- -- - --
-----\\/------\\/---------\\--\\@/----  -- - -- - - -- ----- ---- - --- -- -- - - -- - - -- - -- - -- --


+ ------------ +
|    ANIMAL    |
+ ------------ +

* ${animal} *


+ ----------------------- +
|    FEELINGS FOR 2020    |
+ ----------------------- +

${emotion1}
...........................
    ${emotion2}
    ...........................
        ${emotion3}
        ...........................
            ${emotion4}
            ...........................


+ -------------------------------------- +
|    HOW I CAN ACHIEVE THESE FEELINGS    |
+ -------------------------------------- +

${question1}

      
      `);





var secondPage = (`+ ------------------------------ +
|    IN 2020 I SHOULD STOP...    |
+ ------------------------------ +

${question2}


+ ------------------------------ +
|    IN 2020 I SHOULD START...    |
+ ------------------------------ +

${question3}


+ ---------------------------------------------------------- +
|    I WILL CREATE A CALM AND PRODUCTIVE SPACE FOR MYSELF    |
+ ---------------------------------------------------------- +

${question4}





      
--------------------------------------------------------------------------------------------------------

WORKSHEET: EMOTIONAL PLANNING FOR 2020 BY THE CREATIVE INDEPENDENT
<INDP.CO/2020WKSHT>`);






      
var pageWidth = 8.0,
    lineHeight = 1.2,
    margin = .5,
    maxLineWidth = pageWidth - margin * 2,
    fontSize = 8,
    ptsPerInch = 72,
    oneLineHeight = fontSize * lineHeight / ptsPerInch,
    doc = new jsPDF({
      unit: 'in',
      lineHeight: lineHeight,
    }).setProperties({ title: 'Worksheet: Emotional Planning for 2020' });

  // splitTextToSize takes your string and turns it in to an array of strings,
  // each of which can be displayed within the specified maxLineWidth.
var one = doc
    .setFont('courier')
    .setFontSize(fontSize)
    .setTextColor(0,0,0)
    .splitTextToSize(firstPage, maxLineWidth);

var two = doc
    .setFont('courier')
    .setFontSize(fontSize)
    .setTextColor(0,0,0)
    .splitTextToSize(secondPage, maxLineWidth);


doc.setLineWidth(1)
doc.setDrawColor(0)
doc.setFillColor(color)
doc.circle(.93, 2.8, .1, 'F')

// doc.text can now add those lines easily; otherwise, it would have run text off the screen!
doc.text(one, margin, margin + 2 * oneLineHeight);

doc.addPage();

doc.text(two, margin, margin + 2 * oneLineHeight);

doc.save('worksheet-emotional-planning-for-2020.pdf');

}