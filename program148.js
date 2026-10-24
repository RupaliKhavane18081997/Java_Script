function DisplayFactors(iNo)
{

    let iCnt = 0
    console.log("factors of : ", iNo)
    for(iCnt = 1; iCnt <= (iNo / 2); iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            console.log(iCnt)
        }

    }

}


function main()
{
   // let iValue = 11
   // Display(iValue)
   
   DisplayFactors(12)   
        
}
main()





